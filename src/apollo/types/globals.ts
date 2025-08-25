export type UserPayload = {
    email?: string;
    id?: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    error?: string;
};

export type AuthPayload = {
    error?: string;
    refreshToken?: string;
    token?: string;
    user?: UserPayload
}
