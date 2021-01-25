import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApodsComponent } from './components/apods/apods.component';
import { ApodComponent } from './components/apod/apod.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NASAService } from './services/nasa.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApodsComponent,
    ApodComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [NASAService],
  bootstrap: [AppComponent],
})
export class AppModule {}
