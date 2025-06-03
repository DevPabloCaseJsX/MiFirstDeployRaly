import express from 'express'
import employeesRoutes from './router/employes.routes.js'
import indexRouts from './router/index.routes.js'

const App = express()

App.set('case senstitive routing', true)
App.use(express.json())

App.use(indexRouts)
App.use('/api', employeesRoutes)

App.use((req, res, next) => {
    res.status(404).json({
        message: 'ENDPOINT NOT FOUND'
    })
})

export default App