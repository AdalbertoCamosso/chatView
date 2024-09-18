
import { FooterApp } from "./AsideApp";
import { HeaderApp } from "./Header";

export function ConteinerApp({Children}) {

    return (
      <main className="w-screen bg-[background] h-screen flex flex-col ">

<div className="flex h-full">
<FooterApp/>
<main className="w-[95%]">
  <HeaderApp/>   
  {
    Children
}
</main>

</div>
      </main>
    );
  }
  