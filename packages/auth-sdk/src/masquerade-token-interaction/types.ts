import { RequestTokenArgs as BaseRequestTokenArgs } from '../types'

export interface RequestTokenArgs extends BaseRequestTokenArgs {
  clientSecret: string
}

export interface RedirectToResponse {
  redirect_to: string
}

export interface CodeVerifier {
  value: string
  state: string
}
