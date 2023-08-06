import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { store } from "./store";

const omitTypename = (key: any, value: any) => {
    return key === '__typename' ? undefined : value
}

const omitTypenameLink = () => new ApolloLink((operation, forward) => {
    if (operation.variables) {
        operation.variables = JSON.parse(
            JSON.stringify(operation.variables),
            omitTypename
        )
    }
    return forward(operation)
})

const authLink = (token: string | null | undefined) => setContext((_, { headers }) => {
    if (typeof window === "undefined") {
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    }

    // get the authentication token from local storage if it exists
    const tokenValue = token ?? store.getState().account.token;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: tokenValue ? `Bearer ${tokenValue}` : "",
        }
    }
})

export const createClient = (baseUri: string | undefined, token: string | undefined = undefined) => {
    const httpLink = createHttpLink({
        uri: `${baseUri ?? "/"}graphql`,
    })

    const link = ApolloLink.from([authLink(token), omitTypenameLink(), httpLink])

    return new ApolloClient({
        link: link,
        cache: new InMemoryCache(),
        credentials: 'include'
    })
}
