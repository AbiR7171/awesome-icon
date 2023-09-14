import React from 'react';    // Import react library
import { Icon } from '@iconify/react';    // Import Icon component from icon library

const Header = () => {    // Defining Header component
    return (
        <div className='container mx-auto px-20 font-primary '>    

<div className='flex items-center justify-between py-5'>    

<div className='flex items-center gap-20'>    

<p><Icon icon="logos:font-awesome" className='text-2xl' /></p>   

<ul className='flex gap-6 items-center text-gray-500 text-[17px]'>     

<li>Starts</li>
<li><Icon icon="tabler:search" className='text-black' /></li>
<li>Docs</li>
<li>Plans</li>
<li>Support</li>
<li>Podcast</li>

</ul>

</div>

<div>
<Icon icon="circum:logout" className='text-3xl text-gray-500' />
</div>

</div>

</div>
    );
};

export default Header;    // Export Header component
