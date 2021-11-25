require('dotenv').config()

module.exports = {
    name: 'portfolio',
    script: 'node_modules/.bin/next',
    args: `start -p ${process.env.PORT}`
}
