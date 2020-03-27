import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const rodzinna: Details = {
  type: SessionType.RODZINNA,
  descriptionImage: './assets/sessions/dziecieca.jpg',
  description: 'Sesja rodzinna to doskonała okazja, by wspólnie doświadczyć czegoś nowego i spędzić więcej czasu w gronie najbliższych. Efektem współpracy są naturalne ujęcia, pokazujące prawdziwy, niepowtarzalny charakter Waszej rodziny. Uchwycenie emocji na fotografii przywoła wesołe wspomnienia i wspólnie spędzone chwile.',
  prepare: [
    'Warto porozmawiać z dziećmi o nadchodzącej sesji, zaciekawić ich i przygotować, aby nie czuły się zaskoczone i zdenerwowane nową sytuacją.',
    'Moim celem jest pokazać dzięki fotografii miłość i więź, jaka jest między Wami. Najbardziej lubię te ujęcia, kiedy wspólnie się bawicie i wygłupiacie. Kiedy mama przytula synka, mąż daje buziaka żonie czy siostra złapie drugą za rękę są drobnostkami, których nie powinniście wstydzić się podczas sesji. Dzięki temu zdjęcia będą naturalne i nabiorą wyjątkowego charakteru.',
    'Bardzo ważnym elementem jest spójny ubiór: spójność stylu, jeden kolor czy motyw przewodni, detale łączące Wasze stylizacje. Unikajcie wyboru koszulek z dużymi nadrukami, wzorzystych lub w bardzo jaskrawych kolorach.'
  ],
  carouselOptions: {
    slides: [], itemsPerSlide: 4
  },
  price: {
    mini: {
      price: 0,
      inPrice: []
    },
    standard: {
      price: 0,
      inPrice: []
    },
    max: {
      price: 0,
      inPrice: []
    }
  }
};
