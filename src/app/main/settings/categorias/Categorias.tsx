'use client'
import {  ArrowDown, CheckCheck} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  ImageIcon,
  Info,
  Pen,
  PlusCircle,
  StarIcon,
  Trash,
} from 'lucide-react';
import React from 'react';

import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { toast, Toaster } from 'sonner';
import { Sheetform } from "@/app/_components/Form/Sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {useForm} from 'react-hook-form'
import { useRouter } from "next/navigation";
import { Toast } from "@/components/ui/toast";
import { AddCategorias, AllCategorias, DeleCategorias } from "./controller";


export interface Categoria{
  nome:string,
  id:number
}
export function Categorias() {

  const [data,setData]=React.useState<Categoria[]|[]>([])
  const {register,handleSubmit,reset}  = useForm()
  const router=useRouter()


React.useEffect(()=>{

async function onload(){
  const data=await AllCategorias()
  setData(data)
}
onload()
 
},[])

const [query, setQuery] =React.useState('');

const filteredData = data?.filter((item) =>
  Object.values(item).some((val) => val.toString().toLowerCase().includes(query.toLowerCase()) )
);



    return (
  
      <div className="w-full">
      <header className="flex w-[80%] flex-col p-2 max-sm:flex-col">
        <h1 className=" font-semibold text-green-400 text-2xl">{"#"}Categorias</h1>
        <div>
          <div>
            
          </div>
          <div className=" flex ml-3 items-center  gap-1.5 max-sm:justify-between">
            <Input
              className="h-[20px] w-[300px] p-5"
              type="email"
              id="email"
              onChange={(e)=>setQuery(e.target.value)}
              placeholder="Pesquise aqui"
            />
                <Sheetform 
                save={

                  handleSubmit(async(data)=>{ 
                    router.refresh()
                    console.log(data)
                    const data_= await AddCategorias({nome:data.nome})
                 
                    reset()

                  if(data_.erro)
                  toast('Categoria criado com sucesso')
                  else
                  toast('ouve um erro ao adicionar verifique sua existencia')


                })
              
              }
                trigger={
                <Button className="bg-green-700 rounded-[8px] ml-2 p-5 text-white hover:bg-blue-900  max-sm:w-[50px] max-sm:text-[24px]">
                  <PlusCircle className="border-dashed " />
                  <p className="max-sm:hidden">Adicionar categoria</p>
                </Button>
                } 
                Description="Adicionando Categoria"
                title='Categoria'

                >
                   <p>Nome</p>
                    <Input {...register('nome')} name="nome" className="mt-2" />
                </Sheetform>


          </div>
        </div>
      </header>

      <main className="flex w-full  flex-col">
        <div className="border-r-none  w-full p-4 ">
          <ScrollArea className="h-[60vh] rounded-xl border-zinc-900 border  max-sm:h-[75vh]">
          
            <Table className="p-2  rounded-md">
              <TableHeader className="bg-zinc-900 h-[10px] h-[60px] max-sm:hidden ">
                <TableRow className="h-[100%] w-[100%] border-zinc-900 ">
                  <TableHead className=" flex h-full items-center justify-between ">
                    
                    <div className="flex items-center">
                    ID <ArrowDown />
                    </div>
                  </TableHead>
                  <TableHead className=" border-r border-zinc-900">
                    <div className="flex items-center">
                      {/* <Price className="mr-2" size={14} /> */}
                      Nome
                    </div>
                  </TableHead>

                  <TableHead className=" border-r border-zinc-900">
                    <div className="flex items-center">
                      <Info className="mr-2" size={14} /> Opcoes
                    </div>
                  </TableHead>
           </TableRow>
              </TableHeader>

              <TableBody >
                {filteredData?.map((categoria, k) => (
                  <TableRow
                    className={`${k % 2 == 0 ? 'bg-muted/10' : ''}  cursor-pointer   font-semibold h-[50px] hover:bg-muted/60`}
                    key={k}
                  >
                    <TableCell className="border-b border-zinc-900 font-medium">
                      <Checkbox className="size-3"/>
                      {categoria.id}

                    </TableCell>

                    <TableCell
                      key={k}
                      className="border-b text-white border-zinc-900 font-bold"
                    >
                      {categoria.nome}
                    </TableCell>

                    <TableCell className="border-b border-zinc-900 font-medium max-sm:hidden">
                      <p onClick={async()=>{

                        await DeleCategorias(categoria.id)
                        toast('preco deletado')
                        router.refresh()

                      }}  className="flex items-center justify-between ">
                        <Trash
                          className=" rounded  "
                          size={16}
                        />
                        <Pen
                          className="rounded  "
                          size={16}
                        />
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </ScrollArea>

     
          <Toaster />
        </div>
      </main>


    </div>
    );
  }
  