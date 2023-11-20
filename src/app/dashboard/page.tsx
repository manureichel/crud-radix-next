import HeaderDashboard from '@/components/dashboard/HeaderDashboard'
import { Container } from '@radix-ui/themes'
import prisma from '@/libs/prisma'
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/libs/authOptions"
import { ProjectCard } from '@/components/projects/ProjectCard';

async function loadProjects(userId: number) {
  return await prisma.project.findMany({
    where: {
      userId
    }
  });
}

async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized")
  const projects = await loadProjects(parseInt(session?.user.id as string));

  return (
    <Container className='mt-10 px-10'>
      <HeaderDashboard />

      <div className='grid md:grid-cols-3 gap-5'>
        {
          projects.map(project => (
            <ProjectCard project={project} key={project.id} />
          ))
        }
      </div>
    </Container>
  )
}

export default DashboardPage