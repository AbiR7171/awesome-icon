import React from 'react';
import { Icon } from '@iconify/react';

const SearchPage = () => {
    return (

        <div className='container mx-auto px-52'>
 
              <input type="text" className='
              input border-2 border-black w-full h-16 mt-10 rounded-full'
              placeholder='                    Search 26,233 icons...'
               />

              <div className='-mt-11 flex justify-between px-10'>

                 <p><Icon icon="tabler:search" className='text-2xl ' /></p>

                  <div className='flex items-center gap-1 text-gray-500 font-primary text-[13px]'>

                     <p>Powered by</p>
                     <p><Icon icon="mdi:file-search" /></p>
                     <p>Algolia</p>

                  </div>

              </div>
           


        </div>
    );
};

export default SearchPage;