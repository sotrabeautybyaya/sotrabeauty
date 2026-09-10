/* =========================================
   SOTRA BEAUTY BY AYA
   MAIN JAVASCRIPT
   LANGUAGE SYSTEM INCLUDED
========================================= */


/* =========================================
   TRANSFER FEE
========================================= */

const transferFee = 8;


/* =========================================
   ACCESSORIES BOXES
========================================= */

const accessoryBoxes = [

    {
        id: 1,
        name: "Accessorie Box 01",
        price: "37 DT",
        priceNumber: 37,

        description:
            "A beautiful selection of feminine pieces carefully chosen by Aya.",

        items: [
            "Beautiful accessories",
            "Elegant jewelry pieces",
            "Carefully selected details"
        ],

        images: [
            "images/pack1-1.jpg",
            "images/pack1-2.jpg"
        ],

        featured: true
    },


    {
        id: 2,
        name: "Accessorie Box 02",
        price: "34 DT",
        priceNumber: 34,

        description:
            "A carefully selected collection designed to make every woman feel special.",

        items: [
            "Beautiful accessories",
            "Elegant jewelry pieces",
            "Carefully selected details"
        ],

        images: [
            "images/pack2-1.jpg",
            "images/pack2-2.jpg"
        ],

        featured: false
    },


    {
        id: 3,
        name: "Accessorie Box 03",
        price: "46 DT",
        priceNumber: 46,

        description:
            "Elegant pieces and beautiful details gathered together in one special box.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack3.jpg"
        ],

        featured: false
    },


    {
        id: 4,
        name: "Accessorie Box 04",
        price: "39 DT",
        priceNumber: 39,

        description:
            "A special combination of beautiful pieces made for every occasion.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack4.jpg"
        ],

        featured: false
    },


    {
        id: 5,
        name: "Accessorie Box 05",
        price: "36 DT",
        priceNumber: 36,

        description:
            "A beautiful collection of feminine pieces selected with love and attention to detail.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack5.jpg"
        ],

        featured: false
    },


    {
        id: 6,
        name: "Accessorie Box 06",
        price: "36 DT",
        priceNumber: 36,

        description:
            "A special beauty box combining elegance, style and beautiful little details.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack6.jpg"
        ],

        featured: false
    },


    {
        id: 7,
        name: "Accessorie Box 07",
        price: "24 DT",
        priceNumber: 24,

        description:
            "A beautiful selection of feminine pieces carefully chosen by Aya.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/Pack7.jpg"
        ],

        featured: false
    },


    {
        id: 8,
        name: "Accessorie Box 08",
        price: "34 DT",
        priceNumber: 34,

        description:
            "A beautiful collection of feminine pieces selected with love and attention to detail.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/Pack8-1.jpg",
            "images/Pack8-2.jpg"
        ],

        featured: false
    }

];


/* =========================================
   COSMETICS BOXES
========================================= */

const cosmeticBoxes = [

    {
        id: 16,
        name: "New Pack 1",
        price: "29.900 DT",
        priceNumber: 29.9,

        description:
            "A lovely cosmetic box with carefully selected beauty essentials and elegant feminine details.",

        items: [
            "Beautiful cosmetic selection",
            "Elegant beauty essentials",
            "Carefully selected details"
        ],

        images: [
            "images/newpack1.jpg"
        ],

        featured: false
    },


    {
        id: 17,
        name: "New Pack 2",
        price: "39.900 DT",
        priceNumber: 39.9,

        description:
            "A charming cosmetic box combining beauty essentials with elegant feminine touches.",

        items: [
            "Beautiful cosmetic selection",
            "Elegant beauty essentials",
            "Carefully selected details"
        ],

        images: [
            "images/newpack2.jpg"
        ],

        featured: false
    },


    {
        id: 18,
        name: "New Pack 3",
        price: "45 DT",
        priceNumber: 45,

        description:
            "A beautiful cosmetic collection created to add a lovely and feminine touch to your beauty routine.",

        items: [
            "Beautiful cosmetic selection",
            "Beauty essentials",
            "Lovely feminine details"
        ],

        images: [
            "images/newpack3.jpg"
        ],

        featured: false
    },


    {
        id: 19,
        name: "New Pack 4",
        price: "55 DT",
        priceNumber: 55,

        description:
            "An elegant cosmetic box bringing together beautiful beauty essentials in one special collection.",

        items: [
            "Beautiful cosmetic selection",
            "Elegant beauty essentials",
            "Special feminine details"
        ],

        images: [
            "images/newpack4.jpg"
        ],

        featured: false
    }

];


