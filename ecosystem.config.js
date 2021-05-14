require('dotenv').config()

module.exports = {
    name: 'cloud storage',
    script: 'yarn',
    args: `start -p ${process.env.PORT}`,
    env: {
        PORT: '3003'
    }
}
