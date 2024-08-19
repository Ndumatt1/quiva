import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const DATABASE_URL = configService.get<string>('DATABASE_URL');