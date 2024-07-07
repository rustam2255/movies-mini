import {Component} from 'react'
import './movie-list-item.css'
class MovieListItem extends Component {
  constructor(props){
    super(props)
    this.state = {increase: false, like: false}
    
  }
  
  render(){
    const {name, viewers, onDelete, onLike, onIncrease, increase, like} = this.props
    
    return (
      <li className={`list-group-item d-flex  justify-content-between ${increase && 'increase'} ${like && 'like'}`}>
        <span onClick={onLike} className='list-group-item-label'>{name}</span>
        <input type="text" className='list-group-item-input' defaultValue={viewers} />
        <div className='d-flex justify-content-center align-items-center  '>
         
          <button  className='btn-cookie btn-sm' onClick={onIncrease}>
            <i className='fas fa-cookie'></i>
          </button >
          <button className='btn-cookie btn-sm' onClick={onDelete}>
            <i className='fas fa-trash' ></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
        
      </li>
    )
  }
}
/*const MovieListItem = ({name, viewers, increase}) => {
  return (
    <li className={`list-group-item d-flex  justify-content-between ${increase && 'increase'}`}>
      <span className='list-group-item-label'>{name}</span>
      <input type="text" className='list-group-item-input' defaultValue={viewers} />
      <div className='d-flex justify-content-center align-items-center  '>
       
        <button  className='btn-cookie btn-sm'>
          <i className='fas fa-cookie'></i>
        </button >
        <button className='btn-cookie btn-sm'>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
      
    </li>
  )
}*/

export default MovieListItem