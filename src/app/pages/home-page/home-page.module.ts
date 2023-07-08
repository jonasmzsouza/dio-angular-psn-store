import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './components/preview/preview.component';
import { TreadmillComponent } from './components/treadmill/treadmill.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HomePageComponent } from './home-page.component';
import { ButtonComponent } from './components/button/button.component';;


@NgModule({
  declarations: [
		PreviewComponent,
		HomePageComponent
	],
  imports: [
		CommonModule,
		GameCardComponent,
		TreadmillComponent,
		ButtonComponent
  ],
	exports: [
		HomePageComponent
	]
})
export class HomePageModule { }
