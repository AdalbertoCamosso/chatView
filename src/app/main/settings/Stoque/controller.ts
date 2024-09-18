"use server";

import { prisma } from "@/services/databases";

export async function AllEstoque() {
  const data = await prisma.stoque.findMany({
    select:{
      id:true,
      nome:true
    }
  });

  if (!data) return [];

  return data;
}


export async function DeleEstoque(id:any) {
  const data = await prisma.stoque.delete({
    where:{
      id:id as number
    }
  });

  if (!data) return [];

  return data;
}


export async function AddEstoque(data: { nome: string }) {


    const dat = await prisma.stoque.create({
      data: {
        nome:data.nome
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

