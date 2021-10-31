import LRU from 'lru-cache'
import { NextApiResponse } from 'next'

interface RateLimitOptions {
    uniqueTokenPerInterval?: number
    interval?: number
}

export const rateLimit = (options: RateLimitOptions) => {
    // taken from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.js
    const tokenCache = new LRU<string, any>({
        max: options.uniqueTokenPerInterval ?? 50,
        maxAge: options.interval ?? 1000 * 60 * 60
    })

    return {
        check: (res: NextApiResponse, limit: number, token: string) =>
            new Promise<void>((resolve, reject) => {
                let tokenCount = tokenCache.get(token)
                if (tokenCount === 0) tokenCache.set(token, tokenCount)
                tokenCount += 1

                const currentUsage = tokenCount
                const isRateLimited = currentUsage >= limit
                res.setHeader('X-RateLimit-Limit', limit)
                res.setHeader(
                    'X-RateLimit-Remaining',
                    isRateLimited ? 0 : limit - currentUsage
                )

                return isRateLimited ? reject() : resolve()
            })
    }
}
