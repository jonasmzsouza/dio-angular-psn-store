import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper';
import { SwiperDirective } from '../../directives/swiper.directive';
import { GameCardComponent } from '../game-card/game-card.component';
import { ButtonComponent } from '../button/button.component';
import { Game } from 'src/app/shared/models/game.model';

@Component({
	selector: 'app-treadmill',
	templateUrl: './treadmill.component.html',
	styleUrls: ['./treadmill.component.css'],
	standalone: true,
	imports: [SwiperDirective, GameCardComponent, ButtonComponent, CommonModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TreadmillComponent implements OnInit {
	public config: SwiperOptions = {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 1,
		centeredSlides: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			280: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1200: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			1400: {
				slidesPerView: 6,
				slidesPerGroup: 6,
			},
		},
	};

	@Input()
	title: string = '';

	@Input()
	games: Game[] = [];

	constructor() {}

	ngOnInit(): void {}
}
