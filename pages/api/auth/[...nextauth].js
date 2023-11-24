import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'dc55fd57b1528d59260b',
            clientSecret: 'a118ee28296031610ca86517432ddabba08a9310',
        })
    ]
}

export default NextAuth(authOptions);