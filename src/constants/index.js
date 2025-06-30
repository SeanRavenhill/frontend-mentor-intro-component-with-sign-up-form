// src/constants/index.js

export const introComponent = {
    title: 'Learn to code by watching others',
    text: 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.',
    cta: {
        bold: 'Try it free 7 days',
        rest: 'then $20/mo. thereafter',
    },
    form: {
        inputFields: {
            firstName: {
                id: 'firstName',
                placeholderValue: 'First Name',
            },
            lastName: {
                id: 'lastName',
                placeholderValue: 'Last Name',
            },
            email: {
                id: 'email',
                placeholderValue: 'Email Address',
            },
            password: {
                id: 'password',
                placeholderValue: 'Password',
            },
        },
        buttonText: 'Claim your free trial',
        legal: 'By clicking the button, you are agreeing to our Terms and Services',
    },
};

export const attribution = [
    { id: 'frontendmentor', url: 'https://www.frontendmentor.io?ref=challenge' },
    { id: 'profile', url: 'https://github.com/SeanRavenhill' },
    {
        id: 'repo',
        url: 'https://github.com/SeanRavenhill/frontend-mentor-intro-component-with-sign-up-form',
    },
];
