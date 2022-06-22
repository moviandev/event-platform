import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oy7ls8189z01xtfphc2bar/master',
  cache: new InMemoryCache()
});