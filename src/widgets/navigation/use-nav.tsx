import {useDetectMobileScreen} from '@/shared/use-detect-mobile-screen';
import {ChartNetwork, CircleDollarSign, Cog, List, ShoppingCart} from 'lucide-react';

export const useNav = () => {
	const isMobile = useDetectMobileScreen();
	const iconSize = isMobile ? 30 : 48;
	const strokeWidth = 1.25;

	const navButtons = [
		{
			title: 'Dashboard',
			path: '/',
			icon: (
				<List
					size={iconSize}
					strokeWidth={strokeWidth}
				/>
			)
		},
		{
			title: 'Megabot',
			path: '/megabot',
			icon: (
				<ChartNetwork
					size={iconSize}
					strokeWidth={strokeWidth}
				/>
			)
		},
		{
			title: 'Bot market',
			path: '/bot-market',
			icon: (
				<ShoppingCart
					size={iconSize}
					strokeWidth={strokeWidth}
				/>
			)
		},
		{
			title: 'Coin prices',
			path: '/coin-prices',
			icon: (
				<CircleDollarSign
					size={iconSize}
					strokeWidth={strokeWidth}
				/>
			)
		},
		{
			title: 'Profile',
			path: '/profile',
			badge: 3,
			icon: (
				<Cog
					size={iconSize}
					strokeWidth={strokeWidth}
				/>
			)
		}
	];

	return {navButtons};
};
