import {clsx} from 'clsx';
import {ReactNode} from 'react';
import {NavLink} from 'react-router';
import styles from './navigation.module.scss';
import {useDetectMobileScreen} from '@/shared/use-detect-mobile-screen';

interface Props {
	title: string;
	icon: ReactNode;
	badge?: number;
	path: string;
}

export function NavButton({button}: {button: Props}) {
	const isMobile = useDetectMobileScreen();

	const {title, icon, badge, path} = button;
	return (
		<NavLink
			className={({isActive}) => clsx(styles.button, {[styles.active]: isActive})}
			to={path}
			state={{pageTitle: title}}
		>
			{icon}
			{!isMobile && <span>{title}</span>}
			{badge && <span className={styles.badge}>{badge}</span>}
		</NavLink>
	);
}
