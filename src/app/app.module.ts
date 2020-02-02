import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './sectors/navigation/navigation.component';
import { AboutMeComponent } from './sectors/about-me/about-me.component';
import { WelcomeComponent } from './sectors/welcome/welcome.component';
import { SessionsComponent } from './sectors/sessions/sessions.component';
import { StudioComponent } from './sectors/studio/studio.component';
import { VoucherComponent } from './sectors/voucher/voucher.component';
import { ContactComponent } from './sectors/contact/contact.component';
import { CardComponent } from './sectors/sessions/card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './sectors/footer/footer.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { CardsComponent } from './sectors/sessions/cards/cards.component';
import { SessionDetailsComponent } from './sectors/sessions/session-details/session-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SessionDescriptionComponent } from './sectors/sessions/session-details/session-description/session-description.component';
import { SessionPriceComponent } from './sectors/sessions/session-details/session-price/session-price.component';
import { SessionPrepareComponent } from './sectors/sessions/session-details/session-prepare/session-prepare.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SessionPortfolioComponent } from './sectors/sessions/session-details/session-portfolio/session-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    WelcomeComponent,
    SessionsComponent,
    StudioComponent,
    VoucherComponent,
    ContactComponent,
    CardComponent,
    FooterComponent,
    CardsComponent,
    SessionDetailsComponent,
    SessionDescriptionComponent,
    SessionPriceComponent,
    SessionPrepareComponent,
    CarouselComponent,
    SessionPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    FormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
