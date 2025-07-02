export default function FormLegal({ data }) {
    const { text, termsAndConditions, url } = data;

    return (
        <div className="px-4">
            <p className="text-grayblue text-center text-[0.6875rem] leading-relaxed font-medium">
                {text}{' '}
                <a href={url}>
                    <span className="text-red font-bold">{termsAndConditions}</span>
                </a>
            </p>
        </div>
    );
}
