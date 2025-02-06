import {clsx} from 'clsx';
import {ChartNetwork, CircleDollarSign, Cog, List, ShoppingCart} from 'lucide-react';
import {NavButton} from './nav-button';
import styles from './navigation.module.scss';

export function Navigation() {
	const navButtons = [
		{
			title: 'Dashboard',
			icon: (
				<List
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Megabot',
			icon: (
				<ChartNetwork
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Bot market',
			icon: (
				<ShoppingCart
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Coin prices',
			icon: (
				<CircleDollarSign
					size={48}
					strokeWidth={1.25}
				/>
			)
		},
		{
			title: 'Profile',
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
						title={button.title}
						icon={button.icon}
						badge={button.badge}
					/>
				))}
			</div>
		</nav>
	);
}
