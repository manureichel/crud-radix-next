import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "usuario@dominio.com" },
        password: { label: "Password", type: "password", placeholder: "*******" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          return user
        } else {
          return null
  
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  }
})

export { handler as GET, handler as POST }