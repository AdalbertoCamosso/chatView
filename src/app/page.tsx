import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Music, Send, SendHorizonalIcon, Settings, Trash2, User2Icon } from "lucide-react";


const Page = () => {
  
  // max-sm:h-[100%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:align-center
  return (
    <div className="w-full ">
  <header className="w-full p-1 flex items-center bg-[--secondary]  h-[7%] max-sm:h-[10%]">
  <div className="w-full p-1 flex items-center bg-[--secondary]  h-[7%]">
     <aside className="w-[30px] h-[30px] text-[--secondary] flex justify-center items-center bg-white rounded-full">
                        M
   </aside>  
    <p className="ml-1">
   Adalbertor     
    </p>
  
  </div> 
 
 <div className="flex w-[40%] text-[12px] px-3 justify-end gap-2">
  <Button className="p-4 bg-[--primary] rounded text-white">
      <Music size={14} color="white" />
  </Button>
  <Popover>
    <PopoverTrigger>
       <Button className="p-4 bg-[--primary] rounded text-white">
  <Settings size={14} color="white"  />
  </Button>
    </PopoverTrigger>
    <PopoverContent className="p-2 bg-[--secondary] p-2 border w-[300px] mt-2 rounded">
      cores
      <div className="flex w-full gap-5">
      <div className="w-[20px] h-[20px] bg-orange-500 rounded-full"> </div>
      <div className="w-[20px] h-[20px] bg-green-500 rounded-full"> </div>
      <div className="w-[20px] h-[20px] bg-pink-500 rounded-full"> </div>
      <div className="w-[20px] h-[20px] bg-blue-500 rounded-full"> </div>
      </div>
    </PopoverContent>
  </Popover>
 
 
 </div>
  </header>
  <main className="h-[83%] max-sm:h-[88%] bg-[--secondary]">
  <main className="h-[98%] w-[99%] bg-[#181818]  rounded-[10px] ">
  <ScrollArea  className="h-[82vh] max-sm:h-[40vh] rounded-xl border-zinc-900  max-sm:h-[75vh]">


{
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((i)=>(
<>


<Popover >
    <PopoverTrigger  className="w-full flex justify-start">
    <section className="w-full text-start flex justify-start">
<div className="w-[40%]  max-sm:w-[45%]">
 <div className="flex flex-col p-2">
  <div className="flex items-center">
  <aside className="w-[15px] text-[8px] h-[15px] text-black flex justify-center items-center bg-white rounded-full">
     M
   </aside> 
    <p className="ml-2">Moises Malange</p>
  </div>
  <div className="bg-[--secondary] p-2  max-sm:text-[12px] rounded">
    <p>sihd8ofsd89fys89diusdui ih8eyw98wer 8s7dy89sydf gs87dy78sdf ysgudys sihd8ofsd89fys89diusdui 8s7dy89sydf gs87dy78sdf ysgudys</p>
    <div className="w-full flex justify-end p-1">
      <p className="text-[12px] text-[--primary] ">12:30 12-09-2022</p>
    </div>
  </div>
 </div>
</div>
    </section>

    </PopoverTrigger>
    <PopoverContent className="p-2 bg-[--secondary] p-2 border w-[300px] mt-2 rounded">
      accoes
      <div className="flex text-white w-full gap-5">
    <Button className="flex items-center text-white"><Trash2/> Apagar</Button>
   </div>
    </PopoverContent>
  </Popover>
 
 

<section className="w-full flex justify-end">
<div className="w-[40%]">
 <div className="flex flex-col w-full p-2">
  <div className="flex w-full items-end">  
   
  <aside className="w-[15px] text-[8px] h-[15px] text-black flex justify-center items-center  rounded-full">
     M
   </aside> 
   <p className="ml-2">Moises Malange</p>
  </div>
  <div className="bg-[--primary] p-2 rounded">
    <p>sihdf ysgudys sihd8ofsd89fys89diusdui 8s7dy89sydf gs87dy78sdf ysgudys</p>
    <div className="w-full flex justify-end p-1">
      <p className="text-[12px] ">12:30 12-09-2022</p>
    </div>
  </div>
 </div>
</div>
</section>

</>

  ))
}
</ScrollArea>

</main>
  </main>
  <footer className="w-full  max-sm:hidden  max-sm:w-[90%] max-sm:rounded-[10px] flex items-center px-4 bg-black h-[10%]">

<div>
  <p className="text-lg">🙂</p>
</div>
<Input className="border-none outline-none outline:bg-orange-500" placeholder="pronto para enviar ..." />
<Button className="bg-[--primary] rounded text-white">
  <SendHorizonalIcon size={14}/>
</Button>
  </footer>

  <footer className=" max-sm:w-full max-md:hidden max-sm:flex  max-sm:justify-center  max-sm:items-center">
  <footer className="w-full max-sm:w-[90%] max-sm:rounded-[10px] flex items-center  max-sm:p-4 bg-black h-[30%]">
<div>
  <p className="text-lg">🙂</p>
</div>
<Input className="border-none outline-none outline:bg-orange-500" placeholder="pronto para enviar ..." />
<Button className="bg-[--primary] rounded text-white">
  <SendHorizonalIcon size={14}/>
</Button>
  </footer>
  </footer>
    </div>
  );
};

export default Page;