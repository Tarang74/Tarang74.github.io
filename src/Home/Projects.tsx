import React from 'react';

import { classnames } from 'tailwindcss-classnames';

export default function Projects() {
    return (
        <div
            className={classnames(
                'bg-white',
                'text-center',
                'flex',
                'justify-center',
                'items-center',
                'flex-col',
                'gap-y-4',
                'py-52',
                'w-full',
                'h-full'
            )}
        >
            <div
                className={classnames('text-4xl', 'text-gray-800', 'font-bold')}
            >
                Projects
            </div>
            <a href="./unit_visualiser.html">Click here</a>
        </div>
    );
}
