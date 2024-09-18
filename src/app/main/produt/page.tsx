'use client'

import { AlertCircle, ArrowBigLeft, ArrowDown, ArrowRight, Download, HelpCircle, History, Home, LogOut, MenuIcon, NutIcon, NutOffIcon, PenIcon, Pyramid, Settings, TrafficCone, Trash2, User2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import {
  ArrowBigDown,
  CheckIcon,
  Circle,
  CircleChevronLeftIcon,
  FeatherIcon,
  Filter,
  HomeIcon,
  ImageIcon,
  Info,
  MouseIcon,
  Pen,
  Phone,
  PlusCircle,
  Power,
  PowerOff,
  ScrollText,
  Search,
  StarIcon,
  StopCircleIcon,
  Trash,
  UserCircle2,
  UserRound
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
import { useForm } from "react-hook-form";
import { AddProduct, AllProduct } from "./controller";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { SelectSearch } from "@/app/_components/select/search";
import { AllPrices } from "../settings/precos/controller";
import { PopoverClose } from "@radix-ui/react-popover";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";





export default function Page() {

  const [open, setOpen] = React.useState(false)

  const [data,setData]=React.useState<[]|[]>([])
  const [Prices,setPrices]=React.useState<{ id: number,preco: number}[]|[]>([])

  const {register,handleSubmit,reset}  = useForm()
  const router=useRouter()
  const [PriceSelected, setPriceSelected] = React.useState()


React.useEffect(()=>{

async function onload(){
     const data=await AllProduct()
  
      const prices=await AllPrices()
      setPrices(prices)

}
onload()
 
},[])


    return (
  
      <div className="w-full max-sm:h-[90%] ">

      <header className="flex w-[80%] max-sm:h-[16%]  flex-col p-2 max-sm:flex-col">
        <h1 className=" font-semibold text-green-400 text-2xl">{"#"}Produtos</h1>
        <div>
          <div>
            
          </div>
          <div className=" flex ml-3 items-center  gap-1.5 max-sm:justify-between">
            <Input
              className="h-[20px] w-[300px] p-5"
              type="email"
              id="email"
              placeholder="Pesquise aqui"
            />

                <Sheetform 
                
                trigger={
                <Button className="bg-green-700 rounded-[8px] ml-2 p-5 text-white hover:bg-blue-900  max-sm:w-[50px] max-sm:text-[24px]">
                  <PlusCircle className="border-dashed " />
                  <p className="max-sm:hidden">Adicionar Produtos</p>
                </Button>
                } 
                save={
                  // Productcreate
                  handleSubmit(async(data)=>{ 
                    router.refresh()
                    console.log(data)
                    const data_= await AddProduct()
                 
                    reset()


        //             id: number;
        // nome: string;
        // descricao: string | null;
        // precoId: number;
        // estoqueId: number;
        // categoriaId: number;


                  if(data_.erro)
                  toast('Categoria criado com sucesso')
                  else
                  toast('ouve um erro ao adicionar verifique sua existencia')
                })
              }

                Description="Adicionando produtos"
                title='Produtos'

                >
                   <p>Nome</p>
                    <Input />
                    <p>Preco</p>
                    <Select defaultValue="ui">
                      <SelectTrigger defaultValue={"fdgdfg"}>
                      {/* <Input /> */}
                      </SelectTrigger>
                      <SelectContent>
                        {
                          Prices.map((item)=>(
                          <SelectItem value={item.id} className="p-2 hover:bg-green-700 rounded-[4px]">
                            {item.preco}kz
                          </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    {/* <SelectSearch
                    
                    Trigger={
                      <Input/>
                    }
                    data={
                      Prices?.map((item,k)=>(
                     
                          <CommandItem key={k}
                        className="flex items-center w-full rounded-[8px] cursor pointer"
                        onSelect={() => {
                          setOpen(false)
                        }}
                      ><PopoverClose  >
                        {item.preco} 
                        </PopoverClose>
                      </CommandItem>
                 
))
                    }
                    /> */}
                </Sheetform>






          </div>
        </div>
      </header>

      <main className="flex w-full max-sm:h-[90%] flex-col">
        <div className="border-r-none max-sm:h-[80%] max-sm:overflow-hidden w-full p-4 ">
          <ScrollArea className="h-[70vh] max-sm:h-[30vh] rounded-xl border-zinc-900 border  max-sm:h-[75vh]">
          
            <Table className="p-2  rounded-md">
              <TableHeader className="bg-zinc-900 h-[10px] h-[60px] max-sm:hidden ">
                <TableRow className="h-[100%] w-[100%] border-zinc-900 ">
                  <TableHead className=" flex h-full items-center justify-between ">
                    ID <ArrowDown />
                  </TableHead>
                  <TableHead className=" border-r border-zinc-900">
                    <div className="flex items-center">
                      <ImageIcon className="mr-2" size={14} />
                      Imagem
                    </div>{' '}
                  </TableHead>

                  <TableHead className=" border-r border-zinc-900">
                    <div className="flex items-center">
                      <Info className="mr-2" size={14} /> Informacoes
                    </div>
                  </TableHead>
                  <TableHead className=" border-r border-zinc-900 ">Descricao</TableHead>
                  <TableHead className=" border-r border-zinc-900 ">Valor</TableHead>
                  <TableHead className=" border-r border-zinc-900">Estado</TableHead>
                  <TableHead className=" border-r border-zinc-900">tipo</TableHead>
                  <TableHead className=" border-r border-zinc-900">Opções</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody >
                {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 0, 0].map((i, k) => (
                  <TableRow
                    className={`${k % 2 == 0 ? 'bg-muted/10' : ''}  cursor-pointer   font-semibold h-[50px] hover:bg-muted/60`}
                    key={k}
                  >
                    <TableCell className="border-b border-zinc-900 font-medium">
                      <Checkbox className="size-3"/>
                    </TableCell>

                    <TableCell
                      key={k}
                      className="border-b border-zinc-900 font-medium"
                    >
                    </TableCell>

                    <TableCell className="border-b border-zinc-900  font-medium">
                      <div className="flex items-center justify-between">
                        <div>
                          <StarIcon size={13} />
                        </div>
                        <div className="w-[90%]">
                          <p className="">Ananas Depenado</p>
                          <p className="text-[10px] text-zinc-400 ">
                            1223423203
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="border-b border-zinc-900 font-medium max-sm:hidden">
                      {'Dar ordens yugayus'.slice(0, 20)}...
                    </TableCell>

                    <TableCell className="border-b border-zinc-900 font-medium  max-sm:hidden">
                      <p>100.000kz</p>
                      <p className="flex items-center justify-end text-[12px] text-green-500">
                        10%
                        <ArrowDown size={12} />
                      </p>
                    </TableCell>
                    <TableCell className="border-b border-zinc-900 font-medium max-sm:hidden">
                      <Badge className="bg-green-700  text-white">
                        Active
                      </Badge>
                    </TableCell>

                    <TableCell className="border-b border-zinc-900 font-medium max-sm:hidden">
                      <Badge className="bg-blue-700  text-white">
                        FATURACAO
                      </Badge>
                    </TableCell>

                    <TableCell className="border-b border-zinc-900 font-medium max-sm:hidden">
                      <p className="flex items-center justify-between ">
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

          <TableFooter className="w-full border max-sm:hidden">
            <TableRow className="w-full">
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>

          <Toaster />
        </div>
      </main>

      <main></main>

    </div>
    );
  }
  