// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy'
import Cookies from 'cookies';
const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  return new Promise((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req,res)
    const accessToken = cookies.get('access_token')
    if(accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }
    // don't send cookies to API server
    req.headers.cookie = ''

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false
    })
    
    proxy.once('proxyRes', () => {
      resolve(true)
    })
  })
}
