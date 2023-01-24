import React, { useCallback, useEffect, useState } from 'react'
import supabase from '../../Supabase/supabase'
import "./Subscribes.scss"

interface data {
  id: number;
  email: string;
  created_at: Date;
}

export const SubscribesNormal = () => {

  const [datas, setDatas] = useState<data[]|null>([])

  useEffect(()=>{
    async function getData(){
      const {data}:any = await supabase.from("users").select("*");
      setDatas(data)
      console.log(data);
    }
    getData();
  }, [])

  return (
    <div className='Subscribes'>
      <h2>Nossos membros!</h2>
      <ul>
        {
          datas?.map((data:any)=>{
            return <li key={data.id}>{data.email}</li>
          })
        }
      </ul>
    </div>
  )
}
