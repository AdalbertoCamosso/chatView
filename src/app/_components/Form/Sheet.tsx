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
    SaveIcon,
    Settings,
    Settings2,
    Sprout,
    XIcon,

  } from "lucide-react";
  import { Button } from "@/components/ui/button";


  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
    SheetFooter
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

    Trash,
  } from "lucide-react";
  import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
  import React from "react";

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

  import { toast, Toaster } from "sonner";
  

  interface  Props{
    children?:React.ReactNode,
    title?:string,
    Description?:string,
    trigger?:React.ReactNode,
    save?:()=>void
  }

  
export const Sheetform=({children,title,Description,trigger,save}:Props)=>{
    return(
        <Sheet>
        <SheetTrigger>

         {trigger}
        </SheetTrigger> 
     <SheetContent className="bg-black">
  <form  onSubmit={save}> 

      

          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{Description}</SheetDescription>
          {children}

          <SheetFooter className="py-4">


<SheetClose>
<Button type="submit" className="bg-blue-500 text-white rounded-[4px] hover:bg-blue-600">
      <SaveIcon className="w-4 h-4 mr-2" />
      Salvar
    </Button>
</SheetClose>

<SheetClose>
    <Button type="button" variant="destructive" className='rounded-[4px]'>
      <XIcon className="w-4 h-4 mr-2" />
      cancelar
    </Button>
</SheetClose>
  </SheetFooter>

         </form> 

      </SheetContent>

      </Sheet>   
    )
}