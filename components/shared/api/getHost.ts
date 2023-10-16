import { NextApiRequest } from "next";

export const getHost = (req: NextApiRequest) => {

    if (process.env.PRODUCTION_API_URL && process.env.PRODUCTION_API_URL !== '/')
        return process.env.PRODUCTION_API_URL

    const proxyHost = req.headers["x-forwarded-host"]
    const host = proxyHost ? proxyHost : req.headers.host
    return `${host}`
}