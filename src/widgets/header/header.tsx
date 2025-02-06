import {clsx} from 'clsx';
import {Menu, RefreshCw} from 'lucide-react';
import {useLocation} from 'react-router';
import styles from './header.module.scss';

interface Props {
	className?: string;
}

export function Header({className}: Props) {
	const location = useLocation();
	const pageTitle = location.state?.pageTitle;

	return (
		<header className={clsx('container', styles.header, className)}>
			<button className={styles.burger}>
				<Menu
					size={36}
					strokeWidth={1.25}
				/>
			</button>
			<h1 className={clsx(styles.title)}>{pageTitle}</h1>
			<button className={styles.refresh}>
				<RefreshCw
					size={34}
					strokeWidth={1.25}
				/>
			</button>
		</header>
	);
}
