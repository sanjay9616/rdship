module.exports = {
    API: {
        ACCOUNT: {
            LOGIN: {
                URL: '/account/login',
            },
            SIGNUP: {
                URL: '/account/signup',
            },
            FORGET_PASSWORD: {
                URL: '/account/forget-password',
            },
            VERIFY_USER: {
                URL: '/account/verify',
            },
            UPDATE_PROFILE: {
                URL: '/account/update-profile/:id',
            },
            AUTH_DATA: {
                URL: '/account/auth-data/:id'
            }
        }
    },
    DATABASE: {
        DATABASE_NAME: {
            URL: 'mongodb://localhost:27017/rdship'
        }
    }
};