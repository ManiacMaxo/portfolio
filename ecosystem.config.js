require('dotenv').config()

module.exports = {
    name: 'portfolio',
    script: 'yarn',
    args: `next start -p ${process.env.PORT}`
}
