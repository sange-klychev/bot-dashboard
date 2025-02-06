import {lazy} from 'react';

export const LazyBotMarket = lazy(() =>
	import('./bot-market').then((exports) => ({default: exports.BotMarket}))
);
