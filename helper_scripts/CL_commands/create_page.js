#!/usr/bin/env node

const inquirer = require('inquirer')
const helper = require('./helpers')

process.stdin.resume()
process.stdin.setEncoding('utf8')

const afterPageCreation = (filename) => {
    process.stdout.write(`\nNew Page ${filename} is created and ready!\n`)
}

const askQuestions = () => {
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
                            value.indexOf('.tsx') > 0
                                ? value.replace('.tsx', '')
                                : value,
                            true
                        )
                    ) {
                        return "It's already added. Please enter new page name."
                    }
                    return true
                }
                return 'It cannot be empty. Please enter it correctly...'
            },
        },
    ]

    inquirer.prompt(questions).then(({ filename }) => {
        helper.createPageFromTemplate(filename, () => {
            afterPageCreation(filename)
        })
    })
}

helper.writeStart(askQuestions)
