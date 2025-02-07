import {DashboardDto} from './types';

export const useData = (): {data: DashboardDto} => {
	const data = localStorage.getItem('bots_data');

	return {
		data: data ? JSON.parse(data) : []
	};
};
