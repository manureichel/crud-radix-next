import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/libs/prisma'
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "usuario@dominio.com" },
        password: { label: "Password", type: "password", placeholder: "*******" }
      },
      async authorize(credentials: any, req) {
          const { email, password } = credentials;

          const userFound = await prisma.user.findUnique({
            where: {
              email,
            }
          })
          if (!userFound) throw new Error("Invalid Credentials")

          const validPassword = await bcrypt.compare(password, userFound.password)

          if(!validPassword) throw new Error("Invalid Credentials")
          
          return {
            id: userFound.id + "",
            name: userFound.name,
            email: userFound.email
          }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  }
})

export { handler as GET, handler as POST }