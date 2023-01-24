import React, { useCallback, useEffect, useState } from 'react'
import supabase from '../../Supabase/supabase'
import useEmailStore from '../../Zustand/email';
import "./Subscribes.scss"

interface data {
  id: number;
  email: string;
  created_at: Date;
}

export const Subscribes = () => {
  const all_emails  = useEmailStore((state) => state.emails);
  const emails = all_emails[0];
  const request  = useEmailStore((state) => state.request);
  useEffect(()=>{
      if(!emails){
        request()
      }

  }, [])

  return (
    <div className='Subscribes'>
      <h2>Nossos membros!</h2>
      <ul>
        {
          emails?.map((email:any)=>{
            return <li key={email.id}>{email.email}</li>
          })
        }
      </ul>
    </div>
  )
}
