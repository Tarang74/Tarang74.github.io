import React from 'react';

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
    textAlign,
    textColor,
    width
} from '../tailwindcss-classnames-cli';

export default function Projects() {
    return (
        <div
            className={classnames(
                backgroundColor('bg-white'),
                textAlign('text-center'),
                display('flex'),
                justifyContent('justify-center'),
                alignItems('items-center'),
                flexDirection('flex-col'),
                gap('gap-y-4'),
                padding('py-52'),
                width('w-full'),
                height('h-full')
            )}
        >
            <div
                className={classnames(
                    fontSize('text-4xl'),
                    textColor('text-gray-800'),
                    fontWeight('font-bold')
                )}
            >
                Projects
            </div>
            <a href="">Click here</a>
        </div>
    );
}
