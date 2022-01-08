import React from 'react';

import { classnames } from 'tailwindcss-classnames';

export default function Accomplishments() {
    return (
        <div
            className={classnames(
                'bg-white',
                'flex',
                'gap-y-4',
                'justify-center',
                'items-center',
                'flex-col',
                'py-52',
                'w-full',
                'h-full'
            )}
        >
            <div
                className={classnames(
                    'text-4xl',
                    'text-gray-800',
                    'font-bold'
                )}
            >
                Accomplishments
            </div>
        </div>
    );
}
