import { NextApiRequest } from "next/types";
export const getBaseUrl = (req: NextApiRequest) => {
    const proto = getProtocol(req)
    const host = getHost(req)
    const baseUrl = `${proto}://${host}`
    return baseUrl
}
export const getHost = (req: NextApiRequest) => {
    const proxyHost = req.headers["x-forwarded-host"]
    const host = (proxyHost ? proxyHost : req.headers.host) ?? '/'
    const hostname = Array.isArray(host) ? host[0] : host
    return hostname
}
export const getParam = (req: NextApiRequest, paramName: string) => {
    const param = req.query[paramName]
    const value = param instanceof Array ? param[0] : param
    return value
}
export const getProtocol = (req: NextApiRequest) => {
    const proxyProtocol = req.headers["x-forwarded-proto"]
    const protocol = (proxyProtocol ? proxyProtocol : req.headers.protocol) ?? 'http'
    const proto = Array.isArray(protocol) ? protocol[0] : protocol
    const proto1 = proto.split(',')[0]
    return proto1
}
export const getToken = (req: NextApiRequest) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
        return req.headers.authorization.split(' ')[1]
    else if (req.query && req.query.token)
        return Array.isArray(req.query.token) ? req.query.token[0] : req.query.token
    return undefined
}
