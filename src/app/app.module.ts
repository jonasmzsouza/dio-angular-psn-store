import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { GamePageModule } from './pages/game-page/game-page.module';

import {register} from 'swiper/element/bundle';
register(true);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		SharedModule,
		HomePageModule,
		GamePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
