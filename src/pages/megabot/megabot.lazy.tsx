import {lazy} from 'react';

export const LazyMegaBot = lazy(() => import('./megabot').then((exports) => ({default: exports.MegaBot})));
