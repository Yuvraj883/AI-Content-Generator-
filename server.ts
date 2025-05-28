import { createServer, ServerResponse, IncomingMessage } from 'http'
import { parse, UrlWithParsedQuery } from 'url'
import next, { NextApiRequest, NextApiResponse } from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, dir: '.', quiet: !dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const parsedUrl: UrlWithParsedQuery = parse(req.url || '', true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(
          req as NextApiRequest,
          res as NextApiResponse,
          '/a',
          query
        )
      } else if (pathname === '/b') {
        await app.render(
          req as NextApiRequest,
          res as NextApiResponse,
          '/b',
          query
        )
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err: NodeJS.ErrnoException) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      // Server is ready
    })
})
