import clsx from 'clsx';
import {Outlet} from 'react-router';
import {Header} from '../widgets/header';
import {Navigation} from '../widgets/navigation';
import styles from './app.module.scss';

export function App() {
	return (
		<div className={clsx(styles.wrapper)}>
			<div className={clsx('container', styles.main)}>
				<Header />
				<div className={styles.content}>
					<Outlet />
				</div>
				<Navigation />
			</div>
		</div>
	);
}
