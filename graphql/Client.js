import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

/*
curl 'http://localhost:3001/api' -H 'Accept-Encoding: gzip, deflate, br'
-H 'Content-Type: application/json' -H 'Accept: application/json'
-H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3001'
--data-binary '{"query":"{\n  user(username: \"mxstbr\") {\n    id\n
  username\n  }\n}"}' --compressed
*/

const restLink = new RestLink({
  uri: 'http://localhost:3001/api',
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Connection': 'keep-alive',
    'DNT': 1,
    'Origin': 'http://localhost:3001'
  }
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})
