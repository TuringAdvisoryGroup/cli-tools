import { user, transaction } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType, InMemoryStore } from '@roll-network/auth-sdk'
import { platformUserConfig } from './config.js'

export const sendFromPlatformUser = async () => {
  try {
    const sdkPool = new SDKPool(platformUserConfig)
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
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    const masqueradeToken = await user.getUserMasqueradeToken(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userId: userResp.userID,
      },
    )

    const clientToken = await sdkPool
      .getSDK(InteractionType.ClientCredentials)
      .getToken()
    if (!clientToken) {
      throw new Error('Client token is undefined.')
    }

    await sdkPool.getSDK(InteractionType.MasqueradeToken).generateToken({
      clientToken: clientToken.access_token,
      masqueradeToken: masqueradeToken.token,
    })

    const tx = await transaction.send(
      clientPool.getClient(InteractionType.MasqueradeToken).call,
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
    const sdkPool = new SDKPool(platformUserConfig);
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken();
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool);

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
        clientPool.getClient(InteractionType.ClientCredentials).call,
        {
          userType: answers.userType,
          platformUserId: answers.platformUserId,
        },
      );

      const masqueradeToken = await user.getUserMasqueradeToken(
        clientPool.getClient(InteractionType.ClientCredentials).call,
        {
          userId: userResp.userID,
        },
      );

      const clientToken = await sdkPool
        .getSDK(InteractionType.ClientCredentials)
        .getToken();
      if (!clientToken) {
        throw new Error('Client token is undefined.');
      }

      await sdkPool.getSDK(InteractionType.MasqueradeToken).generateToken({
        clientToken: clientToken.access_token,
        masqueradeToken: masqueradeToken.token,
      });

      const transactions = [{
        amount: answers.amount,
        toUsername: answers.toUsername,
        tokenId: answers.tokenId,
        note: 'test transaction',
      }];

      const txs = await transaction.batchSend(
        clientPool.getClient(InteractionType.MasqueradeToken).call,
        transactions,
      );

      txs.forEach((tx) => {
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
      });

      batchSendPrompt = answers.batchSendAgain;
    }
  } catch (err) {
    console.error(err);
  }
};