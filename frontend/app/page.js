import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Welcome</h1>
      <Button className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>Click me</Button>
    </div>
  );
}
