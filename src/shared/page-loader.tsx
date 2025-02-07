import clsx from 'clsx';
import {Loader} from 'lucide-react';
import styles from './page-loader.module.scss';

export const PageLoader = () => {
	return (
		<div className={clsx('container', styles.loader)}>
			<Loader
				size={32}
				className={clsx(styles.loaderIcon)}
			/>
		</div>
	);
};
