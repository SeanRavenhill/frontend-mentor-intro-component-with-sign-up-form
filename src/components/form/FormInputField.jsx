export default function FormInputField({
    fieldConfig,
    formData,
    setFormData,
    formErrorMessages,
    formErrors,
    setFormErrors,
}) {
    const { placeholder, id, type } = fieldConfig;
    const errorMessage = formErrors[id];

    return (
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
                    onClick={() => {
                        setFormErrors({
                            ...formErrors,
                            [id]: false,
                        });
                    }}
                    onFocus={() => {
                        setFormErrors({
                            ...formErrors,
                            [id]: false,
                        });
                    }}
                    className={`${errorMessage ? `border-red border-2` : `border border-[#dedede]`} placeholder:text-darkblue/75 text-darkblue active:border-blue focus-visible:border-blue relative w-full rounded-[5px] bg-white px-[var(--fluid-20-32)] py-4 text-sm leading-relaxed font-semibold tracking-tight focus:outline-0`}
                    placeholder={errorMessage ? '' : placeholder}
                    value={formData[id]}
                    autoComplete="on"
                />
                {errorMessage && (
                    <div className="pointer-events-none absolute inset-0 flex flex-row items-center justify-end pr-7">
                        <img className="h-6 w-6" src="/images/icon-error.svg" alt="error icon" />
                    </div>
                )}
            </div>

            {errorMessage && (
                <p className="text-red mt-1.5 text-right text-[0.6875rem] font-medium italic">
                    {formErrorMessages[id]}
                </p>
            )}
        </div>
    );
}
