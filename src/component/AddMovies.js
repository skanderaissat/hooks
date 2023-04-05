import React, { useState } from 'react'

const AddMovies = ({addmovies}) => {
    const [name,setName] = useState ("");
    const [Categorie,setCategorie] = useState ("");
    const [pays,setPays]= useState ("");
    const [rate,setRate]= useState ("");
    const [photo,setPhoto]= useState ("");
  return (
    <div>
      <form>
        <div>
            <label>
                name 
            </label>
            <input type="text"             
            onChange={(e) => setName(e.target.value)}
            value={name}/>

        </div>
        <div>
        <label>
                Categorie
            </label>
            <input type="text"             
            onChange={(e) => setCategorie(e.target.value)}
            value={Categorie}/>     
        </div>
        <div>
        <label>
                pays
            </label>
            <input type="text"             
            onChange={(e) => setPays(e.target.value)}
            value={pays}/>     
        </div>
        <div>
        <label>
                rate
            </label>
            <input type="text"             
            onChange={(e) => setRate(e.target.value)}
            value={rate}/>     
        </div>
        <div>
        <label>
                photo
            </label>
            <input type="text"             
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}/>     
        </div>
       <button className='btn btn-success' onClick={(e) => {e.preventDefault()
        addmovies({name,pays,photo,rate,Categorie})}}>AddMovies</button>
        
      </form>

    </div>
  )
}

export default AddMovies