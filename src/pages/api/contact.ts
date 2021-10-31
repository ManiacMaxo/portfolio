/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { rateLimit } from '../../lib'

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500 // Max 500 users per second
})

const contact = (req: NextApiRequest, res: NextApiResponse): any => {
    console.log(req.body)
    limiter
        .check(res, 10, 'CACHE_TOKEN')
        .then(() => res.send(JSON.stringify({ message: 'hello world' })))
        .catch(() => res.status(429).send('Too many requests'))
}

export default contact
