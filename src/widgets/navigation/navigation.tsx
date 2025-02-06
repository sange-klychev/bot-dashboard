import {clsx} from 'clsx';
import {ChartNetwork, CircleDollarSign, Cog, List, ShoppingCart} from 'lucide-react';
import {NavButton} from './nav-button';
import styles from './navigation.module.scss';

export function Navigation() {
	const navButtons = [
		{
			title: 'Dashboard',
			path: '/',
			icon: (
				<List
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Megabot',
			path: '/megabot',
			icon: (
				<ChartNetwork
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Bot market',
			path: '/bot-market',
			icon: (
				<ShoppingCart
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Coin prices',
			path: '/coin-prices',
			icon: (
				<CircleDollarSign
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Profile',
			path: '/profile',
			badge: 3,
			icon: (
				<Cog
					size={48}
					strokeWidth={1.25}
				/>
			)
		}
	];
	return (
		<nav className={clsx(styles.navigation)}>
			<div className={clsx('container', styles.buttons)}>
				{navButtons.map((button) => (
					<NavButton
						key={button.title}
						button={button}
					/>
				))}
			</div>
		</nav>
	);
}
