"use client"

import { TextField, TextArea, Button, Container, Card, Flex, Heading, colorProp } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"
import { TrashIcon } from "@radix-ui/react-icons"
import { toast } from 'sonner'
import { useEffect } from "react"

const TaskNewPage = () => {
  const router = useRouter();
  const params = useParams();

  const { control, handleSubmit, setValue } = useForm({
    values: {
      title: "",
      description: ""
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post("/api/projects", data);
      if (res.status === 201) {
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data);
      if (res.status === 200) {
        toast.success("Contenido editado");
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error("Error: ")
      }
    }
  })

  async function handleDelete(projectId: string) {
    const res = await axios.delete(`/api/projects/${projectId}`);

    if (res.status === 200)
      toast.success("Proyecto eliminado")
    else {
      toast.error("Error eliminando..")
    }
    router.push("/dashboard");
    router.refresh();
  }

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`)
        .then(res => {
          setValue("title", res.data.title)
          setValue("description", res.data.description)
        })

    }
  })

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center">
          <Card className="w-full p-7">
            <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
              <Heading>
                {params.projectId ? "Editar Proyecto" : "Nuevo Proyecto"}
              </Heading>
              <label>Título de Proyecto:</label>
              <Controller
                control={control}
                name="title"
                render={({ field }) => {
                  return (
                    <TextField.Input {...field} size="3" placeholder="Ingrese un título" />
                  )
                }}
              />
              <label>Descripción</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea {...field} size="3" placeholder="Ingrese una descripción" />
                  )
                }}
              />
              <Button type="submit">{params.projectId ? "Editar Proyecto" : "Guardar Proyecto"}</Button>
              <div className="flex justify-end my-2">
                {params.projectId &&
                  <Button type="button" onClick={() => handleDelete(params.projectId as string)} color="red"><TrashIcon />Eliminar Proyecto</Button>
                }
              </div>
            </form>
          </Card>
        </Flex>
      </Container>
    </div>
  )
}

export default TaskNewPage
