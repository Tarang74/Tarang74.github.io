import React from 'react';
import ReactDOM from 'react-dom';

import {
    alignItems,
    backgroundColor,
    classnames,
    display,
    flexDirection,
    fontSize,
    fontWeight,
    gap,
    height,
    justifyContent,
    padding,
    textColor,
    width
} from 'tailwindcss-classnames';

import './Hero.scss';

export interface TextEntrance {
    textArray: string[];
    animatingCharacter: string;
    animatingString: string;

    display(): void;
    loopOverString(n: number): void;
    updateCharacter(): string;
    updateString(): string;
}
export class TextEntrance {
    constructor(heroText:string, parentContainer:ReactDOM.Container) {
        this.textArray = [...heroText].reverse();
        for (let i = 0; i < this.textArray.length; i++) {
            if (this.textArray[i] == ' ') {
                this.textArray[i] == '\xA0';
            }
        }
        
        this.animatingCharacter = '';
        this.animatingString = '';

        let p = new Promise((resolve) => {
            let id =
                'hero-text-character-' + (this.textArray.length + 1).toString();
            ReactDOM.render(
                <div
                    className={classnames(
                        fontSize('text-9xl'),
                        textColor('text-gray-200'),
                        fontWeight('font-bold'),
                        display('flex'),
                        flexDirection('flex-row'),
                        justifyContent('justify-start'),
                        alignItems('items-center')
                    )}
                    id="hero-text"
                >
                    <span
                        className="hero-text-string"
                        id="hero-text-string"
                    ></span>
                    <span className="hero-text-character" id={id}></span>
                </div>,
                parentContainer
            );
            resolve(true);
        });

        p.then((resolveValue) => {
            if (resolveValue) {
                this.loopOverString(this.textArray.length);
            }
        });
    }

    loopOverString(n: number) {
        let p = new Promise((resolve) => {
            let p1 = new Promise((resolve1) => {
                let p2 = new Promise((resolve2) => {
                    let id = 'hero-text-character-' + (n + 1).toString();
                    document.getElementById(id).remove();
                    resolve2(true);
                });

                p2.then((resolveValue2) => {
                    if (resolveValue2) {
                        var heroText = document.getElementById('hero-text');
                        var newText = this.updateCharacter();
                        if (newText != undefined) {
                            var newDivNode = document.createElement('span');

                            let id = 'hero-text-character-' + n.toString();

                            newDivNode.className = 'hero-text-character';
                            newDivNode.id = id;

                            newDivNode.innerHTML = newText;
                            heroText.appendChild(newDivNode);

                            let heroCharacterCurr = document.getElementById(id);
                            heroCharacterCurr.addEventListener(
                                'animationend',
                                () => {
                                    var heroString =
                                        document.getElementById(
                                            'hero-text-string'
                                        );
                                    heroString.innerHTML = this.updateString();
                                    n--;
                                    resolve1(true);
                                }
                            );
                        }
                    }
                });
            });

            p1.then((resolveValue1) => {
                if (resolveValue1) {
                    resolve(true);
                }
            });
        });

        p.then((resolveValue) => {
            if (resolveValue && n > -1) {
                this.loopOverString(n);
            }
        });
    }

    updateCharacter(): string {
        this.animatingCharacter = this.textArray.pop();
        return this.animatingCharacter;
    }

    updateString(): string {
        if (this.animatingCharacter != undefined) {
            this.animatingString += this.animatingCharacter;
            return this.animatingString;
        } else {
            this.animatingCharacter = '';
            return this.animatingString;
        }
    }
}

export default class Hero extends React.Component {
    render() {
        return (
            <div
                className={classnames(
                    backgroundColor('bg-zinc-900'),
                    display('flex'),
                    justifyContent('justify-center'),
                    flexDirection('flex-col'),
                    gap('gap-y-10'),
                    padding('px-24'),
                    width('w-full'),
                    height('h-screen')
                )}
                id="hero-container"
            ></div>
        );
    }
}
