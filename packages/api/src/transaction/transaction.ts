import Client from '@tryrolljs/api-client'
import {
  InternalSendArgs,
  TransactionResponseData,
  SendArgs,
  GetTransactionByIdArgs,
} from './types'

export const send = (
  client: Client,
  { fromUserId, toUsername, amount, symbol, message }: SendArgs,
) => {
  const body = {
    amount,
    toUser: toUsername,
    message,
    type: 'transfer',
    symbol,
    fromUser: fromUserId,
  }
  return client.call({
    url: '/v3/transactions',
    method: 'POST',
    authorization: true,
    body,
  })
}

export const internalSend = (
  client: Client,
  { amount, note, toUserId, tokenId }: InternalSendArgs,
) => {
  const body = {
    amount,
    note,
    toUserID: toUserId,
    tokenID: tokenId,
  }
  return client.call<TransactionResponseData>({
    url: '/v2/transactions/send',
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
    url: `/v3/transactions/${transactionId}`,
    method: 'GET',
    authorization: true,
  })
}
