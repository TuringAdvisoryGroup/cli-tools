import { user as userAPI } from '@tryrolljs/api'
import Client from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react'

export const SessionContext = createContext<{
  user?: userAPI.types.GetMeResponseData
  logIn: () => Promise<void>
  logOut: () => Promise<void>
  error?: unknown
}>({
  logIn: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
})

type Props = PropsWithChildren<{
  apiClient: Client
  authSdk: auth.AuthSDK
}>

const OAUTH_CODE_URL_PARAM_KEY = 'code'

const SessionProvider = ({ apiClient, authSdk, children }: Props) => {
  const [user, setUser] = useState<userAPI.types.GetMeResponseData>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user_ = await userAPI.getMe(apiClient)
        setUser(user_)
      } catch (e) {
        setError(e)
      }
    }

    const getOauthCode = () => {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get(OAUTH_CODE_URL_PARAM_KEY)
    }

    const initializeNewSession = async () => {
      try {
        const oauthCode = getOauthCode()
        if (oauthCode) {
          await authSdk.makeSession(oauthCode)
          await loadUserData()
        }
      } catch (e) {
        setError(e)
        setUser(undefined)
      }
    }

    const initialize = async () => {
      try {
        await authSdk.restoreFromCache()
        await loadUserData()
      } catch (e) {
        await initializeNewSession()
      }
    }

    initialize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!user])

  const logIn = useCallback(async () => {
    window.location.href = await authSdk.getLogInUrl()
  }, [authSdk])

  const logOut = useCallback(async () => {
    window.location.href = await authSdk.getLogOutUrl()
  }, [authSdk])

  return (
    <SessionContext.Provider value={{ user, logIn, logOut, error }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)

export default SessionProvider
