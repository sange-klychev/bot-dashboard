import {lazy} from 'react';

export const LazyCoinPrices = lazy(() =>
	import('./coin-prices').then((exports) => ({default: exports.CoinPrices}))
);
