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

const initialFormErrors = {
    firstName: { valid: true, message: '' },
    lastName: { valid: true, message: '' },
    email: { valid: true, message: '' },
    password: { valid: true, message: '' },
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
    firstName: {
        validate: (val) => !isEmpty(val),
        message: 'First Name cannot be empty',
    },
    lastName: {
        validate: (val) => !isEmpty(val),
        message: 'Last Name cannot be empty',
    },
    email: {
        validate: (val) => validateEmail(val),
        message: 'Looks like this is not an email',
    },
    password: {
        validate: (val) => !isEmpty(val),
        message: 'Password cannot be empty',
    },
};

const fields = [
    { key: 'firstName', Component: FormInputField },
    { key: 'lastName', Component: FormInputField },
    { key: 'email', Component: FormEmailInput },
    { key: 'password', Component: FormPasswordInput },
];

export default function Form({ fieldConfig, buttonText, legal }) {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFormErrors = {};

        Object.entries(validators).forEach(([key, validator]) => {
            const isValid = validator.validate(formData[key]);
            if (!isValid) {
                newFormErrors[key] = { valid: isValid, message: validator.message };
            }
        });

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors({ ...initialFormErrors, ...newFormErrors });
        } else {
            setTimeout(() => {
                console.log('Submitting to server...', formData);
                alert('Form Valid!');
                setFormData(initialFormData);
                setFormErrors(initialFormErrors);
            }, 300);
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
                    formErrors={formErrors}
                    setFormErrors={setFormErrors}
                />
            ))}
            <FormButton>{buttonText}</FormButton>
            <FormLegal data={legal} />
        </form>
    );
}
