import 'dotenv/config'
import inquirer from 'inquirer'
import { getTokenCreator, getTokenList } from './tokens.js'
import {
  getUser,
  getUserBalances,
  getUserTokenBalance,
  hasBalance,
  createPlatformUser,
  getPlatformUserTokenBalance,
  getPlatformUserDepositAddress,
} from './users.js'

async function main() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
          'Get token list',
          'Get token creator',
          'Get user',
          'Get user balances',
          'Get user token balance',
          'Check user has token balance',
          'Create platform user',
          'Get Platform User Token Balance',
          'Get Platform User Deposit Address',
        ],
      },
    ])
    .then(async (answers) => {
      switch (answers.option) {
        case 'Get token list':
          await getTokenList()
          break
        case 'Get token creator':
          await getTokenCreator()
          break
        case 'Get user':
          await getUser()
          break
        case 'Get user balances':
          await getUserBalances()
          break
        case 'Get user token balance':
          await getUserTokenBalance()
          break
        case 'Check user has token balance':
          await hasBalance()
          break
        case 'Create platform user':
          await createPlatformUser()
          break
        case 'Get Platform User Token Balance':
          await getPlatformUserTokenBalance()
          break
        case 'Get Platform User Deposit Address':
          await getPlatformUserDepositAddress()
          break
      }
      promptOptionsAgain()
    })
}

function promptOptionsAgain() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'again',
        message: 'Do you want to do something else?',
      },
    ])
    .then((answers) => {
      if (answers.again) {
        main()
      }
    })
}

main()
