import {SessionType} from '../../session-communication.service';
import {Details} from '../session-details.component';

export const ciazowa: Details = {
  type: SessionType.CIAZOWA,
  descriptionImage: './assets/sessions/dziecieca.jpg',
  description: 'Promieniejesz! Wyglądasz pięknie! Ciąża Ci służy! Takie słowa na co dzień słyszysz jako przyszła mama. To dobry moment, aby zdecydować się na ciążową sesję zdjęciową i na dłużej zapamiętać uczucia, jakie towarzyszyły Wam w oczekiwaniu na Wasz mały cud. Sesja ciążowa jest to też doskonała okazja na poznanie mojego studia i stylu pracy, oraz rozwianie ewentualnych wątpliwości i pytań związanych z sesją noworodkową.',
  prepare: [
    'Sesję ciążową najlepiej wykonać między 30 a 35 tygodniem ciąży. Ważne, aby brzuszek był już ładnie zaokrąglony, a przyszła mama czuła się dobrze i komfortowo.',
    'Odradzam umawiania sesji blisko terminu porodu. Przyszłe mamy czują już wtedy większe zmęczenie i dyskomfort podczas zdjęć, a dodatkowo nigdy na 100% nie jesteśmy pewni dokładnej daty porodu. Ostatnie tygodnie ciąży to czas na odpoczynek i spokojne oczekiwanie na maluszka.',
    'Przy okazji sesji ciążowych udostępniamy Wam koronkowe szlafroki i sukienki o bardzo elastycznym i miłym materiale, które doskonale pasują do tego rodzaju zdjęć oraz sukienki i szlafroki koronkowe. Nie musisz martwić się o garderobę!',
    'Jeśli nigdy wcześniej nie miałaś sesji, nie stresuj się! Zawsze podpowiadam jak się ustawić i co zrobić podczas sesji. Planuje cały przebieg, aby czas spędzony w moim studio był dla Ciebie miłym i interesującym doświadczeniem.',
    'Na sesje ciążową warto zabrać zdjęcie USG dzidziusia oraz jakiś element jego przyszłej garderoby (np. buciki), który posłuży nam jako ciekawy rekwizyt.',
    'Pamiętajcie o swoich Kochanych Mężczyznach! Gwarantuje swobodną atmosferę i dużo śmiechu, dzięki czemu mam nadzieję, że sesja dla Panów przebiegnie szybko, sprawnie i bezboleśnie! ;)',
    'Czas trwania sesji to około 1,5h.'
  ],
  carouselOptions: {
    slides: [
      {image: './assets/ciazowa/1sesjaciążowa.jpg'},
      {image: './assets/ciazowa/2sesjaciążowa.jpg'},
      {image: './assets/ciazowa/3sesjaciążowa.jpg'},
      {image: './assets/ciazowa/4sesjaciążowa.jpg'},
      {image: './assets/ciazowa/5sesjaciążowa.jpg'},
      {image: './assets/ciazowa/6sesjaciążowa.jpg'}
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
