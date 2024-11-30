import { ShoppingCart, Truck, Palette, Package, CreditCard, RotateCcw } from "lucide-react";

export const faqData = {
  narocanje: {
    title: "Naročanje",
    icon: ShoppingCart,
    questions: [
      {
        question: "Kako naročim tisk na majice?",
        answer: "Naročanje je enostavno - kliknite na gumb 'Zahtevaj ponudbo', izpolnite obrazec s podatki o vašem projektu in poslali vam bomo personalizirano ponudbo v najkrajšem možnem času."
      },
      {
        question: "Kakšna je minimalna količina naročila?",
        answer: "Minimalna količina naročila je 10 kosov. Za manjše količine nas kontaktirajte za individualni dogovor."
      },
      {
        question: "Lahko naročim vzorčno majico pred večjim naročilom?",
        answer: "Da, lahko naročite vzorčno majico. Cena vzorčne majice se kasneje odšteje od končnega naročila."
      }
    ]
  },
  dostava: {
    title: "Dostava",
    icon: Truck,
    questions: [
      {
        question: "Kakšni so dobavni roki?",
        answer: "Standardni dobavni rok je 5-7 delovnih dni. Za nujna naročila ponujamo tudi ekspresno izdelavo v 2-3 delovnih dneh."
      },
      {
        question: "Ali dostavljate po celi Sloveniji?",
        answer: "Da, dostavljamo po celi Sloveniji. Dostava je brezplačna za naročila nad 200€."
      },
      {
        question: "Kako je z dostavo v tujino?",
        answer: "Dostavljamo tudi v tujino. Cena dostave se izračuna glede na državo dostave in težo paketa."
      }
    ]
  },
  tisk: {
    title: "Tisk in oblikovanje",
    icon: Palette,
    questions: [
      {
        question: "Katere tehnike tiska uporabljate?",
        answer: "Uporabljamo sitotisk, digitalni tisk in flex tisk. Tehnika tiska se izbere glede na vaše potrebe in količino naročila."
      },
      {
        question: "Kakšne formate datotek sprejemete?",
        answer: "Sprejemamo AI, EPS, PDF, PSD in visoko-resolucijske JPG datoteke. Vse datoteke morajo biti v CMYK barvnem prostoru."
      },
      {
        question: "Ali nudite oblikovanje?",
        answer: "Da, naši oblikovalci vam lahko pomagajo pri oblikovanju. Prva ura oblikovanja je brezplačna."
      }
    ]
  },
  materiali: {
    title: "Materiali in velikosti",
    icon: Package,
    questions: [
      {
        question: "Kakšne majice uporabljate?",
        answer: "Uporabljamo kakovostne majice priznanih blagovnih znamk (Fruit of the Loom, B&C, Gildan). Vse majice so 100% bombaž ali mešanica po želji."
      },
      {
        question: "Katere velikosti so na voljo?",
        answer: "Na voljo so velikosti od XS do 5XL. Za otroške majice ponujamo velikosti od 92 do 164."
      }
    ]
  },
  placilo: {
    title: "Plačilo",
    icon: CreditCard,
    questions: [
      {
        question: "Kakšni so plačilni pogoji?",
        answer: "Sprejemamo plačila po predračunu, s kreditno kartico ali po povzetju. Za redne stranke možnost plačila na 30 dni."
      },
      {
        question: "Ali izdajate račun?",
        answer: "Da, za vsako naročilo izdamo račun v skladu z zakonodajo."
      }
    ]
  },
  reklamacije: {
    title: "Reklamacije",
    icon: RotateCcw,
    questions: [
      {
        question: "Kaj če nisem zadovoljen z izdelkom?",
        answer: "Vaše zadovoljstvo nam je pomembno. V primeru napake pri tisku ali materialu izdelek brezplačno zamenjamo."
      },
      {
        question: "Kakšna je garancija na tisk?",
        answer: "Na obstojnost tiska dajemo garancijo 50 pranj pri upoštevanju navodil za vzdrževanje."
      }
    ]
  }
};