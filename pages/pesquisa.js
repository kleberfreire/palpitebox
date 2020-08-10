import React, { useState } from 'react'
import Input from '../components/input'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })

  const Notas = [0, 1, 2, 3, 4, 5]

  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json()
      console.log(data)
      setForm({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 5
      })
      setSucess(true)
      setRetorno(data)
    } catch (error) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa'/>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
      Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      { !sucess && <div className='w-1/5 mx-auto mb-6'>
        <Input label='Seu nome:' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <Input label='Email' placeholder='Email' onChange={onChange} name='Email' value={form.Email}/>
        <Input label='WhatsApp:' placeholder='WhatsApp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Nota:</label>
        <div className='flex py-6'>
          { Notas.map((nota) => {
            return (
              <label key={nota} className='block w-1/6 text-center'>
                { nota }
                <br/>
                <input type='radio' name='Nota' value={nota} onChange={ onChange }/>
              </label>
            )
          })
          }
        </div>

        <button className='bg-blue-400 px-12 py-4  rounded-lg font-bold shadow-lg hover:shadow mt-4' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
          Obrigado por contribuir com sua sugestão ou crítica
        </p>
        {
          retorno.showCupom && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br/>
            <span className='font-bold text-2xl' >{retorno.Cupom }</span>
          </div>
        }
        {
          retorno.showCupom && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb2' >{retorno.Promo }</span>
            <br/>
            Tirer um print ou foto e apresente ao garçom.
          </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa
