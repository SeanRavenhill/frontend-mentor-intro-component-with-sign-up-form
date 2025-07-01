import { useState } from 'react';

import FormInputField from './FormInputField';
import FormEmailInput from './FormEmailInput';
import FormPasswordInput from './FormPasswordInput';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const Form = ({ fieldConfig, buttonText, legal }) => {
    const { firstName, lastName, userEmail, userPassword } = fieldConfig;
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        console.log(formData);
        setFormData(initialFormData);
    };

    return (
        <form
            className="flex flex-col gap-[var(--fluid-16-20)] rounded-[0.625rem] bg-white p-[var(--fluid-24-40)] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]"
            onSubmit={handleSubmit}
            noValidate
        >
            <FormInputField fieldConfig={firstName} formData={formData} setFormData={setFormData} />
            <FormInputField fieldConfig={lastName} formData={formData} setFormData={setFormData} />
            <FormEmailInput fieldValues={userEmail} />
            <FormPasswordInput fieldValues={userPassword} />
            <button className="bg-green hover:bg-green-hover cursor-pointer rounded-[0.3125rem] py-[0.9375rem] text-[0.9375rem] leading-relaxed font-semibold tracking-wide text-white uppercase shadow-[inset_0px_-4px_0px_0px_rgba(0,0,0,0.09)]">
                {buttonText}
            </button>
            <p className="text-grayblue text-center text-[0.6875rem] leading-relaxed font-medium">
                {legal.text}{' '}
                <a href="#">
                    <span className="text-red font-bold">{legal.termsAndConditions}</span>
                </a>
            </p>
        </form>
    );
};

export default Form;
