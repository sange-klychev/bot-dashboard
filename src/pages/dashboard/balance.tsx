import clsx from 'clsx';
import styles from './balance.module.scss';

export const Balance = () => {
	return (
		<div className={clsx('container', styles.wrapper)}>
			<div className={clsx(styles.title)}>TRADING CAPITAL</div>
			<div className={clsx(styles.capitalWrapper)}>
				<div className={clsx(styles.capital)}>
					<span>100000</span>
					<span className={clsx(styles.currency)}>USD</span>
				</div>
				<div className={clsx(styles.balanceWrapper)}>
					<div className={clsx(styles.balance)}>
						<span className={clsx(styles.balanceTitle)}>BALANCE:</span>
						<span>12</span>
					</div>
					<div className={clsx(styles.balance)}>
						<span className={clsx(styles.balanceTitle)}>ON HOLD:</span>
						<span>12</span>
					</div>
				</div>
			</div>
		</div>
	);
};
