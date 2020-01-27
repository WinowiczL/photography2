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
import { CardDetailComponent } from './sectors/sessions/card-detail/card-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './sectors/footer/footer.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

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
    CardDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
