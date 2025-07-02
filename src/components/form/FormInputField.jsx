export default function FormInputField({ fieldConfig, formData, setFormData, formErrorMessages, formErrors }) {
    const { placeholder, id, type } = fieldConfig;
    const error = formErrors[id];

    return (
        <>
            <label htmlFor={id} className="sr-only">
                {placeholder}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        [id]: e.target.value,
                    })
                }
                className="placeholder:text-darkblue/75 text-darkblue active:border-blue focus-visible:border-blue rounded-[5px] border border-[#dedede] bg-white px-[var(--fluid-20-32)] py-4 text-sm leading-relaxed font-semibold tracking-tight focus:outline-0"
                placeholder={placeholder}
                value={formData[id]}
                autoComplete="on"
            />
            {error && <p className="text-red">{formErrorMessages[id]}</p>}
        </>
    );
}
