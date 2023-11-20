"use client"

import { useRouter } from "next/navigation"
import { Button, Heading } from "@radix-ui/themes"

const HeaderDashboard = () => {
  const router = useRouter();

  return (
    <div className='flex justify-between items-center mb-4'>
      <Heading>Proyectos</Heading>
      <Button onClick={() => router.push("/dashboard/projects/new")}>Agregar Proyecto</Button>
    </div>
  )
}

export default HeaderDashboard