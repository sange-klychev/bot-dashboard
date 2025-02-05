import {clsx} from 'clsx';
import {useEffect} from 'react';
import styles from './header.module.scss';

interface Props {
	className?: string;
}

export function Header({className}: Props) {
	const pageTitle = localStorage.getItem('pageTitle') || '';

	return (
		<header className={clsx(styles.header, className)}>
			<button>Burger</button>
			<h1 className={clsx(styles.title)}>{pageTitle}</h1>
			<button>Refresh</button>
		</header>
	);
}