/* =========================================
   HIJAB BOXES
========================================= */

const hijabBoxes = [

    {
        id: 12,
        name: "Trio Nude",
        price: "50 DT",
        priceNumber: 50,

        description:
            "A timeless trio of soft nude tones, elegant and effortlessly chic.",

        items: [
            "Elegant hijabs",
            "Soft nude shades",
            "Classic & refined style"
        ],

        images: [
            "images/hijab.jpg"
        ],

        featured: false
    },


    {
        id: 13,
        name: "Mocha Nude",
        price: "50 DT",
        priceNumber: 50,

        description:
            "Warm mocha tones blended with timeless elegance for a beautifully refined look.",

        items: [
            "Elegant hijabs",
            "Mocha & nude shades",
            "Chic & sophisticated style"
        ],

        images: [
            "images/hijab2.jpg"
        ],

        featured: false
    },


    {
        id: 14,
        name: "Blush Mix",
        price: "37 DT",
        priceNumber: 37,

        description:
            "A delicate mix of beautiful blush tones, perfect for a soft and feminine touch.",

        items: [
            "Elegant hijabs",
            "Soft blush shades",
            "Feminine & graceful style"
        ],

        images: [
            "images/hijab3.jpg"
        ],

        featured: false
    },


    {
        id: 15,
        name: "Nuances Marbrées",
        price: "70 DT",
        priceNumber: 70,

        description:
            "A sophisticated collection of marbled shades, where elegance meets effortless beauty.",

        items: [
            "Elegant hijabs",
            "Marbled shades",
            "Classic & luxurious style"
        ],

        images: [
            "images/hijab4-1.jpg",
            "images/hijab4-2.jpg"
        ],

        featured: false
    }

];


/* =========================================
   INSTAGRAM
========================================= */

const instagramURL =
    "https://www.instagram.com/sotra_beauty_by_aya/";


/* =========================================
   ALL BOXES
========================================= */

