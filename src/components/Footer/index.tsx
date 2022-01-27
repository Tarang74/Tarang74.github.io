import {
    alignItems,
    classnames,
    display,
    flexDirection,
    fontSize,
    justifyContent,
    padding,
    textColor
} from '@assets/tailwindcss-classnames';

export default function Footer() {
    return (
        <div
            className={classnames(
                display('flex'),
                fontSize('text-sm'),
                textColor('text-gray-100'),
                justifyContent('justify-between'),
                alignItems('items-center'),
                flexDirection('flex-col'),
                padding('px-32'),
                padding('py-24')
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
