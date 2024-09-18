"use server";

import { prisma } from "@/services/databases";

export async function AllCategorias() {
  const data = await prisma.categoria.findMany({
    select:{
      id:true,
      nome:true
    }
  });

  if (!data) return [];

  return data;
}


export async function DeleCategorias(id:any) {
  const data = await prisma.categoria.delete({
    where:{
      id:id as number
    }
  });

  if (!data) return [];

  return data;
}


export async function AddCategorias(data: { nome: string }) {


    console.log(data)
    console.log("data")



    const dat = await prisma.categoria.create({
      data: {
        nome: data.nome,
      },
    });

    console.log(dat)


    if (dat)
      return {
        data: dat,
        erro: true,
      };
   else
    return {
      data: data,
      erro: false,
    };


}

