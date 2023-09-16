import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const IconPage = ({icons}) => {


    console.log(icons);
   


  



    
    return (
        <div className='bg-gray-200 w-full flex mt-4 h-full'>

             <div className='w-[30%] mt-10'>
                 
                 <ul className='flex flex-col gap-2 p-4 '> 
                     <li className='ms-44 uppercase font-primary'>Style</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="material-symbols:circle" /> Regular</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" />Light</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Thin</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Duotone</li>
                    
                 </ul>

                 <ul className='flex flex-col gap-2 p-4 '> 
                     <li className='ms-44 uppercase font-primary'>Style</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="material-symbols:circle" /> Regular</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" />Light</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Thin</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Duotone</li>
                    
                 </ul>

                 <ul className='flex flex-col gap-2 p-4 '> 
                     <li className='ms-44 uppercase font-primary'>Featured</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="material-symbols:circle" /> Regular</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" />Light</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Thin</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Duotone</li>
                    
                 </ul>

                 <ul className='flex flex-col gap-2 p-4 '> 
                     <li className='ms-44 uppercase font-primary'>categories</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="material-symbols:circle" /> Regular</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" />Light</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Thin</li>
                     <li className='flex ms-40  gap-2 items-center p-2 rounded hover:border border-white w-1/2 font-primary'><Icon icon="ph:circle-half-duotone" /> Duotone</li>
                    
                 </ul>
                  

            </div> 
         
             <div className='w-[80%] mt-10'>

                <p className='font-primary text-2xl font-bold'>{icons?.length} Icons</p>

                <div className='grid grid-cols-4 gap-8 mt-5 px-10'>

                    {
                        icons?.map(icon => {
                            return  <div className=' p-4 py-10 rounded-md bg-white flex justify-center'>
                                            <Icon icon={icon?.icon} className='text-5xl' />
                                    </div>
                        })
                    }

                     
                     
                </div>



               



            </div>
            
        </div>
    );
};

export default IconPage;