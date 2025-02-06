import {BotMarket, CoinPrices, Dashboard, MegaBot, Profile} from '@/pages';
import {PageTitle} from '@/shared/page-title';
import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router';
import {App} from './app';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PageTitle title='Dashboard' />
						<Dashboard />
					</Suspense>
				)
			},
			{
				path: 'megabot',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PageTitle title='Megabot' />
						<MegaBot />
					</Suspense>
				)
			},
			{
				path: 'bot-market',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PageTitle title='Bot market' />
						<BotMarket />
					</Suspense>
				)
			},
			{
				path: 'coin-prices',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PageTitle title='Coin prices' />
						<CoinPrices />
					</Suspense>
				)
			},
			{
				path: 'profile',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PageTitle title='Profile' />
						<Profile />
					</Suspense>
				)
			}
		]
	}
]);
