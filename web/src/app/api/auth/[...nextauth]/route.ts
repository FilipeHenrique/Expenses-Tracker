import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  })],
  session: { maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    jwt: ({token, account})=> {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      const user = {
        name: token.name,
        email: token.email,
        avatarUrl: token.picture
      }
      // api register
      return token;
    },
    async session({ session, token }: any) {
      session.token = token.access_token  
      return session
    },
  },
  pages: {
    signIn: '/'
  }
})

export { handler as GET, handler as POST }