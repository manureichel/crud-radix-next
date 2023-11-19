import React from 'react'

import { Container, Card, Heading, Flex, Text, Link } from '@radix-ui/themes'
import SignupForm from '@/components/auth/SignupForm'
import NavLink from 'next/link'

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className='p-3 md:p-0 '>
        <Flex className='h-screen w-full items-center'>
          <Card className='w-full p-7'>
            <Heading className='pb-2'>Crear una nueva cuenta</Heading>
            <SignupForm />
            <Flex justify="between" my="4">
              <Text>¿Ya tienes una cuenta?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>Iniciar Sesión</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>

      </Container >
    </>

  )
}

export default RegisterPage