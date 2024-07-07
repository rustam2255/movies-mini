import {Component} from 'react'
import './movie-add.css'

class MovieAdd extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      views: ''
    }
  }
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    const {name,views} = this.state
    const {addForm} = this.props
    return (
      <div className='movie-add'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={(e) => addForm(e, {name,viewers: views})}>
          <input type="text" className='form-control new-post-label' placeholder='Qanday kino?'  onChange={this.changeInput} name='name'/>
          <input type="number" className='form-control new-post-label'   placeholder='Nechi marotaba korilgan?' onChange={this.changeInput} name='views'/>
          <button type='submit' className='btn btn-outline-dark'>
            Qo'shish
          </button>
        </form>
      </div>
    )
  }
}

/*const MovieAdd = () => {
  return (
    <div className='movie-add'>
      <h3>Yangi kino qo'shish</h3>
      <form className='add-form d-flex'>
        <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
        <input type="number" className='form-control new-post-label'   placeholder='Nechi marotaba korilgan?' />
        <button type='submit' className='btn btn-outline-dark'>
          Qo'shish
        </button>
      </form>
    </div>
  )
}*/

export default MovieAdd