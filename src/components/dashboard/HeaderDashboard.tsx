"use client"

import { useRouter } from "next/navigation"
import { Button, Heading } from "@radix-ui/themes"

const HeaderDashboard = () => {
  const router = useRouter();

  return (
    <div className='flex justify-between items-center mb-4'>
      <Heading>Tasks</Heading>
      <Button onClick={() => router.push("/dashboard/projects/new")}>Add Task</Button>
    </div>
  )
}

export default HeaderDashboard