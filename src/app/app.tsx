import clsx from 'clsx';
import {Outlet} from 'react-router';
import {Header} from '../widgets/header';
import {Navigation} from '../widgets/navigation';
import styles from './app.module.scss';

export function App() {
	return (
		<div className={clsx(styles.wrapper)}>
			<Header />
			<div className={clsx('container', styles.content)}>
				<Outlet />
			</div>
			<Navigation />
		</div>
	);
}
