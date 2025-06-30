const FormInput = ({ inputValues }) => {
    return (
        <>
            <label htmlFor={inputValues.id} className="sr-only">
                {inputValues.placeholderValue}
            </label>
            <input
                id={inputValues.id}
                className="placeholder:text-darkblue/75 text-darkblue active:border-blue focus-visible:border-blue rounded-[5px] border border-[#dedede] bg-white px-[var(--fluid-20-32)] py-4 text-sm leading-relaxed font-semibold tracking-tight focus:outline-0"
                placeholder={inputValues.placeholderValue}
            />
        </>
    );
};

export default FormInput;
