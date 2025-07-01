import Container from '../Container';
import ContainerContent from '../ContainerContent';
import Form from '../Form/Form';

import { introComponent } from '../../constants';

const { title, text, cta, form } = introComponent;
const { fields, buttonText, legal } = form;

const IntroSection = () => {
    return (
        <>
            <Container
                as="section"
                className="bg-red bg-[url(/images/bg-intro-mobile.png)] bg-cover xl:bg-[url(/images/bg-intro-desktop.png)]"
            >
                <ContainerContent className="flex items-center">
                    <div className="flex flex-auto flex-col gap-16 pt-[var(--fluid-88-120)] pb-[var(--fluid-68-120)] xl:flex-row xl:gap-11">
                        <div className="border-green flex flex-col justify-center gap-[var(--fluid-24-28)] border text-white xl:max-w-[32.8125rem]">
                            <h2>{title}</h2>
                            <p className="text-center text-base leading-relaxed font-medium text-white xl:text-left">
                                {text}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 border border-blue-500 xl:min-w-[33.75rem]">
                            <div className="bg-blue mx-auto w-full rounded-[0.625rem] px-16 py-[1.125rem] text-center text-white shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]">
                                <strong>{`${cta.bold} `}</strong>
                                {cta.rest}
                            </div>
                            <Form fieldConfig={fields} buttonText={buttonText} legal={legal} />
                        </div>
                    </div>
                </ContainerContent>
            </Container>
        </>
    );
};

export default IntroSection;
