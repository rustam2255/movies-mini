import {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component{
  constructor(props){
    super(props)
    this.state = {term: ''}
  }
  updateTermHandler = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.updateTermHandler(term)
  }
  render(){
    return (
      <input type="text" className="form-control search-input" placeholder="Kinolarni qidirsh?" onChange={this.updateTermHandler} value={this.state.term} />
    )
  }
}
/*const SearchPanel = () => {
  return (
    <input type="text" className="form-control search-input" placeholder="Kinolarni qidirsh?" />
  )
}*/

export default SearchPanel