'use client'

import {
    AlertCircle,
    ArrowBigLeft,
    ArrowDown,
    ArrowRight,
    Download,
    Ellipsis,
    Footprints,
    HelpCircle,
    History,
    Home,
    Loader2,
    LogOut,
    MenuIcon,
    MousePointerSquareDashed,
    NutIcon,
    NutOffIcon,
    PartyPopper,
    PenIcon,
    Printer,
    PrinterIcon,
    Pyramid,
    Settings,
    Settings2,
    Sprout,
    StickerIcon,
    TrafficCone,
    TrafficConeIcon,
    Trash2,
    User2Icon,
  } from "lucide-react";
  import { Input } from "@/components/ui/input";
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  
  import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart";
  import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Pie,
    PieChart,
    XAxis,
  } from "recharts";
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { ScrollArea } from "@/components/ui/scroll-area";
  
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
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
    UserRound,
  } from "lucide-react";
  import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
  import React from "react";
  import { PopoverContent } from "@/components/ui/popover";
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command";
  import { cn } from "@/lib/utils";
  import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Checkbox } from "@/components/ui/checkbox";
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { toast, Toaster } from "sonner";
  
  import { BoxIcon } from "@radix-ui/react-icons";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Link from "next/link";
import { Price } from "./precos/Precos";
import { Label } from "@/components/ui/label";
import { Categorias } from "./categorias/Categorias";
import { Stoque } from "./Stoque/stoque";

export default function Page(){
    return(
        <>

<div className="h-[15%]">

          <Label className='font-bold px-8 text-2xl text-white'>Configurações</Label>

            <Tabs className="w-full flex-col flex h-[95%] ">
              <TabsList
                defaultValue={"1"}
                className="w-full flex flex-col bg-[--background]  h-full"
              >
                <div className="flex justify-start  w-full">
                  
                  <TabsTrigger
                    className="  data-[state=active]:bg-green-600 w-full"
                    value="1"
                  >
                    <Button className="text-white  w-full  flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                      <Sprout />
                      <p className="ml-2 ">Permições</p>
                    </Button>
                  </TabsTrigger>

                  <TabsTrigger
                    className=" data-[state=active]:bg-green-600 w-full"
                    value="2"
                  >
                    <Button className="text-white    w-full  flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                      <MousePointerSquareDashed />
                      <p className="ml-2 ">Preços</p>
                    </Button>
                  </TabsTrigger>


                  <TabsTrigger
                    className=" w-full data-[state=active]:bg-green-600"
                    value="2"
                  >
                    <Button className="text-white    w-full  flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                      <Footprints />
                      <p className="ml-2 ">Fontes</p>
                    </Button>
                  </TabsTrigger>


                  <TabsTrigger
                    className=" w-full data-[state=active]:bg-green-600"
                    value="3"
                  >
                    <Button className="text-white    w-full  flex items-center justify-start bg-transparent hover:bg-transparent   rounded-none border-spacing-1">
                      <Printer />
                      <p className="ml-2 ">Estoque</p>
                    </Button>
                  </TabsTrigger>


                  <TabsTrigger
                    className=" w-full data-[state=active]:bg-green-600"
                    value="5"
                  >
                    <Button className="text-white    w-full  flex items-center justify-start bg-transparent hover:bg-transparent   rounded-none border-spacing-1">
                      <Printer />
                      <p className="ml-2 ">Categoria</p>
                    </Button>
                  </TabsTrigger>


                  <TabsTrigger
                    className=" w-full data-[state=active]:bg-green-600"
                    value="6"
                  >
                    <Button className="text-white    w-full  flex items-center justify-start bg-transparent hover:bg-transparent   rounded-none border-spacing-1">
                      <Printer />
                      <p className="ml-2 ">Precos</p>
                    </Button>
                  </TabsTrigger>


                </div>
          
                <div className="h-[70%] w-full">

                <TabsContent value="3" className=" w-full">
                  <Stoque/>
               </TabsContent>

                <TabsContent value="5" className=" w-full">
                  <Categorias/>
               </TabsContent>

                <TabsContent value="6" className="w-full">
                  <Price/>
               </TabsContent>
              
                </div>
              </TabsList>
            </Tabs>
    
      </div>
        
        </>
    )
}