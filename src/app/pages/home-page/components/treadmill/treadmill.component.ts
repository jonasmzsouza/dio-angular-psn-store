import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperDirective } from '../../directives/swiper.directive';
import { GameCardComponent } from '../game-card/game-card.component';


@Component({
  selector: 'app-treadmill',
  templateUrl: './treadmill.component.html',
  styleUrls: ['./treadmill.component.css'],
	standalone: true,
	imports: [
		SwiperDirective,
		GameCardComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TreadmillComponent implements OnInit {

	public config: SwiperOptions = {
    slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 5,
		centeredSlides: false,
		navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					hideOnClick: true
				},
		breakpoints: {
			280: {
				slidesPerView: 2,
				slidesPerGroup: 2
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3
			},
			1200: {
				slidesPerView: 4,
				slidesPerGroup: 4
			},
			1400: {
				slidesPerView: 6,
				slidesPerGroup: 6
			}
		}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
