export const formatNumber = (num: number) => {
	const formatter = new Intl.NumberFormat('ru-RU', {
		style: 'decimal',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});

	return formatter.format(num);
};
