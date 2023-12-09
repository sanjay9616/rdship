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
            },
        },
        CART_ITEMS: {
            ADD_ITEM_TO_CART: {
                URL: '/account/add-cart-item/:id'
            },
            GET_CART_ITEMS: {
                URL: '/account/get-cart-items/:id'
            },
            DELETE_CART_ITEM: {
                URL: '/account/delete-cart-item/:userId/:itemId'
            }
        }
    },
    DATABASE: {
        DATABASE_NAME: {
            URL: 'mongodb://localhost:27017/rdship'
        }
    }
};