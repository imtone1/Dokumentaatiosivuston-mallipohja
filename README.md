# Dokumentaatiosivuston-mallipohja

Suomenkielinen Nextra-mallisivustopohja. Nextralla voit luoda helposti dokumentaatiosivustoja, jossa voit keskittyä itse tekstiin sivuston koodaamisen sivasta.

Tämän pohjan käyttö ei ole rajoitettu. Voit käyttää sitä vapaasti. Tarjoan myös koodissa pieniä koodin selityksiä ja vinkkejä.

![nextratemplate](https://github.com/imtone1/Dokumentaatiosivuston-mallipohja/assets/88165529/7ffc9893-e4f8-4fd7-b78c-04f34e1e0164)

## Tiedostorakenne

└───pages
    │   index.mdx
    │
    ├───SIVUSTON_OSA1
    │   │   _meta.json
    │   │   otsikko1.mdx
    │   
    └───OTSIKKO
        │   _meta.json
        │   index.mdx
        │   sivuston_sivu.mdx
        │   Sivu1.mdx
│
└───public
    │   favicon.svg
│   .gitignore
│   README.md
│   next.config.js
│   package.json
│   theme.config.jsx

## Asennus

Kun olet kloonannut tämän repositorion, asenna riippuvuudet `pnpm i` komennolla.

Tämän jälkeen voit `pnpm dev` komennolla voit käynnistää sovelluksen. Näet sivuston osoitteessa localhost:3000.

---

Tällä [linkillä](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fimtone1%2FDokumentaatiosivuston-mallipohja&showOptionalTeamCreation=false) voit kloonata ja julkaista tämän repositorion ilmaiseksi myös suoraan [Vercelin](https://vercel.com/home) kautta, jolloin sivustosi päätteeksi muodostuu .vercel.app. 


![Vercel deploy](https://github.com/imtone1/Dokumentaatiosivuston-mallipohja/assets/88165529/c160a22d-687d-4a6d-aba2-736030266175)
