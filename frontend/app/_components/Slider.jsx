import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ShoppingBasket } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Slider() {
  return (

    <div className='hidden sm:grid'>
      
      <Carousel>
  <CarouselContent>
    <CarouselItem>
      
      <div className='hidden sm:grid grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
      <div className='px-10 gap-10'>
      <Badge className='sm:hidden md:hidden lg:inline-block m-3'>
        Get 20% Discount
      </Badge>
      <h1 className='ext-sm md:text-base lg:text-5xl md:text-1xl font bold py-6'>
        All Your Daily Needs
      </h1>
      <p className='ex-sm md:text-base lg:text-4xl md:text-1xl font-bold py-6'>
        Get All Your Daily Needs At One Place
      </p>
      <Button
      className='bg-blue-500 text-white m-1 px-1 text-lg rounded-full'
      variant='outline'
      size='1g'>
      <ShoppingBasket/> Buy Now
      </Button>
      </div>
      <div className='w-full'>
        <img src='/image/banner3.jpg'
        className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
        width={200}
        height={200}
        />
        </div>
        </div>
    </CarouselItem>
    
    <CarouselItem>
    
      <div className='hidden sm:grid grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
      <div className='px-1 gap-1'>
      <Badge className='sm:hidden md:hidden lg:inline-block m-3'>
        Get 20% Discount
      </Badge>
      <h1 className='ext-sm md:text-base lg:text-5xl md:text-1xl font bold py-6'>
        All Your Daily Needs
      </h1>
      <p className='ex-sm md:text-base lg:text-4xl md:text-1xl font-bold py-6'>
        Get All Your Daily Needs At One Place
      </p>
      <Button
      className='bg-blue-500 text-white m-1 px-1 text-lg rounded-full'
      variant='outline'
      size='1g'>
      <ShoppingBasket/> Buy Now
      </Button>
      </div>
      <div className='w-full'>
        <img src='/image/banner2.jpg'
        className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
        width={200}
        height={200}
        />
        </div>
        </div>
      </CarouselItem>
    
    <CarouselItem>
    {''}
      <div className='hidden sm:grid w-full grid-cols-2 md:grid-cols-2 gap-4 Banner rounded-2x1'>
      <div className='px-10 gap-10'>
      <Badge className='sm:hidden md:hidden lg:inline-block m-3'>
        Get 20% Discount
      </Badge>
      <h1 className='ext-sm md:text-base lg:text-5xl md:text-1xl font bold py-6'>
        All Your Daily Needs
      </h1>
      <p className='ex-sm md:text-base lg:text-4xl md:text-1xl font-bold py-6'>
        Get All Your Daily Needs At One Place
      </p>
      <Button
      className='bg-blue-500 text-white m-1 px-1 text-lg rounded-full'
      variant='outline'
      size='1g'>
      <ShoppingBasket/> Buy Now
      </Button>
      </div>
      <div className='w-full'>
        <img src='/image/banner1.jpg'
        className='w-full h-[300px] md:h-[300px] object-cover rounded-2xl row-span-1 m-2 align-middle'
        width={200}
        height={200}
        />
        </div>
        </div>
      </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  );
}

export default Slider
