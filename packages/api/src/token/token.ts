import Client from '@tryrolljs/api-client'
import {
  GetTokenCreatorArgs,
  GetTokenCreatorResponseData,
  GetTokensArgs,
  GetTokensResponseData,
  Response,
} from './types'

export const getTokens = async (
  client: Client,
  { symbol = '', contractAddress = '', limit = 10, offset = 0 }: GetTokensArgs,
) => {
  const query = {
    symbol,
    contractAddress,
    limit: limit.toString(),
    offset: offset.toString(),
  }
  const params = new URLSearchParams(query).toString()
  const response = await client.call<Response<GetTokensResponseData>>({
    url: `/v3/tokens?${params}`,
    method: 'GET',
    authorization: false,
  })
  return response.data
}

export const getTokenCreator = async (
  client: Client,
  { tokenId }: GetTokenCreatorArgs,
) => {
  const response = await client.call<Response<GetTokenCreatorResponseData>>({
    url: `/v1/tokens/${tokenId}/creator`,
    method: 'GET',
    authorization: false,
  })
  return response.data
}
