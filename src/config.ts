import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
     uri: 'https://spacexdata.herokuapp.com/graphql',
});
export default client