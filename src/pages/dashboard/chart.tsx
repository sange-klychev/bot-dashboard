import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js';
import clsx from 'clsx';
import {Line} from 'react-chartjs-2';
import styles from './chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Chart = () => {
	return (
		<div className={clsx(styles.chart)}>
			<Line
				data={{
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							data: [10, 20, 30, 40, 50, 60, 70],
							borderColor: 'rgb(255, 99, 132)',
							backgroundColor: 'rgba(255, 99, 132, 0.5)'
						}
					]
				}}
			/>
		</div>
	);
};
