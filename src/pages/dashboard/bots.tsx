import clsx from 'clsx';
import {MouseEvent} from 'react';
import {useData} from '../../shared/use-data';
import {Bot} from './bot';
import styles from './bot.module.scss';

export const Bots = () => {
	const {data} = useData();

	const botColors: Record<string, string> = {
		yellow: '#FFDB00',
		white: '#122135',
		green: '#5EA853',
		red: '#FF190A',
		blue: '#0096C7',
		orange: '#FF6500'
	};

	const getColor = (name: string) => {
		const color = name.replace('_bot', '');
		return botColors[color];
	};

	const handleClickBot = (event: MouseEvent<HTMLButtonElement>) => {
		console.log(event.currentTarget.name);
	};

	return (
		<div className={clsx('container', styles.bots)}>
			{data?.bots?.map((bot) => (
				<Bot
					color={getColor(bot.name)}
					key={bot.name}
					bot={bot}
					onClick={handleClickBot}
				/>
			))}
		</div>
	);
};
