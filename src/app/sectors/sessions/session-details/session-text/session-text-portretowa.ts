import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const portretowa: Details = {
  type: SessionType.PORTRETOWA,
  descriptionImage: './assets/sessions/dziecieca.jpg',
  description: 'Sesja portretowa to doskonała okazja, by spojrzeć na siebie w nowym świetle. Moim celem jest sprawić, aby każdy z was dostrzegł drzemiące w was piękno, o którym w natłoku codziennych obowiązków zdarza się zapomnieć. Na sesji wspólnie pracujemy nad wydobyciem i wyeksponowaniem największych atutów i tego, co czyni was wyjątkowymi.',
  prepare: [
    'Przed sesją ustalamy, jaki rodzaj sesji Was interesuje. Wśród moich propozycji znajdują się: kobieca, sesja wizerunkowa do celów biznesowych, sesja w plenerze. Jestem otwarta na wasze propozycje i chętnie pomogę w realizacji Waszej wizji.Ogranicza nas jedynie wyobraźnia! ',
    'Niczym się nie martw! Zadbam o to, aby podczas sesji każdy czuł się swobodnie. Na codzień pracuję w osobami, które przed obiektywem stają po raz pierwszy. Podpowiem, jakie pozy sprawdzają się najlepiej. Ważne, aby na sesję przyjść wypoczętym i z całym zapasem pozytywnego nastawienia.',
    'Jeżeli w dzień sesji masz ochotę dodać sobie pewności siebie i poczuć się inaczej niż na co dzień, polecam skorzystać z profesjonalnych usług makijażystki i fryzjera. Z chęcią podpowiem Ci, jakie miejsca są sprawdzone przede mnie i moje klientki. Mimo to pamiętaj, że delikatnie podkreślona uroda w zupełności wystarczy, a wszystko zależy od efektu, jaki chcesz osiągnąć.',
    'Ubiór jest zależny od rodzaju i koncepcji sesji. To element, który omówimy wspólnie.'
  ],
  carouselOptions: {
    slides: [
      {image: './assets/portretowa/1sesjaportretowa.jpg'},
      {image: './assets/portretowa/2sesjaportretowa.jpg'},
      {image: './assets/portretowa/3sesjaportretowa.jpg'},
      {image: './assets/portretowa/4sesjaportretowa.jpg'},
      {image: './assets/portretowa/6sesjaportretowa.jpg'},
      {image: './assets/portretowa/7sesjaportretowa.jpg'},
      {image: './assets/portretowa/8sesjaportretowa.jpg'}
    ], itemsPerSlide: 4
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
