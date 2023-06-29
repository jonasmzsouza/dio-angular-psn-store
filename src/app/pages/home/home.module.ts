import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './components/preview/preview.component';
import { SliderComponent } from './components/slider/slider.component';
import { GameCardComponent } from './components/game-card/game-card.component';



@NgModule({
  declarations: [
    PreviewComponent,
    SliderComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule
  ],
	exports: [
		PreviewComponent,
		SliderComponent,
		GameCardComponent
	]
})
export class HomeModule { }
