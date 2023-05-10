import Client from '@tryrolljs/api-client'
import {
  HasBalanceArgs,
  GetMeResponseData,
  HasBalanceResponseData,
  GetUserBalancesArgs,
  GetUserBalancesResponseData,
  GetUserArgs,
  GetUserResponseData,
  GetUserTokenBalanceArgs,
  Response,
  ExternalUserResponseData,
  ExternalUserArgs,
  PlatformUserDepositAddressResponseData,
  PlatformUserArgs,
  PlatformUserBalanceTokenResponseData,
} from './types'

export const getMe = (client: Client) => {
  return client.call<Response<GetMeResponseData>>({
    url: '/v1/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = async (
  client: Client,
  { userId, tokenId, amount }: HasBalanceArgs,
) => {
  const response = await client.call<Response<HasBalanceResponseData>>({
    url: `/v1/users/${userId}/hasbalance/${tokenId}/${amount}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUserBalances = async (
  client: Client,
  { userId }: GetUserBalancesArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData[]>>({
    url: `/v1/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getUserTokenBalance = async (
  client: Client,
  { userId, tokenId }: GetUserTokenBalanceArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData>>({
    url: `/v1/users/${userId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUser = async (client: Client, { userId }: GetUserArgs) => {
  const response = await client.call<Response<GetUserResponseData>>({
    url: `/v1/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const createPlatformUser = async (
  client: Client,
  { userType, externalUserId }: ExternalUserArgs,
) => {
  const response = await client.call<Response<ExternalUserResponseData>>({
    url: `/v1/externalUsers`,
    method: 'post',
    body: { userType, externalUserID: externalUserId },
    authorization: true,
  })
  return response.data
}

export const getPlatformUserDepositAddress = async (
  client: Client,
  { userType, externalUserId }: ExternalUserArgs,
) => {
  const response = await client.call<Response<PlatformUserDepositAddressResponseData>>({
    url: `/v1/platforms/${userType}/users/${externalUserId}/address`,
    method: 'get',
    authorization: true,
  })

  return response.data
}

export const getPlatformUserBalance = async (
  client: Client,
  { userType, tokenId, externalUserId }: PlatformUserArgs,
) => {
  const response = await client.call<Response<PlatformUserBalanceTokenResponseData[]>>({
    url: `/v1/platforms/${userType}/users/${externalUserId}/balances/${tokenId}`,
    method: 'get',
    authorization: true,
  })

  return response.data
}
