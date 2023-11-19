"use client"
import { Heading, Link, Flex, Container, DropdownMenu, Button, Text } from "@radix-ui/themes"
import NextLink from "next/link"
import { useSession, signOut } from "next-auth/react"
import { CaretDownIcon } from "@radix-ui/react-icons"

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-zinc-950 py-4">
      <Container>
        <Flex justify="between" align="center">
          <NextLink href="/">
            <Heading>Radix Next</Heading>
          </NextLink>
          <ul className="flex gap-x-2 items-center">
            {
              !session && (<><li><Link asChild>
                <NextLink href="/auth/register" passHref>Register</NextLink>
              </Link>
              </li>
                <li><Link asChild>
                  <NextLink href="/auth/login" passHref>Login</NextLink>
                </Link>
                </li></>)
            }
            {session && (<> <li><Link asChild>
              <NextLink href="/dashboard" passHref>Dashboard</NextLink>
            </Link>
            </li>
              <li>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">{session?.user?.name}<CaretDownIcon /></Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Label>{session?.user?.name}</DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Mi Perfil</DropdownMenu.Item>
                    <DropdownMenu.Item>Opciones</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item color="red" onClick={() => signOut()}>Cerrar Sesión</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>

              </li></>)}
          </ul>
        </Flex >
      </Container>
    </nav>
  )
}

export default Navbar