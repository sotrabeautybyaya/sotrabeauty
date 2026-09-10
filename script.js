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


        followInstagram:
            "FOLLOW US ON INSTAGRAM",


        collection:
            "OUR COLLECTION",


        accessoriesTitle:
            "Accessories Boxes",


        discover:
            "DISCOVER",


        accessoriesCollection:
            "Our Accessories Boxes",


        cosmeticsCollection:
            "Our Cosmetics Boxes",


        hijabCollection:
            "Our Hijab Boxes",


        accessoriesIntro:
            "Discover our carefully selected accessories boxes, created to bring together beautiful pieces that complement your style.",


        simpleEasy:
            "SIMPLE & EASY",


        howToOrder:
            "How To Order",


        step1Title:
            "Choose Your Box",


        step1Text:
            "Explore our collection and choose the box you love.",


        step2Title:
            "Contact Aya",


        step2Text:
            "Send us a message through Instagram to place your order.",


        step3Title:
            "Enjoy Your Box",


        step3Text:
            "Receive your beautiful Sotra Beauty box and enjoy every detail.",


        aboutTitle:
            "ABOUT SOTRA BEAUTY",


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

        home:
            "Accueil",

        accessoriesBoxes:
            "Box Accessoires",

        cosmeticsBoxes:
            "Box Cosmétiques",

        hijabBoxes:
            "Box Hijabs",

        aboutUs:
            "À propos",

        contact:
            "Contact",


        followInstagram:
            "SUIVEZ-NOUS SUR INSTAGRAM",


        collection:
            "NOTRE COLLECTION",


        accessoriesTitle:
            "Box Accessoires",


        discover:
            "DÉCOUVREZ",


        accessoriesCollection:
            "Nos Box Accessoires",


        cosmeticsCollection:
            "Nos Box Cosmétiques",


        hijabCollection:
            "Nos Box Hijabs",


        accessoriesIntro:
            "Découvrez nos box d'accessoires soigneusement sélectionnées, créées pour réunir de magnifiques pièces qui complètent votre style.",


        simpleEasy:
            "SIMPLE & FACILE",


        howToOrder:
            "Comment Commander",


        step1Title:
            "Choisissez Votre Box",


        step1Text:
            "Découvrez notre collection et choisissez la box qui vous plaît.",


        step2Title:
            "Contactez Aya",


        step2Text:
            "Envoyez-nous un message sur Instagram pour passer votre commande.",


        step3Title:
            "Profitez de Votre Box",


        step3Text:
            "Recevez votre magnifique box Sotra Beauty et profitez de chaque détail.",


        aboutTitle:
            "À PROPOS DE SOTRA BEAUTY",


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

        home:
            "الرئيسية",

        accessoriesBoxes:
            "علب الإكسسوارات",

        cosmeticsBoxes:
            "علب مستحضرات التجميل",

        hijabBoxes:
            "علب الحجاب",

        aboutUs:
            "من نحن",

        contact:
            "اتصل بنا",


        followInstagram:
            "تابعونا على إنستغرام",


        collection:
            "مجموعتنا",


        accessoriesTitle:
            "علب الإكسسوارات",


        discover:
            "اكتشفي",


        accessoriesCollection:
            "علب الإكسسوارات لدينا",


        cosmeticsCollection:
            "علب مستحضرات التجميل لدينا",


        hijabCollection:
            "علب الحجاب لدينا",


        accessoriesIntro:
            "اكتشفي علب الإكسسوارات المختارة بعناية، والتي تجمع قطعاً جميلة لتكمّل أناقتك.",


        simpleEasy:
            "بسيط وسهل",


        howToOrder:
            "كيفية الطلب",


        step1Title:
            "اختاري علبتك",


        step1Text:
            "اكتشفي مجموعتنا واختاري العلبة التي تحبينها.",


        step2Title:
            "تواصلي مع Aya",


        step2Text:
            "أرسلي لنا رسالة عبر إنستغرام لإتمام طلبك.",


        step3Title:
            "استمتعي بعلبتك",


        step3Text:
            "استلمي علبة Sotra Beauty الخاصة بك واستمتعي بكل تفاصيلها.",


        aboutTitle:
            "عن SOTRA BEAUTY",


        aboutHeading:
            "الأناقة في كل التفاصيل.",


        aboutText1:
            "تأسست Sotra Beauty by Aya بفكرة بسيطة: جمع قطع نسائية جميلة في علب مختارة بعناية.",


        aboutText2:
            "يتم إعداد كل علبة بعناية واهتمام بالتفاصيل والأناقة.",


        contactSmall:
            "يسعدنا أن نسمع منك",


        contactTitle:
            "تواصلي معنا",


        contactText:
            "لديك سؤال حول إحدى علبنا؟ تواصلي مع Aya مباشرة عبر إنستغرام.",


        instagram:
            "إنستغرام",


        footerText:
            "الجمال والأناقة وأجمل التفاصيل المصنوعة بحب.",


        featured:
            "مميز",


        box:
            "علبة",


        transferFee:
            "مصاريف التوصيل",


        total:
            "المجموع",


        viewDetails:
            "عرض التفاصيل",


        orderInstagram:
            "اطلبي عبر إنستغرام",


        whatsInside:
            "ماذا تحتوي العلبة؟",


        boxPrice:
            "سعر العلبة",


        transferFeeLabel:
            "مصاريف التوصيل",


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
                "Une magnifique sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "Magnifiques accessoires",
                "Bijoux élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        2: {
            name: "Accessorie Box 02",
            description:
                "Une collection soigneusement sélectionnée pour faire sentir chaque femme spéciale.",
            items: [
                "Magnifiques accessoires",
                "Bijoux élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        3: {
            name: "Accessorie Box 03",
            description:
                "Des pièces élégantes et de magnifiques détails réunis dans une box spéciale.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "Une combinaison spéciale de magnifiques pièces adaptée à toutes les occasions.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "Une box spéciale combinant élégance, style et de magnifiques petits détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "Une magnifique sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        12: {
            name: "Trio Nude",
            description:
                "Un trio intemporel de tons nude doux, élégant et naturellement chic.",
            items: [
                "Hijabs élégants",
                "Tons nude doux",
                "Style classique et raffiné"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "Des tons moka chaleureux associés à une élégance intemporelle pour un look raffiné.",
            items: [
                "Hijabs élégants",
                "Tons moka et nude",
                "Style chic et sophistiqué"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "Un mélange délicat de magnifiques tons blush, parfait pour une touche douce et féminine.",
            items: [
                "Hijabs élégants",
                "Tons blush doux",
                "Style féminin et gracieux"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "Une collection sophistiquée de tons marbrés où l'élégance rencontre une beauté naturelle.",
            items: [
                "Hijabs élégants",
                "Tons marbrés",
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
                "مجموعة جميلة من القطع النسائية المختارة بعناية من طرف Aya.",
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
                "مجموعة جميلة من القطع النسائية المختارة بحب واهتمام بالتفاصيل.",
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
                "مجموعة جميلة من القطع النسائية المختارة بعناية من طرف Aya.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "مجموعة جميلة من القطع النسائية المختارة بحب واهتمام بالتفاصيل.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        12: {
            name: "Trio Nude",
            description:
                "ثلاثة ألوان نود ناعمة وأنيقة تمنحك إطلالة راقية وسهلة.",
            items: [
                "حجابات أنيقة",
                "ألوان نود ناعمة",
                "أسلوب كلاسيكي وراقي"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "ألوان موكا دافئة ممزوجة بأناقة خالدة لإطلالة راقية.",
            items: [
                "حجابات أنيقة",
                "ألوان موكا ونود",
                "أسلوب أنيق ومتطور"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "مزيج رقيق من ألوان البلاش الجميلة، مثالي لإطلالة ناعمة وأنثوية.",
            items: [
                "حجابات أنيقة",
                "ألوان بلاش ناعمة",
                "أسلوب أنثوي ورقيق"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "مجموعة راقية من الألوان الرخامية تجمع بين الأناقة والجمال الطبيعي.",
            items: [
                "حجابات أنيقة",
                "ألوان رخامية",
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
   GET TRANSLATION
========================================= */

function getText(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


/* =========================================
   GET PRODUCT TRANSLATION
========================================= */

function getProductTranslation(box) {

    if (currentLanguage === "en") {

        return {
            name: box.name,
            description: box.description,
            items: box.items
        };

    }


    const languageProducts =
        productTranslations[currentLanguage];

    if (
        languageProducts &&
        languageProducts[box.id]
    ) {

        return languageProducts[box.id];

    }


    return {
        name: box.name,
        description: box.description,
        items: box.items
    };

}


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(box) {

    const translated =
        getProductTranslation(box);

    const card =
        document.createElement("div");

    card.classList.add("box-card");


    /* FEATURED */

    let featuredLabel = "";

    if (box.featured) {

        featuredLabel = `
            <div class="featured-label">
                ${getText("featured")}
            </div>
        `;

    }


    /* IMAGE */

    const firstImage =
        box.images[0];


    /* TOTAL */

    const totalPrice =
        box.priceNumber + transferFee;


    /* CARD */

    card.innerHTML = `

        <div class="box-image">

            ${featuredLabel}

            <img
                class="box-product-image"
                src="${firstImage}"
                alt="${translated.name}"
            >

        </div>


        <div class="box-info">

            <p class="box-number">
                ${getText("box")}
                ${String(box.id).padStart(2, "0")}
            </p>


            <h3>
                ${translated.name}
            </h3>


            <p class="box-description">
                ${translated.description}
            </p>


            <div class="box-bottom">

                <div class="price-area">

                    <span class="price">
                        ${box.price}
                    </span>

                    <span class="transfer-fee">
                        + ${transferFee} DT
                        ${getText("transferFee")}
                    </span>

                    <span class="total-price">
                        ${getText("total")}: ${totalPrice} DT
                    </span>

                </div>


                <div class="box-buttons">

                    <button
                        class="details-button"
                        data-id="${box.id}"
                    >
                        ${getText("viewDetails")}
                    </button>


                    <a
                        href="${instagramURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="gold-button order-button"
                    >
                        ${getText("orderInstagram")}
                    </a>

                </div>

            </div>

        </div>

    `;


    /* =========================================
       IMAGE SLIDESHOW
    ========================================= */

    if (box.images.length > 1) {

        const image =
            card.querySelector(
                ".box-product-image"
            );

        let currentImage = 0;


        setInterval(() => {

            currentImage =
                (currentImage + 1) %
                box.images.length;


            image.classList.add(
                "image-changing"
            );


            setTimeout(() => {

                image.src =
                    box.images[currentImage];

                image.classList.remove(
                    "image-changing"
                );

            }, 400);

        }, 5000);

    }


    return card;

}
/* =========================================
   DISPLAY ACCESSORIES
========================================= */

function displayAccessories() {

    const container =
        document.getElementById("boxes-container");

    if (!container) return;

    container.innerHTML = "";

    accessoryBoxes.forEach(box => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY COSMETICS
========================================= */

function displayCosmetics() {

    const container =
        document.getElementById("cosmetics-container");

    if (!container) return;

    container.innerHTML = "";

    cosmeticBoxes.forEach(box => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY HIJABS
========================================= */

function displayHijabs() {

    const container =
        document.getElementById("hijabs-container");

    if (!container) return;

    container.innerHTML = "";

    hijabBoxes.forEach(box => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY ALL PRODUCTS
========================================= */

function displayAllProducts() {

    displayAccessories();

    displayCosmetics();

    displayHijabs();

}


/* =========================================
   PRODUCT POPUP
========================================= */

function openProductPopup(boxId) {

    const box =
        allBoxes.find(
            product => product.id === boxId
        );

    if (!box) return;


    const translated =
        getProductTranslation(box);


    let popup =
        document.querySelector(".product-popup");


    if (!popup) {

        popup =
            document.createElement("div");

        popup.className =
            "product-popup";


        popup.innerHTML = `

            <div class="popup-content">

                <button
                    class="close-popup"
                    type="button"
                >
                    &times;
                </button>


                <div class="popup-image-container">

                    <img
                        class="popup-product-image"
                        src=""
                        alt=""
                    >

                </div>


                <div class="popup-info">

                    <p class="popup-box-number"></p>

                    <h2 class="popup-title"></h2>

                    <p class="popup-description"></p>

                    <ul class="popup-items"></ul>

                    <div class="popup-price"></div>

                    <a
                        class="gold-button popup-order-button"
                        href="${instagramURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${getText("orderInstagram")}
                    </a>

                </div>

            </div>

        `;


        document.body.appendChild(popup);


        const closeButton =
            popup.querySelector(
                ".close-popup"
            );


        closeButton.addEventListener(
            "click",
            () => {

                popup.classList.remove(
                    "active"
                );

            }
        );


        popup.addEventListener(
            "click",
            event => {

                if (
                    event.target === popup
                ) {

                    popup.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =========================================
       UPDATE POPUP CONTENT
    ========================================= */

    const image =
        popup.querySelector(
            ".popup-product-image"
        );


    const boxNumber =
        popup.querySelector(
            ".popup-box-number"
        );


    const title =
        popup.querySelector(
            ".popup-title"
        );


    const description =
        popup.querySelector(
            ".popup-description"
        );


    const itemsList =
        popup.querySelector(
            ".popup-items"
        );


    const price =
        popup.querySelector(
            ".popup-price"
        );


    image.src =
        box.images[0];

    image.alt =
        translated.name;


    boxNumber.textContent =
        `${getText("box")} ${String(box.id).padStart(2, "0")}`;


    title.textContent =
        translated.name;


    description.textContent =
        translated.description;


    itemsList.innerHTML = "";


    translated.items.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        itemsList.appendChild(li);

    });


    price.innerHTML = `

        <span class="price">
            ${box.price}
        </span>

        <span class="transfer-fee">
            + ${transferFee} DT
            ${getText("transferFee")}
        </span>

        <span class="total-price">
            ${getText("total")}: ${box.priceNumber + transferFee} DT
        </span>

    `;


    popup.classList.add(
        "active"
    );

}


/* =========================================
   DETAILS BUTTONS
========================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".details-button"
            );


        if (!button) return;


        const boxId =
            Number(
                button.dataset.id
            );


        openProductPopup(boxId);

    }
);


/* =========================================
   UPDATE POPUP LANGUAGE
========================================= */

function updatePopupLanguage() {

    const popup =
        document.querySelector(
            ".product-popup"
        );


    if (!popup) return;


    if (
        !popup.classList.contains("active")
    ) {

        return;

    }


    const title =
        popup.querySelector(
            ".popup-title"
        );


    if (!title) return;


    const currentTitle =
        title.textContent;


    const box =
        allBoxes.find(
            product => {

                const translation =
                    getProductTranslation(
                        product
                    );

                return (
                    translation.name ===
                    currentTitle
                );

            }
        );


    if (!box) return;


    const translated =
        getProductTranslation(box);


    popup.querySelector(
        ".popup-box-number"
    ).textContent =
        `${getText("box")} ${String(box.id).padStart(2, "0")}`;


    popup.querySelector(
        ".popup-title"
    ).textContent =
        translated.name;


    popup.querySelector(
        ".popup-description"
    ).textContent =
        translated.description;


    const itemsList =
        popup.querySelector(
            ".popup-items"
        );


    itemsList.innerHTML = "";


    translated.items.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        itemsList.appendChild(li);

    });


    popup.querySelector(
        ".popup-order-button"
    ).textContent =
        getText("orderInstagram");

}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setupLanguageSwitcher() {

    const languageSelect =
        document.getElementById(
            "language-select"
        );


    if (!languageSelect) return;


    languageSelect.value =
        currentLanguage;


    languageSelect.addEventListener(
        "change",
        event => {

            setLanguage(
                event.target.value
            );

        }
    );

}


/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(language) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    currentLanguage =
        language;


    localStorage.setItem(
        "sotraLanguage",
        currentLanguage
    );


    updateDirection();

    updateStaticText();

    displayAllProducts();

    updatePopupLanguage();

}


/* =========================================
   UPDATE DIRECTION
========================================= */

function updateDirection() {

    const html =
        document.documentElement;


    if (
        currentLanguage === "ar"
    ) {

        html.setAttribute(
            "lang",
            "ar"
        );

        html.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        html.setAttribute(
            "lang",
            currentLanguage
        );

        html.setAttribute(
            "dir",
            "ltr"
        );

    }

}


/* =========================================
   UPDATE STATIC TEXT
========================================= */

function updateStaticText() {

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(element => {

        const key =
            element.dataset.i18n;


        const translated =
            getText(key);


        if (
            translated !== undefined
        ) {

            element.textContent =
                translated;

        }

    });


    const languageSelect =
        document.getElementById(
            "language-select"
        );


    if (languageSelect) {

        languageSelect.value =
            currentLanguage;

    }


    const orderButtons =
        document.querySelectorAll(
            ".order-button"
        );


    orderButtons.forEach(button => {

        button.textContent =
            getText(
                "orderInstagram"
            );

    });


    const detailsButtons =
        document.querySelectorAll(
            ".details-button"
        );


    detailsButtons.forEach(button => {

        button.textContent =
            getText(
                "viewDetails"
            );

    });

}
/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    navLinks.querySelectorAll("a").forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

setupLanguageSwitcher();

setLanguage(
    currentLanguage
);
