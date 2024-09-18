import { ThemeToggle } from "@/components/theme-toggle";
import img from '../../l.jpg'
import { AlertCircle, ArrowBigLeft, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Download, HelpCircle, History, Home, LogOut, MenuIcon, NutIcon, NutOffIcon, PenIcon, Pyramid, Settings, TrafficCone, Trash2, User2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Client } from "@/Page/Client";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Pie, PieChart, XAxis } from "recharts";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function AlertDelete({Children}) {
    const nav=useNavigate()

    return (
  

<Dialog > 
    <DialogTrigger className="w-full">
        {Children}
    </DialogTrigger>
    <DialogContent className="w-[90%] bg-[background]  rounded-sm ">
        <DialogTitle>
        Tens a certeza
        </DialogTitle>
          <DialogDescription>
           Essas alterações eram permanentes
        </DialogDescription>
<DialogClose className="w-full flex justify-between">
<Button className="bg-red-600 hover:bg-red-800 w-[45%] p-4 h-[50px] text-white font-semibold">confirmar</Button>

       <Button className="bg-green-600 w-[45%] hover:bg-green-800 p-4 h-[50px] text-white font-semibold">canselar</Button>
  </DialogClose>  
  </DialogContent>
</Dialog> 
  
    );
  }
  