const allBoxes = [
    ...accessoryBoxes,
    ...cosmeticBoxes,
    ...hijabBoxes
];


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    en: {

        home: "Home",
        accessoriesBoxes: "Accessories Boxes",
        cosmeticsBoxes: "Cosmetics Boxes",
        hijabBoxes: "Hijab Boxes",
        aboutUs: "About Us",
        contact: "Contact",

        followInstagram: "FOLLOW US ON INSTAGRAM",

        collection: "OUR COLLECTION",
        accessoriesTitle: "Accessories Boxes",

        discover: "DISCOVER",
        accessoriesCollection: "Our Accessories Boxes",
        cosmeticsCollection: "Our Cosmetics Boxes",
        hijabCollection: "Our Hijab Boxes",

        accessoriesIntro:
            "Discover our carefully selected accessories boxes, created to bring together beautiful pieces that complement your style.",

        simpleEasy: "SIMPLE & EASY",
        howToOrder: "How To Order",

        step1Title: "Choose Your Box",
        step1Text:
            "Explore our collection and choose the box you love.",

        step2Title: "Contact Aya",
        step2Text:
            "Send us a message through Instagram to place your order.",

        step3Title: "Enjoy Your Box",
        step3Text:
            "Receive your beautiful Sotra Beauty box and enjoy every detail.",

        aboutTitle: "ABOUT SOTRA BEAUTY",

        aboutHeading:
            "Elegance In Every Detail.",

        aboutText1:
            "Sotra Beauty by Aya was created with one simple idea: bringing beautiful feminine pieces together in carefully selected boxes.",

        aboutText2:
            "Every box is prepared with attention to detail, style and elegance.",

        contactSmall:
            "WE WOULD LOVE TO HEAR FROM YOU",

        contactTitle:
            "Get In Touch",

        contactText:
            "Have a question about one of our boxes? Contact Aya directly through Instagram.",

        instagram:
            "INSTAGRAM",

        footerText:
            "Beauty, elegance & little details made with love.",

        featured:
            "FEATURED",

        box:
            "BOX",

        transferFee:
            "transfer fee",

        total:
            "Total",

        viewDetails:
            "VIEW DETAILS",

        orderInstagram:
            "ORDER ON INSTAGRAM",

        whatsInside:
            "WHAT'S INSIDE",

        boxPrice:
            "Box price",

        transferFeeLabel:
            "Transfer fee",

        totalLabel:
            "TOTAL",

        close:
            "Close"

    },


    fr: {

        home: "Accueil",
        accessoriesBoxes: "Box Accessoires",
        cosmeticsBoxes: "Box Cosmétiques",
        hijabBoxes: "Box Hijabs",
        aboutUs: "À propos",
        contact: "Contact",

        followInstagram: "SUIVEZ-NOUS SUR INSTAGRAM",

        collection: "NOTRE COLLECTION",
        accessoriesTitle: "Box Accessoires",

        discover: "DÉCOUVREZ",
        accessoriesCollection: "Nos Box Accessoires",
        cosmeticsCollection: "Nos Box Cosmétiques",
        hijabCollection: "Nos Box Hijabs",

        accessoriesIntro:
            "Découvrez nos box d'accessoires soigneusement sélectionnées, créées pour réunir de magnifiques pièces qui complètent votre style.",

        simpleEasy: "SIMPLE & FACILE",
        howToOrder: "Comment Commander",

        step1Title: "Choisissez Votre Box",
        step1Text:
            "Découvrez notre collection et choisissez la box qui vous plaît.",

        step2Title: "Contactez Aya",
        step2Text:
            "Envoyez-nous un message sur Instagram pour passer votre commande.",

        step3Title: "Profitez de Votre Box",
        step3Text:
            "Recevez votre magnifique box Sotra Beauty et profitez de chaque détail.",

        aboutTitle: "À PROPOS DE SOTRA BEAUTY",

        aboutHeading:
            "L'élégance dans chaque détail.",

        aboutText1:
            "Sotra Beauty by Aya est née d'une idée simple : réunir de magnifiques pièces féminines dans des box soigneusement sélectionnées.",

        aboutText2:
            "Chaque box est préparée avec attention, style et élégance.",

        contactSmall:
            "NOUS SERIONS RAVIS DE VOUS ENTENDRE",

        contactTitle:
            "Contactez-Nous",

        contactText:
            "Une question concernant l'une de nos box ? Contactez Aya directement sur Instagram.",

        instagram:
            "INSTAGRAM",

        footerText:
            "Beauté, élégance et petits détails préparés avec amour.",

        featured:
            "À LA UNE",

        box:
            "BOX",

        transferFee:
            "frais de livraison",

        total:
            "Total",

        viewDetails:
            "VOIR LES DÉTAILS",

        orderInstagram:
            "COMMANDER SUR INSTAGRAM",

        whatsInside:
            "CE QUE CONTIENT LA BOX",

        boxPrice:
            "Prix de la box",

        transferFeeLabel:
            "Frais de livraison",

        totalLabel:
            "TOTAL",

        close:
            "Fermer"

    },


    ar: {

        home: "الرئيسية",
        accessoriesBoxes: "علب الإكسسوارات",
        cosmeticsBoxes: "علب مستحضرات التجميل",
        hijabBoxes: "علب الحجاب",
        aboutUs: "من نحن",
        contact: "اتصل بنا",

        followInstagram: "تابعونا على إنستغرام",

        collection: "مجموعتنا",
        accessoriesTitle: "علب الإكسسوارات",

        discover: "اكتشفي",
        accessoriesCollection: "علب الإكسسوارات لدينا",
        cosmeticsCollection: "علب مستحضرات التجميل لدينا",

           cosmeticsCollection: "علب مستحضرات التجميل لدينا",
        hijabCollection: "علب الحجاب لدينا",

        accessoriesIntro:
            "اكتشفي علب الإكسسوارات المختارة بعناية، والمصممة لتجمع قطعًا جميلة تكمل أناقتك.",

        simpleEasy: "بسيط وسهل",
        howToOrder: "كيفية الطلب",

        step1Title: "اختاري علبتك",
        step1Text:
            "تصفحي مجموعتنا واختاري العلبة التي تحبينها.",

        step2Title: "تواصلي مع آية",
        step2Text:
            "أرسلي لنا رسالة عبر إنستغرام لتأكيد طلبك.",

        step3Title: "استمتعي بعلبتك",
        step3Text:
            "استلمي علبة Sotra Beauty الجميلة واستمتعي بكل تفاصيلها.",

        aboutTitle: "عن SOTRA BEAUTY",

        aboutHeading:
            "الأناقة في كل التفاصيل.",

        aboutText1:
            "نشأت Sotra Beauty by Aya من فكرة بسيطة: جمع قطع نسائية جميلة في علب مختارة بعناية.",

        aboutText2:
            "يتم تجهيز كل علبة بعناية واهتمام بالتفاصيل والأناقة.",

        contactSmall:
            "يسعدنا أن نسمع منك",

        contactTitle:
            "تواصلي معنا",

        contactText:
            "لديك سؤال حول إحدى علبنا؟ تواصلي مباشرة مع آية عبر إنستغرام.",

        instagram:
            "إنستغرام",

        footerText:
            "جمال وأناقة وتفاصيل صغيرة مصنوعة بكل حب.",

        featured:
            "مميزة",

        box:
            "علبة",

        transferFee:
            "رسوم التوصيل",

        total:
            "المجموع",

        viewDetails:
            "عرض التفاصيل",

        orderInstagram:
            "الطلب عبر إنستغرام",

        whatsInside:
            "ماذا تحتوي العلبة؟",

        boxPrice:
            "سعر العلبة",

        transferFeeLabel:
            "رسوم التوصيل",

        totalLabel:
            "المجموع",

        close:
            "إغلاق"

    }

};


