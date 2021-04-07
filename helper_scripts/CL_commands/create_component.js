#!/usr/bin/env node

const inquirer = require('inquirer')
const helper = require('./helpers')

process.stdin.resume()
process.stdin.setEncoding('utf8')

const afterPageCreation = (filename) => {
    process.stdout.write(
        `\nNew Component ${filename} is created and ready!\n\n`
    )
    process.exit(0)
}

const askQuestions = () => {
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
                            value.indexOf('.tsx') > 0
                                ? value.replace('.tsx', '')
                                : value,
                            true
                        )
                    ) {
                        return "It's already added. Please enter new component name."
                    }
                    return true
                }
                return 'It cannot be empty. Please enter it correctly...'
            }
        },
        {
            name: 'haveStyle',
            type: 'confirm',
            message: () => 'Do you want to use style?',
            default: false
        }
    ]

    inquirer.prompt(questions).then((answers) => {
        helper.createComponentFromTemplate(answers, () => {
            setTimeout(() => {
                afterPageCreation(answers.filename)
            }, 1250)
        })
    })
}

helper.writeStart(askQuestions)
