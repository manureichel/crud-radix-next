import { Container } from "@radix-ui/themes";
import Link from 'next/link'
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions"
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);


  if (session) {
    redirect("/dashboard")
  }

  return (
    <Container className="px-5 md:p-0">
      <header className="my-4 bg-slate-800 p-10 rounded-md">
        <h1 className="text-6xl my-10">Next Auth Radix</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sed, maiores accusantium, molestias ut laudantium recusandae quasi velit repellat facilis labore veritatis maxime a ipsum minima. Ducimus omnis neque totam.</p>
        <div className="mt-5">
          <Link
            href="/auth/login"
            className="text-white bg-blue-400 px-2 py-1 rounded-md"
          >Ingresar
          </Link>
        </div>
      </header>

    </Container>
  )
}
