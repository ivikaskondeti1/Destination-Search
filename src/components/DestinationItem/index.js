import {Component} from 'react'
import './index.css'

class DestinationList extends Component {
  render() {
    const {userDetails} = this.props
    const {name, imgUrl} = userDetails
    return (
      <li className="DestinationItemContaner">
        <div className="imageContiner">
          <img src={imgUrl} alt={name} className="vikas" />
          <p className="Paragraph">{name}</p>
        </div>
      </li>
    )
  }
}

export default DestinationList
