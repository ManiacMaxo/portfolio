#!/usr/bin/env node

const inquirer = require('inquirer')
const helper = require('./helpers')

const questions = [
    {
        name: 'filename',
        type: 'input',
        message: 'Enter component name: (without whitespace)',
        validate(value) {
            if (value.length) {
                if (
                    helper.isUsedOnDir(
                        helper.config.componentsDir,
                        value.endsWith('.tsx')
                            ? value.replace('.tsx', '')
                            : value,
                        true
                    )
                ) {
                    return `It's already added. Please enter new component name.`
                }
                return true
            }
            return 'It cannot be empty. Please enter it correctly...'
        }
    },
    {
        name: 'haveStyle',
        type: 'confirm',
        message: () => 'Do you want to add a module scss?',
        default: false
    }
]

inquirer.prompt(questions).then((answers) => {
    helper.createComponentFromTemplate(answers, () => {
        console.log(`Component "${answers.filename}" created\n`)
    })
})
