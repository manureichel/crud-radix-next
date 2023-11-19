"use client"

import { Container, Heading, Button } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from 'next/navigation'

const DashboardPage = () => {

  const router = useRouter();

  return (
    <Container className='mt-10'>
      <div className='flex justify-between'>
        <Heading>Tasks</Heading>
        <Button onClick={() => router.push("/dashboard/tasks/new")}>Add Task</Button>
      </div>
    </Container>
  )
}

export default DashboardPage