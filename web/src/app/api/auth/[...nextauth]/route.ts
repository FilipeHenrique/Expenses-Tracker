import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import api from "../../../../lib/axios";

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  })],
  session: { maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    jwt: async ({token})=> {
      const user = {
        name: token.name,
        email: token.email,
        avatarUrl: token.picture
      }
      await api.post("/auth/login", user).then((res) => {
        token.access_token = res.data.access_token;
      })
      return token;
    },
    async session({ session, token }: any) {
      session.token = token.access_token  
      return session
    },
  },
  pages: {
    signIn: '/',
  }
})

export { handler as GET, handler as POST }