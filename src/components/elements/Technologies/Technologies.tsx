import styles from './Technologies.module.scss';
import 'devicon/devicon.min.css';
import Content from '@components/Content';

export default function Technologies() {
    const icons = [
        [
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
        ],
        [
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
        ],
        [
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />,
            <img src="https://raw.githubusercontent.com/Tarang74/Tarang74.github.io/main/src/assets/wolfram-language.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
        ]
    ];

    const trackStyles = [
        styles.technologiesScrollTrack1,
        styles.technologiesScrollTrack2,
        styles.technologiesScrollTrack3
    ];

    const output: JSX.Element[] = [];

    let counter = 0;

    for (let i = 0; i < icons.length; i++) {
        const children: JSX.Element[] = [];

        for (let j = 0; j < icons[i].length; j++) {
            children.push(
                <div key={counter} className={styles.technologiesScrollItem}>
                    {icons[i][j]}
                </div>
            );
            counter++;
        }

        for (let j = 0; j < icons[i].length; j++) {
            children.push(
                <div key={counter} className={styles.technologiesScrollItem}>
                    {icons[i][j]}
                </div>
            );
            counter++;
        }

        output.push(
            <div key={i} className={styles.technologiesScrollView}>
                <div className={trackStyles[i]}>{children}</div>
            </div>
        );
    }

    return (
        <Content title="Tools I use">
            <div className={styles.technologiesContainer}>
                <div className={styles.technologiesScrollContainer}>{output}</div>
            </div>
        </Content>
    );
}
