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

const initialformErrors = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
};

const isEmtpy = (str) => {
    // Return true if input string empty, false otherwise
    return str.trim() === '';
};

const validateEmail = (email) => {
    // Regular expression for email validation
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Return true if email matches regex, false otherwise
    return regex.test(email);
};

export default function Form({ fieldConfig, buttonText, legal }) {
    const { firstName, lastName, email, password } = fieldConfig;
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialformErrors);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (isEmtpy(formData.firstName)) {
            setFormErrors({
                ...formErrors,
                firstName: true,
            });
        }

        if (isEmtpy(formData.lastName)) {
            setFormErrors({
                ...formErrors,
                firstName: true,
            });
        }

        if (!validateEmail(formData.email) || isEmtpy(formData.email)) {
            console.log('email: empty');
            setFormErrors({
                ...formErrors,
                email: true,
            });
        }

        if (isEmtpy(formData.password)) {
            setFormErrors({
                ...formErrors,
                firstName: true,
            });
        }

        console.log(formErrors);
        // setFormData(initialFormData);
    };

    return (
        <form
            className="flex flex-col gap-[var(--fluid-16-20)] rounded-[0.625rem] bg-white p-[var(--fluid-24-40)] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]"
            onSubmit={handleSubmit}
            noValidate
        >
            <FormInputField
                fieldConfig={firstName}
                formData={formData}
                setFormData={setFormData}
                formErrorMessages={formErrorMessages}
                formErrors={formErrors}
            />
            <FormInputField
                fieldConfig={lastName}
                formData={formData}
                setFormData={setFormData}
                formErrorMessages={formErrorMessages}
                formErrors={formErrors}
            />
            <FormEmailInput
                fieldConfig={email}
                formData={formData}
                setFormData={setFormData}
                formEformErrorMessagesrrors={formErrorMessages}
                formErrors={formErrors}
            />
            <FormPasswordInput
                fieldConfig={password}
                formData={formData}
                setFormData={setFormData}
                formErrorMessages={formErrorMessages}
                formErrors={formErrors}
            />
            <FormButton>{buttonText}</FormButton>
            <FormLegal data={legal} />
        </form>
    );
}
