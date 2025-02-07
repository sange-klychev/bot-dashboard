export type BotDto = {
	name: string;
	type: 'bot' | 'megabot';
	variant: string;
	cost: number;
	'24h': number;
	'7d': number;
	'30d': number;
	'60d': number;
	'90d': number;
	all_time: number;
};

export type DashboardDto = {
	trading_capital: number;
	trading_capital_currency: string;
	balance: number;
	on_hold: number;
	bots: BotDto[];
};
