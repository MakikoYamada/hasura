import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://db-aws-test-001.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret':
          '4ey14kitXxSeYenrGPHcogZICv8Yq5Vz5dvy3WQhBAYkuxtPGQ2iknY72UuvNHq5',
      },
    }),
    cache: new InMemoryCache(),
  })
}
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
