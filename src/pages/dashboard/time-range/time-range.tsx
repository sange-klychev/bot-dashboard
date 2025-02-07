import clsx from 'clsx';
import {MouseEvent, useState} from 'react';
import {useSearchParams} from 'react-router';
import {TimeRangeButton} from './time-range-button';
import styles from './time-range.module.scss';

export const TimeRange = () => {
	const [searchParams] = useSearchParams();
	const [range, setRange] = useState(searchParams.get('range') || 'all_time');

	const timeRanges = [
		{id: '24h', name: '24h'},
		{id: '7d', name: '7 days'},
		{id: '30d', name: '30 days'},
		{id: 'all_time', name: 'All Time'}
	];

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		const target = event.currentTarget;
		setRange(target.name);
	};

	return (
		<div className={clsx('container', styles.timeRange)}>
			<div className={clsx(styles.title)}>Time Range:</div>
			<div className={clsx(styles.ranges)}>
				{timeRanges.map(({id, name}) => (
					<TimeRangeButton
						key={id}
						name={name}
						id={id}
						value={range}
						onClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
};
