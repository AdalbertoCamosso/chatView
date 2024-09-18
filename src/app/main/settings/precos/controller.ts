'use server'
import { prisma } from "@/services/databases";


export async function AddPrices(data: { preco: number }) {

  const find = await prisma.preco.findMany({
    where: {
      preco: data.preco,
    },
  });


  if (find) {
    const dat = await prisma.preco.create({
      data: {
        preco: Number(data.preco),
      },
    });

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

  } else
    return {
      data: [],
      erro: true,
    };
}

export async function AllPrices() {
  const data = await prisma.preco.findMany({});
  if (!data) return [];

  return data;
}


export async function DelePrices(id:any) {
  const data = await prisma.preco.delete({
    where:{
      id:id as number
    }
  });

  if (!data) return [];

  return data;
}