/* =========================================
   PRODUCT TRANSLATIONS
========================================= */

const productTranslations = {

    fr: {

        1: {
            name: "Accessorie Box 01",
            description:
                "Une belle sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "De magnifiques accessoires",
                "Des bijoux élégants",
                "Des détails soigneusement sélectionnés"
            ]
        },

        2: {
            name: "Accessorie Box 02",
            description:
                "Une collection soigneusement sélectionnée pour faire sentir chaque femme spéciale.",
            items: [
                "De magnifiques accessoires",
                "Des bijoux élégants",
                "Des détails soigneusement sélectionnés"
            ]
        },

        3: {
            name: "Accessorie Box 03",
            description:
                "Des pièces élégantes et de beaux détails réunis dans une box spéciale.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "Une combinaison spéciale de belles pièces conçues pour toutes les occasions.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "Une box beauté spéciale combinant élégance, style et de magnifiques petits détails.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "Une belle sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "De magnifiques accessoires",
                "Des détails élégants",
                "Des pièces soigneusement sélectionnées"
            ]
        },


        12: {
            name: "Trio Nude",
            description:
                "Un trio intemporel de tons nude doux, élégant et naturellement chic.",
            items: [
                "Hijabs élégants",
                "Nuances nude douces",
                "Style classique et raffiné"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "Des tons mocha chaleureux associés à une élégance intemporelle pour un look raffiné.",
            items: [
                "Hijabs élégants",
                "Nuances mocha et nude",
                "Style chic et sophistiqué"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "Un délicat mélange de magnifiques tons blush, parfait pour une touche douce et féminine.",
            items: [
                "Hijabs élégants",
                "Nuances blush douces",
                "Style féminin et gracieux"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "Une collection sophistiquée de nuances marbrées où l'élégance rencontre la beauté naturelle.",
            items: [
                "Hijabs élégants",
                "Nuances marbrées",
                "Style classique et luxueux"
            ]
        },


        16: {
            name: "New Pack 1",
            description:
                "Une jolie box cosmétique avec des essentiels beauté soigneusement sélectionnés et de délicates touches féminines.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        17: {
            name: "New Pack 2",
            description:
                "Une charmante box cosmétique combinant des essentiels beauté et de délicates touches féminines.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        18: {
            name: "New Pack 3",
            description:
                "Une belle collection cosmétique créée pour apporter une touche féminine et délicate à votre routine beauté.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté",
                "Délicats détails féminins"
            ]
        },

        19: {
            name: "New Pack 4",
            description:
                "Une élégante box cosmétique réunissant de beaux essentiels beauté dans une collection spéciale.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté élégants",
                "Détails féminins spéciaux"
            ]
        }

    },


    ar: {

        1: {
            name: "Accessorie Box 01",
            description:
                "مجموعة جميلة من القطع الأنثوية المختارة بعناية من طرف آية.",
            items: [
                "إكسسوارات جميلة",
                "قطع مجوهرات أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        2: {
            name: "Accessorie Box 02",
            description:
                "مجموعة مختارة بعناية لتجعل كل امرأة تشعر بأنها مميزة.",
            items: [
                "إكسسوارات جميلة",
                "قطع مجوهرات أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        3: {
            name: "Accessorie Box 03",
            description:
                "قطع أنيقة وتفاصيل جميلة مجمعة في علبة مميزة.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "مجموعة خاصة من القطع الجميلة المناسبة لكل المناسبات.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "مجموعة جميلة من القطع الأنثوية المختارة بحب واهتمام بالتفاصيل.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "علبة جمال مميزة تجمع بين الأناقة والأسلوب والتفاصيل الجميلة.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "مجموعة جميلة من القطع الأنثوية المختارة بعناية من طرف آية.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "مجموعة جميلة من القطع الأنثوية المختارة بحب واهتمام بالتفاصيل.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },


        12: {
            name: "Trio Nude",
            description:
                "مجموعة ثلاثية بألوان نود ناعمة وخالدة، أنيقة وراقية.",
            items: [
                "حجابات أنيقة",
                "درجات نود ناعمة",
                "أسلوب كلاسيكي وراقي"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "درجات موكا دافئة ممزوجة بأناقة خالدة لإطلالة راقية.",
            items: [
                "حجابات أنيقة",
                "درجات موكا ونود",
                "أسلوب أنيق ومتطور"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "مزيج رقيق من درجات البلاش الجميلة، مثالي لإضافة لمسة ناعمة وأنثوية.",
            items: [
                "حجابات أنيقة",
                "درجات بلاش ناعمة",
                "أسلوب أنثوي ورقيق"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "مجموعة راقية من الدرجات الرخامية تجمع بين الأناقة والجمال الطبيعي.",
            items: [
                "حجابات أنيقة",
                "درجات رخامية",
                "أسلوب كلاسيكي وفاخر"
            ]
        },


        16: {
            name: "New Pack 1",
            description:
                "علبة مستحضرات تجميل جميلة تحتوي على أساسيات مختارة بعناية ولمسات أنثوية أنيقة.",
            items: [
                "مجموعة جميلة من مستحضرات التجميل",
                "أساسيات تجميل أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        17: {
            name: "New Pack 2",
            description:
                "علبة مستحضرات تجميل مميزة تجمع بين أساسيات الجمال ولمسات أنثوية أنيقة.",
            items: [
                "مجموعة جميلة من مستحضرات التجميل",
                "أساسيات تجميل أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        18: {
            name: "New Pack 3",
            description:
                "مجموعة جميلة من مستحضرات التجميل تضيف لمسة أنثوية ورقيقة إلى روتين جمالك.",
            items: [
                "مجموعة جميلة من مستحضرات التجميل",
                "أساسيات الجمال",
                "تفاصيل أنثوية جميلة"
            ]
        },

        19: {
            name: "New Pack 4",
            description:
                "علبة مستحضرات تجميل أنيقة تجمع أساسيات جميلة في مجموعة مميزة.",
            items: [
                "مجموعة جميلة من مستحضرات التجميل",
                "أساسيات تجميل أنيقة",
                "تفاصيل أنثوية مميزة"
            ]
        }

    }

};


/* =========================================
   CURRENT LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("sotraLanguage") || "en";
/* =========================================
   PRODUCT HELPERS
========================================= */

function getProductTranslation(productId) {

    if (
        currentLanguage !== "en" &&
        productTranslations[currentLanguage] &&
        productTranslations[currentLanguage][productId]
    ) {
        return productTranslations[currentLanguage][productId];
    }

    return null;
}


function getProductName(product) {

    const translation =
        getProductTranslation(product.id);

    return translation && translation.name
        ? translation.name
        : product.name;
}


function getProductDescription(product) {

    const translation =
        getProductTranslation(product.id);

    return translation && translation.description
        ? translation.description
        : product.description;
}


function getProductItems(product) {

    const translation =
        getProductTranslation(product.id);

    return translation && translation.items
        ? translation.items
        : product.items;
}


/* =========================================
   PRODUCT COLLECTIONS
========================================= */

function getProductsByCategory(category) {

    if (category === "accessories") {
        return accessoryBoxes;
    }

    if (category === "cosmetics") {
        return cosmeticBoxes;
    }

    if (category === "hijab") {
        return hijabBoxes;
    }

    return allBoxes;
}


/* =========================================
   PRODUCT IMAGE SLIDESHOW
========================================= */

const slideshowIntervals = {};


function startProductSlideshow(product) {

    if (!product.images || product.images.length <= 1) {
        return;
    }

    const imageElement =
        document.querySelector(
            `[data-product-image="${product.id}"]`
        );

    if (!imageElement) {
        return;
    }

    let currentImage = 0;

    slideshowIntervals[product.id] =
        setInterval(() => {

            currentImage++;

            if (currentImage >= product.images.length) {
                currentImage = 0;
            }

            imageElement.src =
                product.images[currentImage];

        }, 5000);
}


function stopProductSlideshow(productId) {

    if (slideshowIntervals[productId]) {

        clearInterval(
            slideshowIntervals[productId]
        );

        delete slideshowIntervals[productId];
    }
}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(product) {

    const productName =
        getProductName(product);

    const productDescription =
        getProductDescription(product);

    const productImage =
        product.images && product.images.length
            ? product.images[0]
            : "";

    const totalPrice =
        product.priceNumber + transferFee;

    const card =
        document.createElement("div");

    card.className =
        "product-card";

    card.dataset.productId =
        product.id;

    card.innerHTML = `

        <div class="product-image-wrapper">

            ${
                product.featured
                    ? `
                        <span class="featured-badge">
                            ${translations[currentLanguage].featured}
                        </span>
                      `
                    : ""
            }

            <img
                src="${productImage}"
                alt="${productName}"
                class="product-image"
                data-product-image="${product.id}"
            >

        </div>


        <div class="product-info">

            <h3>
                ${productName}
            </h3>

            <p class="product-description">
                ${productDescription}
            </p>


            <div class="product-price">

                <span>
                    ${product.price}
                </span>

            </div>


            <div class="transfer-fee">

                + ${transferFee} DT
                ${translations[currentLanguage].transferFee}

            </div>


            <div class="product-total">

                ${translations[currentLanguage].total}:
                <strong>${totalPrice} DT</strong>

            </div>


            <div class="product-actions">

                <button
                    class="details-btn"
                    onclick="openProductDetails(${product.id})"
                >
                    ${translations[currentLanguage].viewDetails}
                </button>


                <a
                    href="${instagramURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="order-btn"
                >
                    ${translations[currentLanguage].orderInstagram}
                </a>

            </div>

        </div>

    `;

    return card;
}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts(
    products,
    container
) {

    if (!container) {
        return;
    }

    Object.keys(slideshowIntervals)
        .forEach(id => {
            stopProductSlideshow(id);
        });

    container.innerHTML = "";


    products.forEach(product => {

        const card =
            createProductCard(product);

        container.appendChild(card);

    });


    products.forEach(product => {

        if (
            product.images &&
            product.images.length > 1
        ) {
            startProductSlideshow(product);
        }

    });

}


/* =========================================
   FIND PRODUCT
========================================= */

function findProductById(productId) {

    return allBoxes.find(
        product =>
            product.id === Number(productId)
    );
}


/* =========================================
   PRODUCT DETAILS POPUP
========================================= */

function openProductDetails(productId) {

    const product =
        findProductById(productId);

    if (!product) {
        return;
    }

    const productName =
        getProductName(product);

    const productDescription =
        getProductDescription(product);

    const productItems =
        getProductItems(product);

    const totalPrice =
        product.priceNumber + transferFee;


    let popup =
        document.getElementById(
            "product-popup"
        );


    if (!popup) {

        popup =
            document.createElement("div");

        popup.id =
            "product-popup";

        popup.className =
            "product-popup";

        document.body.appendChild(popup);
    }


    popup.innerHTML = `

        <div class="popup-overlay"
             onclick="closeProductDetails()">
        </div>


        <div class="popup-content">

            <button
                class="popup-close"
                onclick="closeProductDetails()"
                aria-label="${translations[currentLanguage].close}"
            >
                &times;
            </button>


            <div class="popup-image-container">

                <img
                    src="${product.images[0]}"
                    alt="${productName}"
                    class="popup-image"
                >

            </div>


            <div class="popup-info">

                <h2>
                    ${productName}
                </h2>


                <p class="popup-description">
                    ${productDescription}
                </p>


                <h3>
                    ${translations[currentLanguage].whatsInside}
                </h3>


                <ul class="popup-items">

                    ${productItems.map(item => `
                        <li>${item}</li>
                    `).join("")}

                </ul>


                <div class="popup-price">

                    <div>
                        <span>
                            ${translations[currentLanguage].boxPrice}
                        </span>

                        <strong>
                            ${product.price}
                        </strong>
                    </div>


                    <div>
                        <span>
                            ${translations[currentLanguage].transferFeeLabel}
                        </span>

                        <strong>
                            ${transferFee} DT
                        </strong>
                    </div>


                    <div class="popup-total">

                        <span>
                            ${translations[currentLanguage].totalLabel}
                        </span>

                        <strong>
                            ${totalPrice} DT
                        </strong>

                    </div>

                </div>


                <a
                    href="${instagramURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="popup-order-btn"
                >
                    ${translations[currentLanguage].orderInstagram}
                </a>

            </div>

        </div>

    `;


    popup.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


/* =========================================
   CLOSE PRODUCT DETAILS
========================================= */

function closeProductDetails() {

    const popup =
        document.getElementById(
            "product-popup"
        );

    if (!popup) {
        return;
    }

    popup.classList.remove("active");

    document.body.style.overflow =
        "";
}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeProductDetails();
        }

    }
);


/* =========================================
   LANGUAGE STORAGE
========================================= */

function saveLanguage(language) {

    localStorage.setItem(
        "sotraLanguage",
        language
    );
}


/* =========================================
   LANGUAGE DIRECTION
========================================= */

function updateDocumentDirection() {

    const html =
        document.documentElement;

    if (currentLanguage === "ar") {

        html.setAttribute(
            "dir",
            "rtl"
        );

        html.setAttribute(
            "lang",
            "ar"
        );

    } else {

        html.setAttribute(
            "dir",
            "ltr"
        );

        html.setAttribute(
            "lang",
            currentLanguage
        );
    }
}
/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setupLanguageSwitcher() {

    const languageButtons =
        document.querySelectorAll(
            "[data-language]"
        );

    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;

                if (!language) {
                    return;
                }

                setLanguage(language);

            }
        );

    });
}


