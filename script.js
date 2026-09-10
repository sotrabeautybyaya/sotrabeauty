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
        id: 9,
        name: "Cosmetic Box 09",
        price: "36 DT",
        priceNumber: 36,

        description:
            "A beautiful cosmetic collection with feminine accessories and beauty essentials, carefully selected by Aya.",

        items: [
            "2 éponges de maquillage",
            "Petit Vaseline pour les lèvres",
            "Crème pour les mains",
            "Pince à cheveux en forme de papillon",
            "Strass",
            "Huile / gloss à lèvres rose",
            "Petite pochette en fourrure blanche avec nœud vichy et cerises",
            "Porte-clés Angel - Stitch rose"
        ],

        images: [
            "images/pack9.jpg"
        ],

        featured: false
    },


    {
        id: 10,
        name: "Cosmetic Box 10",
        price: "40 DT",
        priceNumber: 40,

        description:
            "A charming beauty box combining cosmetics, accessories and elegant feminine details.",

        items: [
            "Miroir",
            "Pochette en fourrure rose avec cerises",
            "2 crèmes pour les mains",
            "Lip gloss",
            "Vaseline pour les lèvres",
            "1 pince à cheveux fleur dorée",
            "1 bague avec sa petite boîte",
            "2 beauty blenders",
            "1 porte-clés (Stitch)"
        ],

        images: [
            "images/pack10.jpg"
        ],

        featured: false
    },


    {
        id: 11,
        name: "Cosmetic Box 11",
        price: "35 DT",
        priceNumber: 35,

        description:
            "A simple and elegant beauty collection with everyday cosmetic essentials.",

        items: [
            "Miroir",
            "2 beauty blenders Anguoer",
            "Vaseline pour les lèvres",
            "2 crèmes pour les mains",
            "Lip gloss / huile à lèvres brillante"
        ],

        images: [
            "images/pack11.jpg"
        ],

        featured: false
    },


    /* ================================
       NEW COSMETIC PACKS
    ================================ */

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
   ALL PRODUCTS
========================================= */

const allBoxes = [

    ...accessoryBoxes,
    ...cosmeticBoxes,
    ...hijabBoxes

];


/* =========================================
   INSTAGRAM
========================================= */

const instagramURL =
    "https://www.instagram.com/sotra_beauty_by_aya/";


/* =========================================
   LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem(
        "sotraLanguage"
    ) || "en";


/* =========================================
   GENERAL TRANSLATIONS
========================================= */

