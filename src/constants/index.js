// src/constants/index.js

export const introComponent = {
    title: 'Learn to code by watching others',
    text: 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.',
    cta: {
        bold: 'Try it free 7 days',
        rest: 'then $20/mo. thereafter',
    },
    form: {
        fields: {
            firstName: {
                id: 'firstName',
                placeholder: 'First Name',
                type: 'text',
            },
            lastName: {
                id: 'lastName',
                placeholder: 'Last Name',
                type: 'text',
            },
            email: {
                id: 'email',
                placeholder: 'Email Address',
                type: 'email',
            },
            password: {
                id: 'password',
                placeholder: 'Password',
                type: 'password',
            },
        },
        buttonText: 'Claim your free trial',
        legal: {
            text: 'By clicking the button, you are agreeing to our',
            termsAndConditions: 'Terms and Services',
            url: '#',
        },
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
