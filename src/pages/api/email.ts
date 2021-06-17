import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { rateLimit } from '../../lib'

const limiter = rateLimit({
    interval: 120 * 1000, // 120 seconds
    uniqueTokenPerInterval: 500 // Max 500 users per second
})

const email = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        await limiter.check(res, 2, 'CACHE_TOKEN')
    } catch {
        return res.status(429).json({ error: 'Rate limit exceeded' })
    }

    const { name, email, subject, content } = req.body

    if (!name || !email || !subject) {
        return res.status(400).json({ error: 'Bad Request' })
    }

    res.setHeader(
        'Cache-Control',
        'public, max-age=120, stale-while-revalidate=60'
    )
    try {
        const transporter = createTransport({
            host: process.env.SMTP_HOST,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'victor@gorchilov.com',
            subject: subject,
            html: `<h2><i>Email submitted from contact form on portfolio</i></h2>
                <p>${content}</p>`,
            text: content
        })
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }

    return res.status(201).json({ message: 'Successfully Sent Email' })
}

export default email
