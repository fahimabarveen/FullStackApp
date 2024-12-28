import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome</h1>
      <Button className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>
        <LogInIcon/>LOGIN</Button>
      
    </div>
  );
}
