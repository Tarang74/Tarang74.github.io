import {
    alignItems,
    classnames,
    display,
    flexDirection,
    fontSize,
    justifyContent,
    padding,
    textAlign,
    textColor
} from '@assets/tailwindcss-classnames';

import './styles.scss';

export default function Information() {
    return (
            <div
                className={classnames(
                    display('flex'),
                    fontSize('text-sm'),
                    textColor('text-gray-100'),
                    justifyContent('justify-between'),
                    alignItems('items-center'),
                    flexDirection('flex-row'),
                    padding('px-28'),
                    padding('py-16'),
                    textAlign('text-center'),
                    fontSize('text-base')
                )}
            >
                <div>
                    <div
                        className={'badge-base LI-profile-badge'}
                        data-locale="en_US"
                        data-size="large"
                        data-theme="dark"
                        data-type="VERTICAL"
                        data-vanity="tarangjanawalkar"
                        data-version="v1"
                    >
                        <a
                            className={'badge-base__link LI-simple-link'}
                            href="https://au.linkedin.com/in/tarangjanawalkar?trk=profile-badge"
                        >
                            Tarang Janawalkar
                        </a>
                    </div>
                </div>
                <div>
                    © 2021 Tarang Janawalkar
                    <br />
                    All Rights Reserved
                </div>
            </div>
    );
}
