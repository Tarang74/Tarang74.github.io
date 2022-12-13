import React, { useEffect, useState } from 'react';
import styles from './LoadingAnimation.module.scss';

import WindowDimensions from 'src/models/WindowDimensions';

interface LoadingAnimationProps {
    numberOfCells: number;
}

export default function LoadingAnimation(props: LoadingAnimationProps) {
    const [cellDimension, setCellDimension] = useState(1);
    const [cellCount, setCellCount] = useState({ horizontal: 0, vertical: 0 });

    const [component, setComponent] = useState<JSX.Element[] | null>(null);

    const [resized, setResized] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: 1920,
        height: 1080
    });

    const updateDimensions = () => {
        console.log('Page loaded');
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        console.log('Dimensions set.');
        console.log(windowDimensions);

        setResized(true);
        updateComponent();
    };

    const updateComponent = () => {
        console.log('Component updated.');
        const minDimension = Math.min(
            windowDimensions.height,
            windowDimensions.width
        );

        setCellDimension(minDimension / props.numberOfCells);

        if (minDimension == windowDimensions.height) {
            let tempVerticalCount = Math.ceil(
                windowDimensions.width / cellDimension
            );

            if (tempVerticalCount % 2 == 1) {
                tempVerticalCount++;
            }

            setCellCount({
                horizontal: props.numberOfCells,
                vertical: tempVerticalCount
            });
        } else {
            let tempHorizontalCount = Math.ceil(
                windowDimensions.height / cellDimension
            );

            if (tempHorizontalCount % 2 == 1) {
                tempHorizontalCount++;
            }

            setCellCount({
                horizontal: tempHorizontalCount,
                vertical: props.numberOfCells
            });
        }

        const characters = Array<string>();

        for (let i = 0; i < cellCount.horizontal * cellCount.vertical; i++) {
            characters.push(makeid());
        }

        setComponent(
            characters.map((item, index) => (
                <Cell key={index} length={cellDimension} symbol={item} />
            ))
        );

        console.log(component);
    };

    useEffect(() => {
        if (document.readyState === 'complete') {
            console.log('A');
            updateDimensions();
        } else {
            console.log('B');
            window.addEventListener('load', updateDimensions);
            return () => window.removeEventListener('load', updateDimensions);
        }
    });

    return (
        <div>
            {!resized ? (
                <div></div>
            ) : (
                <div className="flex flex-row" style={{ overflow: 'hidden' }}>
                    {component}
                </div>
            )}
        </div>
    );
}

interface CellProps {
    length: number;
    symbol: string;
}

function Cell(props: CellProps) {
    return (
        <div
            // className="loading-animation__cell"
            style={{
                width: props.length,
                height: props.length,
                backgroundColor: '#f00',
                overflow: 'hidden'
            }}
        >
            <div className={styles.engrave}>{props.symbol}</div>
        </div>
    );
}

function makeid(length = 1) {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}
