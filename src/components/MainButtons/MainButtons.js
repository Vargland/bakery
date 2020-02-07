import { Link } from 'react-router-dom'

import React from 'react'

import './MainButton.scss'

class MainButtons extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 'MainPage',
      nextPage: ''
    }
  }

  renderButtons() {
    return (
     <div className="main__button">
       <Link to={ this.props.srcPage } onClick={ () => this.props.goPage(this.props.srcPage) }> { this.props.label } </Link>
     </div>
    )
  }

  render() {
    return this.renderButtons()
  }
}

export default MainButtons
