import { user, transaction } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import config from './config.js'

export const sendFromPlatformUser = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userType',
        message: 'User Type (discord, telegram)',
      },
      {
        type: 'input',
        name: 'platformUserId',
        message: 'User ID from the external platform',
      },
      {
        type: 'input',
        name: 'toUsername',
        message: 'Roll Username to send to',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token UUID',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'the number of tokens to send',
      },
    ])

    const userResp = await user.createPlatformUser(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    const autoLoginToken = await user.getUserMasqueradeToken(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userId: userResp.userID,
      },
    )

    await sdkPool
      .getSDK(InteractionType.AutoLoginToken)
      .generateToken(autoLoginToken.token)

    const tx = await transaction.send(
      clientPool.getClient(InteractionType.AutoLoginToken),
      
      {
        amount: answers.amount,
        toUsername: answers.toUsername,
        tokenId: answers.tokenId,
        note: 'test transaction',
      },
    )
    printTable([
      {
        from: tx.from.username,
        to: tx.to.username,
        token: tx.token.symbol,
        amount: tx.amount,
        status: tx.status,
        type: tx.type,
      },
    ])
  } catch (err) {
    console.error(err)
  }
}

export const sendBatchFromPlatformUser = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    let batchSendPrompt = true;

    while (batchSendPrompt) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'userType',
          message: 'User Type (discord, telegram)',
        },
        {
          type: 'input',
          name: 'platformUserId',
          message: 'User ID from the external platform',
        },
        {
          type: 'input',
          name: 'toUsername',
          message: 'Roll Username to send to',
        },
        {
          type: 'input',
          name: 'tokenId',
          message: 'Token UUID',
        },
        {
          type: 'input',
          name: 'amount',
          message: 'the number of tokens to send',
        },
        {
          type: 'confirm',
          name: 'batchSendAgain',
          message: 'Do you want to send another batch?',
          default: false,
        },
      ]);

      const userResp = await user.createPlatformUser(
        clientPool.getClient(InteractionType.ClientCredentials),
        {
          userType: answers.userType,
          platformUserId: answers.platformUserId,
        },
      );

      const autoLoginToken = await user.getUserMasqueradeToken(
        clientPool.getClient(InteractionType.ClientCredentials),
        {
          userId: userResp.userID,
        },
      );

      await sdkPool
        .getSDK(InteractionType.AutoLoginToken)
        .generateToken(autoLoginToken.token);

      const tx = await transaction.send(
        clientPool.getClient(InteractionType.AutoLoginToken),

        {
          amount: answers.amount,
          toUsername: answers.toUsername,
          tokenId: answers.tokenId,
          note: 'test transaction',
        },
      );

      printTable([
        {
          from: tx.from.username,
          to: tx.to.username,
          token: tx.token.symbol,
          amount: tx.amount,
          status: tx.status,
          type: tx.type,
        },
      ]);

      batchSendPrompt = answers.batchSendAgain;
    }
  } catch (err) {
    console.error(err);
  }
};