import {formatNumber} from '@/shared/helpers/formatNumber';
import {useData} from '@/shared/use-data';
import clsx from 'clsx';
import styles from './balance.module.scss';

export const Balance = () => {
	const {data} = useData();

	return (
		<div className={clsx('container', styles.wrapper)}>
			<div className={clsx(styles.title)}>TRADING CAPITAL</div>
			<div className={clsx(styles.capitalWrapper)}>
				<div className={clsx(styles.capital)}>
					<span>{data.trading_capital}</span>
					<span className={clsx(styles.currency)}>{data.trading_capital_currency.toUpperCase()}</span>
				</div>
				<div className={clsx(styles.balanceWrapper)}>
					<div className={clsx(styles.balance)}>
						<span className={clsx(styles.balanceTitle)}>BALANCE:</span>
						<span>{formatNumber(data.balance)}</span>
					</div>
					<div className={clsx(styles.balance)}>
						<span className={clsx(styles.balanceTitle)}>ON HOLD:</span>
						<span>{formatNumber(data.on_hold)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
