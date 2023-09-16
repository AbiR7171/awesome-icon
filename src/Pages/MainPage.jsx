import React from 'react';
import { Icon } from '@iconify/react';
import IconPage from './IconPage';

const MainPage = () => {
    return (
        <div> 

            <section className='container mx-auto px-32 mt-20 flex justify-around items-center gap-32'>
 
                    <section className='flex gap-20'>
                    <div className='hover:border-b-4  border-sky-700 text-black hover:text-sky-800'>
                          <p className='text-4xl text-black hover:text-sky-800'><Icon icon="game-icons:love-song" /></p>
                          <p className='font-primary  font-bold'>Classic</p>
                     </div>
                     <div className='hover:border-b-4 border-sky-700 text-black hover:text-sky-800'>
                          <p className='text-4xl'><Icon icon="game-icons:love-song" /></p>
                          <p className='font-primary font-bold'>Sharp</p>
                     </div>
                    
                     <div className='hover:border-b-4 border-sky-700 text-black hover:text-sky-800'>
                          <p className='text-4xl '><Icon icon="simple-icons:fontawesome" /></p>
                          <p className='font-primary font-bold'>Brand</p>
                     </div>
                     <div className='hover:border-b-4 border-sky-700 text-black hover:text-sky-800'>
                          <p className='text-4xl '><Icon icon="fontisto:arrow-expand" /></p>
                          <p className='font-primary'>Free</p>
                     </div>
                    </section>
                   
                   <section className='flex gap-8 items-center'>

                           
                     <div className=''>

                          <p className='text-3xl text-black hover:text-sky-800'><Icon icon="ep:menu" /></p>
                        
                     </div>
                     <div className=''>
                          <p className='text-3xl text-black hover:text-sky-800'><Icon icon="healthicons:ui-menu-grid" /></p>
                       
                     </div>
                     <div className=''>
                          <p className='text-3xl text-black hover:text-sky-800'><Icon icon="system-uicons:menu-hamburger" /></p>
                         
                     </div>
                     <div className=''>

                     <select className="select select-bordered w-full max-w-xs">
                           <option disabled selected>Featured</option>
                           <option>Alphabetical</option>
                           </select>


                        
                     </div>
                     <div className=''>

                     <select className="select select-bordered w-full max-w-xs">
                           <option disabled selected>6.4.2</option>
                           <option>5.15.4</option>
                           <option>All versions</option>
                           </select>


                        
                     </div>

                   </section>
                  

            </section> 


            <IconPage/>

            
        </div>
    );
};

export default MainPage;