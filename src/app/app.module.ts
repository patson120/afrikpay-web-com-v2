import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, ArrowRight, Plus } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FocusBusinessComponent } from './components/focus-business/focus-business.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadAppComponent,
    PartnersComponent,
    ServicesComponent,
    HeroComponent,
    NavigationComponent,
    MainContentComponent,
    FocusBusinessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ArrowRight, Plus })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }