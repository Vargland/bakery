import { connect } from 'react-redux'
import { LABEL, PAGE } from '../../constants/constants'
import { nextPage } from '../../redux/actions/mainPage'
import { withRouter } from 'react-router-dom'

import React from 'react'
import MainButtons from '../MainButtons/MainButtons'

import './MainPage.scss'

class MainPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentPage: 'mainPage',
      nextPage: ''
    };
  }

  goPage(page) {
    const { nextPage } = this.props;

    nextPage(page);
  }

  renderSelectComponet() {
    return (
      <div className="select">
        <div className="select__materials"> 
          <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.MATERIALS} label={LABEL.MATERIALS} />
        </div>
        <div className="select__recipes">
          <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.RECIPES} label={LABEL.RECIPES} />
        </div>
      </div>
    )
  }

  render() {
    return this.renderSelectComponet();
  }
}

const mapDispatchToProps = dispatch => ({
  nextPage: (page) => dispatch(nextPage(page)),
})

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage))
