import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const dziecieca: Details = {
  type: SessionType.DZIECIECA,
  descriptionImage: './assets/dziecieca/16sesjadziecięca.jpg',
  description: 'Dzieci rosną za szybko! Sesja zdjęciowa to sposób zatrzymania na dłużej chwil dziecięcej spontaniczności, beztroski i uśmiechu. Kilkuletnie doświadczenie we współpracy z małymi modelami i modelkami gwarantuje uchwycenie unikalnego charakteru każdego dziecka oraz całe mnóstwo świetnej zabawy! ',
  prepare: [
    'Ustalając godziny sesji zdjęciowej, pamiętaj o porach drzemki swojej pociechy. Wpasowanie terminu w  naturalny rytm dnia sprawia, że dziecko będzie wypoczęte i chętne do zabawy. To wszystko jest przepisem na udaną sesję zdjęciową z mnóstwem pozytywnej energii i ujęć pełnych uśmiechu.',

    'Przed przyjściem na sesję zachęcam, aby porozmawiać z pociechą i opowiedzieć o przygodzie, która Was czeka. Niech ten czas będzie ciekawym doświadczeniem i dobrą zabawą, z wyjątkową troską o dobre samopoczucie głównego bohatera dnia.',

    'Odpowiednio dopasuj stylizacje dziecka, tak aby była dla niego przede wszystkim wygodna. Dla chłopców dobrze sprawdzają się jeansy i koszula, czy gładka koszulka i dodatki takie jak muszki czy szelki. Dla dziewczynek różnego rodzaju spódniczki sukienki czy spodnie ze sweterkiem i dodatki typu opaski, kolorowe spinki i gumki.',

    'Czego unikać? Jaskrawych kolorów i nadruków na ubraniach, które w zbyt dużym stopniu skupiają wzrok podczas oglądania zdjęć.',

    'Czas trwania sesji to około 1h.'
  ],
  carouselOptions: {
    slides: [
      {image: './assets/dziecieca/1sesjadziecięca.jpg'},
      {image: './assets/dziecieca/2sesjadziecięca.jpg'},
      {image: './assets/dziecieca/3sesjadziecięca.jpg'},
      {image: './assets/dziecieca/4sesjadziecięca.jpg'},
      {image: './assets/dziecieca/5sesjadziecięca.jpg'},
      {image: './assets/dziecieca/6sesjadziecięca.jpg'},
      {image: './assets/dziecieca/7sesjadziecięca.jpg'},
      {image: './assets/dziecieca/9sesjadziecięca.jpg'},
      {image: './assets/dziecieca/10sesjadziecięca.jpg'},
      {image: './assets/dziecieca/11sesjadziecięca.jpg'},
      {image: './assets/dziecieca/12sesjadziecięca.jpg'},
      {image: './assets/dziecieca/13sesjadziecięca.jpg'},
      {image: './assets/dziecieca/14sesjadziecięca.jpg'},
      {image: './assets/dziecieca/15sesjadziecięca.jpg'}
    ], itemsPerSlide: 4
  },
  price: {
    mini: {
      price: 300,
      inPrice: [
        '10 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '2 stylizacje',
        'ujęcia rodzinne'
      ]
    },
    standard: {
      price: 450,
      inPrice: [
        '15 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '2 stylizacje',
        'ujęcia rodzinne',
        'obraz na płótnie 30x40'
      ]
    },
    max: {
      price: 650,
      inPrice: [
        '20 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '3 stylizacje',
        'ujęcia rodzinne',
        'wysokiej jakości foto książka',
        'obraz na płótnie 60x40'
      ]
    }
  }
};
