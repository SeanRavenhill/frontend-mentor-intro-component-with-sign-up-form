import Container from '../Container';
import ContainerContent from '../ContainerContent';
import BackgroundImage from '../BackgroundImage';
import Form from '../Form';

import { introComponent } from '../../constants';

const { title, text, cta, form } = introComponent;
const { placeholderValues, buttonText, legal } = form;

const IntroSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('clicked');
    };

    return (
        <>
            <Container as="section">
                <BackgroundImage
                    className="bg-red"
                    mobileSrc="/images/bg-intro-mobile.png"
                    desktopSrc="/images/bg-intro-desktop.png"
                />
                <ContainerContent className="flex items-center">
                    <div className="flex flex-auto flex-col gap-16 xl:flex-row xl:gap-11">
                        <div className="border-green border xl:max-w-[32.8125rem]">
                            <h2>{title}</h2>
                            <div>{text}</div>
                        </div>

                        <div className="border border-blue-500 xl:min-w-[33.75rem]">
                            <div className="bg-blue mx-auto w-full rounded-[0.625rem] px-16 py-[1.125rem] text-center shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]">
                                <strong>{`${cta.bold} `}</strong>
                                {cta.rest}
                            </div>
                            <Form
                                onSubmit={handleSubmit}
                                placeholderValues={placeholderValues}
                                buttonText={buttonText}
                                legal={legal}
                            />
                        </div>
                    </div>
                </ContainerContent>
            </Container>
        </>
    );
};

export default IntroSection;
