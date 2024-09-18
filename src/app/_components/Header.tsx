import img from '../../l.jpg'
import { AlertCircle, ArrowBigLeft, ArrowDown, ArrowRight, Download, Eraser, HelpCircle, History, Home, Loader2, LogOut, MenuIcon, NutIcon, NutOffIcon, PenIcon, Pyramid, Settings, TrafficCone, Trash2, User2Icon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from '@/components/theme-toggle';

export function HeaderApp() {

    return (

        <header className="h-[60px] max-sm:w-full  max-sm:justify-end max-sm:text-white  p-5 flex justify-end items-center w-full shadow-sm">
        
<button className="absolute z-40 dark:bg-white bg-black text-white dark:text-black w-[60px] h-[60px] rounded-full left-[75%] top-[80%]">
  <ThemeToggle />   
</button>

      <div>



<Sheet>
    <SheetTrigger>
         <MenuIcon/>
    </SheetTrigger>
    <SheetContent className="bg-[background]">
        <main className="h-[90%]">
        <SheetTitle>
            Menu
        </SheetTitle>
        <div className="flex flex-col gap-2 mt-4">


             <SheetClose>
                
             
            <div className="flex items-center  bg-black rounded-[10px] p-4">
                <ThemeToggle/>
                <p className="font-semibold  text-[16px]">Tema</p>
            </div>   </SheetClose>

            <SheetClose>
                
              
            <div className="flex items-center p-4">
                <NutIcon/>
                <p className="font-semibold ml-4 text-[16px]">Notificações</p>
            </div>  </SheetClose>

            <SheetClose>
                
               
            <div className="flex items-center p-4">
                <AlertCircle/>
                <p className="font-semibold ml-4 text-[16px]">Sobre</p>
            </div> 
            </SheetClose>

            <SheetClose>
            <div className="flex items-center p-4">
                <HelpCircle/>
                <p className="font-semibold ml-4 text-[16px]">Ajuda</p>
            </div> </SheetClose>

            <SheetClose>
            <div  className="flex items-center text-red-500 p-4">
                <LogOut/>
                <p className="font-semibold text-red-500 ml-4 text-[16px]">Sair</p>
            </div>
 </SheetClose>
        </div>
        </main>
        <div className="w-full flex justify-center">
        <h1 className="font-bold text-[20px] flex"> <Loader2 className="animate-spin text-green-500 bg-green-800 rounded-full p-1"/>kufeta.<p className="text-green-600">..</p></h1>
        </div>
    </SheetContent>
</Sheet>

      </div>
        </header>

    );
  }
  