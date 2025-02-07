import clsx from 'clsx';
import {MouseEvent, useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router';
import styles from './time-range.module.scss';

interface Props {
	name: string;
	id: string;
	value: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const TimeRangeButton = ({name, id, value, onClick}: Props) => {
	const isMounted = useRef(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const isActive = value === id;

	useEffect(() => {
		if (isMounted.current) {
			const params = {
				...Object.fromEntries([...searchParams]),
				range: String(value)
			};
			setSearchParams(params, {replace: true});
		}
		isMounted.current = true;
	}, [value]);

	return (
		<button
			className={clsx(styles.button, {[styles.active]: isActive})}
			onClick={onClick}
			name={id}
		>
			{name}
		</button>
	);
};
