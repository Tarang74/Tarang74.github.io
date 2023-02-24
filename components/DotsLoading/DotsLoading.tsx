'use client';

import { useEffect, useState } from 'react';
import useWindowDimension from '@hooks/useWindowDimension';

import styles from './DotsLoading.module.scss';

function shuffleArray<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function partition(array: Array<number>, n: number) {
    // n chunks
    const size = Math.ceil(array.length / n);

    return Array.from({ length: n }, (v, i) =>
        array.slice(i * size, i * size + size)
    );
}

export default function DotsLoading() {
    const { width, height } = useWindowDimension();

    const dotSize = 5;
    const gap = 50;
    const columns = Math.ceil(width / (dotSize + gap));
    const rows = Math.ceil(height / (dotSize + gap));
    const xOffset = (width - columns * (dotSize + gap)) / 2;
    const yOffset = (height - rows * (dotSize + gap)) / 2;
    const dots: { x: number; y: number }[] = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            dots.push({
                x: j * (dotSize + gap) + xOffset,
                y: i * (dotSize + gap) + yOffset
            });
        }
    }

    const indices = [...Array(dots.length).keys()];
    shuffleArray(indices);
    const [indicesOrder, setIndicesOrder] = useState<Array<number[]>>([]);

    const [activeDotIndices, setActiveDotIndices] = useState<
        Map<number, boolean>
    >(new Map<number, boolean>());

    const [partitionNumber, setPartitionNumber] = useState<number>(0);

    const [firstRender, setFirstRender] = useState<boolean>(false);

    useEffect(() => {
        if (indices.length != 0 && !firstRender) {
            setIndicesOrder(partition(indices, 6));

            setActiveDotIndices(
                new Map<number, boolean>(indices.map((v) => [v, false]))
            );
            if (indices.length == activeDotIndices.size) {
                setFirstRender(true);
            }
        }
    });

    useEffect(() => {
        if (firstRender) {
            if (partitionNumber < indicesOrder.length) {
                const interval = setInterval(() => {
                    indicesOrder[partitionNumber].forEach((idx) => {
                        activeDotIndices.set(idx, true);
                    });

                    setPartitionNumber(partitionNumber + 1);
                }, 250);

                return () => clearInterval(interval);
            }
        }
    });

    return (
        <div className={styles.dotsLoadingContainer}>
            <svg viewBox={`0 0 ${width} ${height}`}>
                <defs>
                    <mask id="dots">
                        {dots.map((dot, index) => (
                            <circle
                                key={index}
                                cx={dot.x + dotSize / 2}
                                cy={dot.y + dotSize / 2}
                                r={dotSize / 2}
                                fill={
                                    activeDotIndices.get(index)
                                        ? '#fff'
                                        : '#000'
                                }
                            />
                        ))}
                    </mask>
                </defs>
            </svg>
            <div className={styles.gradientContainer}>
                <div
                    className={styles.gradient1}
                    style={{ width: width, height: height }}
                />
                <div
                    className={styles.gradient2}
                    style={{ width: width, height: height }}
                />
            </div>
        </div>
    );
}
