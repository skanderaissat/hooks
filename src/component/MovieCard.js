import React from 'react'

const MovieCard = ({ el }) => {
  return (
    <div>
    <div class="card" style={{width: '18rem'}}>
  <img src={el.photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name: {el.name}</h5>
    <h5 class="card-title">Categorie :{el.Categorie}</h5>
    <h5 class="card-title">Pays: {el.pays}</h5>
    <h5 class="card-title">Rate: {el.rate}</h5>
  </div>
</div> 
    </div>
  )
}

export default MovieCard