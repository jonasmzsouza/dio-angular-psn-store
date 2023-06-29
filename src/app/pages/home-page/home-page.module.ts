import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './components/preview/preview.component';
import { SliderComponent } from './components/slider/slider.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
		PreviewComponent,
		SliderComponent,
		GameCardComponent,
		HomePageComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HomePageComponent
	]
})
export class HomePageModule { }
