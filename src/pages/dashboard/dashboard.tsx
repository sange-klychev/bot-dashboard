import clsx from 'clsx';
import {useEffect} from 'react';

interface Props {
	className?: string;
}

export function Dashboard({className}: Props) {
	useEffect(() => {
		document.title = 'Dashboard';
		localStorage.setItem('pageTitle', 'Dashboard');
	}, []);
	return <div className={clsx('', className)}>Content</div>;
}
