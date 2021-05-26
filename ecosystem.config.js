require('dotenv').config()

module.exports = {
    name: 'portfolio',
    script: 'yarn',
    args: `start:web -p ${process.env.PORT}`
}
