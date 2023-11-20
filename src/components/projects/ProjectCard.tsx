"use client"

import { Project } from "@prisma/client"
import { Card, Heading, Text } from "@radix-ui/themes"
import { useRouter } from "next/navigation"

interface Props {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/dashboard/projects/${project.id}`)} key={project.id} className='hover:cursor-pointer hover:opacity-90'>
      <Heading>{project.title}</Heading>
      <Text className='text-slate-500'>{project.description}</Text>
    </Card>
  )
}
