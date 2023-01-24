import { useState } from 'react'
import { Formulary } from './components/Formulary'
import { Subscribes } from './components/Subscribes'
import "./App.scss"

function App() {
  const [page, setPage] = useState<boolean>(false)

  function toSubscribes(){
    setPage(true)
  }

  function toFormulary(){
    setPage(false)
  }


  return (
    <div className="App">
      <nav className='Options'>
        <button onClick={toFormulary}>Assinar</button>
        <button onClick={toSubscribes}>Membros</button>
      </nav>
      <main>
        <div className='ImageSide'>
          {
            page?(
              <img
              src="https://www.shakebugs.com/wp-content/uploads/2022/03/managing-developers-mistakes-featured.png" alt="imagem lateral" />
            
            ):(
              <img
              src="https://www.shakebugs.com/wp-content/uploads/2022/06/Ultimate-guide-to-developer-productivity.png"
              alt="imagem lateral" />
            )
          }
        </div>

        {
        !page?(
          <Formulary />
        ):(
          <Subscribes/>
        )
        }
      </main>
    </div>
  )
}

export default App
