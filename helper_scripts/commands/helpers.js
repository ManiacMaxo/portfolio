const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')

const modules = {}

modules.config = {
    pagesDir: './src/pages',
    componentsDir: './src/components',
    templatesDir: './helper_scripts/templates'
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
                (e) => {
                    if (e) throw e
                    callback()
                }
            )
        }
    )
}

modules.createComponentFromTemplate = (options, callback) => {
    const { filename, haveStyle } = options
    const dir = `${modules.config.componentsDir}/${filename}`

    if (!fs.statSync(`${dir}`, { throwIfNoEntry: false })) {
        fs.mkdirSync(`${dir}`)
    }

    modules.getTempfromHandlebar(
        `${modules.config.templatesDir}/component.hbs`,
        options,
        (code) => {
            fs.writeFile(
                `${dir}/${filename}.tsx`,
                code,
                { flag: 'wx' },
                (e) => {
                    if (e) throw e
                    callback()
                }
            )
        }
    )

    if (haveStyle) {
        fs.writeFile(
            `${dir}/${filename}.module.scss`,
            `@import '../styles/const';\n`,
            { flag: 'wx' },
            (e) => {
                if (e) throw e
                callback()
            }
        )
    }

    modules.createIndexExporter({
        filename,
        path: dir,
        isPage: false
    })

    fs.writeFile(
        `${modules.config.componentsDir}/index.ts`,
        `export { ${filename} } from './${filename}'\n`,
        { flag: 'a+' },
        (e) => {
            if (e) throw e
            callback()
        }
    )

    callback()
}

modules.createIndexExporter = ({ filename, path, isPage = true }) => {
    modules.getTempfromHandlebar(
        `${modules.config.templatesDir}/index.hbs`,
        {
            filename,
            isPage
        },
        (code) => {
            fs.writeFile(`${path}/index.ts`, code, { flag: 'wx' }, (_err) => {
                if (_err) throw _err
            })
        }
    )
}

module.exports = modules
