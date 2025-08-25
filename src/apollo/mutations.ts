import { gql } from "@apollo/client";
import type {
    TypedDocumentNode,
    LoginMutation,
    SignupMutation,
    LoginMutationVariables,
    SignupMutationVariables
} from "./types";

export const Mutations = {
    getLoginMutation: () => {
        const LOGIN_MUTATION: TypedDocumentNode<
            LoginMutation,
            LoginMutationVariables
        > = gql`
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
        `;

        return LOGIN_MUTATION;
    },
    getRegisterMutation: () => {
        const SIGNUP_MUTATION: TypedDocumentNode<
            SignupMutation,
            SignupMutationVariables
        > = gql`
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
        `;

        return SIGNUP_MUTATION;
    }

}