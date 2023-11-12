const isProduction = true; // true = production | false = development

import { environment as developmentEnvironment } from './environment.development';
import { environment as productionEnvironment } from './environment.production';

export const environment = isProduction ? productionEnvironment : developmentEnvironment;