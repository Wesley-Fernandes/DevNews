import React, { FormEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify';
import supabase from '../../Supabase/supabase';
import "./Formulary.scss"
export const FormularyNormal = () => {
  const [email, setEmail] = useState<string>("")

  async function signInNewsLetter(e:FormEvent){
    e.preventDefault();

    if(email){
      const {data, error} = await supabase.from("users").insert({email});

      if(error) {
        toast.error(`Houve um erro: ${error.message}`);
        return
      }

      toast.success(`${email} foi cadastrado com sucesso!`);
      setEmail("");

    }else{
      toast.error(`O campo email não pode ser vazio!`);
    }
  }
  
  return (
    <form className='Formulary' onSubmit={signInNewsLetter}>
        <h1>DevNews</h1>
        <p>Inscreva-se para não perder nenhuma nova atualização sobre o mundo do desenvolvimento!</p>
        <input
          type="email"
          name="email"
          placeholder='Digite o seu melhor e-mail...'
          onChange={(e)=>{setEmail(e.target.value)}} />
        <button type='submit'>Inscrever-se</button>
    </form>
  )
}
