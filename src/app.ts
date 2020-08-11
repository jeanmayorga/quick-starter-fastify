import aws from 'aws-sdk';
import fastify, { FastifyReply, FastifyRequest } from 'fastify';

import { logRequestHook } from './hooks/log-request';
import { logResponseHook } from './hooks/log-response';

import { ServerResponse } from 'http';

export function init() {
  aws.config.update({ region: 'us-east-1' });
  const app = fastify({ logger: true, disableRequestLogging: true });

  app.addHook('onRequest', logRequestHook);
  app.addHook('onResponse', logResponseHook);

  app.route({
    method: 'GET',
    url: '/:slug',
    handler: async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
      const slug = req.params.slug;

      return reply.status(201).send({ slug });
    },
  });

  app.listen(3000, async (err: Error) => {
    if (err) {
      // tslint:disable-next-line: no-console
      console.error(err);
    }
    console.log('server listening on 3000');
  });

  return app;
}

if (require.main === module) {
  // called directly i.e. "node app"
  init();
} else {
  // required as a module => executed on aws lambda
}
