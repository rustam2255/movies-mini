import './movie-list.css'
import '../movie-list-item/movie-list-item'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data, onDelete, onIncrease, onLike}) => {
  return (
    <div className='movie-list'>
        {
          data.map(item => (
              <MovieListItem key = {item.id} name ={item.name} viewers = {item.viewers} increase = {item.increase} like = {item.like} onDelete = {() => onDelete(item.id)} onLike = {() => onLike(item.id)} onIncrease = {() => {onIncrease(item.id)}}/>
          ))
        }
    </div>
  
  )
}

export default MovieList