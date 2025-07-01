const FormPasswordInput = ({ fieldValues }) => {
    return (
        <>
            <label htmlFor={fieldValues.id} className="sr-only">
                {fieldValues.placeholder}
            </label>
            <input
                id={fieldValues.id}
                type="password"
                className="placeholder:text-darkblue/75 text-darkblue active:border-blue focus-visible:border-blue rounded-[5px] border border-[#dedede] bg-white px-[var(--fluid-20-32)] py-4 text-sm leading-relaxed font-semibold tracking-tight focus:outline-0"
                placeholder={fieldValues.placeholder}
                autoComplete="on"
            />
        </>
    );
};

export default FormPasswordInput;
