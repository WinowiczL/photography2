import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const rodzinna: Details = {
  type: SessionType.RODZINNA,
  descriptionImage: './assets/rodzinna/8sesjarodzinna.jpg',
  description: 'Sesja rodzinna to doskonała okazja, by wspólnie doświadczyć czegoś nowego i spędzić więcej czasu w gronie najbliższych. Efektem współpracy są naturalne ujęcia, pokazujące prawdziwy, niepowtarzalny charakter Waszej rodziny. Uchwycenie emocji na fotografii przywoła wesołe wspomnienia i wspólnie spędzone chwile.',
  prepare: [
    'Warto porozmawiać z dziećmi o nadchodzącej sesji, zaciekawić ich i przygotować, aby nie czuły się zaskoczone i zdenerwowane nową sytuacją.',
    'Moim celem jest pokazać dzięki fotografii miłość i więź, jaka jest między Wami. Najbardziej lubię te ujęcia, kiedy wspólnie się bawicie i wygłupiacie. Kiedy mama przytula synka, mąż daje buziaka żonie czy siostra złapie drugą za rękę są drobnostkami, których nie powinniście wstydzić się podczas sesji. Dzięki temu zdjęcia będą naturalne i nabiorą wyjątkowego charakteru.',
    'Bardzo ważnym elementem jest spójny ubiór: spójność stylu, jeden kolor czy motyw przewodni, detale łączące Wasze stylizacje. Unikajcie wyboru koszulek z dużymi nadrukami, wzorzystych lub w bardzo jaskrawych kolorach.'
  ],
  carouselOptions: {
    slides: [
      {image: './assets/rodzinna/1sesjarodzinna.jpg'},
      {image: './assets/rodzinna/2sesjarodzinna.jpg'},
      {image: './assets/rodzinna/3sesjarodzinna.jpg'},
      {image: './assets/rodzinna/4sesjarodzinna.jpg'},
      {image: './assets/rodzinna/5sesjarodzinna.jpg'},
      {image: './assets/rodzinna/6sesjarodzinna.jpg'},
      {image: './assets/rodzinna/7sesjarodzinna.jpg'},
      {image: './assets/rodzinna/8sesjarodzinna.jpg'},
      {image: './assets/rodzinna/1sesjalifestylowa.jpg'},
      {image: './assets/rodzinna/2sesjalifestylowa.jpg'},

    ], itemsPerSlide: 4
  },
  price: {
    mini: {
      price: 400,
      inPrice: [
        '15 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '2 stylizacje',
      ]
    },
    standard: {
      price: 550,
      inPrice: [
        '20 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '2 stylizacje',
        'obraz na płótnie 30x40'
      ]
    },
    max: {
      price: 750,
      inPrice: [
        '20 zdjęć w formie elektronicznej',
        'te same zdjęcia wydrukowane w formacie 15x23 (jedwab)',
        '3 stylizacje',
        'wysokiej jakości foto książka',
        'obraz na płótnie 60x40'
      ]
    }
  }
};
