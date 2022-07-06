import React from 'react'
import DrinkData from '../components/DrinkData'
import Search from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <Search />
      <DrinkData />
    </main>
  )
}