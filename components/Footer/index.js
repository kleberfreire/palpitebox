import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: Kleber Freire  / {' '}
        <a className='hover:underline' href='https://www.linkedin.com/in/kleber-freire-67116228'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/kleberfreire'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' alt='Semana FullStack' />
          <img className='inline p-4' src='/logo_devpleno.png' alt='Logo devPleno' />
        </div>
      </div>
    </div>
  )
}

export default Footer
