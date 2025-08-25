import type { AuthPayload } from "./globals.ts";

// Mutation types
export type SignupMutation = {
    __typename: "AuthPayload";
    signup: AuthPayload
};

export type LoginMutation = {
    __typename: "AuthPayload";
    login: AuthPayload
}
