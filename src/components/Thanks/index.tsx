import {
    display,
    classnames,
    flexWrap,
    justifyContent,
    alignItems,
    flexBasis,
    height,
    flexDirection,
    textColor,
    gap,
    fontWeight,
    fontSize
} from '@assets/tailwindcss-classnames';

import NodeJSLogo from '@assets/icons/nodejs.svg';
import ReactLogo from '@assets/icons/react.svg';
import TailwindCSSLogo from '@assets/icons/tailwindcss.svg';
import ViteLogo from '@assets/icons/vite.svg';

import './styles.scss';

function ThanksLogo(props: {
    href: string;
    src: string;
    alt: string;
    className: string;
}) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener"
            className={props.className}
        >
            <img src={props.src} alt={props.alt} />
        </a>
    );
}

export default function Thanks() {
    return (
        <div
            className={classnames(
                display('flex'),
                flexDirection('flex-col'),
                alignItems('items-center'),
                gap('gap-5')
            )}
        >
            <h1 className={classnames(textColor('text-slate-100'), fontWeight('font-normal'), fontSize('text-2xl'))}>
                Thanks to
            </h1>
            <div
                className={classnames(
                    display('flex'),
                    flexWrap('flex-wrap'),
                    justifyContent('justify-center'),
                    alignItems('items-center')
                )}
            >
                <ThanksLogo
                    href="https://reactjs.org"
                    src={ReactLogo}
                    alt="React"
                    className="thanks-logo-square"
                />
                <ThanksLogo
                    href="https://vitejs.dev"
                    src={ViteLogo}
                    alt="Vite"
                    className="thanks-logo-square"
                />
                <div
                    className={classnames(
                        flexBasis('basis-full'),
                        height('h-0')
                    )}
                ></div>
                <ThanksLogo
                    href="https://nodejs.org"
                    src={NodeJSLogo}
                    alt="Node.js"
                    className="thanks-logo"
                />
                <ThanksLogo
                    href="https://tailwindcss.com"
                    src={TailwindCSSLogo}
                    alt="Tailwind Labs"
                    className="thanks-logo"
                />
            </div>
        </div>
    );
}
