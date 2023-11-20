"use client"

import { TextField, TextArea, Button, Container, Card, Flex, Heading } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"
import { TrashIcon } from "@radix-ui/react-icons"

const TaskNewPage = () => {
  const router = useRouter();
  const params = useParams();

  const { control, handleSubmit } = useForm({
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
      console.log("editando..")
      // const res = await axios.put("/api/projects", data);
    }


  })

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
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
                  <Button type="button" onClick={() => console.log("eliminando..")} color="red"><TrashIcon />Eliminar Proyecto</Button>
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
