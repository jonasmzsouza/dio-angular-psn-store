import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoCompatibilitiesComponent } from './components/info-compatibilities/info-compatibilities.component';
import { InfoResumeComponent } from './components/info-resume/info-resume.component';



@NgModule({
  declarations: [
    BackgroundImageComponent,
    InfoCardComponent,
    InfoCompatibilitiesComponent,
    InfoResumeComponent
  ],
  imports: [
    CommonModule
  ],
	exports: [
		BackgroundImageComponent,
		InfoCardComponent,
		InfoCompatibilitiesComponent,
		InfoResumeComponent
	]
})
export class GameModule { }
