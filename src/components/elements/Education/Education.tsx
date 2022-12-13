import Content from '@components/Content';
import React from 'react';
import styles from './Education.module.scss';

export default function Education() {
    return (
        <Content title="Education">
            <div className={styles.educationContainer}>
                <EducationCard
                    title="Bachelor of Engineering (Honours)"
                    school="Queensland University of Technology"
                    grade="GPA: 7.0"
                    period="2021 - 2025"
                    description="Majoring in Computer and Software Systems"
                />
                <EducationCard
                    title="Bachelor of Mathematics"
                    school="Queensland University of Technology"
                    grade="GPA: 7.0"
                    period="2021 - 2025"
                    description="Majoring in Applied & Computational Mathematics"
                />
                <EducationCard
                    title="Queensland Certificate of Education"
                    school="Citipointe Christian College"
                    grade="ATAR: 96.75"
                    period="2010 - 2020"
                />
            </div>
        </Content>
    );
}

interface EducationCardProps {
    title: string;
    school: string;
    grade: string;
    period: string;
    description?: string;
}

function EducationCard(props: EducationCardProps) {
    return (
        <div className={styles.educationCard}>
            <div className="px-6 py-4">
                <div className={styles.educationCardTitle}>{props.title}</div>
                {props.description && (
                    <div className={styles.educationCardDescription}>
                        {props.description}
                    </div>
                )}
                <div className={styles.educationCardSchool}>{props.school}</div>
                <div className={styles.educationCardGrade}>{props.grade}</div>
                <div className={styles.educationCardPeriod}>{props.period}</div>
            </div>
        </div>
    );
}
