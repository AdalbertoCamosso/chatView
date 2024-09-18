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
  Label,
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
import { Logo } from "./logo";
import { Price } from "../main/settings/precos/Precos";
import { HeaderApp } from "./Header";

export function AsideApp() {
  return (
    <footer className="flex flex-col max-sm:p-1 max-sm:w-full max-sm:flex text-black justify-between w-[15%] p-4 bg-black h-full">
   <div className='flex justify-between max-sm:h-[30px]'>
     <Logo/>
     <div className="">
      <HeaderApp/>
     </div>
   </div>
  
      <div className="h-[60%]">
        <Tabs className="w-full h-[95%] max-sm:h-[10%]  flex justify-start">
          <TabsList
            defaultValue={"1"}
            className="w-full bg-black flex-col gap-4 max-sm:grid max-sm:grid-cols-6 max max-sm:w-full h-full"
          >
     
            <TabsTrigger
              className="bg-black  data-[state=active]:bg-green-600 w-full"
              value="1"
            >
              <Link href='/'>
              <Button className="text-white w-full   flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                <Home size={16} className="max-sm:text-[20px]" />
                <p className="ml-2 text-[16px] max-sm:hidden">Inicio</p>
              </Button>
              </Link>
            </TabsTrigger>


            
            <TabsTrigger
              className="bg-black data-[state=active]:bg-green-600 w-full"
              value="2"
            >
              <Link href='/main/produt'>
              <Button className="text-white  w-full  flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                <TrafficConeIcon size={16} />
                <p className="ml-2  max-sm:hidden">Produtos</p>
              </Button>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              className="bg-black w-full data-[state=active]:bg-green-600"
              value="3"
            >
              <Link  href='/main/Clientes'>
              <Button className="text-white  w-full  flex items-center justify-start bg-transparent hover:bg-transparent  rounded-none border-spacing-1">
                <User2Icon size={16} />
                <p className="ml-2  max-sm:hidden">Clientes</p>
              </Button> 
              </Link>
            </TabsTrigger>    
             
            <TabsTrigger
              className="bg-black w-full data-[state=active]:bg-green-600"
              value="4"
            >
              <Link  href='/main/Funcionarios'>
              <Button className="text-white  w-full  flex items-center justify-start bg-transparent hover:bg-transparent   rounded-none border-spacing-1">
                <User2Icon size={16} />
                <p className="ml-2  max-sm:hidden">Funcionarios</p>
              </Button>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              className="bg-black w-full data-[state=active]:bg-green-600"
              value="5"
            >
              <Button className="text-white  w-full  flex items-center justify-start bg-transparent hover:bg-transparent   rounded-none border-spacing-1">
                <StickerIcon size={16} />
                <p className="ml-2  max-sm:hidden">Stok</p>
              </Button>
            </TabsTrigger>

            <Link href='/main/settings'>
      <button className="text-[24px] min-md:hidden text-white p-4 rounded-full hover:bg-[background]">
              <Settings />
       </button>
    </Link>

          </TabsList>
        </Tabs>
      </div>
    <Link href='/main/settings'>
      <button className="text-[24px] max-sm:hidden  text-white p-4 rounded-full hover:bg-[background]">
              <Settings />
       </button>
    </Link>
      


   
    </footer>
  );
}
