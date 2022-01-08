import React from 'react';

import { classnames } from 'tailwindcss-classnames';

export default function Hero() {
    return (
        <div
            className={classnames(
                'bg-gray-50',
                'text-center',
                'flex',
                'justify-center',
                'items-center',
                'flex-col',
                'gap-y-10',
                'px-72',
                'w-full',
                'h-screen'
            )}
        >
            <div
                className={classnames('text-9xl', 'text-gray-200', 'font-bold')}
            >
                Welcome!
            </div>
            <div className={classnames('text-gray-400', 'text-3xl')}>
                Let's get started!
            </div>
        </div>
    );
}
