import React from 'react'

const Input = ({ label, placeholder, onChange, name, value }) => {
  return (
    <div>
      <label className='font-bold' placeholder='eweeee'>{ label }</label>
      <input type='text' className='p-4 bg-blue-100 block shadow my-2 rounded'
        placeholder={placeholder} onChange={onChange} name ={ name } value={ value }/>
    </div>
  )
}

export default Input
