import {clsx} from 'clsx';

interface Props {
	className?: string;
}

export function Navigation({className}: Props) {
	return <nav className={clsx('', className)}>navigation</nav>;
}
