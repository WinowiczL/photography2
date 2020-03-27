import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const noworodkowa: Details = {
  type: SessionType.NOWORODKOWA,
  descriptionImage: './assets/noworodkowa/IMG_0683.jpg',
  description: 'Pierwsze tygodnie, gdy na świat przychodzi dziecko są dla rodziny szczególne. ' +
    'Uwielbiam obserwować, jak podczas sesji wpatrujecie się w nowego członka Waszej rodziny. Przyglądacie się tym małym stópkom, ' +
    'rączkom i buzi z ogromną miłością i czułością. Warto zatrzymać w pamięci te chwile, bo z tygodnia na tydzień maleństwo będzie ' +
    'rosnąć i stale się zmieniać. Sesja noworodkowa to niepowtarzalna pamiątka dla każdego członka rodziny, dlatego nie pozwólcie ' +
    'sobie go przegapić.',
  prepare: [
    'Sesję zdjęciową najlepiej wykonać między 5 a 14 dniem życia maleństwa. Przebiega ona wtedy sprawniej, ponieważ\n maluch\n' +
    'szybciej i głębiej zasypia, jest bardzo elastyczny, przez co bezpiecznie możemy go układać, oraz owijać.',

    'Czas trwania sesji jest zależny w dużej mierze od współpracy maluszka, jednak zazwyczaj sesja nie trwa dłużej niż\n 4\n godziny.',

    '      Istotne jest, by przed sesją fotograficzną dziecko pozostało jak najdłużej wybudzone (minimum godzinę przed\n' +
    '      spotkaniem). Dużą wagę przywiązuje do jego komfortu, dlatego podczas sesji, jeśli maleństwo tego potrzebuje,\n' +
    '      wykonujemy przerwy na karmienie, przebieranie czy przytulanie.',

    '      Do sesji zapewniam ubiór dla noworodka, opaski, owijki i wszelkiego rodzaju rekwizyty: miski, łóżeczka i kosze.\n',

    '      Ubiór rodziców: na zdjęciach najlepiej wyglądają ubrania w kolorach neutralnych i stonowanych. Proszę unikać\n' +
    '      kolorów\n' +
    '      jaskrawych oraz wszelkich napisów na koszulkach itp.',

    '      Warto podczas sesji mieć ze sobą smoczek, kocyk oraz większą ilości pampersów.\n',

    '      Moje studio jest odpowiednio przygotowane do przyjęcia najmniejszych modeli. Jest prawidłowa temperatura, spokój,\n' +
    '      miejsce do przewijania z przewijakiem i wszystkimi niezbędnymi akcesoriami: pieluchy, chusteczki suche mokre itp.,\n' +
    '      kanapa do odpoczynku dla rodziców, fotel do karmienia, kuchnia i toaleta. Na sesji dbam o to, byście czuli się\n' +
    '      swobodnie i komfortowo a moment naszego spotkania zapamiętali jako mile spędzony czas.',
  ],
  carouselOptions: {
    slides: [
      {image: './assets/noworodkowa/1sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/2sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/3sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/4sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/5sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/6sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/7sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/8sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/9sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/10sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/11sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/12sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/13sesjanoworodkowa.jpg'},
      {image: './assets/noworodkowa/14sesjanoworodkowa.jpg'},
    ], itemsPerSlide: 4
  },
  price: {
    mini: {
      price: 400,
      inPrice: [
        '15 zdjęć w formie elektronicznej',
        'odbitki 15x23',
        '3 stylizacje',
        'ujęcia rodzinne'
      ]
    },
    standard: {
      price: 550,
      inPrice: [
        '20 zdjęć w formie elektronicznej',
        'odbitki 15x23',
        '4 stylizacje',
        'ujęcia rodzinne',
        'obraz na płótnie 30x40'
      ]
    },
    max: {
      price: 750,
      inPrice: [
        '20 zdjęć w formie elektronicznej',
        'odbitki 15x23',
        '4 stylizacje',
        'ujęcia rodzinne',
        'wysokiej jakości foto książka',
        'obraz na płótnie 60x40'
      ]
    }
  }
};
