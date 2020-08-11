import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

export async function logRequestHook(req: FastifyRequest, _reply: FastifyReply<ServerResponse>) {
  req.log.info({ req: req.req }, `${req.req.method} ${req.req.url}`);
}
