export const URL_LIST = {
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
                URL: '/account/update-profile',
            },
            AUTH_DATA: {
                URL: '/account/auth-data',
            },
        },
        HOME: {
            PRODUCT_DETAILS: {
                URL: '/product/getProduct'
            },
            ITEM_INFO: {
                URL: '/view-item'
            }
        }
    },
    ROUTING_PATHS: {
        HOME: '/',
        LOGIN: '/account/login',
        VIEW_CART: '/view-cart',
        VERIFY_USER: '/account/verify',
    }
}