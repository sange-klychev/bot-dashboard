import {useEffect} from 'react';
import data from '@/data.min.json';
import {Balance} from './balance';
import {Bots} from './bots';
import {Chart} from './chart';
import {TimeRange} from './time-range';

export function Dashboard() {
	return (
		<div>
			<Balance />
			<Chart />
			<Bots />
			<TimeRange />
		</div>
	);
}
