import React from 'react';

import { classnames } from 'tailwindcss-classnames';

export default function WhatIDo() {
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
                What I do
            </div>
            <table>
                <tr>
                    <th>Studying</th>
                    <td>
                        Bachelor of Engineering (Honours) & Bachelor of
                        Mathematics
                    </td>
                </tr>
                <tr>
                    <th>University</th>
                    <td>Queensland University of Technology</td>
                </tr>
            </table>
            <div className={classnames('flex')}>programming...</div>
        </div>
    );
}
