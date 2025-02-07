import path from 'path';
import {Configuration} from 'webpack';
import 'webpack-dev-server';
import {buildWebpack} from './config/build';
import {BuildMode, BuildOptions} from './config/build/types';

interface Env {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
}

export default (env: Env) => {
	const paths: BuildOptions['paths'] = {
		entry: path.resolve(__dirname, 'src', 'app/index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		output: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src'),
		config: path.resolve(__dirname, 'config'),
		rootFolder: path.resolve(__dirname)
	};

	const config: Configuration = buildWebpack({
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		paths,
		analyzer: env.analyzer ?? false
	});

	return config;
};
