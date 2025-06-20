import { introComponent } from '../constants';

const title = introComponent[0].title.content;

const Intro = () => {
    return (
        <>
            <div>{title}</div>
        </>
    );
};

export default Intro;