/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage =
        language;

    saveLanguage(
        currentLanguage
    );

    updateDocumentDirection();

    updatePageTranslations();

    renderAllProductSections();

    updateActiveLanguageButton();

    closeProductDetails();
}


/* =========================================
   ACTIVE LANGUAGE BUTTON
========================================= */

function updateActiveLanguageButton() {

    const languageButtons =
        document.querySelectorAll(
            "[data-language]"
        );

    languageButtons.forEach(button => {

        if (
            button.dataset.language ===
            currentLanguage
        ) {

            button.classList.add(
                "active"
            );

        } else {

            button.classList.remove(
                "active"
            );

        }

    });
}


/* =========================================
   PAGE TRANSLATIONS
========================================= */

function updatePageTranslations() {

    const language =
        translations[currentLanguage];

    if (!language) {
        return;
    }


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                Object.prototype.hasOwnProperty.call(
                    language,
                    key
                )
            ) {

                element.textContent =
                    language[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            if (
                Object.prototype.hasOwnProperty.call(
                    language,
                    key
                )
            ) {

                element.placeholder =
                    language[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-title]")
        .forEach(element => {

            const key =
                element.dataset.i18nTitle;

            if (
                Object.prototype.hasOwnProperty.call(
                    language,
                    key
                )
            ) {

                element.title =
                    language[key];

            }

        });

}


/* =========================================
   RENDER ALL PRODUCT SECTIONS
========================================= */

function renderAllProductSections() {

    const accessoryContainer =
        document.getElementById(
            "accessories-products"
        );

    const cosmeticContainer =
        document.getElementById(
            "cosmetics-products"
        );

    const hijabContainer =
        document.getElementById(
            "hijab-products"
        );


    if (accessoryContainer) {

        renderProducts(
            accessoryBoxes,
            accessoryContainer
        );

    }


    if (cosmeticContainer) {

        renderProducts(
            cosmeticBoxes,
            cosmeticContainer
        );

    }


    if (hijabContainer) {

        renderProducts(
            hijabBoxes,
            hijabContainer
        );

    }

}


/* =========================================
   NAVIGATION / MOBILE MENU
========================================= */

function setupMobileMenu() {

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );

    const navMenu =
        document.querySelector(
            ".nav-links"
        );


    if (!menuToggle || !navMenu) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

            menuToggle.classList.toggle(
                "active"
            );

        }
    );


    navMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function setupSmoothScroll() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================
   INSTAGRAM LINKS
