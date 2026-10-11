# Codexille: BakeVy-verkkosivun jatkokehitys

Toteuta tämän hakemiston nykyisen HTML/CSS/JS-demon pohjalta tuotantokelpoinen, saavutettava ja mobiiliystävällinen BakeVy-kotileipomon sivusto. Säilytä nykyinen lämmin, selkeä ja laadukas visuaalinen ilme, mutta tee toiminnallisuuksista oikeita. Älä oleta tuntemattomia yritystietoja oikeiksi.

## Vaihe 1: sisällöt ja perussivusto
- Vaihda esimerkkihinnat, tuotekategoriat, makuvaihtoehdot ja ruokavaliot yrittäjän hyväksymiin tietoihin. Hinnoille yksi ylläpidettävä tietolähde.
- Nykyinen demo sisältää selaimessa toimivan dynaamisen kakkuesikatselun (SVG), joka reagoi kokoon, pohjaan, täytteeseen ja koristeluun. Kehitä sitä tarvittaessa tarkemmaksi, mutta säilytä toimintaperiaate kevyenä ja nopeasti latautuvana.
- Lisää oikeat tuotekuvat, BakeVyn Instagram- ja Facebook-osoitteet, yrittäjän esittely ja yhteystiedot. Optimoi kuvat.
- Varmista SEO: metatiedot, Open Graph, sitemap, robots, paikallisen yrityksen rakenteinen data vain vahvistetuilla tiedoilla.
- Saavutettavuus: WCAG 2.2 AA, näppäimistökäyttö, kontrastit, ruudunlukijoiden tekstit ja lomakevirheet.
- Älä julkaise tarkkaa kotiosoitetta ilman yrittäjän lupaa.

## Vaihe 2: hallittava kapasiteettikalenteri
- Korvaa localStorage-oikopolku tietokannalla ja suojatulla yrittäjän kirjautumista vaativalla ylläpitonäkymällä.
- Näytä yleisölle viikkokohtaiset tilat `vapaata / rajoitetusti / täynnä` ilman asiakkaiden tietoja.
- Yrittäjä voi muokata viikkokapasiteettia, lisätä poikkeuksia/lomia, sulkea varauksia ja käsitellä kyselyjä.
- Viikkotila on aluksi käsin hallittava, sillä tilausmäärä ei suoraan kerro kuormaa (kakun koko/koristelu vaikuttavat).
- Älä anna asiakkaan koskaan muuttaa muiden näkemää varaustilannetta.

## Vaihe 3: oikea tilauskysely
- Rakenna palvelinpuolen validointi ja tietoturvallinen lähetys, roskapostisuojaus, tallennus sekä yrittäjälle ilmoitus.
- Kakkukoneen valinnat, hinta-arvio ja toivottu noutopäivä tallentuvat kyselyn mukana.
- Yrittäjä käsittelee tilauksen tiloissa `uusi -> tarjottu -> vahvistettu -> valmistuksessa -> valmis / peruttu`.
- Asiakkaalle automaattinen vastaanottokuittaus, jossa sanotaan selvästi ettei tilaus ole vielä vahvistettu.
- Selkeä tietosuojaseloste, määritelty säilytysaika, poistomenettely ja vain välttämättömät henkilötiedot.
- Älä lähetä tietoja suoraan avoimesta frontendistä sähköpostipalvelun salaisilla avaimilla.

## Vaihe 4: mahdollinen ennakkomaksu
- Maksut vasta yrittäjän vahvistamalle tilaukselle, esim. maksulinkin tai maksupalveluntarjoajan hyväksytyn checkoutin kautta.
- Palvelin varmistaa maksuwebhookin allekirjoituksen ja maksetun summan, ei luota selaimesta tulevaan hintaan.
- Ei korttitietojen omaa käsittelyä. Selvitä peruutukset, palautukset, tilausten ehdot, ALV ja maksun kirjanpitovirta.

## Toteutustapa ja laatu
- Aloita pienestä, ylläpidettävästä ratkaisusta. Voit ehdottaa esim. Next.js + Postgres + Prisma + suojattu ylläpitonäkymä + transaktiosähköposti, mutta perustele valinta yrittäjän budjetilla ja ylläpidettävyydellä.
- Pidä paikallinen demo helposti avattavana tai toteuta sille vastaava `npm run dev`-käynnistys, ja kirjoita käyttöönotto-ohjeet.
- Kirjoita testit hinnoittelulle, lomakevalidoinnille, kapasiteettitiloille ja valtuuksille; validoi erityisesti samanaikaiset tilaukset.
- Toteuta vaiheittain. Kysy puuttuvat oikeat hinnastot, some-URL:t, kuvat, varaus- ja peruutusehdot ennen julkaisemista. Älä keksi niitä.
