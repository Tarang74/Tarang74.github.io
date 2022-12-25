'use client';

import { useEffect, useState } from 'react';
import useWindowDimension from '@hooks/useWindowDimension';

import styles from './DotsLoading.module.scss';

export default function DotsLoading() {
    const { width, height } = useWindowDimension();

    const dotSize = 5;
    const gap = 50;
    const columns = Math.ceil(width / (dotSize + gap));
    const rows = Math.ceil(height / (dotSize + gap));
    const xOffset = (width - columns * (dotSize + gap)) / 2;
    const yOffset = (height - rows * (dotSize + gap)) / 2;
    const dots = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            dots.push({
                x: j * (dotSize + gap) + xOffset,
                y: i * (dotSize + gap) + yOffset
            });
        }
    }

    const [inactiveDotIndices, setInactiveDotIndices] = useState<number[]>([]);
    const [activeDotIndices] = useState<number[]>([]);

    useEffect(() => {
        setInactiveDotIndices(Array.from(Array(dots.length).keys()));
    }, [dots.length]);

    const groupSizeCondition = dots.length < 1000;
    const minGroupSize = groupSizeCondition ? 70 : 100;
    const maxGroupSize = groupSizeCondition ? 130 : 220;

    useEffect(() => {
        if (inactiveDotIndices.length != 0) {
            const interval = setInterval(() => {
                // Generate a random group size
                const groupSize =
                    Math.floor(
                        Math.random() * (maxGroupSize - minGroupSize + 1)
                    ) + minGroupSize;

                // Shuffle array
                inactiveDotIndices.sort(() => 0.5 - Math.random());

                // Get sub-array of first n elements after shuffled and update active dot indices
                if (inactiveDotIndices.length >= groupSize) {
                    activeDotIndices.push(
                        ...inactiveDotIndices.slice(0, groupSize)
                    );
                    setInactiveDotIndices(
                        inactiveDotIndices.filter(
                            (dotIndex) => !activeDotIndices.includes(dotIndex)
                        )
                    );
                } else {
                    activeDotIndices.push(...inactiveDotIndices);
                    setInactiveDotIndices([]);
                }
            }, 350);

            return () => clearInterval(interval);
        }
    }, [inactiveDotIndices, activeDotIndices, maxGroupSize, minGroupSize]);

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
                                    activeDotIndices.includes(index)
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
