import type { UserPayload } from "./globals.ts";
// Query type
export type GetRefreshTokenQuery = {
    refresh: {
        __typename: "RefreshPayload";
        error: string;
        token: string;
        user: UserPayload;
    }
};

export type GetUserInfoQuery = {
    __typename: "UserPayload";
    me: UserPayload
}