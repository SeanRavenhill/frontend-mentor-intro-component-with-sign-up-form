import FormInput from './FormInput';

const Form = ({ onSubmit, inputFields, buttonText, legal }) => {
    const firstName = inputFields.firstName;
    const lastName = inputFields.lastName;
    const email = inputFields.email;
    const password = inputFields.password;

    return (
        <form
            className="flex flex-col gap-[var(--fluid-16-20)] rounded-[0.625rem] bg-white p-[var(--fluid-24-40)] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]"
            onSubmit={onSubmit}
            noValidate
        >
            <FormInput inputValues={firstName} />
            <FormInput inputValues={lastName} />
            <FormInput inputValues={email} />
            <FormInput inputValues={password} />
            <button className="cursor-pointer">{buttonText}</button>
            <p>{legal}</p>
        </form>
    );
};

export default Form;
