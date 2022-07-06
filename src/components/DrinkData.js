import React from 'react'
import Drink from './Drink'
import { useGlobalContext } from '../context'

export default function DrinkData() {
  const { cocktails,  } = useGlobalContext()
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        No Drinks Found
      </h2>
    )
  }
  return (
    <section className='section'>
      <div className='drinks-center'>
        {cocktails.map((item) => {
          return <Drink key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}