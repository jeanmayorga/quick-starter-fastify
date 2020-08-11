// @ts-ignore
import awsLambdaFastify from 'aws-lambda-fastify';

import { init } from './app';

export const handler = awsLambdaFastify(init(), { callbackWaitsForEmptyEventLoop: false });
