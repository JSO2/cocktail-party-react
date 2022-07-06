import React from 'react'
import { useGlobalContext } from '../context'
export default function Search() {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchDrink() {
        setSearchTerm(searchValue.current.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    return ( <
        section className = 'section search' >
        <
        form className = 'search-form'
        onSubmit = { handleSubmit } >
        <
        div className = 'form-control' >
        <
        label htmlFor = 'name' > Cocktail Party < span className = "clink" > 🍸 < /span></label >
        <
        input type = 'text'
        name = 'name'
        id = 'name'
        placeholder = 'Search your favorite drink'
        ref = { searchValue }
        onChange = { searchDrink }
        /> <
        /div> <
        /form> <
        /section>
    )
}