import { NextApiRequest, NextApiResponse } from 'next'

const email = (req: NextApiRequest, res: NextApiResponse): any => {
    return res.status(501).json({ message: 'Not Implemented' })
}

export default email
