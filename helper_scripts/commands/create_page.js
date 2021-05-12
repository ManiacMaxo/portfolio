#!/usr/bin/env node

const inquirer = require('inquirer')
const helper = require('./helpers')

const questions = [
    {
        name: 'filename',
        type: 'input',
        message: 'Enter page name: (without whitespace)',
        validate(value) {
            if (value.length) {
                if (
                    helper.isUsedOnDir(
                        helper.config.pagesDir,
                        value.indexOf('.js') > 0 ? value : `${value}.js`
                    )
                ) {
                    return `It's already added. Please enter new page name.`
                }
                return true
            }
            return 'It cannot be empty. Please enter it correctly...'
        }
    }
]

inquirer.prompt(questions).then(({ filename }) => {
    helper.createPageFromTemplate(filename, () => {
        console.log(`Page "${filename}" created\n`)
    })
})
