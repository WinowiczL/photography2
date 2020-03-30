import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const slubna: Details = {
  type: SessionType.SLUBNA,
  descriptionImage: './assets/slubna/8reportazslubny.jpg',
  description: 'Dzień ślubu zawsze stoi pod znakiem miłości, czułości i wzruszeń. Decydując się na wybór fotografa obdarzacie go ogromnym zaufaniem, dając możliwość towarzyszenia Wam w tym wyjątkowym dniu. Według stosowanej przeze mnie techniki para młoda powinna czuć się swobodnie i być w stanie niemal zapomnieć o mojej obecności, po to, aby skupić się tylko na sobie i cudownym przeżyciu tych niezapomnianych chwil. Reportaż ślubny rozpoczynamy już od samego rana od przygotowań Pani i Pana Młodego aż do Oczepin. Jednak na tym nie kończy się nasza przygoda. W niedalekim czasie od Waszego ślubu spotykamy się ponownie na sesji ślubnej, która jest pięknym podsumowaniem i dopełnieniem pamiątki, która zostanie z Wami już na zawsze.',
  prepare: [
    'Zapoznanie się z ofertą, kontakt telefoniczny bądź mailowy.',
    'Decyzja pary młodej i wstępna rezerwacja terminu.',
    'Przesłanie wzoru umowy do akceptacji.',
    'Pierwsze spotkanie, podczas którego będziemy mieli okazję poznać się, porozmawiać oraz omówić interesujące Was szczegóły. Podczas spotkania podpisujemy umowę.',
    'Kolejne spotkanie jest około tydzień/dwa tygodnie przed datą ślubu. To wtedy ustalamy dokładny przebieg dnia oraz dopinamy wszystkie logistyczne szczegóły.',
    'W dzień ślubu wszystko jest już ustalone, a rozliczenie za usługę następuje do tygodnia od ślubu. Wtedy też umawiamy się na spotkanie na sesji plenerowej.',
    'Do miesiąca od sesji plenerowej otrzymujecie gotowy materiał ze zdjęciami reportażowymi z wesela oraz sesji plenerowej.'
  ],
  carouselOptions: {
    slides: [
      {image: './assets/slubna/1reportażslubny.jpg'},
      {image: './assets/slubna/2reportazslubny.jpg'},
      {image: './assets/slubna/3reportazslubny.jpg'},
      {image: './assets/slubna/4reportazslubny.jpg'},
      {image: './assets/slubna/5reportazslubny.jpg'},
      {image: './assets/slubna/6reportazslubny.jpg'},
      {image: './assets/slubna/7reportazslubny.jpg'},
      {image: './assets/slubna/gotowymateriałreportazslubny.jpg'},
      {image: './assets/slubna/wieczórpanienski.jpg'},

    ], itemsPerSlide: 4
  },
  price: {
    mini: {
      price: 2700,
      inPrice: [
        'około obrobionych 700 zdjęć w formie elektronicznej',
        '20 fotografii w formacie 15x23',
        'pendrive z gotowymi fotografiami',
        'link do galerii z możliwością udostępnienia dla gości',
        'mini sesja pary młodej'
      ]
    },
    standard: {
      price: 3500,
      inPrice: [
        'około obrobionych 700 zdjęć w formie elektronicznej',
        '20 fotografii w formacie 15x23',
        'pendrive z gotowymi fotografiami',
        'link do galerii z możliwością udostępnienia dla gości',
        'wysokiej jakości foto książka',
        'sesja plenerowa'
      ]
    },
    max: {
      price: 4000,
      inPrice: [
        'około obrobionych 700 zdjęć w formie elektronicznej',
        '20 fotografii w formacie 15x23',
        'pendrive z gotowymi fotografiami',
        'link do galerii z możliwością udostępnienia dla gości',
        'trzy wysokiej jakości foto książki',
        'obraz na płótnie 60x40',
        'sesja plenerowa'
      ]
    }
  }
};
