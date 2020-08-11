import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
export async function logResponseHook(req: FastifyRequest, reply: FastifyReply<ServerResponse>) {
  const responseTime = reply.getResponseTime();
  req.log.info(
    {
      res: reply.res,
      responseTime,
    },
    `${req.req.method} ${req.req.url} -> ${reply.res.statusCode}`,
  );
}