========================================= */

function setupInstagramLinks() {

    document
        .querySelectorAll(
            ".instagram-link, .instagram-button, [data-instagram]"
        )
        .forEach(link => {

            link.setAttribute(
                "href",
                instagramURL
            );

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });

}


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

function setupImageErrorHandling() {

    document.addEventListener(
        "error",
        event => {

            const element =
                event.target;

            if (
                element &&
                element.tagName === "IMG"
            ) {

                element.classList.add(
                    "image-error"
                );

            }

        },
        true
    );

}


/* =========================================
   PAGE INITIALIZATION
========================================= */

function initializeWebsite() {

    updateDocumentDirection();

    setupLanguageSwitcher();

    setupMobileMenu();

    setupSmoothScroll();

    setupInstagramLinks();

    setupImageErrorHandling();

    updatePageTranslations();

    renderAllProductSections();

    updateActiveLanguageButton();

}


/* =========================================
   START WEBSITE
========================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();

}
/* =========================================
   FINAL WEBSITE SETUP
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Make sure the saved language is valid.
         * If not, English is used as the default.
         */

        if (!translations[currentLanguage]) {
            currentLanguage = "en";
        }


        /*
         * Apply the selected language.
         */

        updateDocumentDirection();

        updatePageTranslations();


        /*
         * Render all three product categories.
         */

        renderAllProductSections();


        /*
         * Activate the language selector.
         */

        setupLanguageSwitcher();

        updateActiveLanguageButton();


        /*
         * Activate the mobile navigation.
         */

        setupMobileMenu();


        /*
         * Enable smooth scrolling.
         */

        setupSmoothScroll();


        /*
         * Make sure all Instagram buttons
         * use the official Sotra Beauty account.
         */

        setupInstagramLinks();


        /*
         * Handle missing product images.
         */

        setupImageErrorHandling();

    }
);


/* =========================================
   WINDOW EVENTS
========================================= */

window.addEventListener(
    "beforeunload",
    () => {

        Object.keys(
            slideshowIntervals
        ).forEach(productId => {

            stopProductSlideshow(
                productId
            );

        });

    }
);


/* =========================================
   GLOBAL FUNCTIONS
========================================= */

window.openProductDetails =
    openProductDetails;

window.closeProductDetails =
    closeProductDetails;

window.setLanguage =
    setLanguage;


/* =========================================
   INITIAL LANGUAGE SETUP
========================================= */

setupLanguageSwitcher();

setLanguage(
    currentLanguage
);
