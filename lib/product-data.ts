import { Product } from "./types";

const commonBrands = [
  {
    name: "B&C",
    models: ["TU002", "TM042", "TW040", "E150"]
  },
  {
    name: "Fruit Of The Loom",
    models: ["Original T", "Valueweight T", "Super Premium T", "Sofspun® T"]
  },
  {
    name: "Kariban",
    models: ["K356", "K357", "K358", "K359"]
  },
  {
    name: "James & Nicholson",
    models: ["JN001", "JN002", "JN800", "JN801"]
  },
  {
    name: "Neutral",
    models: ["O60001", "O61001", "O63001", "O64001"]
  },
  {
    name: "Promodoro",
    models: ["3000", "3005", "3025", "1400"]
  },
  {
    name: "Stedman",
    models: ["Classic-T", "Comfort-T", "Active-T", "Premium-T"]
  },
  {
    name: "Russell",
    models: ["165M", "165F", "180M", "180F"]
  },
  {
    name: "Tee Jays",
    models: ["1000", "1100", "1200", "8000"]
  },
  {
    name: "Sol's",
    models: ["Imperial", "Imperial Fit", "Regent", "Miss"]
  }
];

const sportBrands = [
  {
    name: "Build Your Brand",
    models: ["BY071", "BY072", "BY073", "BY074"]
  },
  {
    name: "Onna",
    models: ["Active Tee", "Performance Tee", "Sport Tee"]
  },
  {
    name: "Spiro",
    models: ["S287X", "S288X", "S290X"]
  },
  {
    name: "Sol's",
    models: ["Sporty", "Sporty Women", "Performance"]
  }
];

const puloverBrands = [
  {
    name: "B&C",
    models: ["WU620", "WU03K", "ID.203", "Hero Pro"]
  },
  {
    name: "Fruit Of The Loom",
    models: ["Classic Hooded Sweat", "Premium Hooded Sweat", "Lightweight Hooded Sweat"]
  },
  {
    name: "Kariban",
    models: ["K443", "K444", "K446", "K465"]
  },
  {
    name: "James & Nicholson",
    models: ["JN796", "JN797", "JN831", "JN832"]
  },
  {
    name: "Neutral",
    models: ["O63101", "O63201", "O64101", "O64201"]
  },
  {
    name: "Promodoro",
    models: ["5099", "5095", "5040", "5050"]
  },
  {
    name: "Stedman",
    models: ["Active Sweatshirt", "Unisex Hooded", "Men's Hooded", "Women's Hooded"]
  },
  {
    name: "Russell",
    models: ["262M", "262F", "575M", "575F"]
  },
  {
    name: "Tee Jays",
    models: ["5430", "5431", "5102", "5103"]
  },
  {
    name: "Sol's",
    models: ["Snake", "Spider", "Sully", "Success"]
  }
];

