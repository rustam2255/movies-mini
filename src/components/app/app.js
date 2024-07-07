import {Component} from 'react'
import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList  from '../movie-list/movie-list'
import MovieAdd from '../movie-add/movie-add'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Jasur va gozal', viewers: 999, increase:false, like: false, id:1},
        {name: 'Shunqor', viewers:1200, increase:false, like:false,  id:2},
        {name: 'Tansoqchi', viewers: 1367, increase:false, like:false, id:3}
      ],
      term: ''
    }
  }
  onDelete = id =>{
    this.setState(({data}) => ({
      data: data.filter(c => c.id !==id),
      
    }))
  }
  addForm = (e, item) => {
    e.preventDefault()
    this.setState(({data}) => {
      const newArr = [...data,{...item, id: uuidv4(), increase: false, like:false}]
      return{
        data: newArr
      }
    })
  }
  onLike = (id) => {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        if(item.id === id){
          return {...item, like: !item.like}
        }
        return item
      })
      return {
        data: newArr
      }
    })
   
  }
  onIncrease = (id) => {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        if(item.id === id){
          return {...item, increase: !item.increase}
        }
        return item
      })
      return {
        data: newArr
      }
    })
  }
  searchHandler = (arr, term) => {
    if(arr.length === 0){
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }
  updateTermHandler = (term) => {
    this.setState(({term}))
  }
  render() {
    const {data, term} = this.state
    const allMoviesCount = data.length
    const increasedCount = data.filter(c => c.increase).length
    const visibleData = this.searchHandler(data, term)
    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo allMoviesCount = {allMoviesCount} increasedCount = { increasedCount}/>
          <div className='search-panel'>
            <SearchPanel updateTermHandler = {this.updateTermHandler}/>
            <AppFilter/>
          </div>
          <MovieList onIncrease = {this.onIncrease} onLike = {this.onLike} data = {visibleData} onDelete = {this.onDelete}/>
          <MovieAdd addForm = {this.addForm}/>
        </div>
      </div>
    )
  }
}
/*const App = () =>{
  const data = [
    {name: 'Jasur va gozal', viewers: 999,  id:1},
    {name: 'Shunqor', viewers:1200,  id:2},
    {name: 'Tansoqchi', viewers: 1367, id:3}
  ]
const onDelete = id =>{
  console.log(id)
}
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
        <MovieList data = {data} onDelete = {onDelete}/>
        <MovieAdd/>
      </div>
    </div>
  )
}*/
export default App