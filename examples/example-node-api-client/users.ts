import { user } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateApiClient } from './generate-api-client.js'

export const getUserBalances = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const balances = await user.getUserBalances(clientAuth, answers)
    if (!balances || balances.length === 0) {
      console.log('User has no balances')
      return
    }
    printTable(
      balances?.map((balance) => ({
        tokenId: balance.token.uuid,
        symbol: balance.token.symbol,
        balance: balance.amount,
      })),
    )
  } catch (error) {
    console.error(error)
  }
}

export const getUserTokenBalance = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const balance = await user.getUserTokenBalance(clientAuth, answers)
    printTable([
      {
        tokenId: balance.token.uuid,
        symbol: balance.token.symbol,
        balance: balance.amount,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}

export const hasBalance = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'Amount',
      },
    ])
    const response = await user.hasBalance(clientAuth, answers)
    if (response.hasbalance) {
      console.log('User has balance')
    } else {
      console.log('User does not have balance')
    }
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const userResponse = await user.getUser(clientAuth, answers)
    printTable([
      {
        id: userResponse.userID,
        name: userResponse.name,
        username: userResponse.username,
        profilePic: userResponse.profilePic,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}

export const createPlatformUser = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userType',
        message: 'User Type (discord, telegram)',
      },
      {
        type: 'input',
        name: 'externalUserId',
        message: 'User ID from the external platform',
      },
    ])

    const resp = await user.createPlatformUser(clientAuth, {
      userType: answers.userType,
      externalUserId: answers.externalUserId,
    })

    printTable([resp])
  } catch (err) {
    console.error(err)
  }
}

export const getPlatformUserTokenBalance = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userType',
        message: 'User Type (discord, telegram)',
      },
      {
        type: 'input',
        name: 'externalUserId',
        message: 'User ID from the external platform',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])

    const platformUserBalances = await user.getPlatformUserBalance(clientAuth, answers)

    printTable(
      platformUserBalances?.map((balance) => ({
        uuid: balance.token.uuid,
        name: balance.token.name,
        symbol: balance.token.symbol,
        decimals: balance.token.decimals,
        totalSupply: balance.token.totalSupply,
        currentSupply: balance.token.currentSupply,
        contractAddress: balance.token.contractAddress,
        balance: balance.amount,
      })))
  } catch (err) {
    console.error(err)
  }
}

export const getPlatformUserDepositAddress = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userType',
        message: 'User Type (discord, telegram)',
      },
      {
        type: 'input',
        name: 'externalUserId',
        message: 'User ID from the external platform',
      },
    ])

    const resp = await user.getPlatformUserDepositAddress(clientAuth, {
      userType: answers.userType,
      externalUserId: answers.externalUserId,
    })

    printTable([resp])
  } catch (err) {
    console.error(err)
  }
}