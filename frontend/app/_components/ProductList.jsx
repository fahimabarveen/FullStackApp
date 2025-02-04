'use client'
import React, {useEffect,useState } from 'react';
import GlobalApi  from '../_utilities/GlobalApi';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Bookmark,ShoppingBag,Heart } from 'lucide-react';

function ProductList()
{
  const [ProductList,setProductList] =useState([]);
      useEffect(() => {
        getProductList();
      }, []);
    
      const getProductList =() =>{
        GlobalApi.getProductList().then((response) => {
       
        console.log('Product List',response.data.data);
        setProductList(response.data.data);
        });
      };

  return (
    <div >
      <h2>Product List</h2>
      <div className='grid grid-cols-5 gap-4'>
      {ProductList.map((Product,index) => (
      <div key={index}
        className='p-3 flex flex-col items-center gap-4 border border-gray-200 rounded-lg'>
  
  <Image src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + Product.Image.url}
          alt = 'Trending Item'
          width={100}
          height={100}
          className='h-[200px] w-[450px] hover:scale-125 transition-all ease-in-out duration-500 rounded-lg'/>
        
<h2 className= 'text-blue-500'>{Product.Name}</h2>
{
  Product.MRP && Product.SellingPrice !==0 ?(
<>
<h2 className='front-semibold line-through text-gray-500'>
  {Product.MRP}
</h2>
<h2 className='text-black'>{Product.SellingPrice}</h2>
</>
):(
  <h2 className='text-black'>{Product.MRP}</h2>
)}


<div>
  {Product?.Categories?.map((Category,CatIndex) => (
  <h2 key={CatIndex}>{Category.Name}</h2>
  ))}
</div>
<div>
 <Button variant='outline'>
  <Bookmark />
  </Button>

  <Button>
    <ShoppingBag />
Add to Cart
  </Button>

  <Button variant='outline'><Heart /></Button>

</div>
    </div>  
   ))}

</div>

  </div>
  );

}
export default ProductList;