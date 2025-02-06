import {lazy} from 'react';

export const LazyProfile = lazy(() => import('./profile').then((exports) => ({default: exports.Profile})));
