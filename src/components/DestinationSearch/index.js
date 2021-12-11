import {Component} from 'react'
import DestinationList from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      initialList: props.destinationsList,
    }
  }

  filterSearch = event => {
    this.setState({searchString: event.target.value})
  }

  render() {
    const {initialList, searchString} = this.state
    // console.log(searchString)
    const filterList = initialList.filter(eachvalue =>
      eachvalue.name.toLowerCase().includes(searchString),
    )
    // console.log(filterList)
    return (
      <div className="mainPage">
        <h1 className="heading">Destination Search</h1>
        <div className="searchContainer">
          <input type="search" onChange={this.filterSearch} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="DestinationItemContaner">
          {filterList.map(eachList => (
            <DestinationList userDetails={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
