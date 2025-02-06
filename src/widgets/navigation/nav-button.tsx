import {clsx} from 'clsx';
import {ReactNode} from 'react';
import styles from './navigation.module.scss';

interface Props {
	title: string;
	icon: ReactNode;
	badge?: number;
}

export function NavButton({title, icon, badge}: Props) {
	return (
		<button className={clsx(styles.button)}>
			{icon}
			<span>{title}</span>
			{badge && <span className={styles.badge}>{badge}</span>}
		</button>
	);
}
