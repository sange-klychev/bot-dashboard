import {DashboardDto} from './types';

export interface IDataReturn {
	data: DashboardDto | null;
	dataset: Record<string, number[]> | null;
	dataLabels: string[];
}

export const useData = (): IDataReturn => {
	const botsData = localStorage.getItem('bots_data');

	if (!botsData) {
		return {data: null, dataset: null, dataLabels: []};
	}

	const data: DashboardDto = JSON.parse(botsData);

	const dataset = {
		'24h': data.bots.map((bot) => bot['24h']),
		'7d': data.bots.map((bot) => bot['7d']),
		'30d': data.bots.map((bot) => bot['30d']),
		all_time: data.bots.map((bot) => bot['all_time'])
	};

	const dataLabels = data.bots.map((bot) => bot.name);

	return {
		data,
		dataset,
		dataLabels
	};
};
