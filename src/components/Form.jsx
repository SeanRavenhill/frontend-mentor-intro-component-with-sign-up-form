const Form = ({ onSubmit, placeholderValues, buttonText, legal }) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            <label htmlFor="firstName" className="sr-only">
                First Name:
            </label>
            <input id="firstName" placeholder={placeholderValues[0]} />

            <label htmlFor="lastName" className="sr-only">
                Last Name:
            </label>
            <input id="lastName" placeholder={placeholderValues[1]} />

            <label htmlFor="userEmail" className="sr-only">
                Last Name:
            </label>
            <input id="userEmail" placeholder={placeholderValues[2]} />

            <label htmlFor="userPassword" className="sr-only">
                Last Name:
            </label>
            <input id="userPassword" placeholder={placeholderValues[3]} />

            <button className="cursor-pointer">{buttonText}</button>
            <p>{legal}</p>
        </form>
    );
};

export default Form;
