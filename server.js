const app = require('./server/index')
const PORT = process.env.PORT || 8081

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))