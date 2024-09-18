import img from '../../l.jpg'
import { AlertCircle, ArrowBigLeft, ArrowDown, ArrowRight, Download, Eraser, HelpCircle, History, Home, Loader2, LogOut, MenuIcon, NutIcon, NutOffIcon, PenIcon, Pyramid, Settings, TrafficCone, Trash2, User2Icon } from "lucide-react";

export function Logo() {

    return (
        <div className="p-2 h-[5%]">
        <h1 className="font-bold text-white text-[20px] flex">
          <Loader2 className="animate-spin text-green-500 bg-green-800 text-white rounded-full p-1" />
          kufeta.<p className="text-green-600">..</p>
        </h1>
      </div>

    );
  }
  