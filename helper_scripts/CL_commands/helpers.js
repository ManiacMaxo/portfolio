const figlet = require('figlet')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')

const modules = {}

modules.config = {
    pagesDir: './src/pages',
    componentsDir: './src/components',
    templatesDir: './helper_scripts/templates'
}

modules.writeStart = (callback) => {
    chalk.yellow(
        figlet('Creator', (err, data) => {
            console.log(`\n${data}\n`)
            if (callback) callback()
        })
    )
}

modules.isUsedOnDir = (startPath, filter, onlyDirectories = false) => {
    if (!fs.existsSync(startPath)) {
        return false
    }

    if (onlyDirectories) {
        return fs.existsSync(`${startPath}/${filter}`)
    }

    const files = fs.readdirSync(startPath)
    let isFound = false

    for (let i = 0; i < files.length; i += 1) {
        const filename = path.join(startPath, files[i])
        const stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            modules.isUsedOnDir(filename, filter) // recurse
        } else if (filename.indexOf(filter) >= 0) {
            isFound = true
        }
    }

    return isFound
}

modules.getTempfromHandlebar = (tempPath, data, callback) => {
    fs.readFile(tempPath, 'utf-8', (err, source) => {
        if (err) throw err
        const template = handlebars.compile(source)
        const exportCode = template(data)

        callback(exportCode)
    })
}

modules.createPageFromTemplate = (filename, callback) => {
    modules.getTempfromHandlebar(
        `${modules.config.templatesDir}/page.hbs`,
        {
            filename
        },
        (code) => {
            fs.writeFile(
                `${modules.config.pagesDir}/${filename}.tsx`,
                code,
                { flag: 'wx' },
                (err) => {
                    if (err) throw err

                    callback()
                }
            )
        }
    )

    callback()
}

modules.createComponentFromTemplate = (options, callback = () => {}) => {
    const dir = `${modules.config.componentsDir}/${
        options.styled ? options.filename : ''
    }`

    options.styled && fs.mkdirSync(`${dir}`)

    modules.getTempfromHandlebar(
        `${modules.config.templatesDir}/component.hbs`,
        options,
        (code) => {
            fs.writeFile(
                `${dir}/${options.filename}.tsx`,
                code,
                { flag: 'wx' },
                (err) => {
                    if (err) throw err

                    callback()
                }
            )
        }
    )

    fs.writeFile(
        `${modules.config.componentsDir}/index.ts`,
        `export { ${options.filename} } from './${options.filename}'\n`,
        { flag: 'a+' },
        (err) => {
            if (err) throw err

            callback()
        }
    )

    if (!options.styled) {
        return callback()
    }

    fs.open(`${dir}/${options.filename}.module.scss`, 'w', (err) => {
        if (err) throw err

        callback()
    })
    modules.createIndexExporter({
        filename: options.filename,
        path: dir,
        isPage: false
    })

    callback()
}

modules.createIndexExporter = ({ filename, path }) => {
    modules.getTempfromHandlebar(
        `${modules.config.templatesDir}/index.hbs`,
        {
            filename
        },
        (code) => {
            fs.writeFile(`${path}/index.ts`, code, { flag: 'wx' }, (err) => {
                if (err) throw err
            })
        }
    )
}

module.exports = modules
