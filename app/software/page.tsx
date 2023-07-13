/* eslint-disable @next/next/no-img-element */
import styles from './Software.module.scss';
import Content from '@components/Content';

const icons = [
    [
        <img
            key="Devicon"
            alt="Devicon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
        />,
        <img
            key="Docker"
            alt="Docker"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        />,
        <img
            key="Git"
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />,
        <img
            key="GitHub"
            alt="GitHub"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />,
        <img
            key="GitLab"
            alt="GitLab"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
        />,
        <img
            key="Google"
            alt="Google"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        />,
        <img
            key="Node Package Manager"
            alt="Node Package Manager"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        />,
        <img
            key="Adobe Illustrator"
            alt="Adobe Illustrator"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
        />,
        <img
            key="Adobe XD"
            alt="Adobe XD"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
        />,
        <img
            key="JetBrains"
            alt="JetBrains"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"
        />,
        <img
            key="Visual Studio Code"
            alt="Visual Studio Code"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        />,
        <img
            key="Visual Studio"
            alt="Visual Studio"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        />,
        <img
            key="Windows"
            alt="Windows"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
        />,
        <img
            key="Ubuntu"
            alt="Ubuntu"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
        />
    ],
    [
        <img
            key="TypeScript"
            alt="TypeScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />,
        <img
            key="React.js"
            alt="React.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />,
        <img
            key="Next.js"
            alt="Next.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />,
        <img
            key="TailwindCSS"
            alt="TailwindCSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />,
        <img
            key="Sass"
            alt="Sass"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />,
        <img
            key="Node.js"
            alt="Node.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />,
        <img
            key="Jest"
            alt="Jest"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        />,
        <img
            key="HTML"
            alt="HTML"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />,
        <img
            key="JavaScript"
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />,
        <img
            key="CSS"
            alt="CSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />,
        <img
            key="d3.js"
            alt="d3.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg"
        />,
        <img
            key="Vue"
            alt="Vue"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        />
    ],
    [
        <img
            key="Python"
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />,
        <img
            key="Numpy"
            alt="Numpy"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        />,
        <img
            key="Pandas"
            alt="Pandas"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        />,
        <img
            key="Selenium"
            alt="Selenium"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
        />,
        <img
            key="C"
            alt="C"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        />,
        <img
            key="Embedded C"
            alt="Embedded C"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg"
        />,
        <img
            key="C++"
            alt="C++"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        />,
        <img
            key="C#"
            alt="C#"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        />,
        <img
            key="Wolfram Language"
            alt="Wolfram Language"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wolframlanguage/wolframlanguage-original.svg"
        />,
        <img
            key="MATLAB"
            alt="MATLAB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
        />,
        <img
            key="Julia"
            alt="Julia"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg"
        />,
        <img
            key="LaTeX"
            alt="LaTeX"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
        />,
        <img
            key="Markdown"
            alt="Markdown"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
        />,
        <img
            key="Processing"
            alt="Processing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg"
        />,
        <img
            key="Rust"
            alt="Rust"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
        />,
        <img
            key="MySQL"
            alt="MySQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
    ]
];

const trackStyles = [
    styles.softwareScrollTrack1,
    styles.softwareScrollTrack2,
    styles.softwareScrollTrack3
];

export default function SoftwarePage() {
    const output: JSX.Element[] = [];

    let counter = 0;

    for (let i = 0; i < icons.length; i++) {
        const children: JSX.Element[] = [];

        for (let j = 0; j < icons[i].length; j++) {
            children.push(
                <div key={counter} className={styles.softwareScrollItem}>
                    {icons[i][j]}
                </div>
            );
            counter++;
        }

        for (let j = 0; j < icons[i].length; j++) {
            children.push(
                <div key={counter} className={styles.softwareScrollItem}>
                    {icons[i][j]}
                </div>
            );
            counter++;
        }

        output.push(
            <div key={i} className={styles.softwareScrollView}>
                <div className={trackStyles[i]}>{children}</div>
            </div>
        );
    }

    return (
        <Content title="Powered by" single={true}>
            <div className={styles.softwareScrollContainer}>{output}</div>
        </Content>
    );
}
