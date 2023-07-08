import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	Input,
	OnInit,
} from '@angular/core';
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
		navigation: true,
		injectStyles: [
			`
			:host .swiper-button-next,
			:host .swiper-button-prev {
				background-color: #0070cc;
				color: white;
				border-radius: 50%;
				width: 40px;
				height: 40px;
			}

			:host .swiper-button-next:after,
			:host .swiper-button-prev:after {
				font-size: inherit;
				font-weight: 700;
			}

			:host .swiper-button-next:hover,
			:host .swiper-button-prev:hover {
				background-color: #004c8a;
			}

			:host .swiper-button-next.swiper-button-disabled,
			:host .swiper-button-prev.swiper-button-disabled {
				display: none;
		}
		`,
		],
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
