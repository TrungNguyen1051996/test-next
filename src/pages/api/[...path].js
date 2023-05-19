// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  // don't send cookies to API server

  req.headers.cookie = ''

  // /api/students
  // https://js-post-api.herokuapp.com/api/students

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false
  })

  // res.status(200).json({ name: 'Trung Nguyen' })
}
