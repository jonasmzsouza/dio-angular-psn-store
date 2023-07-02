export type Game = {
	id: number;
	name: string;
	imgCoverUrl: string;
	imgBackgroundUrl: string;
	type: string;
	price: string;
	shortDescription: string;
	release: string,
	distributor: string;
	isPreview: boolean;
	genres: {
		id: number;
		name: string;
	}[];
	platforms: {
		id: number;
		name: string;
	}[];
	compatibilities: {
		id: number;
		name: string;
	}[];
};
