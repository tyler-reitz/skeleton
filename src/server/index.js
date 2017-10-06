// @flow

import compression from 'compression'
import express from 'express'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

import { helloEndpointRoute } from '../shared/routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME))
})

app.get(helloEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from server! (received ${req.params.num})` })
})

app.listen(WEB_PORT, () =>
  console.log(
    `Server running on port ${WEB_PORT} ${isProd
      ? '(production)'
      : '(dev).\nKeep "npm run dev:wds" running in another terminal'
    }.`,
  ),
)
