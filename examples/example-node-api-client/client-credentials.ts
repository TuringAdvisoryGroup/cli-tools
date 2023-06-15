import { clientCredentials } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import baseConfig from './config.js'

/*
We have to use `roll-app` here, because client credentials flow requires an access token
generated by browser oauth flow for the Roll admin user
*/
const config = { ...baseConfig, clientId: 'roll-app' }

export const getClient = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ServerBrowser).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const client = await clientCredentials.getClient(
      answers,
      clientPool.getClient(InteractionType.ServerBrowser),
    )

    printTable([client])
  } catch (error) {
    console.error(error)
  }
}

export const getClients = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ServerBrowser).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const clients = await clientCredentials.getClients(
      clientPool.getClient(InteractionType.ServerBrowser),
    )

    printTable(clients)
  } catch (error) {
    console.error(error)
  }
}

export const generateClientSecret = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ServerBrowser).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])

    const secret = await clientCredentials.generateClientSecret(
      answers,
      clientPool.getClient(InteractionType.ServerBrowser),
    )

    printTable([secret])
  } catch (error) {
    console.error(error)
  }
}