export const productCategories: Record<string, Product> = {
  "majice": {
    title: "Tisk na majice",
    description: "Kakovostne majice za tisk po vaši meri. Izberite med različnimi slogi in materiali.",
    metaDescription: "Profesionalni tisk na majice po meri. Široka izbira modelov in blagovnih znamk. Zagotovljena kakovost in konkurenčne cene.",
    features: [
      "100% bombaž",
      "Različne barve in velikosti",
      "Obstojnost tiska",
      "Pralno pri 40°C"
    ],
    brands: commonBrands,
    additionalInfo: "Ponujamo široko izbiro majic različnih blagovnih znamk. Na voljo so tudi druge znamke po naročilu. Ponudbo prilagodimo vašim željam in potrebam."
  },
  "majice-s-kratkimi-rokavi": {
    title: "Tisk na majice s kratkimi rokavi",
    description: "Klasične majice s kratkimi rokavi, idealne za poletje in vsakdanje nošenje.",
    metaDescription: "Tisk na majice s kratkimi rokavi. Premium kakovost in konkurenčne cene. Velika izbira modelov in barv.",
    features: [
      "Lahek material",
      "Udoben kroj",
      "Primerno za digitalni tisk",
      "Različne barve"
    ],
    brands: commonBrands,
    additionalInfo: "Naše majice s kratkimi rokavi so na voljo v različnih modelih, od osnovnih do premium. Izbirate lahko med različnimi gramaturami in kroji."
  },
  "majice-z-dolgimi-rokavi": {
    title: "Tisk na majice z dolgimi rokavi",
    description: "Tople in udobne majice z dolgimi rokavi za hladnejše dni.",
    metaDescription: "Profesionalni tisk na majice z dolgimi rokavi. Kakovostni materiali in obstojni tisk.",
    features: [
      "Topel material",
      "Obstojne barve",
      "Različni slogi ovratnika",
      "Primerno za vse tehnike tiska"
    ],
    brands: commonBrands,
    additionalInfo: "Majice z dolgimi rokavi so idealne za hladnejše dni in so na voljo v različnih debelinah materiala."
  },
  "sportne-majice": {
    title: "Tisk na športne majice",
    description: "Tehnične majice za šport in aktivno življenje.",
    metaDescription: "Specializiran tisk na športne majice. Tehnični materiali in DTF tehnologija tiska.",
    features: [
      "Hitro sušeči materiali",
      "DTF tehnologija tiska",
      "Zračnost",
      "Anti-bakterijska zaščita"
    ],
    brands: sportBrands,
    additionalInfo: "Uporabljamo posebno DTF tehnologijo tiska, ki omogoča visokokakovosten tisk tudi na tehnične materiale. Tisk je obstojen in ne vpliva na zračnost materiala."
  },
  "majice-brez-rokavov": {
    title: "Tisk na majice brez rokavov",
    description: "Lahke in zračne majice brez rokavov za vroče dni.",
    metaDescription: "Kakovosten tisk na majice brez rokavov. Široka izbira modelov in materialov.",
    features: [
      "Lahek material",
      "Različni izrezi",
      "Primerno za poletje",
      "Udobno nošenje"
    ],
    brands: commonBrands,
    additionalInfo: "Majice brez rokavov so idealne za vroče dni in športne aktivnosti. Na voljo so različni kroji in izrezi."
  },
  "zenske-majice": {
    title: "Tisk na ženske majice",
    description: "Elegantne in udobne ženske majice za vsako priložnost.",
    metaDescription: "Profesionalni tisk na ženske majice. Premium modeli in materiali za vsak stil.",
    features: [
      "Prilagojen ženski kroj",
      "Mehak material",
      "Različni izrezi",
      "Premium kakovost"
    ],
    brands: commonBrands,
    additionalInfo: "Ženske majice so na voljo v različnih krojih in modelih, prilagojenih ženskemu telesu."
  },
  "zenske-majice-kratki-rokavi": {
    title: "Tisk na ženske majice s kratkimi rokavi",
    description: "Modne ženske majice s kratkimi rokavi za vsak dan.",
    metaDescription: "Tisk na ženske majice s kratkimi rokavi. Elegantni kroji in kakovostni materiali.",
    features: [
      "Ženstveni kroji",
      "Različne dolžine",
      "Mehki materiali",
      "Modni detajli"
    ],
    brands: commonBrands,
    additionalInfo: "Ženske majice s kratkimi rokavi so na voljo v različnih krojih in dolžinah, primerne za vse priložnosti."
  },
  "mehke-triblend-majice": {
    title: "Tisk na mehke triblend majice",
    description: "Ultra mehke triblend majice za maksimalno udobje.",
    metaDescription: "Specializiran tisk na triblend majice. Izjemna mehkoba in udobje nošenja.",
    features: [
      "Mešanica materialov",
      "Izjemna mehkoba",
      "Moderni kroji",
      "Odlično prileganje"
    ],
    brands: commonBrands,
    additionalInfo: "Triblend majice so izdelane iz mešanice bombaža, poliestra in viskoze, kar zagotavlja izjemno mehkobo in udobje."
  },
  "tank-topi": {
    title: "Tisk na tank tope",
    description: "Športni in modni tank topi za aktivno življenje.",
    metaDescription: "Kakovosten tisk na tank tope. Široka izbira modelov za šport in prosti čas.",
    features: [
      "Športni kroji",
      "Različni izrezi",
      "Lahki materiali",
      "Zračnost"
    ],
    brands: commonBrands,
    additionalInfo: "Tank topi so idealni za športne aktivnosti in vroče dni. Na voljo so različni kroji in izrezi."
  },
  "majice-v-izrez": {
    title: "Tisk na majice z V-izrezom",
    description: "Elegantne majice z V-izrezom za moderen videz.",
    metaDescription: "Profesionalni tisk na majice z V-izrezom. Premium kakovost in eleganten videz.",
    features: [
      "Eleganten V-izrez",
      "Moderni kroji",
      "Kakovostni materiali",
      "Različne globine izreza"
    ],
    brands: commonBrands,
    additionalInfo: "Majice z V-izrezom so na voljo v različnih globinah izreza in so primerne za eleganten ali sproščen videz."
  },
  "puloverji-jope": {
    title: "Tisk na puloverje in jope",
    description: "Kakovostni puloverji in jope za tisk, primerni za vse letne čase.",
    metaDescription: "Profesionalni tisk na puloverje in jope. Široka izbira modelov in materialov za vse priložnosti.",
    features: [
      "Visokokakovostni materiali",
      "Različne debeline materiala",
      "Obstojnost tiska",
      "Pralno pri 40°C"
    ],
    brands: puloverBrands,
    additionalInfo: "Ponujamo široko izbiro puloverjev različnih blagovnih znamk. Izbirate lahko med lahkimi pomladnimi in debelejšimi zimskimi modeli."
  },
  "puloverji-s-kapuco": {
    title: "Tisk na puloverje s kapuco",
    description: "Moderni puloverji s kapuco za udobje in stil.",
    metaDescription: "Kakovosten tisk na puloverje s kapuco. Premium modeli in materiali.",
    features: [
      "Udobna kapuca",
      "Žep na sprednji strani",
      "Dvojno šivani robovi",
      "Kenguru žep"
    ],
    brands: puloverBrands,
    additionalInfo: "Vsi puloverji s kapuco so izdelani iz kakovostnih materialov in so primerni za vsakodnevno nošenje."
  },
  "sportni-puloverji": {
    title: "Tisk na športne puloverje",
    description: "Tehnični športni puloverji za aktivno življenje.",
    metaDescription: "Specializiran tisk na športne puloverje. Tehnični materiali in DTF tehnologija.",
    features: [
      "Hitro sušeči materiali",
      "DTF tehnologija tiska",
      "Zračnost",
      "Anti-bakterijska zaščita"
    ],
    brands: puloverBrands,
    additionalInfo: "Uporabljamo posebno DTF tehnologijo tiska, ki zagotavlja visoko kakovost in obstojnost tiska na tehničnih materialih."
  },
  "puloverji-z-zadrgo": {
    title: "Tisk na puloverje z zadrgo",
    description: "Praktični puloverji z zadrgo za večjo prilagodljivost.",
    metaDescription: "Profesionalni tisk na puloverje z zadrgo. Kakovostni materiali in praktična zasnova.",
    features: [
      "Kakovostna zadrga",
      "Dvojni žepi",
      "Ojačani šivi",
      "Različne debeline"
    ],
    brands: puloverBrands,
    additionalInfo: "Puloverji z zadrgo so na voljo v različnih debelinah in so primerni za različne priložnosti."
  },
  "otroske-majice": {
    title: "Tisk na otroške majice",
    description: "Kakovostne otroške majice za tisk, primerne za vse starosti.",
    metaDescription: "Profesionalni tisk na otroške majice. Varni materiali in obstojne barve.",
    features: [
      "Varni materiali",
      "Različne velikosti",
      "Obstojne barve",
      "Pralno pri 40°C"
    ],
    brands: commonBrands,
    additionalInfo: "Otroške majice so na voljo v velikostih od 92 do 164. Uporabljamo samo certificirane materiale, varene za otroško kožo."
  }
};