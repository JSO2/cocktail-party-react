import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function SingleDrink() {
  const { id } = useParams()
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          ]
          const newDrink = {
            name,
            image,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newDrink)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getCocktail()
  }, [id])
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section drink-section'>
        <Link to='/' className='btn btn-primary'>
          Home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drinkInfo'>
            <p>
              <span className='drink-details'>category :</span> {category}
            </p>
            <p>
              <span className='drink-details'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-details'>instructions :</span> {instructions}
            </p>
            <p>
              <span className='drink-details'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}