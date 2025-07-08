import { useState } from 'react';

import FormInputField from './FormInputField';
import FormEmailInput from './FormEmailInput';
import FormPasswordInput from './FormPasswordInput';
import FormButton from './FormButton';
import FormLegal from './FormLegal';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const formErrorMessages = {
    firstName: 'First Name cannot be empty',
    lastName: 'Last Name cannot be empty',
    email: 'Looks like this is not an email',
    password: 'Password cannot be empty',
};

const initialFormErrors = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
};

const isEmpty = (str) => {
    // Checks for empty
    return str.trim() === '';
};

const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Return true if email matches regex, false otherwise
    return regex.test(email);
};

const validators = {
    firstName: (val) => !isEmpty(val),
    lastName: (val) => !isEmpty(val),
    email: (val) => validateEmail(val),
    password: (val) => !isEmpty(val),
};

export default function Form({ fieldConfig, buttonText, legal }) {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const fields = [
        { key: 'firstName', Component: FormInputField },
        { key: 'lastName', Component: FormInputField },
        { key: 'email', Component: FormEmailInput },
        { key: 'password', Component: FormPasswordInput },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFormErrors = {};

        Object.entries(validators).forEach(([key, validate]) => {
            if (!validate(formData[key])) {
                newFormErrors[key] = true;
            }
        });

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors({ ...initialFormErrors, ...newFormErrors });
        } else {
            setTimeout(() => {
                console.log('Submitting to server...', formData);
                alert('Form Valid!');
            }, 300);
            setFormData(initialFormData);
            setFormErrors(initialFormErrors);
        }
    };

    return (
        <form
            className="flex flex-col gap-[var(--fluid-16-20)] rounded-[0.625rem] bg-white p-[var(--fluid-24-40)] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]"
            onSubmit={handleSubmit}
            noValidate
        >
            {fields.map(({ key, Component }) => (
                <Component
                    key={key}
                    fieldConfig={fieldConfig[key]}
                    formData={formData}
                    setFormData={setFormData}
                    formErrorMessages={formErrorMessages}
                    formErrors={formErrors}
                    setFormErrors={setFormErrors}
                />
            ))}
            <FormButton>{buttonText}</FormButton>
            <FormLegal data={legal} />
        </form>
    );
}
