import React from 'react'
import './MainButton.scss';


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
     <div className="main_buttons">
       <a onClick={ () => this.props.goPage(this.props.srcPage) }> { this.props.label } </a>
     </div>
    )
  }

  render() {
    return this.renderButtons()
  }
}

export default MainButtons;
