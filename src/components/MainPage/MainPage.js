import React from 'react';
import './MainPage.scss';
import MainButtons from '../MainButtons/MainButtons';
import { nextPage } from '../../redux/actions/mainPage';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class MainPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 'mainPage',
      nextPage: ''
    }
  }

  goPage(page) {
    console.log(this.props)
    console.log(this.state)
    nextPage(page)
  }

  renderSelectComponet() {
    return (
      <div className="select">
        <div className="select_ingredients"> 
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'addIngredients'} label={'Add'}></MainButtons>
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'modifyIngredients'} label={'Modify'}></MainButtons>
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'viewIngredients'} label={'View'}></MainButtons>
        </div>
        <div className="select_recipes">
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'addRecipe'} label={'Add'}></MainButtons>
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'modifyRecipe'} label={'Modify'}></MainButtons>
          <MainButtons className="select_button" goPage = { this.goPage.bind(this) } srcPage={'viewRecipe'} label={'View'}></MainButtons>
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