const translations = {

    en: {

        home: "Home",

        accessories: "Accessories Boxes",

        cosmetics: "Cosmetics Boxes",

        hijabs: "Hijab Boxes",

        about: "About Us",

        contact: "Contact",

        discover: "Discover",

        accessoriesCollection:
            "Our Accessories Collection",

        cosmeticsCollection:
            "Our Cosmetics Collection",

        hijabCollection:
            "Our Hijab Collection",

        simpleEasy:
            "Simple & Easy",

        howToOrder:
            "How To Order",

        step1Title:
            "Choose Your Box",

        step1Text:
            "Browse our beautiful collections and choose the box you love.",

        step2Title:
            "Contact Us",

        step2Text:
            "Click the Instagram button and send us a message.",

        step3Title:
            "Confirm Your Order",

        step3Text:
            "We will confirm your order and delivery details with you.",

        aboutTitle:
            "About Sotra Beauty",

        aboutHeading:
            "Beauty, elegance and love in every box.",

        aboutText1:
            "Sotra Beauty by Aya was created with love to bring beautiful and feminine beauty boxes to every woman.",

        aboutText2:
            "Each box is carefully prepared with elegant details, lovely accessories and beauty essentials.",

        contactSmall:
            "Let's Talk",

        contactTitle:
            "Contact Us",

        contactText:
            "For orders, questions or more information, contact us directly on Instagram.",

        instagram:
            "ORDER ON INSTAGRAM",

        viewDetails:
            "VIEW DETAILS",

        transfer:
            "Transfer fee",

        total:
            "Total",

        close:
            "CLOSE",

        included:
            "Included in this box",

        footerText:
            "© 2026 Sotra Beauty by Aya. All rights reserved."

    },


    fr: {

        home: "Accueil",

        accessories: "Boxes Accessoires",

        cosmetics: "Boxes Cosmétiques",

        hijabs: "Boxes Hijabs",

        about: "À propos",

        contact: "Contact",

        discover: "Découvrez",

        accessoriesCollection:
            "Notre Collection d'Accessoires",

        cosmeticsCollection:
            "Notre Collection de Cosmétiques",

        hijabCollection:
            "Notre Collection de Hijabs",

        simpleEasy:
            "Simple & Facile",

        howToOrder:
            "Comment Commander",

        step1Title:
            "Choisissez Votre Box",

        step1Text:
            "Découvrez nos magnifiques collections et choisissez la box qui vous plaît.",

        step2Title:
            "Contactez-Nous",

        step2Text:
            "Cliquez sur le bouton Instagram et envoyez-nous un message.",

        step3Title:
            "Confirmez Votre Commande",

        step3Text:
            "Nous confirmerons avec vous votre commande et les détails de livraison.",

        aboutTitle:
            "À propos de Sotra Beauty",

        aboutHeading:
            "Beauté, élégance et amour dans chaque box.",

        aboutText1:
            "Sotra Beauty by Aya a été créée avec amour pour proposer de magnifiques boxes beauté féminines.",

        aboutText2:
            "Chaque box est préparée avec soin avec des détails élégants, de jolis accessoires et des essentiels beauté.",

        contactSmall:
            "Parlons-nous",

        contactTitle:
            "Contactez-Nous",

        contactText:
            "Pour les commandes, les questions ou plus d'informations, contactez-nous directement sur Instagram.",

        instagram:
            "COMMANDER SUR INSTAGRAM",

        viewDetails:
            "VOIR LES DÉTAILS",

        transfer:
            "Frais de livraison",

        total:
            "Total",

        close:
            "FERMER",

        included:
            "Inclus dans cette box",

        footerText:
            "© 2026 Sotra Beauty by Aya. Tous droits réservés."

    },


    ar: {

        home: "الرئيسية",

        accessories: "علب الإكسسوارات",

        cosmetics: "علب مستحضرات التجميل",

        hijabs: "علب الحجاب",

        about: "من نحن",

        contact: "اتصل بنا",

        discover: "اكتشفي",

        accessoriesCollection:
            "مجموعة الإكسسوارات",

        cosmeticsCollection:
            "مجموعة مستحضرات التجميل",

        hijabCollection:
            "مجموعة الحجاب",

        simpleEasy:
            "بسيط وسهل",

        howToOrder:
            "كيفية الطلب",

        step1Title:
            "اختاري علبتك",

        step1Text:
            "تصفحي مجموعاتنا الجميلة واختاري العلبة التي تحبينها.",

        step2Title:
            "تواصلي معنا",

        step2Text:
            "اضغطي على زر Instagram وأرسلي لنا رسالة.",

        step3Title:
            "أكدي طلبك",

        step3Text:
            "سنقوم بتأكيد طلبك وتفاصيل التوصيل معك.",

        aboutTitle:
            "عن Sotra Beauty",

        aboutHeading:
            "الجمال والأناقة والحب في كل علبة.",

        aboutText1:
            "تم إنشاء Sotra Beauty by Aya بحب لتقديم علب جميلة وأنثوية لكل امرأة.",

        aboutText2:
            "كل علبة يتم تجهيزها بعناية مع تفاصيل أنيقة وإكسسوارات جميلة ومستحضرات أساسية.",

        contactSmall:
            "لنتحدث",

        contactTitle:
            "اتصلي بنا",

        contactText:
            "للطلبات أو الأسئلة أو لمزيد من المعلومات، تواصلي معنا مباشرة عبر Instagram.",

        instagram:
            "اطلبي عبر INSTAGRAM",

        viewDetails:
            "عرض التفاصيل",

        transfer:
            "رسوم التوصيل",

        total:
            "المجموع",

        close:
            "إغلاق",

        included:
            "محتويات هذه العلبة",

        footerText:
            "© 2026 Sotra Beauty by Aya. جميع الحقوق محفوظة."

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
                "Des pièces élégantes et de beaux détails réunis dans une box spéciale.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "Une jolie combinaison de belles pièces pour toutes les occasions.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "Une box spéciale qui associe élégance, style et de jolis petits détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "Une belle sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        9: {
            name: "Cosmetic Box 09",
            description:
                "Une belle collection cosmétique avec des accessoires féminins et des essentiels beauté soigneusement sélectionnés par Aya.",
            items: [
                "2 éponges de maquillage",
                "Petite Vaseline pour les lèvres",
                "Crème pour les mains",
                "Pince à cheveux papillon",
                "Strass",
                "Huile / gloss à lèvres rose",
                "Petite pochette en fourrure blanche avec nœud vichy et cerises",
                "Porte-clés Angel - Stitch rose"
            ]
        },

        10: {
            name: "Cosmetic Box 10",
            description:
                "Une charmante box beauté réunissant cosmétiques, accessoires et détails féminins élégants.",
            items: [
                "Miroir",
                "Pochette en fourrure rose avec cerises",
                "2 crèmes pour les mains",
                "Lip gloss",
                "Vaseline pour les lèvres",
                "Pince à cheveux fleur dorée",
                "Bague avec sa petite boîte",
                "2 beauty blenders",
                "Porte-clés Stitch"
            ]
        },

        11: {
            name: "Cosmetic Box 11",
            description:
                "Une collection beauté simple et élégante avec des essentiels cosmétiques du quotidien.",
            items: [
                "Miroir",
                "2 beauty blenders Anguoer",
                "Vaseline pour les lèvres",
                "2 crèmes pour les mains",
                "Lip gloss / huile à lèvres brillante"
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
                "Un délicat mélange de tons blush, parfait pour une touche douce et féminine.",
            items: [
                "Hijabs élégants",
                "Tons blush doux",
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
                "Une jolie box cosmétique avec des essentiels beauté soigneusement sélectionnés et des détails féminins élégants.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        17: {
            name: "New Pack 2",
            description:
                "Une charmante box cosmétique combinant des essentiels beauté avec de jolies touches féminines.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        18: {
            name: "New Pack 3",
            description:
                "Une belle collection cosmétique créée pour apporter une touche féminine et agréable à votre routine beauté.",
            items: [
                "Belle sélection cosmétique",
                "Essentiels beauté",
                "Jolis détails féminins"
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
                "مجموعة خاصة من القطع الجميلة المناسبة لكل مناسبة.",
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
                "علبة جمال مميزة تجمع بين الأناقة والأناقة العصرية والتفاصيل الجميلة.",
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

        9: {
            name: "Cosmetic Box 09",
            description:
                "مجموعة جميلة من مستحضرات التجميل مع إكسسوارات أنثوية وأساسيّات الجمال المختارة بعناية من طرف آية.",
            items: [
                "إسفنجتان للمكياج",
                "فازلين صغير للشفاه",
                "كريم لليدين",
                "مشبك شعر على شكل فراشة",
                "أحجار زينة",
                "زيت / ملمع شفاه وردي",
                "حقيبة فرو بيضاء صغيرة مع فيشي وكرز",
                "ميدالية مفاتيح Angel - Stitch وردية"
            ]
        },

        10: {
            name: "Cosmetic Box 10",
            description:
                "علبة جمال جميلة تجمع بين مستحضرات التجميل والإكسسوارات والتفاصيل الأنثوية الأنيقة.",
            items: [
                "مرآة",
                "حقيبة فرو وردية مع الكرز",
                "كريمان لليدين",
                "ملمع شفاه",
                "فازلين للشفاه",
                "مشبك شعر زهرة ذهبية",
                "خاتم مع علبته الصغيرة",
                "إسفنجتان للمكياج",
                "ميدالية مفاتيح Stitch"
            ]
        },

        11: {
            name: "Cosmetic Box 11",
            description:
                "مجموعة جمال بسيطة وأنيقة تحتوي على أساسيات التجميل اليومية.",
            items: [
                "مرآة",
                "إسفنجتان للمكياج Anguoer",
                "فازلين للشفاه",
                "كريمان لليدين",
                "ملمع شفاه / زيت شفاه لامع"
            ]
        },

        12: {
            name: "Trio Nude",
            description:
                "ثلاثة ألوان نود ناعمة وأنيقة لإطلالة كلاسيكية وجذابة.",
            items: [
                "حجابات أنيقة",
                "درجات نود ناعمة",
                "ستايل كلاسيكي وراقي"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "درجات موكا دافئة مع لمسة من الأناقة الكلاسيكية لإطلالة راقية.",
            items: [
                "حجابات أنيقة",
                "درجات موكا ونود",
                "ستايل أنيق ومتطور"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "مزيج ناعم من درجات البلاش الجميلة، مثالي لإطلالة أنثوية ورقيقة.",
            items: [
                "حجابات أنيقة",
                "درجات بلاش ناعمة",
                "ستايل أنثوي ورقيق"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "مجموعة راقية من الدرجات الرخامية التي تجمع بين الأناقة والجمال الطبيعي.",
            items: [
                "حجابات أنيقة",
                "درجات رخامية",
                "ستايل كلاسيكي وفاخر"
            ]
        },

        16: {
            name: "New Pack 1",
            description:
                "علبة مستحضرات تجميل جميلة تحتوي على أساسيات مختارة بعناية وتفاصيل أنثوية أنيقة.",
            items: [
                "مجموعة مستحضرات تجميل جميلة",
                "أساسيات جمال أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        17: {
            name: "New Pack 2",
            description:
                "علبة تجميل جميلة تجمع بين أساسيات الجمال ولمسات أنثوية أنيقة.",
            items: [
                "مجموعة مستحضرات تجميل جميلة",
                "أساسيات جمال أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        18: {
            name: "New Pack 3",
            description:
                "مجموعة جميلة من مستحضرات التجميل لإضافة لمسة أنثوية جميلة إلى روتينك اليومي.",
            items: [
                "مجموعة مستحضرات تجميل جميلة",
                "أساسيات الجمال",
                "تفاصيل أنثوية جميلة"
            ]
        },

        19: {
            name: "New Pack 4",
            description:
                "علبة تجميل أنيقة تجمع أساسيات الجمال الجميلة في مجموعة مميزة.",
            items: [
                "مجموعة مستحضرات تجميل جميلة",
                "أساسيات جمال أنيقة",
                "تفاصيل أنثوية مميزة"
            ]
        }

    }

};


/* =========================================
   GET PRODUCT TRANSLATION
========================================= */

function getProductTranslation(
    box
) {

    if (
        currentLanguage === "en"
    ) {

        return {

            name: box.name,

            description:
                box.description,

            items:
                box.items

        };

    }


    const languageData =
        productTranslations[
            currentLanguage
        ];


    if (
        languageData &&
        languageData[box.id]
    ) {

        return languageData[
            box.id
        ];

    }


    return {

        name: box.name,

        description:
            box.description,

        items:
            box.items

    };

}


/* =========================================
   GET GENERAL TRANSLATION
========================================= */

function getText(
    key
) {

    if (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) {

        return translations[
            currentLanguage
        ][key];

    }


    return translations.en[key] || key;

}


/* =========================================
   FORMAT PRICE
========================================= */

function getTotalPrice(
    box
) {

    return box.priceNumber +
        transferFee;

}


/* =========================================
   DISPLAY ACCESSORIES
========================================= */

function displayAccessories() {

    const container =
        document.querySelector(
            "#accessories-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    accessoryBoxes.forEach(
        (box) => {

            container.appendChild(
                createProductCard(
                    box
                )
            );

        }
    );

}


/* =========================================
   DISPLAY COSMETICS
========================================= */

function displayCosmetics() {

    const container =
        document.querySelector(
            "#cosmetics-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    cosmeticBoxes.forEach(
        (box) => {

            container.appendChild(
                createProductCard(
                    box
                )
            );

        }
    );

}


/* =========================================
   DISPLAY HIJABS
========================================= */

function displayHijabs() {

    const container =
        document.querySelector(
            "#hijabs-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    hijabBoxes.forEach(
        (box) => {

            container.appendChild(
                createProductCard(
                    box
                )
            );

        }
    );

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
   CREATE PRODUCT CARD
========================================= */

function createProductCard(
    box
) {

    const product =
        getProductTranslation(
            box
        );


    const card =
        document.createElement(
            "div"
        );


    card.className =
        "product-card";


    card.dataset.productId =
        box.id;


    /* =====================================
       IMAGE AREA
    ====================================== */

    const imageWrapper =
        document.createElement(
            "div"
        );


    imageWrapper.className =
        "product-image";


    /* MAIN IMAGE */

    const image =
        document.createElement(
            "img"
        );


    image.src =
        box.images[0];


    image.alt =
        product.name;


    image.loading =
        "lazy";


    imageWrapper.appendChild(
        image
    );


    /* =====================================
       MULTIPLE IMAGE SLIDESHOW
    ====================================== */

    if (
        box.images.length > 1
    ) {

        let currentImage =
            0;


        setInterval(
            () => {

                currentImage =
                    (
                        currentImage + 1
                    ) %
                    box.images.length;


                image.style.opacity =
                    "0";


                setTimeout(
                    () => {

                        image.src =
                            box.images[
                                currentImage
                            ];

                        image.style.opacity =
                            "1";

                    },
                    250
                );

            },
            5000
        );

    }


    /* =====================================
       CARD CONTENT
    ====================================== */

    const content =
        document.createElement(
            "div"
        );


    content.className =
        "product-content";


    /* PRODUCT NAME */

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        product.name;


    content.appendChild(
        title
    );


    /* DESCRIPTION */

    const description =
        document.createElement(
            "p"
        );


    description.className =
        "product-description";


    description.textContent =
        product.description;


    content.appendChild(
        description
    );


    /* PRICE */

    const price =
        document.createElement(
            "div"
        );


    price.className =
        "product-price";


    price.textContent =
        box.price;


    content.appendChild(
        price
    );


    /* TRANSFER FEE */

    const transfer =
        document.createElement(
            "div"
        );


    transfer.className =
        "transfer-fee";


    transfer.innerHTML =
        `${getText("transfer")}: ${transferFee} DT`;


    content.appendChild(
        transfer
    );


    /* TOTAL */

    const total =
        document.createElement(
            "div"
        );


    total.className =
        "product-total";


    total.innerHTML =
        `${getText("total")}: <strong>${getTotalPrice(box)} DT</strong>`;


    content.appendChild(
        total
    );


    /* =====================================
       BUTTONS
    ====================================== */

    const buttons =
        document.createElement(
            "div"
        );


    buttons.className =
        "product-buttons";


    /* VIEW DETAILS */

    const detailsButton =
        document.createElement(
            "button"
        );


    detailsButton.className =
        "details-button";


    detailsButton.textContent =
        getText(
            "viewDetails"
        );


    detailsButton.addEventListener(
        "click",
        () => {

            openProductPopup(
                box.id
            );

        }
    );


    buttons.appendChild(
        detailsButton
    );


    /* INSTAGRAM */

    const instagramButton =
        document.createElement(
            "a"
        );


    instagramButton.className =
        "order-button";


    instagramButton.href =
        instagramURL;


    instagramButton.target =
        "_blank";


    instagramButton.rel =
        "noopener noreferrer";


    instagramButton.textContent =
        getText(
            "instagram"
        );


    buttons.appendChild(
        instagramButton
    );


    content.appendChild(
        buttons
    );


    /* =====================================
       APPEND
    ====================================== */

    card.appendChild(
        imageWrapper
    );


    card.appendChild(
        content
    );


    return card;

}


/* =========================================
   PRODUCT POPUP
========================================= */

function openProductPopup(
    productId
) {

    const box =
        allBoxes.find(
            (item) =>
                item.id === productId
        );


    if (!box) {

        return;

    }


    const product =
        getProductTranslation(
            box
        );


    const popup =
        document.querySelector(
            "#product-popup"
        );


    if (!popup) {

        return;

    }


    const popupImage =
        popup.querySelector(
            ".popup-image img"
        );


    const popupTitle =
        popup.querySelector(
            ".popup-content h2"
        );


    const popupDescription =
        popup.querySelector(
            ".popup-description"
        );


    const popupItems =
        popup.querySelector(
            ".popup-items"
        );


    const popupPrice =
        popup.querySelector(
            ".popup-price"
        );


    const popupTransfer =
        popup.querySelector(
            ".popup-transfer"
        );


    const popupTotal =
        popup.querySelector(
            ".popup-total"
        );


    const popupOrder =
        popup.querySelector(
            ".popup-order"
        );


    if (popupImage) {

        popupImage.src =
            box.images[0];

        popupImage.alt =
            product.name;

    }


    if (popupTitle) {

        popupTitle.textContent =
            product.name;

    }


    if (popupDescription) {

        popupDescription.textContent =
            product.description;

    }


    if (popupItems) {

        popupItems.innerHTML = "";


        product.items.forEach(
            (item) => {

                const li =
                    document.createElement(
                        "li"
                    );


                li.textContent =
                    item;


                popupItems.appendChild(
                    li
                );

            }
        );

    }


    if (popupPrice) {

        popupPrice.textContent =
            box.price;

    }


    if (popupTransfer) {

        popupTransfer.textContent =
            `${getText("transfer")}: ${transferFee} DT`;

    }


    if (popupTotal) {

        popupTotal.innerHTML =
            `${getText("total")}: <strong>${getTotalPrice(box)} DT</strong>`;

    }


    if (popupOrder) {

        popupOrder.href =
            instagramURL;

        popupOrder.target =
            "_blank";

        popupOrder.rel =
            "noopener noreferrer";

        popupOrder.textContent =
            getText("instagram");

    }


    popup.classList.add(
        "active"
    );


    document.body.classList.add(
        "popup-open"
    );


    popup.dataset.productId =
        productId;

}


/* =========================================
   CLOSE PRODUCT POPUP
========================================= */

function closeProductPopup() {

    const popup =
        document.querySelector(
            "#product-popup"
        );


    if (!popup) {

        return;

    }


    popup.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "popup-open"
    );

}


/* =========================================
   POPUP EVENT LISTENERS
========================================= */

function setupPopup() {

    const popup =
        document.querySelector(
            "#product-popup"
        );


    if (!popup) {

        return;

    }


    const closeButton =
        popup.querySelector(
            ".popup-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProductPopup
        );

    }


    popup.addEventListener(
        "click",
        (event) => {

            if (
                event.target === popup
            ) {

                closeProductPopup();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeProductPopup();

            }

        }
    );

}


/* =========================================
   UPDATE POPUP LANGUAGE
========================================= */

function updatePopupLanguage() {

    const popup =
        document.querySelector(
            "#product-popup"
        );


    if (!popup) {

        return;

    }


    const productId =
        Number(
            popup.dataset.productId
        );


    if (
        !productId
    ) {

        return;

    }


    if (
        popup.classList.contains(
            "active"
        )
    ) {

        openProductPopup(
            productId
        );

    }

}


/* =========================================
   STATIC TEXT
========================================= */

function updateStaticText() {

    /* NAVIGATION */

    const navHome =
        document.querySelector(
            '.nav-links a[href="#home"]'
        );


    const navAccessories =
        document.querySelector(
            '.nav-links a[href="#accessories"]'
        );


    const navCosmetics =
        document.querySelector(
            '.nav-links a[href="#cosmetics"]'
        );


    const navHijabs =
        document.querySelector(
            '.nav-links a[href="#hijabs"]'
        );


    const navAbout =
        document.querySelector(
            '.nav-links a[href="#about"]'
        );


    const navContact =
        document.querySelector(
            '.nav-links a[href="#contact"]'
        );


    if (navHome) {

        navHome.textContent =
            getText("home");

    }


    if (navAccessories) {

        navAccessories.textContent =
            getText("accessories");

    }


    if (navCosmetics) {

        navCosmetics.textContent =
            getText("cosmetics");

    }


    if (navHijabs) {

        navHijabs.textContent =
            getText("hijabs");

    }


    if (navAbout) {

        navAbout.textContent =
            getText("about");

    }


    if (navContact) {

        navContact.textContent =
            getText("contact");

    }


    /* ACCESSORIES SECTION */

    const accessoriesSection =
        document.querySelector(
            "#accessories"
        );


    if (accessoriesSection) {

        const small =
            accessoriesSection.querySelector(
                ".section-title p"
            );

        const title =
            accessoriesSection.querySelector(
                ".section-title h2"
            );


        if (small) {

            small.textContent =
                getText("discover");

        }


        if (title) {

            title.textContent =
                getText(
                    "accessoriesCollection"
                );

        }

    }


    /* COSMETICS SECTION */

    const cosmeticsSection =
        document.querySelector(
            "#cosmetics"
        );


    if (cosmeticsSection) {

        const small =
            cosmeticsSection.querySelector(
                ".section-title p"
            );

        const title =
            cosmeticsSection.querySelector(
                ".section-title h2"
            );


        if (small) {

            small.textContent =
                getText("discover");

        }


        if (title) {

            title.textContent =
                getText(
                    "cosmeticsCollection"
                );

        }

    }


    /* HIJABS SECTION */

    const hijabsSection =
        document.querySelector(
            "#hijabs"
        );


    if (hijabsSection) {

        const small =
            hijabsSection.querySelector(
                ".section-title p"
            );

        const title =
            hijabsSection.querySelector(
                ".section-title h2"
            );


        if (small) {

            small.textContent =
                getText("discover");

        }


        if (title) {

            title.textContent =
                getText(
                    "hijabCollection"
                );

        }

    }


    /* HOW TO ORDER */

    const howSection =
        document.querySelector(
            ".how-it-works"
        );


    if (howSection) {

        const small =
            howSection.querySelector(
                ".section-title p"
            );

        const title =
            howSection.querySelector(
                ".section-title h2"
            );


        if (small) {

            small.textContent =
                getText("simpleEasy");

        }


        if (title) {

            title.textContent =
                getText("howToOrder");

        }


        const steps =
            howSection.querySelectorAll(
                ".step"
            );


        if (steps.length >= 3) {

            const step1Title =
                steps[0].querySelector(
                    "h3"
                );

            const step1Text =
                steps[0].querySelector(
                    "p"
                );


            const step2Title =
                steps[1].querySelector(
                    "h3"
                );

            const step2Text =
                steps[1].querySelector(
                    "p"
                );


            const step3Title =
                steps[2].querySelector(
                    "h3"
                );

            const step3Text =
                steps[2].querySelector(
                    "p"
                );


            if (step1Title) {

                step1Title.textContent =
                    getText(
                        "step1Title"
                    );

            }


            if (step1Text) {

                step1Text.textContent =
                    getText(
                        "step1Text"
                    );

            }


            if (step2Title) {

                step2Title.textContent =
                    getText(
                        "step2Title"
                    );

            }


            if (step2Text) {

                step2Text.textContent =
                    getText(
                        "step2Text"
                    );

            }


            if (step3Title) {

                step3Title.textContent =
                    getText(
                        "step3Title"
                    );

            }


            if (step3Text) {

                step3Text.textContent =
                    getText(
                        "step3Text"
                    );

            }

        }

    }


    /* ABOUT */

    const about =
        document.querySelector(
            "#about"
        );


    if (about) {

        const small =
            about.querySelector(
                ".small-title"
            );

        const heading =
            about.querySelector(
                "h2"
            );

        const paragraphs =
            about.querySelectorAll(
                "p:not(.small-title)"
            );


        if (small) {

            small.textContent =
                getText("aboutTitle");

        }


        if (heading) {

            heading.textContent =
                getText("aboutHeading");

        }


        if (paragraphs.length >= 2) {

            paragraphs[0].textContent =
                getText("aboutText1");

            paragraphs[1].textContent =
                getText("aboutText2");

        }

    }


    /* CONTACT */

    const contact =
        document.querySelector(
            "#contact"
        );


    if (contact) {

        const small =
            contact.querySelector(
                ".section-title p"
            );

        const title =
            contact.querySelector(
                ".section-title h2"
            );

        const text =
            contact.querySelector(
                ".contact-text"
            );

        const button =
            contact.querySelector(
                ".gold-button"
            );


        if (small) {

            small.textContent =
                getText("contactSmall");

        }


        if (title) {

            title.textContent =
                getText("contactTitle");

        }


        if (text) {

            text.textContent =
                getText("contactText");

        }


        if (button) {

            button.textContent =
                getText("instagram");

        }

    }


    /* FOOTER */

    const footer =
        document.querySelector(
            "footer"
        );


    if (footer) {

        const footerParagraph =
            footer.querySelector(
                "p"
            );


        if (footerParagraph) {

            footerParagraph.textContent =
                getText("footerText");

        }

    }


    /* LANGUAGE BUTTON */

    const languageButton =
        document.querySelector(
            ".language-button"
        );


    if (languageButton) {

        const languageNames = {

            en: "EN",
            fr: "FR",
            ar: "AR"

        };


        languageButton.textContent =
            `${languageNames[currentLanguage]} ▾`;

    }

}


/* =========================================
   RTL / LTR
========================================= */

function updateDirection() {

    const html =
        document.documentElement;


    if (currentLanguage === "ar") {

        html.lang = "ar";
        html.dir = "rtl";

    } else {

        html.lang =
            currentLanguage;

        html.dir =
            "ltr";

    }

}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setupLanguageSwitcher() {

    const languageButton =
        document.querySelector(
            ".language-button"
        );


    const languageMenu =
        document.querySelector(
            ".language-menu"
        );


    const languageOptions =
        document.querySelectorAll(
            ".language-menu button"
        );


    if (
        !languageButton ||
        !languageMenu
    ) {

        return;

    }


    /* OPEN / CLOSE */

    languageButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            const isOpen =
                languageMenu.classList.toggle(
                    "active"
                );


            languageButton.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );

        }
    );


    /* CHOOSE LANGUAGE */

    languageOptions.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.language;


                    if (
                        !translations[language]
                    ) {

                        return;

                    }


                    setLanguage(
                        language
                    );


                    languageMenu.classList.remove(
                        "active"
                    );


                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    /* CLOSE WHEN CLICKING OUTSIDE */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !event.target.closest(
                    ".language-switcher"
                )
            ) {

                languageMenu.classList.remove(
                    "active"
                );


                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(
    language
) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    currentLanguage =
        language;


    /* SAVE */

    localStorage.setItem(
        "sotraLanguage",
        currentLanguage
    );


    /* DIRECTION */

    updateDirection();


    /* STATIC CONTENT */

    updateStaticText();


    /* PRODUCTS */

    displayAllProducts();


    /* POPUP */

    updatePopupLanguage();

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


if (
    menuToggle &&
    navLinks
) {

    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle(
                "active"
            );


            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                }


                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   INITIALIZE
========================================= */

setupLanguageSwitcher();

setupPopup();

setLanguage(
    currentLanguage
);
