import path, { join } from 'path';
import { fileURLToPath } from 'url';

import createExpoWebpackConfigAsync from '@expo/webpack-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [join(__dirname, 'node_modules/react-router-native')],
  });

  return config;
}
