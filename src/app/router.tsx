import {Dashboard} from '@/pages/dashboard';
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
						<Dashboard />
					</Suspense>
				)
			}
		]
	}
]);
