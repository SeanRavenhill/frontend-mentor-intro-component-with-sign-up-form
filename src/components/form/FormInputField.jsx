export default function FormInputField({ fieldConfig, formData, setFormData, formErrorMessages, formErrors }) {
    const { placeholder, id, type } = fieldConfig;
    const error = formErrors[id];

    return (
        <>
            <div>
                <label htmlFor={id} className="sr-only">
                    {placeholder}
                </label>
                <div className="relative flex flex-row items-center">
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
                        className="placeholder:text-darkblue/75 text-darkblue active:border-blue focus-visible:border-blue relative w-full rounded-[5px] border border-[#dedede] bg-white px-[var(--fluid-20-32)] py-4 text-sm leading-relaxed font-semibold tracking-tight focus:outline-0"
                        placeholder={error ? '' : placeholder}
                        value={formData[id]}
                        autoComplete="on"
                    />
                    {error && (
                        <div className="pointer-events-none absolute inset-0 flex flex-row items-center justify-end pr-7">
                            <img src="/images/icon-error.svg" alt="" />
                        </div>
                    )}
                </div>

                {error && (
                    <p className="text-red text-right text-[0.6875rem] font-medium italic">{formErrorMessages[id]}</p>
                )}
            </div>
        </>
    );
}
