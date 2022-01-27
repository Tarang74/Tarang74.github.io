import {
    alignItems,
    backgroundColor,
    classnames,
    display,
    flexDirection,
    height,
    justifyContent,
    padding,
    width
} from '@assets/tailwindcss-classnames';

import './styles.scss';

export interface RevealOnScroll {
    index: number;
    updateVariables(): void;
}

export class RevealOnScroll {
    static aboutPaddingLeft: number;
    static viewportWidth: number;
    static viewportHeight: number;

    static TOP1: number;
    static TOP2: number;

    static endHorizontalScroll: boolean = false;

    constructor(item: Element, index: number) {
        this.updateVariables();
        window.onresize = this.updateVariables;

        this.index = index;

        let options = {
            rootMargin: '0%',
            threshold: 0.0
        };

        let observer = new IntersectionObserver((entries) => {
            this.showItem(entries);
        }, options);

        observer.observe(item);
    }

    showItem(entries: Array<IntersectionObserverEntry>) {
        entries.forEach((entry: IntersectionObserverEntry) => {
            let li = entry.target;
            let span = li.children[0] as HTMLElement;
            const scrollHorizontally = () => {
                // Horizontal
                // 0: this.aboutPaddingLeft
                // 100: this.viewportWidth

                // Vertical
                // 0: bottom of page
                // 100: gap between li

                let totalHorizontalScrollDistance =
                    RevealOnScroll.viewportWidth -
                    RevealOnScroll.aboutPaddingLeft;
                let totalVerticalScrollDistance = RevealOnScroll.viewportHeight;

                let currentVerticalScroll =
                    RevealOnScroll.viewportHeight -
                    li.getBoundingClientRect().top;

                if (
                    (this.index == 0 &&
                        currentVerticalScroll >=
                            3.25 * RevealOnScroll.viewportHeight) ||
                    (this.index == 1 &&
                        currentVerticalScroll >=
                            1.5 * RevealOnScroll.viewportHeight)
                ) {
                    // End horizontal section
                    RevealOnScroll.endHorizontalScroll = true;
                } else {
                    RevealOnScroll.endHorizontalScroll = false;
                }

                if (RevealOnScroll.endHorizontalScroll) {
                    let top: number;
                    let opacity: number;

                    if (this.index == 0) {
                        let percent =
                            (5.25 * RevealOnScroll.viewportHeight -
                                currentVerticalScroll) /
                            (2 * RevealOnScroll.viewportHeight);

                        top =
                            RevealOnScroll.TOP1 *
                            RevealOnScroll.viewportHeight *
                            percent;

                        opacity = percent;
                    } else {
                        let percent =
                            (3.5 * RevealOnScroll.viewportHeight -
                                currentVerticalScroll) /
                            (2 * RevealOnScroll.viewportHeight);

                        top =
                            RevealOnScroll.TOP2 *
                            RevealOnScroll.viewportHeight *
                            percent;

                        opacity = percent;
                    }

                    if (top <= 0) {
                        span.classList.remove('active');
                    } else {
                        span.classList.add('active');
                        span.style.cssText = `left:${RevealOnScroll.aboutPaddingLeft}px;top:${top}px;opacity:${opacity}`;
                    }
                } else {
                    if (currentVerticalScroll >= totalVerticalScrollDistance) {
                        currentVerticalScroll = totalVerticalScrollDistance;
                    }

                    var left =
                        RevealOnScroll.aboutPaddingLeft +
                        totalHorizontalScrollDistance *
                            (1 -
                                currentVerticalScroll /
                                    totalVerticalScrollDistance);

                    span.style.cssText = `left:${left}px;`;
                }
            };

            const scrollVertically = () => {};

            if (entry.isIntersecting) {
                window.addEventListener('scroll', scrollHorizontally);

                entry.target.children[0].classList.add('active');
            } else {
                window.addEventListener('scroll', scrollVertically);
            }
        });
    }

    updateVariables(): void {
        let aboutElement: HTMLElement =
            document.getElementById('about-container')!;

        RevealOnScroll.aboutPaddingLeft = parseInt(
            window
                .getComputedStyle(aboutElement)
                .getPropertyValue('padding-left')
        );

        RevealOnScroll.viewportWidth = window.innerWidth;
        RevealOnScroll.viewportHeight = window.innerHeight;

        if (RevealOnScroll.viewportWidth <= 1024) {
            RevealOnScroll.TOP1 = 0.15;
            RevealOnScroll.TOP2 = 0.5;
        } else {
            RevealOnScroll.TOP1 = 0.2;
            RevealOnScroll.TOP2 = 0.6;
        }
    }
}

export default function About() {
    return (
        <div
            className={classnames(
                backgroundColor('bg-zinc-100'),
                display('flex'),
                justifyContent('justify-start'),
                alignItems('items-start'),
                flexDirection('flex-col'),
                padding('px-10', 'sm:px-16', 'lg:px-24'),
                width('w-full')
            )}
            id="about-container"
        >
            <div
                className={
                    'about-text-container ' + classnames(width('w-full'))
                }
            >
                <ul
                    className={classnames(
                        display('flex'),
                        flexDirection('flex-col'),
                        justifyContent('justify-start'),
                        height('h-screen'),
                        width('w-full')
                    )}
                    id="about-text-list"
                >
                    <li>
                        <span id="about-text-1">My name is Tarang.</span>
                    </li>
                    <li>
                        <span id="about-text-2">
                            I am a student at the{' '}
                            <a
                                className={classnames(display('contents'))}
                                href="https://qut.edu.au"
                            >
                                Queensland University of Technology
                            </a>
                            , currently studying Engineering (Honours) and
                            Mathematics.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
