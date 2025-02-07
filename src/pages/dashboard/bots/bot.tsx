import BotSvg from '@/shared/assets/bot.svg';
import MegaBotSvg from '@/shared/assets/megabot.svg';
import {BotDto} from '@/shared/types';
import clsx from 'clsx';
import {MouseEvent} from 'react';
import styles from './bot.module.scss';

interface Props {
	color: string;
	bot: BotDto;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Bot = ({color, bot, onClick}: Props) => {
	const {name, type, variant} = bot;
	const isMegaBot = type === 'megabot';
	const percent = bot['24h'];
	const percentIsNegative = percent < 0;
	const isEmptyBot = variant === 'EMPTY';

	const getVariant = () => {
		if (isEmptyBot) {
			return (
				<span className={clsx(styles.empty)}>
					<span>PLACE BOT</span>
					<span>HERE</span>
				</span>
			);
		}
		return variant;
	};

	return (
		<button
			className={clsx(styles.bot, {[styles.megabot]: isMegaBot})}
			onClick={onClick}
			name={name}
		>
			{isMegaBot ? <MegaBotSvg color={color} /> : <BotSvg color={color} />}
			<span className={clsx(styles.title)}>{getVariant()}</span>
			{!isEmptyBot && (
				<span className={clsx(styles.percent, {[styles.negative]: percentIsNegative})}>
					{!percentIsNegative && '+'}
					{percent}%
				</span>
			)}
		</button>
	);
};
