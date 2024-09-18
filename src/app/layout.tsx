import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderApp } from "./_components/Header";
import { AsideApp } from "./_components/AsideApp";
import { Toaster } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kufeta",
  description: "app generate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main className="flex max-sm:flex-col text-white max-sm:h-[100vh] justify-between bg-[--background] w-full h-[100vh]">

           <main className="w-full  max-sm:flex-col flex">
              <main className='w-[300px] max-sm:hidden'>


               <aside className='w-[300px] h-full bg-[--secondary] p-4 '>

                <header className="h-[10%]">
                  <h1 className="text-xl font-semibold text-[--primary]">Contactos</h1>
                  <div>
                  <Input className="p-2 outline-none placeholder:text-[--primary] border-b-[--primary] " placeholder="usuarios search"/>
                  </div>
                </header>
                <main className="h-[80%] max-sm:h-[100%]"> 
<ScrollArea className="h-[75vh] max-sm:h-[50vh] rounded-xl border-zinc-900  max-sm:h-[80vh]">
{          
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((item,k)=>(
                  <div key={k} className='flex hover:bg-[#111] cursor-pointer justify-between rounded mt-1 p-2 items-center'> 
                    <div className="flex items-center">
                      <aside className="w-[40px] h-[40px] text-black flex justify-center items-center bg-white rounded-full">
                        M
                      </aside>    
                      
                        <div className="ml-2">
                      <p>Adalberto Jamba</p>
                      <p className="text-[--primary] text-[10px]">2123@</p>
                    </div>
                    </div>
              
                    <div>
                      <p className="bg-green-500 p-1 rounded-full text-[10px]">
                        12
                      </p>
                    </div>
                  </div>
  ))
}
</ScrollArea>
                </main>
                <footer className="flex justify-between items-center">
                  <div>
                     <p>Obedy Possante</p>
                  <p className="text-[--primary]">@user_3233</p>

                  </div>
                 
                  <Button className="text-white"><Settings/></Button>
                </footer>

               </aside>
              </main>
                {children}
           </main>
         
        <Toaster className="bg-[--secondary] text-white shadow-sm shadow-white"/>
        </main>
       
        </body>

    </html>
  );
}
