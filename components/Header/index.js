import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <a><img className="mx-auto h-24" src="/logo_palpitebox.png" alt="PalpiteBox"/></a>
          </Link>
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md text-center">
        <Link href="/sobre">
          <a className='px-2 hover:underline font-bold'>Sobre</a>
        </Link>
        <Link href="/contato">
          <a className='px-2 hover:underline font-bold'>Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className='px-2 hover:underline font-bold'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}

export default Header
