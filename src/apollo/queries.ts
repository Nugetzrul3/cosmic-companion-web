import { gql } from "@apollo/client";
import type {
    GetRefreshTokenQuery,
    EmptyQueryVariables,
    GetUserInfoQuery,
    TypedDocumentNode
} from "./types";

export const Queries = {
    getRefreshTokenQuery: () => {
        const GET_REFRESH_TOKEN_QUERY: TypedDocumentNode<
            GetRefreshTokenQuery,
            EmptyQueryVariables
        > = gql`
            query Refresh {
                refresh {
                    token
                    error
                }
            }
        `;

        return GET_REFRESH_TOKEN_QUERY;
    },
    getUserInfoQuery: () => {
        const GET_USER_INFO_QUERY: TypedDocumentNode<
            GetUserInfoQuery,
            EmptyQueryVariables
        > = gql`
            query UserInfo {
                me {
                    id
                    first_name
                    last_name
                    email
                    username
                    error
                }
            }
        `;

        return GET_USER_INFO_QUERY;
    }
}