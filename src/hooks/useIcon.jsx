import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useIcon = () => {
     

      const {data:icons=[], refetch}= useQuery({
         queryKey:["Icon"],
         queryFn: async ()=>{

               const res = await fetch("Icon.json");
               return res.json()
         }
      });

    return[icons, refetch]
};

export default useIcon;