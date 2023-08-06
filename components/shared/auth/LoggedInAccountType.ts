export type LoggedInAccountType = {
    jwt?: string;
    isLoggedIn: boolean;
    user: LoggedInAccountUserType;
}
export type LoggedInAccountUserType = {
    email?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
}
// export type LoggedInAccountResponseType = {
//     login: LoggedInAccountType;
//     oAuthLogin: LoggedInAccountType;
// }