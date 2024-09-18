import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import React from "react";

interface Props{
    data:any,
    Trigger:React.ReactNode
}

export function SelectSearch({data,Trigger}:Props){

    const [open, setOpen] = React.useState(false)
  

return(
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      {
        Trigger
      }
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-1">
        <Command>
   
         <CommandList>

            <CommandGroup className="flex flex-col gap-2">
            {
               data
            }
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  
)

}

