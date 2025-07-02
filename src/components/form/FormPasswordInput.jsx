import { useState } from 'react';

export default function FormPasswordInput({ fieldConfig, formData, setFormData, formErrorMessages, formErrors }) {
    const { placeholder, id, type } = fieldConfig;
    const [inputType, setInputType] = useState(type);
    const error = formErrors[id];

    const handleToggle = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password');
    };

    return (
        <>
            <label htmlFor={id} className="sr-only">
                {placeholder}
            </label>
            <input
                id={id}
                name={id}
                type={inputType}
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
            <div className="flex w-full items-start px-[var(--fluid-20-32)]">
                <div className="font-base flex items-center justify-center gap-2 text-sm leading-relaxed tracking-tight">
                    <input type="checkbox" name="passwordToggle" id="passwordToggle" onClick={handleToggle} />
                    <label htmlFor="passwordToggle">Show Password</label>
                </div>
            </div>
            {error && <p className="text-red">{formErrorMessages[id]}</p>}
        </>
    );
}
