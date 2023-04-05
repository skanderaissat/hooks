import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,query}) => {
  return (
    <div>
      {movies.filter((post)=> {if (query ===''){
        return post}
        else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post
        }
        return false
      }).map((el,key) => {
        return <MovieCard el={el} key={key} />



      } )}
    </div>
  )
}

export default MovieList