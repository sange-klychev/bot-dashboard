import {BotMarket, CoinPrices, Dashboard, MegaBot, Profile} from '@/pages';
import {PageLoader} from '@/shared/page-loader';
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
					<Suspense fallback={<PageLoader />}>
						<PageTitle title='Dashboard' />
						<Dashboard />
					</Suspense>
				)
			},
			{
				path: 'megabot',
				element: (
					<Suspense fallback={<PageLoader />}>
						<PageTitle title='Megabot' />
						<MegaBot />
					</Suspense>
				)
			},
			{
				path: 'bot-market',
				element: (
					<Suspense fallback={<PageLoader />}>
						<PageTitle title='Bot market' />
						<BotMarket />
					</Suspense>
				)
			},
			{
				path: 'coin-prices',
				element: (
					<Suspense fallback={<PageLoader />}>
						<PageTitle title='Coin prices' />
						<CoinPrices />
					</Suspense>
				)
			},
			{
				path: 'profile',
				element: (
					<Suspense fallback={<PageLoader />}>
						<PageTitle title='Profile' />
						<Profile />
					</Suspense>
				)
			}
		]
	}
]);
