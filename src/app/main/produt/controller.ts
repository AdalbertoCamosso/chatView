"use server";

import { prisma } from "@/services/databases";

export async function AllProduct() {
  const data = await prisma.produto.findMany({
    select:{
      id:true,
      nome:true
    }
  });

  if (!data) return [];

  return data;
}


export async function DeleteProduct(id:any) {
  const data = await prisma.produto.delete({
    where:{
      id:id as number
    }
  });

  if (!data) return [];

  return data;
}


export interface Productcreate{
    nome:string,
    categoriaId:number,
    descricao:string,
    estoqueId:number,
    precoId:number, 
}

export async function AddProduct(data:Productcreate) {




    const dat = await prisma.produto.create({
      data:data,
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

