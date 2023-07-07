import { Compatibility } from './compatibility.model';
import { Genre } from './genre.model';
import { Platform } from './platform.model';

export type Game = {
	id: number;
	name: string;
	imgCoverUrl: string;
	imgBackgroundUrl: string;
	type: string;
	price: string;
	shortDescription: string;
	release: string;
	distributor: string;
	rights: string;
	isPreview: boolean;
	genres: Genre[];
	platforms: Platform[];
	compatibilities: Compatibility[];
};
