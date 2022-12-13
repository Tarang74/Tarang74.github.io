import Content from '@components/Content';
import SlideIn from '@components/SlideIn';

export default function Skills() {
    return (
        <Content title="Skills">
            <SlideIn text={'Skill 1'} time={1} parentPosition={10} />;
        </Content>
    );
}
