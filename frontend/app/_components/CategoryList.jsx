"use client";
import React from 'react';
import GlobalApi from '../_utilities/GlobalApi';
import { useState,useEffect} from 'react';
import Image from 'next/image';
import Link from'next/link';

function CategoryList() {
  const [CategoryList,setMenuCategory] = React.useState([]);
  
    useEffect(() => {
      getMenuCategory();
    }, []);
  
    const getMenuCategory =() =>{
      GlobalApi.getMenuCategory().then((response) => {
      console.log('ProductList',response.data.data);
      setMenuCategory(response.data.data);
      });
    };

  return (
   
    <div>
      <div className='m-4 gap-3 text-bold top-text-black text-2xl font-bold items-center'>
    Product List    
    <div className= 'm-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-5 items-center justify-between'>
 
     {CategoryList.map((Category,index)=>(

            <Link href={'/product/' + Category.name}
className ='flex flex-col items-center rounded-lg gap-2 mt-2 group
cursor-pointer hover:bg-blue-500 bg-blue-300 hover:scale-125 transition-all ease-in-out duration-500'
       
       key={index}>

         <div>
     <Image 
     src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + Category.Image.url
      
    }
          
      alt='Category'
      width={50}
      height={50}

      />

      </div>

      <h2 className='text-blue-800 flex items-center'>{Category.Name}</h2>
      </Link>
      
      
    ))}
      </div>
      </div>
      </div>
  );
}
      


export default CategoryList;
