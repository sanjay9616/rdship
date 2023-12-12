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
            },
            UPDATE_CART_QTY: {
                URL: '/account/update-cart-qty/:userId/:itemId'
            },
        },
        RECENTLY_VIEW: {
            ADD_RECENTLY_VIEW_ITEM: {
                URL: "/account/add-recently-view-item/:id"
            }
        },
        HOME: {
            HOME_DETAILS: {
                URL: "/product/home-details/:id"
            }
        },
        FAVORITE_ITEM: {
            ADD_FAVORITE_ITEM: {
                URL: '/account/add-favorite-item/:id'
            },
            GET_FAVORITE_ITEMS: {
                URL: '/account/get-favorite-items/:id'
            },
            DELETE_FAVORITE_ITEM: {
                URL: '/account/delete-favorite-item/:userId/:itemId'
            },
        },
    },
    DATABASE: {
        DATABASE_NAME: {
            URL: 'mongodb://localhost:27017/rdship'
        }
    }
};