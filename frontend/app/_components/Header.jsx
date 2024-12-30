import React from 'react'
import Image from 'next/image';
import { LayoutGrid, Search,LogInIcon, ShoppingBagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <div className='flex p-2 justify-between items-center'>
       
       <div>
        <Image src='/images/logo.png' alt="Next.js" width={120} height={120}>
        </Image>    
       </div>
        
      <div className='hidden md:flex gap-2 items-center'>
         
        <DropdownMenu>
          <DropdownMenuTrigger><h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-blue-400'>
           <LayoutGrid className='h-5 w-5'/>Categories</h2>
            </DropdownMenuTrigger>
             <DropdownMenuContent>
              <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
               <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
             </DropdownMenuContent>
        </DropdownMenu>
      </div>
         


        <div className='hidden md:flex gap-2 items-center'>
          <Search/>
           <input
            type='text'
            placeholder='Search for products'
            className='border-2 border-gray-300 rounded-1g p-2'
           />
        </div>
        
        <div className='flex gap-2 items-center m1-auto'>
      
         <div>
          <h2><ShoppingBagIcon className='h-5 w-5'/>0</h2>
           <Button className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>
            <LogInIcon/>LOGIN
           </Button>
         </div>
        </div>
    </div>
  );
}

export default Header;
