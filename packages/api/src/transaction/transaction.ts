import Client from '@roll-network/api-client'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
} from './types'

export const send = (
  client: Client,
  { amount, note, toUser, toUsername, tokenId }: SendArgs,
) => {
  const body = {
    amount,
    note,
    tokenID: tokenId,
    toUser,
    toUsername,
  }

  return client.call<TransactionResponseData>({
    url: '/v1/transactions/send',
    method: 'POST',
    authorization: true,
    body,
  })
}

export const getTransactionById = (
  client: Client,
  { transactionId }: GetTransactionByIdArgs,
) => {
  return client.call<TransactionResponseData>({
    url: `/v1/transactions/${transactionId}`,
    method: 'GET',
    authorization: true,
  })
}

export const batchSend = (
  client: Client,
  transactions: Array<SendArgs>,
) => {
  const body = transactions.map(({ amount, message, toUser, toUsername, tokenId }) => ({
    amount,
    message,
    toUser,
    toUsername,
    tokenId,
  }));

  return client.call<TransactionResponseData>({
    url: '/v1/transactions/batch',
    method: 'POST',
    authorization: true,
    body,
  });
};