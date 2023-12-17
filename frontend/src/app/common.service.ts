import { Injectable } from "@angular/core";
import { AuthService } from "./modules/auth/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    cartItems: Array<any> = [];
    users: Array<any> = [
        {
            userId: 'userId1',//
            name: 'Sanjay Kumar',
            mobileNumber: '9616410411',//
            gender: "Male",
            email: 'sanjay.18bit1109@abes.ac.in',//
            password: 'Sanjay@123456',//
            isVerified: true,
            address: [{area: 'Kalwari Nankar', city: 'Siddharth Nagar', pincode: '272192'}],
            recentlyViewItems: [],
            cartItems: [],
            orderList: [],
            wishList: [],
            couponList: [],
            notificationList: [],
        }
    ]

    constructor(private authService: AuthService) {}

    getDataFromDataBase() {
        return [
            {
                category: 'Grocery',
                subCategory: 'Pasta',
                itemId: 'grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta',
                itemDescription: 'Flipkart Supermart Durum Wheat Semolina Fusilli Pasta (400 g)',
                sellingPrice: 48,
                markedPrice: 120,
                numberOfSelling: 11,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '400 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "400 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/1.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/2.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/3.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/4.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/5.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/6.webp',
                    '/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/7.webp',
                ],
                highLights: ['Expiry Date 29 May 2025', 'Manufactured date 10 Jun 2023'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                ],
                specifications: {
                    'Pack of': '1',
                    'Brand': 'Flipkart Supermart',
                    'Model Name': 'urum Wheat Semolina',
                    'Type': 'Fusilli',
                    'Quantity': '400 g',
                    'Organic': 'No',
                    'Gourmet': 'No',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '24 Months',
                    'Food Preference': 'Vegetarian',
                    'Ingredients': 'NA',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Pasta',
                itemId: 'grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta',
                itemDescription: "CHEF'S BASKET Durum Wheat Elbow Macaroni Pasta (500 g)",
                sellingPrice: 71,
                markedPrice: 175,
                numberOfSelling: 11,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '500 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "500 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/1.webp',
                    '/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/2.webp',
                    '/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/3.webp',
                ],
                highLights: ['Expiry Date 21 Nov 2024', 'Manufactured date 01 Jun 2023'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Pack of': '1',
                    'Brand': "CHEF'S BASKET",
                    'Model Name': 'Durum Wheat',
                    'Type': 'Elbow Macaroni',
                    'Quantity': '500 g',
                    'Organic': 'No',
                    'Gourmet': 'No',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '18 Months',
                    'Food Preference': 'Vegetarian',
                    'Ingredients': 'NA',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Pasta',
                itemId: 'grocery_pasta_WeikfieldFusilliPasta',
                itemDescription: "WeiKFiELD Fusilli Pasta  (400 g)",
                sellingPrice: 73,
                markedPrice: 150,
                numberOfSelling: 11,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '400 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "400 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/1.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/2.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/3.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/4.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/5.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/6.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/7.webp',
                    '/assets/images/grocery_pasta_WeikfieldFusilliPasta/8.webp',
                ],
                highLights: ['Expiry Date 20 Oct 2024', 'Manufactured date 01 Nov 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 5,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 5,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 5,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 5,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 5,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 5,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 5,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Pack of': '1',
                    'Brand': "WeiKFiELD",
                    'Type': 'Fusilli',
                    'Quantity': '400 g',
                    'Organic': 'No',
                    'Gourmet': 'No',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '24 Months',
                    'Food Preference': 'Vegetarian',
                    'Ingredients': 'NA',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain',
                itemDescription: "PARLE G Original Gluco Biscuits Plain (800 g)",
                sellingPrice: 78,
                markedPrice: 90,
                numberOfSelling: 177,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '800 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "800 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/1.webp',
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/2.webp',
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/3.webp',
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/4.webp',
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/5.webp',
                    '/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/6.webp',
                ],
                highLights: ['Type: Plain', 'Quantity: 800 g', 'Shelf Life: 6 Months', 'Base Flavor: Plain', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Pack of': '1',
                    'Brand': "PARLE",
                    'Model Name': 'G Original Gluco Biscuits',
                    'Quantity': '800 g',
                    'Type': 'Plain',
                    'Organic': 'No',
                    'Ingredients': 'Wheat Flour, Sugar, Edible Veg Oil (Palm Oil), Invert Sugar Syrup, Edible Common Salt, Milk Solids, Emulsifier',
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '5 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake',
                itemDescription: "Sunfeast Dark Fantasy Yumfills Cookie Cake",
                sellingPrice: 173,
                markedPrice: 190,
                numberOfSelling: 27,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '253 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "253 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/1.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/2.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/3.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/4.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/5.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/6.webp',
                ],
                highLights: ['Type: Cookie Cake', 'Base Flavor: Chocolate', 'Non-vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Sunfeast",
                    'Model Name': 'Dark Fantasy Yumfills',
                    // quantity
                    'Type': 'Cookie Cake',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': 'Sugar, Choco Covering, Contains Added Flavours, Wheat Flour, Liquid Glucose, Invert Syrup, Refined Sunflower Oil, Egg Powder, Edible Starch, Humectants, Milk Solids, Emulsifiers, Edible Common Salt, Stabilizers, Raising Agent, Preservative, Hydrolysed Vegetable Protein And Acidity Regulator.',
                    'Food Preference': 'Non-vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '270 Days',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty',
                itemDescription: "Priyagold Butter Delite Namkeen Biscuits Sweet & Salty",
                sellingPrice: 52,
                markedPrice: 60,
                numberOfSelling: 29,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '350 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "350 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/1.webp',
                    '/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/2.webp',
                    '/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/3.jpeg',
                    '/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/4.jpeg',
                ],
                highLights: ['Type: Sweet & Salty', 'Base Flavor: Butter, Cheese', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Priyagold",
                    'Model Name': 'Butter Delite Namkeen Biscuits',
                    // quantity
                    'Type': 'Sweet & Salty',
                    'Base Flavors': 'Butter, Cheese',
                    'Organic': 'No',
                    'Ingredients': 'Wheat Flour, Edible Vegetable Oils, Sugar, Liquid Glucose, Iodized Salt, Butter, Malt, Processed Cheese, Permitted Emulsifiers, Leavening Agent, Acid Salt, Dough Conditioner, Dough Improver, Contains Added Artificial Flavour (Cheese).',
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_PatanjaliMarieBiscuit',
                itemDescription: "PATANJALI Marie Biscuit",
                sellingPrice: 25,
                markedPrice: 30,
                numberOfSelling: 62,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '250 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "250 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/1.webp',
                    '/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/2.webp',
                    '/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/3.webp',
                    '/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/4.webp',
                ],
                highLights: ['Type: Marie Biscuit', 'Base Flavor: Milk', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "PATANJALI",
                    'Model Name': 'NA',
                    // quantity
                    'Type': 'Marie Biscuit',
                    'Base Flavors': 'Milk',
                    'Organic': 'No',
                    'Ingredients': 'Whole Wheat Flour, Edible Vegetable Oil, Sugar, Malt Extract, Honey, Milk Solids, Edible Common Salt, Raising Agents, Antioxidants, Dough Conditioner and Enzymes.',
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '6 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_OrionChocoPieCreamFilled',
                itemDescription: "ORION Choco Pie Cream Filled",
                sellingPrice: 245,
                markedPrice: 350,
                numberOfSelling: 300,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '560 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "560 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/1.webp',
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/2.webp',
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/3.webp',
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/4.webp',
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/5.webp',
                    '/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/6.webp',
                ],
                highLights: ['Type: Cream Filled', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "ORION",
                    'Model Name': 'Choco Pie',
                    // quantity
                    'Type': 'Cream Filled',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': 'Whole Wheat Flour, Edible Vegetable Oil, Sugar, Malt Extract, Honey, Milk Solids, Edible Common Salt, Raising Agents, Antioxidants, Dough Conditioner and Enzymes.',
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '12 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit',
                itemDescription: "McVitie's Dark Cookie Cream Biscuit with Goodness of Cocoa and Chocolate flavoured cream, Cream Cracker Biscuit",
                sellingPrice: 121,
                markedPrice: 190,
                numberOfSelling: 328,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '485 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "485 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/1.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/2.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/3.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/4.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/5.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/6.webp',
                    '/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/7.webp',
                ],
                highLights: ['Type: Cream Cracker Biscuit', 'Base Flavor: Plain', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "McVitie's",
                    'Model Name': "Dark Cookie Cream Biscuit with Goodness of Cocoa and Chocolate flavoured cream,",
                    // quantity
                    'Type': 'Cream Cracker Biscuit',
                    'Base Flavors': 'Plain',
                    'Organic': 'No',
                    'Ingredients': "NA",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_UnibicChocoKissCookies',
                itemDescription: "UNIBIC Choco Kiss Cookies",
                sellingPrice: 399,
                markedPrice: 480,
                numberOfSelling: 228,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '250 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "250 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/1.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/2.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/3.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/4.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/5.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/6.webp',
                    '/assets/images/grocery_biscuit_UnibicChocoKissCookies/7.webp',
                ],
                highLights: ['Type: Cookies', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "UNIBIC",
                    'Model Name': "Choco Kiss",
                    // quantity
                    'Type': 'Cookies',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': "NA",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '6 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_HaldiramKajuButterCookiesCookies',
                itemDescription: "Haldiram's Kaju Butter Cookies Cookies",
                sellingPrice: 480,
                markedPrice: 495,
                numberOfSelling: 298,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '250 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "250 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/1.webp',
                    '/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/2.webp',
                    '/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/3.webp',
                    '/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/4.webp',
                    '/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/5.webp',
                ],
                highLights: ['Type: Cookies', 'Base Flavor: Cashew', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Haldiram's",
                    'Model Name': "Kaju Butter Cookies",
                    // quantity
                    'Type': 'Cashew',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'Yes',
                    'Ingredients': "NA",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '4 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled',
                itemDescription: "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                sellingPrice: 98,
                markedPrice: 170,
                numberOfSelling: 598,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '300 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "300 g", selected: true},
                            {value: "600 g", selected: false},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                            {value: "2", selected: false},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp',
                ],
                highLights: ['Type: Cream Filled', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Sunfeast",
                    'Model Name': "Dark Fantasy Choco Fills",
                    // quantity
                    'Quantity': '300 g',
                    'Type': 'Cream Filled',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled',
                itemDescription: "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                sellingPrice: 98,
                markedPrice: 170,
                numberOfSelling: 598,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '300 g', pack_of: '2'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "300 g", selected: true},
                            {value: "600 g", selected: false},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: false},
                            {value: "2", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp',
                ],
                highLights: ['Type: Cream Filled', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Sunfeast",
                    'Model Name': "Dark Fantasy Choco Fills",
                    // quantity
                    'Quantity': '300 g',
                    'Type': 'Cream Filled',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled',
                itemDescription: "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                sellingPrice: 98,
                markedPrice: 170,
                numberOfSelling: 598,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '600 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "300 g", selected: true},
                            {value: "600 g", selected: false},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                            {value: "2", selected: false},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp',
                ],
                highLights: ['Type: Cream Filled', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Sunfeast",
                    'Model Name': "Dark Fantasy Choco Fills",
                    // quantity
                    'Quantity': '300 g',
                    'Type': 'Cream Filled',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled',
                itemDescription: "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                sellingPrice: 98,
                markedPrice: 170,
                numberOfSelling: 598,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '600 g', pack_of: '2'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "300 g", selected: false},
                            {value: "600 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                            {value: "2", selected: false},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp',
                    '/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp',
                ],
                highLights: ['Type: Cream Filled', 'Base Flavor: Chocolate', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "Sunfeast",
                    'Model Name': "Dark Fantasy Choco Fills",
                    // quantity
                    'Quantity': '300 g',
                    'Type': 'Cream Filled',
                    'Base Flavors': 'Chocolate',
                    'Organic': 'No',
                    'Ingredients': "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '9 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti',
                itemDescription: "BRITANNIA Marie Gold Biscuits 1 kg Biscotti",
                sellingPrice: 280,
                markedPrice: 325,
                numberOfSelling: 508,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '1 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "1 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/1.webp',
                    '/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/2.webp',
                    '/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/3.webp',
                    '/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/4.webp',
                    '/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/5.webp',
                ],
                highLights: ['Type: Biscotti', 'Base Flavor: Plain', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "BRITANNIA",
                    'Model Name': "Marie Gold Biscuits 1 kg",
                    // quantity
                    'Type': 'Biscotti',
                    'Base Flavors': 'Plain',
                    'Organic': 'No',
                    'Ingredients': "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    'Food Preference': 'Vegetarian',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '6 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies',
                itemDescription: "DiaBliss Diabetic Friendly Millet Cookies with Moringa Leaf 150g Cookies",
                sellingPrice: 94,
                markedPrice: 99,
                numberOfSelling: 108,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '150 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "150 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/1.webp',
                    '/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/2.webp',
                    '/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/3.webp',
                    '/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/4.webp',
                    '/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/5.webp',
                ],
                highLights: ['Type: Cookies', 'Base Flavor: Herb', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "DiaBliss",
                    'Model Name': "Diabetic Friendly Millet Cookies with Moringa Leaf 150g",
                    // quantity
                    'Type': 'Cookies',
                    'Base Flavors': 'Herb',
                    'Organic': 'No',
                    'Ingredients': "Moringa Leaf",
                    'Food Preference': 'Vegetarian',
                    'Dietary Preference': 'Suger Free',
                    'Container Type': 'Box',
                    'Maximum Shelf Life': '5 Months',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit ',
                itemDescription: "BRITANNIA Nutri Choice Sugar Free Cream Cracker Biscuit ",
                sellingPrice: 247,
                markedPrice: 299,
                numberOfSelling: 8,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '350 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "350 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/1.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/2.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/3.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/4.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/5.webp',
                ],
                highLights: ['Type: Cream Cracker Biscuit', 'Base Flavor: Butter', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "BRITANNIA",
                    'Model Name': "Nutri Choice Sugar Free",
                    // quantity
                    'Type': 'Cream Cracker Biscuit',
                    'Base Flavors': 'Butter',
                    'Organic': 'No',
                    'Ingredients': "Refined Wheat Flour (Maida), Sugar, Edible Vegetable Oil (Palm), Butter (2%), Invert Syrup, Milk Solids, Raising Agents 503(I), 500I)], Iodised Salt And Emulsifiers (322, 471, 472E]. Contains Added Flavours [Natural Nature Identical And Artificial(Butter, Vanilla & Milk) Flavouring Substances]",
                    'Food Preference': 'Vegetarian',
                    'Dietary Preference': 'Suger Free',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '9 Months',
                    'Shape': 'Round',
                    'Nutrient Content': 'Refined Wheat Flour (Maida), Sugar, Edible Vegetable Oil (Palm), Butter (2%), Invert Syrup, Milk Solids, Raising Agents 503(I), 500I)], Iodised Salt And Emulsifiers (322, 471, 472E]. Contains Added Flavours [Natural Nature Identical And Artificial(Butter, butter)',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Biscuit',
                itemId: 'grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2',
                itemDescription: "BRITANNIA Nutri Choice Sugar Free Cream Cracker Biscuit",
                sellingPrice: 81,
                markedPrice: 90,
                numberOfSelling: 8,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '150 g', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "150 g", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/1.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/2.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/3.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/4.webp',
                    '/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/5.webp',
                ],
                highLights: ['Type: Salted Biscuit', 'Base Flavor: Herb', 'Vegetarian'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    //pack of
                    'Brand': "BRITANNIA",
                    'Model Name': "50-50 Maska Chaska",
                    // quantity
                    'Type': 'Salted Biscuit',
                    'Base Flavors': 'Herb',
                    'Organic': 'No',
                    'Ingredients': "NA",
                    'Food Preference': 'Vegetarian',
                    'Dietary Preference': 'Suger Free',
                    'Container Type': 'Pouch',
                    'Maximum Shelf Life': '8 Months',
                    'Shape': 'Round',
                    'Nutrient Content': 'NA',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_NaturesmithArborioRiceArborioRiceRaw',
                itemDescription: "Naturesmith Arborio Rice Arborio Rice (Raw)",
                sellingPrice: 225,
                markedPrice: 330,
                numberOfSelling: 28,
                isAvailable: true,
                isFavorite: true,
                activeProduct: { quantity: '0.25 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "0.25 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/1.webp',
                    '/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/2.webp',
                    '/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/3.webp',
                    '/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/4.webp',
                ],
                highLights: ['Maximum Shelf Life: 12 months'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "Naturesmith",
                    'Model Name': "Arborio Rice",
                    'Rice Type': 'Arborio Rice',
                    'Type': 'Arborio Rice',
                    'Texture': 'Raw',
                    'Color': 'White',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '12 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Vacuum Pack',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw',
                itemDescription: "INDIA GATE Premium Basmati Rice (Long Grain, Raw)",
                sellingPrice: 520,
                markedPrice: 665,
                numberOfSelling: 238,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '5 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "5 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/1.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/2.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/3.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/4.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/5.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/6.webp',
                    '/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/7.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "INDIA GATE",
                    'Model Name': "Premium",
                    'Rice Type': 'Basmati Rice',
                    'Texture': 'Raw',
                    'Color': 'White',
                    'Grain Size': 'Long Grain',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '124 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Bag',
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw',
                itemDescription: "DAIVIK ORGANIC Karuppu Kavuni Rice-Black Rice, 500 g Black Black Rice (Full Grain, Raw) ",
                sellingPrice: 178,
                markedPrice: 210,
                numberOfSelling: 218,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '0.5 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "0.5 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/1.webp',
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/2.webp',
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/3.webp',
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/4.webp',
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/5.webp',
                    '/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/6.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "DAIVIK ORGANIC",
                    'Model Name': "Karuppu Kavuni Rice-Black Rice, 500 g",
                    'Rice Type': 'Black Rice',
                    'Texture': 'Raw',
                    'Color': 'Black',
                    'Grain Size': 'Full Grain',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '124 Months',
                    'Nutrient Content': 'Pouch',
                    'Container Type': 'Bag',
                    'Country of Origin': 'India'
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_IndiaGateWeightWatchersSpecialBrownRice',
                itemDescription: "INDIA GATE Weight Watchers Special Brown Rice",
                sellingPrice: 126,
                markedPrice: 152,
                numberOfSelling: 265,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '1 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "1 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/1.webp',
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/2.webp',
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/3.webp',
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/4.webp',
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/5.webp',
                    '/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/6.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "INDIA GATE",
                    'Model Name': "Weight Watchers Special",
                    'Rice Type': 'Plain Rice',
                    'Texture': 'Raw',
                    'Color': 'Brown',
                    'Grain Size': 'Full Grain',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '124 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Plastic Jar',
                    'Country of Origin': 'India'
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain',
                itemDescription: "Thanjai Organics Thooyamalli Rice ( Jasmine Rice ) 1.5 Kg Jasmine Rice (Medium Grain)  (1.5 kg)",
                sellingPrice: 126,
                markedPrice: 152,
                numberOfSelling: 265,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '1.5 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "1.5 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/1.webp',
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/2.webp',
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/3.webp',
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/4.webp',
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/5.webp',
                    '/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/6.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "Thanjai Organics",
                    'Model Name': "Thooyamalli Rice ( Jasmine Rice ) ",
                    'Rice Type': 'Jasmine Rice',
                    'Color': 'White',
                    'Grain Size': 'Medium Grain',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '12 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Pouch',
                    'Country of Origin': 'India'
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled',
                itemDescription: "Healthy Rice Villa DIVINE Silky Chap Rice 10Kg Ratna Rice (Medium Grain, Parboiled)",
                sellingPrice: 435,
                markedPrice: 595,
                numberOfSelling: 365,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '10 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "10 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/1.webp',
                    '/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/2.webp',
                    '/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/3.webp',
                    '/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/4.webp',
                    '/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/5.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "Healthy Rice Villa",
                    'Model Name': "DIVINE Silky Chap Parboiled Rice",
                    'Rice Type': 'Ratna Rice',
                    'Color': 'White',
                    'Grain Size': 'Medium Grain',
                    'Organic': 'Organic',
                    'Maximum Shelf Life': '24 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Bag',
                    'Country of Origin': 'West Bengal'
                },

            },
            {
                category: 'Grocery',
                subCategory: 'Rice',
                itemId: 'grocery_rice_JeeraAmbemoharGobindobhogRiceRaw',
                itemDescription: "Jeera / Ambemohar / Gobindobhog Rice (Raw) ",
                sellingPrice: 161,
                markedPrice: 170,
                numberOfSelling: 325,
                isAvailable: true,
                isFavorite: false,
                activeProduct: { quantity: '1 kg', pack_of: '1'},
                filterAttributesList: [
                    {
                        name: 'quantity',
                        items: [
                            {value: "1 kg", selected: true},
                        ]
                    },
                    {
                        name: 'pack_of',
                        items: [
                            {value: "1", selected: true},
                        ]
                    }
                ],
                imgUrls: [
                    '/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/1.webp',
                    '/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/2.webp',
                    '/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/3.webp',
                ],
                highLights: ['Expiry Date 19 Nov 2024', 'Manufactured date 01 Dec 2022'],
                ratingsAndReviews: [
                    {
                        name: 'Sanjay',
                        rating: 5,
                        date: 1688322600000,
                        review: 'So yammi.. 😋😋',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Dileep',
                        rating: 4,
                        date: 1689877800000,
                        review: 'Very good product 🙂, i bought it with 130 supercoin Good deal👍',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'manoj',
                        rating: 4,
                        date: 1690050600000,
                        review: '',
                        file: ''
                    },
                    {
                        name: 'Mohd Hushain',
                        rating: 3,
                        date: 1690569000000,
                        review: 'Good',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Pavan kumar',
                        rating: 3,
                        date: 1612117800000,
                        review: 'Pasta is good enough',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Ajay Raw',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'Sonal Pandey',
                        rating: 4,
                        date: 1614277800000,
                        review: '',
                        file: 'Grocery_pasta_DurumWheatSemolina_userId'
                    },
                    {
                        name: 'piyush Pandey',
                        rating: 3,
                        date: 1614277800000,
                        review: '',
                        file: ''
                    },
                ],
                specifications: {
                    'Brand': "Unbranded",
                    'Model Name': "Jeera / Ambemohar /",
                    'Rice Type': 'Gobindobhog Rice',
                    'Color': 'White',
                    'Grain Size': 'Medium Grain',
                    'Organic': 'Organic',
                    'Texture': 'Raw',
                    'Maximum Shelf Life': '6 Months',
                    'Nutrient Content': 'NA',
                    'Container Type': 'Pouch',
                    'Country of Origin': 'India'
                },

            },
        ];
    }

    getRatingsAndReviewsDetails(ratingsAndReviews: Array<any>) {
        let ratingsAndReviewsDetails: any  = {};
        let totalRating: number = 0;
        let totalReview: number = 0;
        let totalFive: number = 0;
        let totalFour: number = 0;
        let totalThree: number = 0;
        let totalTwo: number = 0;
        let totalOne: number = 0;
        for (let i = 0; i < ratingsAndReviews.length; i++) {
          totalRating += Number(ratingsAndReviews[i].rating);
          if(ratingsAndReviews[i].review.length) totalReview += 1;
          if(ratingsAndReviews[i].rating === 5) totalFour += 1;
          if(ratingsAndReviews[i].rating === 4) totalFive += 1;
          if(ratingsAndReviews[i].rating === 3) totalThree += 1;
          if(ratingsAndReviews[i].rating === 2) totalTwo += 1;
          if(ratingsAndReviews[i].rating === 1) totalOne += 1;
        }
        ratingsAndReviewsDetails.overAllRating = Number(Number(totalRating) / Number(ratingsAndReviews?.length));
        ratingsAndReviewsDetails.numberOfRating = Number(ratingsAndReviews.length);
        ratingsAndReviewsDetails.numberOfReview = Number(totalReview);
        ratingsAndReviewsDetails.totalFive = Number(totalFive);
        ratingsAndReviewsDetails.totalFour = Number(totalFour);
        ratingsAndReviewsDetails.totalThree = Number(totalThree);
        ratingsAndReviewsDetails.totalTwo = Number(totalTwo);
        ratingsAndReviewsDetails.totalOne = Number(totalOne);
        return ratingsAndReviewsDetails

    }

    calculateDiscountPercent(markedPrice: number, sellingPrice: number) {
        return Number(((Number(markedPrice) - Number(sellingPrice)) / Number(markedPrice)) * 100);
    }

    get items() {
        let items: any = [];
        this.getDataFromDataBase().forEach((item: any) => {
            item.discountPercent = this.calculateDiscountPercent(item.markedPrice, item.sellingPrice);
            item.numberOfItem = Number(1);
            item.ratingsAndReviewsDetails = this.getRatingsAndReviewsDetails(item.ratingsAndReviews);
            items.push(item)
        })
        return items
    }

    sortItemsBySelling(items: Array<any>) {
        return items.sort((a, b): any => Number(b.numberOfSelling) - Number(a.numberOfSelling));
    }

    removeDuplicate(arr: Array<any>) {
        let uniqueArr:Array<any> = [];
        for(let i=0; i<arr.length; i++) {
            let found: boolean = false;
            for(let j=0; j< uniqueArr.length; j++) {
                if(JSON.stringify(arr[i]) == JSON.stringify(uniqueArr[j])) {
                    found = true;
                    break;
                }
            }
            if(!found) {
                uniqueArr.push(arr[i])
            }
        }
        return uniqueArr
    }

    getSubcategoriesByCategory(category: string) {
        let subCategories: Array<string> = this.items.filter((item: any) => item).map((item: any) => item.subCategory);
        if(category?.length) subCategories = this.items.filter((item: any) => (item.category.toLowerCase()).includes(category.toLowerCase())).map((item: any) => item.subCategory);
        return this.removeDuplicate(subCategories);
    }

    getAllBrandByCategory(category: string) {
        let allBrands: Array<string> = this.items.filter((item: any) => item).map((item: any) => item.specifications.Brand);
        if(category?.length) allBrands = this.items.filter((item: any) => (item.category.toLowerCase()).includes(category.toLowerCase())).map((item: any) => item.specifications.Brand);
        return this.removeDuplicate(allBrands);
    }

    getItemsBySearchStr(items: Array<any>, searchStr: string) {
        if(searchStr?.length) return items.filter((item: any) => (item.itemDescription.toLowerCase()).includes(searchStr.toLowerCase()));
        return items;
    }

    getItemsByCategories(items: Array<any>, category: string) {
        if(!category?.length) return items;
        return items.filter((item: any) => (item?.category?.toLowerCase()).includes(category?.toLowerCase()));
    }

    getItemsBySubCategories(items: Array<any>, subCategories: Array<string>) {
        if(!subCategories.length) return items;
        return items.filter((item: any) => subCategories.includes(item?.subCategory));
    }

    getItemsByBrands(items: Array<any>, brands: Array<any>) {
        if(!brands.length) return items;
        return items.filter((item: any) => brands.includes(item.specifications.Brand));
    }

    getItemsByRatings(items: Array<any>, rating: number) {
        if(rating == null || rating == undefined || rating < 0 || rating > 5) return items;
        return items.filter((item: any) => (Number(item.ratingsAndReviewsDetails.overAllRating) >= Number(rating)));
    }

    getItemsByFilters(filters: any) {
        let pageDetails: any = {};
        let items = this.items;
        items = this.getItemsBySearchStr(items, filters.searchStr);
        items = this.getItemsByCategories(items, filters.category);
        items = this.getItemsBySubCategories(items, filters.subCategories);
        items = this.getItemsByBrands(items, filters.brands);
        items = this.getItemsByRatings(items, Math.min(...filters.customerRatings));
        items = this.sortItemsBySelling(this.removeDuplicate(items));
        pageDetails.totalItems = items.length;
        pageDetails.items = items.slice((filters?.currentPage -1) * filters?.itemsPerPage , filters.itemsPerPage + (filters?.currentPage -1) * filters?.itemsPerPage);
        return pageDetails;
    }

    addItemsToCart(item: any) {
        var found = false;
        for(var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].itemId === item.itemId) {
                found = true;
                break;
            }
        }
        if(!found) {
            this.cartItems.push(item);
            if(this.authService.getIsAuthenticated()) {
                this.authService.getUserDetail().cartItems = this.cartItems;
            }
        }
        return found;
    }

    removeItemsToCart(item: any) {
        for(var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].itemId === item.itemId) {
                this.cartItems.splice(i, 1);
                if(this.authService.getIsAuthenticated()) {
                    this.authService.getUserDetail().cartItems = this.cartItems;
                }
                break;
            }
        }

    }

    getCartItems() {
        return this.cartItems;
    }

    getUserByToken(token: any) {
        let res: any = {
            success: false,
            status: 400,
            message: 'Login failed! Try again.',
            data: []
        };
        let users: Array<any> = this.users;
        for (let i = 0; i < users.length; i++) {
            if(users[i].userId === token) {
                res.success = true;
                res.status = 200;
                res.message = 'Login Successful';
                res.data = users[i];
                res.data.cartItems = this.cartItems;
                break;
            }
        }
        return res;
    }

    login(userDetails: any) {
        let res: any = {
            success: false,
            status: 400,
            message: 'Login failed! Try again.',
            data: []
        };
        let users: Array<any> = this.users;
        for (let i = 0; i < users.length; i++) {
            if(users[i].email === userDetails?.email && users[i].password === userDetails?.password) {
                res.success = true;
                res.status = 200;
                res.message = 'Login Successful';
                res.data = users[i];
                res.data.cartItems = this.cartItems;
                break;
            }
        }
        return res;
    }



    getDataFromDataBaseCopy() {
        return
        [
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                "sellingPrice": 98,
                "markedPrice": 170,
                "numberOfSelling": 598,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "300 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "300 g",
                                "selected": true
                            },
                            {
                                "value": "600 g",
                                "selected": false
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            },
                            {
                                "value": "2",
                                "selected": false
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp"
                ],
                "highLights": [
                    "Type: Cream Filled",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Sunfeast",
                    "Model Name": "Dark Fantasy Choco Fills",
                    "Quantity": "300 g",
                    "Type": "Cream Filled",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 42.35294117647059,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                "sellingPrice": 98,
                "markedPrice": 170,
                "numberOfSelling": 598,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "300 g",
                    "pack_of": "2"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "300 g",
                                "selected": true
                            },
                            {
                                "value": "600 g",
                                "selected": false
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": false
                            },
                            {
                                "value": "2",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp"
                ],
                "highLights": [
                    "Type: Cream Filled",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Sunfeast",
                    "Model Name": "Dark Fantasy Choco Fills",
                    "Quantity": "300 g",
                    "Type": "Cream Filled",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 42.35294117647059,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                "sellingPrice": 98,
                "markedPrice": 170,
                "numberOfSelling": 598,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "600 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "300 g",
                                "selected": false
                            },
                            {
                                "value": "600 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            },
                            {
                                "value": "2",
                                "selected": false
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp"
                ],
                "highLights": [
                    "Type: Cream Filled",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Sunfeast",
                    "Model Name": "Dark Fantasy Choco Fills",
                    "Quantity": "300 g",
                    "Type": "Cream Filled",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 42.35294117647059,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Sunfeast Dark Fantasy Choco Fills Cream Filled",
                "sellingPrice": 98,
                "markedPrice": 170,
                "numberOfSelling": 598,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "600 g",
                    "pack_of": "2"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "300 g",
                                "selected": false
                            },
                            {
                                "value": "600 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": false
                            },
                            {
                                "value": "2",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/1.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/2.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/3.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/4.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/5.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/6.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/7.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyChocoFillsCreamFilled/8.webp"
                ],
                "highLights": [
                    "Type: Cream Filled",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Sunfeast",
                    "Model Name": "Dark Fantasy Choco Fills",
                    "Quantity": "300 g",
                    "Type": "Cream Filled",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 42.35294117647059,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "BRITANNIA Marie Gold Biscuits 1 kg Biscotti",
                "sellingPrice": 280,
                "markedPrice": 325,
                "numberOfSelling": 508,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "1 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "1 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/1.webp",
                    "/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/2.webp",
                    "/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/3.webp",
                    "/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/4.webp",
                    "/assets/images/grocery_biscuit_BritanniaMarieGoldBiscuits1kgBiscotti/5.webp"
                ],
                "highLights": [
                    "Type: Biscotti",
                    "Base Flavor: Plain",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "BRITANNIA",
                    "Model Name": "Marie Gold Biscuits 1 kg",
                    "Type": "Biscotti",
                    "Base Flavors": "Plain",
                    "Organic": "No",
                    "Ingredients": "Choco Cream, Sugar, Refined Palm Oil, Cocoa Solids, Wheat Flour, Hydrogenated Vegetables Oils, Invert Syrup, Liquid Glucose, Raising Agents, Butter, Milk Solids, Edible Common Salt and Emulsifiers",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "6 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 13.846153846153847,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "Healthy Rice Villa DIVINE Silky Chap Rice 10Kg Ratna Rice (Medium Grain, Parboiled)",
                "sellingPrice": 435,
                "markedPrice": 595,
                "numberOfSelling": 365,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "10 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "10 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/1.webp",
                    "/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/2.webp",
                    "/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/3.webp",
                    "/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/4.webp",
                    "/assets/images/grocery_rice_HealthyRiceVillaDIVINESilkyChapRice10KgRatnaRiceMediumGrainParboiled/5.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Healthy Rice Villa",
                    "Model Name": "DIVINE Silky Chap Parboiled Rice",
                    "Rice Type": "Ratna Rice",
                    "Color": "White",
                    "Grain Size": "Medium Grain",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "24 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Bag",
                    "Country of Origin": "West Bengal"
                },
                "discountPercent": 26.89075630252101,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "McVitie's Dark Cookie Cream Biscuit with Goodness of Cocoa and Chocolate flavoured cream, Cream Cracker Biscuit",
                "sellingPrice": 121,
                "markedPrice": 190,
                "numberOfSelling": 328,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "485 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "485 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/1.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/2.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/3.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/4.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/5.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/6.webp",
                    "/assets/images/grocery_biscuit_McVitieDarkCookieCreamBiscuitWithGoodnessOfCocoaAndChocolateFlavouredCreamCrackerBiscuit/7.webp"
                ],
                "highLights": [
                    "Type: Cream Cracker Biscuit",
                    "Base Flavor: Plain",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "McVitie's",
                    "Model Name": "Dark Cookie Cream Biscuit with Goodness of Cocoa and Chocolate flavoured cream,",
                    "Type": "Cream Cracker Biscuit",
                    "Base Flavors": "Plain",
                    "Organic": "No",
                    "Ingredients": "NA",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 36.31578947368421,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "Jeera / Ambemohar / Gobindobhog Rice (Raw) ",
                "sellingPrice": 161,
                "markedPrice": 170,
                "numberOfSelling": 325,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "1 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "1 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/1.webp",
                    "/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/2.webp",
                    "/assets/images/grocery_rice_JeeraAmbemoharGobindobhogRiceRaw/3.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Unbranded",
                    "Model Name": "Jeera / Ambemohar /",
                    "Rice Type": "Gobindobhog Rice",
                    "Color": "White",
                    "Grain Size": "Medium Grain",
                    "Organic": "Organic",
                    "Texture": "Raw",
                    "Maximum Shelf Life": "6 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Pouch",
                    "Country of Origin": "India"
                },
                "discountPercent": 5.294117647058823,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "ORION Choco Pie Cream Filled",
                "sellingPrice": 245,
                "markedPrice": 350,
                "numberOfSelling": 300,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "560 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "560 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/1.webp",
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/2.webp",
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/3.webp",
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/4.webp",
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/5.webp",
                    "/assets/images/grocery_biscuit_OrionChocoPieCreamFilled/6.webp"
                ],
                "highLights": [
                    "Type: Cream Filled",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "ORION",
                    "Model Name": "Choco Pie",
                    "Type": "Cream Filled",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Whole Wheat Flour, Edible Vegetable Oil, Sugar, Malt Extract, Honey, Milk Solids, Edible Common Salt, Raising Agents, Antioxidants, Dough Conditioner and Enzymes.",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "12 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 30,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Haldiram's Kaju Butter Cookies Cookies",
                "sellingPrice": 480,
                "markedPrice": 495,
                "numberOfSelling": 298,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "250 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "250 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/1.webp",
                    "/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/2.webp",
                    "/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/3.webp",
                    "/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/4.webp",
                    "/assets/images/grocery_biscuit_HaldiramKajuButterCookiesCookies/5.webp"
                ],
                "highLights": [
                    "Type: Cookies",
                    "Base Flavor: Cashew",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Haldiram's",
                    "Model Name": "Kaju Butter Cookies",
                    "Type": "Cashew",
                    "Base Flavors": "Chocolate",
                    "Organic": "Yes",
                    "Ingredients": "NA",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "4 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 3.0303030303030303,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "INDIA GATE Weight Watchers Special Brown Rice",
                "sellingPrice": 126,
                "markedPrice": 152,
                "numberOfSelling": 265,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "1 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "1 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/1.webp",
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/2.webp",
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/3.webp",
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/4.webp",
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/5.webp",
                    "/assets/images/grocery_rice_IndiaGateWeightWatchersSpecialBrownRice/6.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "INDIA GATE",
                    "Model Name": "Weight Watchers Special",
                    "Rice Type": "Plain Rice",
                    "Texture": "Raw",
                    "Color": "Brown",
                    "Grain Size": "Full Grain",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "124 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Plastic Jar",
                    "Country of Origin": "India"
                },
                "discountPercent": 17.105263157894736,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "Thanjai Organics Thooyamalli Rice ( Jasmine Rice ) 1.5 Kg Jasmine Rice (Medium Grain)  (1.5 kg)",
                "sellingPrice": 126,
                "markedPrice": 152,
                "numberOfSelling": 265,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "1.5 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "1.5 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/1.webp",
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/2.webp",
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/3.webp",
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/4.webp",
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/5.webp",
                    "/assets/images/grocery_rice_ThanjaiOrganicsThooyamalliRiceJasmineRiceJasmineRiceMediumGrain/6.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Thanjai Organics",
                    "Model Name": "Thooyamalli Rice ( Jasmine Rice ) ",
                    "Rice Type": "Jasmine Rice",
                    "Color": "White",
                    "Grain Size": "Medium Grain",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "12 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Pouch",
                    "Country of Origin": "India"
                },
                "discountPercent": 17.105263157894736,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "INDIA GATE Premium Basmati Rice (Long Grain, Raw)",
                "sellingPrice": 520,
                "markedPrice": 665,
                "numberOfSelling": 238,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "5 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "5 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/1.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/2.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/3.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/4.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/5.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/6.webp",
                    "/assets/images/grocery_rice_IndiaGatePremiumBasmatiRiceLongGrainRaw/7.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "INDIA GATE",
                    "Model Name": "Premium",
                    "Rice Type": "Basmati Rice",
                    "Texture": "Raw",
                    "Color": "White",
                    "Grain Size": "Long Grain",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "124 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Bag"
                },
                "discountPercent": 21.804511278195488,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "UNIBIC Choco Kiss Cookies",
                "sellingPrice": 399,
                "markedPrice": 480,
                "numberOfSelling": 228,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "250 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "250 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/1.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/2.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/3.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/4.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/5.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/6.webp",
                    "/assets/images/grocery_biscuit_UnibicChocoKissCookies/7.webp"
                ],
                "highLights": [
                    "Type: Cookies",
                    "Base Flavor: Chocolate",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "UNIBIC",
                    "Model Name": "Choco Kiss",
                    "Type": "Cookies",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "NA",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "6 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 16.875,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "DAIVIK ORGANIC Karuppu Kavuni Rice-Black Rice, 500 g Black Black Rice (Full Grain, Raw) ",
                "sellingPrice": 178,
                "markedPrice": 210,
                "numberOfSelling": 218,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "0.5 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "0.5 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/1.webp",
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/2.webp",
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/3.webp",
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/4.webp",
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/5.webp",
                    "/assets/images/grocery_rice_DaivikOrganicKaruppuKavuniRiceBlackRice500GBlackBlackRiceFullGrainRaw/6.webp"
                ],
                "highLights": [
                    "Expiry Date 19 Nov 2024",
                    "Manufactured date 01 Dec 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "DAIVIK ORGANIC",
                    "Model Name": "Karuppu Kavuni Rice-Black Rice, 500 g",
                    "Rice Type": "Black Rice",
                    "Texture": "Raw",
                    "Color": "Black",
                    "Grain Size": "Full Grain",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "124 Months",
                    "Nutrient Content": "Pouch",
                    "Container Type": "Bag",
                    "Country of Origin": "India"
                },
                "discountPercent": 15.238095238095239,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "PARLE G Original Gluco Biscuits Plain (800 g)",
                "sellingPrice": 78,
                "markedPrice": 90,
                "numberOfSelling": 177,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "800 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "800 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/1.webp",
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/2.webp",
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/3.webp",
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/4.webp",
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/5.webp",
                    "/assets/images/grocery_biscuit_ParleGOriginalGlucoBiscuitsPlain/6.webp"
                ],
                "highLights": [
                    "Type: Plain",
                    "Quantity: 800 g",
                    "Shelf Life: 6 Months",
                    "Base Flavor: Plain",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Pack of": "1",
                    "Brand": "PARLE",
                    "Model Name": "G Original Gluco Biscuits",
                    "Quantity": "800 g",
                    "Type": "Plain",
                    "Organic": "No",
                    "Ingredients": "Wheat Flour, Sugar, Edible Veg Oil (Palm Oil), Invert Sugar Syrup, Edible Common Salt, Milk Solids, Emulsifier",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "5 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 13.333333333333334,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "DiaBliss Diabetic Friendly Millet Cookies with Moringa Leaf 150g Cookies",
                "sellingPrice": 94,
                "markedPrice": 99,
                "numberOfSelling": 108,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "150 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "150 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/1.webp",
                    "/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/2.webp",
                    "/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/3.webp",
                    "/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/4.webp",
                    "/assets/images/grocery_biscuit_DiaBlissDiabeticFriendlyMilletCookiesWithMoringaLeaf150gCookies/5.webp"
                ],
                "highLights": [
                    "Type: Cookies",
                    "Base Flavor: Herb",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "DiaBliss",
                    "Model Name": "Diabetic Friendly Millet Cookies with Moringa Leaf 150g",
                    "Type": "Cookies",
                    "Base Flavors": "Herb",
                    "Organic": "No",
                    "Ingredients": "Moringa Leaf",
                    "Food Preference": "Vegetarian",
                    "Dietary Preference": "Suger Free",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "5 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 5.05050505050505,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "PATANJALI Marie Biscuit",
                "sellingPrice": 25,
                "markedPrice": 30,
                "numberOfSelling": 62,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "250 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "250 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/1.webp",
                    "/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/2.webp",
                    "/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/3.webp",
                    "/assets/images/grocery_biscuit_PatanjaliMarieBiscuit/4.webp"
                ],
                "highLights": [
                    "Type: Marie Biscuit",
                    "Base Flavor: Milk",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "PATANJALI",
                    "Model Name": "NA",
                    "Type": "Marie Biscuit",
                    "Base Flavors": "Milk",
                    "Organic": "No",
                    "Ingredients": "Whole Wheat Flour, Edible Vegetable Oil, Sugar, Malt Extract, Honey, Milk Solids, Edible Common Salt, Raising Agents, Antioxidants, Dough Conditioner and Enzymes.",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "6 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 16.666666666666664,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Priyagold Butter Delite Namkeen Biscuits Sweet & Salty",
                "sellingPrice": 52,
                "markedPrice": 60,
                "numberOfSelling": 29,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "350 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "350 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/1.webp",
                    "/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/2.webp",
                    "/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/3.jpeg",
                    "/assets/images/grocery_biscuit_PriyagoldButterDeliteNamkeenBiscuitsSweetSalty/4.jpeg"
                ],
                "highLights": [
                    "Type: Sweet & Salty",
                    "Base Flavor: Butter, Cheese",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Priyagold",
                    "Model Name": "Butter Delite Namkeen Biscuits",
                    "Type": "Sweet & Salty",
                    "Base Flavors": "Butter, Cheese",
                    "Organic": "No",
                    "Ingredients": "Wheat Flour, Edible Vegetable Oils, Sugar, Liquid Glucose, Iodized Salt, Butter, Malt, Processed Cheese, Permitted Emulsifiers, Leavening Agent, Acid Salt, Dough Conditioner, Dough Improver, Contains Added Artificial Flavour (Cheese).",
                    "Food Preference": "Vegetarian",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "9 Months",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 13.333333333333334,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Rice",
                "itemDescription": "Naturesmith Arborio Rice Arborio Rice (Raw)",
                "sellingPrice": 225,
                "markedPrice": 330,
                "numberOfSelling": 28,
                "isAvailable": true,
                "isFavorite": true,
                "activeProduct": {
                    "quantity": "0.25 kg",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "0.25 kg",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/1.webp",
                    "/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/2.webp",
                    "/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/3.webp",
                    "/assets/images/grocery_rice_NaturesmithArborioRiceArborioRiceRaw/4.webp"
                ],
                "highLights": [
                    "Maximum Shelf Life: 12 months"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Naturesmith",
                    "Model Name": "Arborio Rice",
                    "Rice Type": "Arborio Rice",
                    "Type": "Arborio Rice",
                    "Texture": "Raw",
                    "Color": "White",
                    "Organic": "Organic",
                    "Maximum Shelf Life": "12 Months",
                    "Nutrient Content": "NA",
                    "Container Type": "Vacuum Pack"
                },
                "discountPercent": 31.818181818181817,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "Sunfeast Dark Fantasy Yumfills Cookie Cake",
                "sellingPrice": 173,
                "markedPrice": 190,
                "numberOfSelling": 27,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "253 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "253 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/1.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/2.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/3.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/4.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/5.webp",
                    "/assets/images/grocery_biscuit_SunfeastDarkFantasyYumfillsCookieCake/6.webp"
                ],
                "highLights": [
                    "Type: Cookie Cake",
                    "Base Flavor: Chocolate",
                    "Non-vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "Sunfeast",
                    "Model Name": "Dark Fantasy Yumfills",
                    "Type": "Cookie Cake",
                    "Base Flavors": "Chocolate",
                    "Organic": "No",
                    "Ingredients": "Sugar, Choco Covering, Contains Added Flavours, Wheat Flour, Liquid Glucose, Invert Syrup, Refined Sunflower Oil, Egg Powder, Edible Starch, Humectants, Milk Solids, Emulsifiers, Edible Common Salt, Stabilizers, Raising Agent, Preservative, Hydrolysed Vegetable Protein And Acidity Regulator.",
                    "Food Preference": "Non-vegetarian",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "270 Days",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 8.947368421052632,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Pasta",
                "itemDescription": "Flipkart Supermart Durum Wheat Semolina Fusilli Pasta",
                "sellingPrice": 48,
                "markedPrice": 120,
                "numberOfSelling": 11,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "400 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "400 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/1.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/2.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/3.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/4.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/5.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/6.webp",
                    "/assets/images/grocery_pasta_FlipkartSupermartDurumWheatSemolinaFusilliPasta/7.webp"
                ],
                "highLights": [
                    "Expiry Date 29 May 2025",
                    "Manufactured date 10 Jun 2023"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Pack of": "1",
                    "Brand": "Flipkart Supermart",
                    "Model Name": "urum Wheat Semolina",
                    "Type": "Fusilli",
                    "Quantity": "400 g",
                    "Organic": "No",
                    "Gourmet": "No",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "24 Months",
                    "Food Preference": "Vegetarian",
                    "Ingredients": "NA",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 60,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Pasta",
                "itemDescription": "CHEF'S BASKET Durum Wheat Elbow Macaroni Pasta",
                "sellingPrice": 71,
                "markedPrice": 175,
                "numberOfSelling": 11,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "500 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "500 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/1.webp",
                    "/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/2.webp",
                    "/assets/images/grocery_pasta_ChefBasketDurumWheatElbowMacaroniPasta/3.webp"
                ],
                "highLights": [
                    "Expiry Date 21 Nov 2024",
                    "Manufactured date 01 Jun 2023"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Pack of": "1",
                    "Brand": "CHEF'S BASKET",
                    "Model Name": "Durum Wheat",
                    "Type": "Elbow Macaroni",
                    "Quantity": "500 g",
                    "Organic": "No",
                    "Gourmet": "No",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "18 Months",
                    "Food Preference": "Vegetarian",
                    "Ingredients": "NA",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 59.42857142857143,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Pasta",
                "itemDescription": "WeiKFiELD Fusilli Pasta  (400 g)",
                "sellingPrice": 73,
                "markedPrice": 150,
                "numberOfSelling": 11,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "400 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "400 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/1.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/2.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/3.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/4.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/5.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/6.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/7.webp",
                    "/assets/images/grocery_pasta_WeikfieldFusilliPasta/8.webp"
                ],
                "highLights": [
                    "Expiry Date 20 Oct 2024",
                    "Manufactured date 01 Nov 2022"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Pack of": "1",
                    "Brand": "WeiKFiELD",
                    "Type": "Fusilli",
                    "Quantity": "400 g",
                    "Organic": "No",
                    "Gourmet": "No",
                    "Container Type": "Box",
                    "Maximum Shelf Life": "24 Months",
                    "Food Preference": "Vegetarian",
                    "Ingredients": "NA",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 51.33333333333333,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "BRITANNIA Nutri Choice Sugar Free Cream Cracker Biscuit ",
                "sellingPrice": 247,
                "markedPrice": 299,
                "numberOfSelling": 8,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "350 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "350 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/1.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/2.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/3.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/4.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit/5.webp"
                ],
                "highLights": [
                    "Type: Cream Cracker Biscuit",
                    "Base Flavor: Butter",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "BRITANNIA",
                    "Model Name": "Nutri Choice Sugar Free",
                    "Type": "Cream Cracker Biscuit",
                    "Base Flavors": "Butter",
                    "Organic": "No",
                    "Ingredients": "Refined Wheat Flour (Maida), Sugar, Edible Vegetable Oil (Palm), Butter (2%), Invert Syrup, Milk Solids, Raising Agents 503(I), 500I)], Iodised Salt And Emulsifiers (322, 471, 472E]. Contains Added Flavours [Natural Nature Identical And Artificial(Butter, Vanilla & Milk) Flavouring Substances]",
                    "Food Preference": "Vegetarian",
                    "Dietary Preference": "Suger Free",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "9 Months",
                    "Shape": "Round",
                    "Nutrient Content": "Refined Wheat Flour (Maida), Sugar, Edible Vegetable Oil (Palm), Butter (2%), Invert Syrup, Milk Solids, Raising Agents 503(I), 500I)], Iodised Salt And Emulsifiers (322, 471, 472E]. Contains Added Flavours [Natural Nature Identical And Artificial(Butter, butter)"
                },
                "discountPercent": 17.391304347826086,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            },
            {
                "category": "Grocery",
                "subCategory": "Biscuit",
                "itemDescription": "BRITANNIA Nutri Choice Sugar Free Cream Cracker Biscuit",
                "sellingPrice": 81,
                "markedPrice": 90,
                "numberOfSelling": 8,
                "isAvailable": true,
                "isFavorite": false,
                "activeProduct": {
                    "quantity": "150 g",
                    "pack_of": "1"
                },
                "filterAttributesList": [
                    {
                        "name": "quantity",
                        "items": [
                            {
                                "value": "150 g",
                                "selected": true
                            }
                        ]
                    },
                    {
                        "name": "pack_of",
                        "items": [
                            {
                                "value": "1",
                                "selected": true
                            }
                        ]
                    }
                ],
                "imgUrls": [
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/1.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/2.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/3.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/4.webp",
                    "/assets/images/grocery_biscuit_BritanniaNutriChoiceSugarFreeCreamCrackerBiscuit2/5.webp"
                ],
                "highLights": [
                    "Type: Salted Biscuit",
                    "Base Flavor: Herb",
                    "Vegetarian"
                ],
                "ratingsAndReviews": [],
                "specifications": {
                    "Brand": "BRITANNIA",
                    "Model Name": "50-50 Maska Chaska",
                    "Type": "Salted Biscuit",
                    "Base Flavors": "Herb",
                    "Organic": "No",
                    "Ingredients": "NA",
                    "Food Preference": "Vegetarian",
                    "Dietary Preference": "Suger Free",
                    "Container Type": "Pouch",
                    "Maximum Shelf Life": "8 Months",
                    "Shape": "Round",
                    "Nutrient Content": "NA"
                },
                "discountPercent": 10,
                "numberOfItem": 1,
                "ratingsAndReviewsDetails": {}
            }
        ]
    }

}