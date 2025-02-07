import {useData} from '@/shared/use-data';
import {useDetectMobileScreen} from '@/shared/use-detect-mobile-screen';
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
import {useSearchParams} from 'react-router';
import styles from './chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Chart = () => {
	const [searchParams] = useSearchParams();
	const {dataset, dataLabels} = useData();
	const isMobile = useDetectMobileScreen();
	const timeRange = searchParams.get('range') || 'all_time';

	return (
		<div className={clsx(styles.chart)}>
			<Line
				data={{
					labels: dataLabels,
					datasets: [
						{
							data: dataset[timeRange],
							borderColor: '#007FE5'
						}
					]
				}}
				options={{
					plugins: {legend: {display: false}},
					scales: {y: {display: false}, ...(isMobile && {x: {display: false}})}
				}}
			/>
		</div>
	);
};
