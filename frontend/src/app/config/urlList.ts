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
            },
            CHANGE_SPECIFICATION: {
                URL: '/product/change-specification'
            },
            HOME_DETAILS: {
                URL: "/product/home-details"
            }
        },
        CART_ITEMS: {
            ADD_ITEM_TO_CART: {
                URL: '/account/add-cart-item'
            },
            GET_CART_ITEMS: {
                URL: '/account/get-cart-items'
            },
            DELETE_CART_ITEM: {
                URL: '/account/delete-cart-item'
            },
            UPDATE_CART_QTY: {
                URL: '/account/update-cart-qty'
            }
        },
        REVIEW: {
            SUBMIT_PRODUCT_REVIEW: {
                URL: '/product/review'
            },
            VOTE: {
                URL: '/product/vote'
            }
        },
        QUESTION_ANSWER: {
            SUBMIT_QUESTION: {
                URL: '/product/question'
            }
        },
        RECENTLY_VIEW: {
            ADD_RECENTLY_VIEW_ITEM: {
                URL: "/account/add-recently-view-item"
            }
        },
        FAVORITE_ITEMS: {
            ADD_FAVORITE_ITEM: {
                URL: '/account/add-favorite-item'
            },
            GET_FAVORITE_ITEMS: {
                URL: '/account/get-favorite-items'
            },
            DELETE_FAVORITE_ITEM: {
                URL: '/account/delete-favorite-item'
            },
        },
    },
    ROUTING_PATHS: {
        HOME: '/',
        LOGIN: '/account/login',
        VIEW_CART: '/view-cart',
        VERIFY_USER: '/account/verify',
    }
}