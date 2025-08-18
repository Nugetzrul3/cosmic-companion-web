import { gql } from "@apollo/client";

export const Mutations = {
    getLoginMutation: () => {
        return gql`
            mutation Login($email: String!, $password: String!) {
                login(data: {email: $email, password: $password}) {
                    refreshToken
                    token
                    user {
                        email
                    }
                    error
                }
            }
        `
    },
    getRegisterMutation: () => {
        return gql`
            mutation Register(
                $firstName: String!, $lastName: String!, $username: String!,
                $email: String!, $password: String!
            ) {
                signup(
                    data: {
                        firstName: $firstName, lastName: $lastName, username: $username,
                        email: $email, password: $password
                    }
                ) {
                    refreshToken
                    token
                    user {
                        email
                    }
                    error
                }
            }
        `
    }

}