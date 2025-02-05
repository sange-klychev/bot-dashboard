import {lazy} from 'react';

export const LazyDashboard = lazy(() =>
	import('./dashboard').then((exports) => ({default: exports.Dashboard}))
);
