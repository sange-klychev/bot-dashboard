import {clsx} from 'clsx';
import {NavButton} from './nav-button';
import styles from './navigation.module.scss';
import {useNav} from './use-nav';

export function Navigation() {
	const {navButtons} = useNav();

	return (
		<nav className={clsx(styles.navigation)}>
			<div className={clsx('container', styles.buttons)}>
				{navButtons.map((button) => (
					<NavButton
						key={button.title}
						button={button}
					/>
				))}
			</div>
		</nav>
	);
}
