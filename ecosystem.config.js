require('dotenv').config()

module.exports = {
    name: 'portfolio',
    script: 'yarn',
    args: `start -p ${process.env.PORT}`,
    env: {
        PORT: '3003'
    }
}
