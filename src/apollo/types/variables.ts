export type EmptyQueryVariables = Record<string, never>;

export type SignupMutationVariables = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
};

export type LoginMutationVariables = {
    email: string;
    password: string;
};
