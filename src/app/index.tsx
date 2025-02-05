import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router';
import './index.scss';
import {router} from './router';

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root element not found');
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
