import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://rocky-garden-39620.herokuapp.com/graphql',
    cache: new InMemoryCache()
  });

export default client