import React from 'react';

import { classnames } from 'tailwindcss-classnames';

export default function Footer() {
    return (
        <div
            className={classnames(
                'flex',
                'text-sm',
                'text-gray-100',
                'justify-between',
                'items-center',
                'flex-col',
                'px-32',
                'py-24'
            )}
        >
            <div>
                © 2021 Tarang Janawalkar
                <br />
                All Rights Reserved
            </div>
        </div>
    );
}
