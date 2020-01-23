import './MainPage.scss';
import { LABEL, PAGE } from '../../constants/constants'
import { connect } from 'react-redux';
import { nextPage } from '../../redux/actions/mainPage';
import { withRouter } from 'react-router-dom';
import MainButtons from '../MainButtons/MainButtons';
import React from 'react';

class MainPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentPage: 'mainPage',
      nextPage: '',
    };
  }

  goPage(page) {
    const { nextPage } = this.props;

    nextPage(page);
  }

  renderSelectComponet() {
    return (
      <div className="select">
        <div className="select_ingredients"> 
          <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.MATERIALS} label={LABEL.MATERIALS}></MainButtons>
        </div>
        <div className="select_recipes">
          <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.RECIPES} label={LABEL.RECIPES}></MainButtons>
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
 
 /** MAY THIS BUTTONS ARE NOT NECESSARY --> COULD BE MODIFY ON THE ADD/VIEW LIST //
  <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.ADD_INGREDIENTS} label={'Add'}></MainButtons>
  <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.VIEW_RECIPE} label={'View'}></MainButtons>
  <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.MODIFY_INGREDIENTS} label={'Modify'}></MainButtons> 
  <MainButtons className="select_button" goPage={ this.goPage.bind(this) } srcPage={PAGE.MODIFY_RECIPE} label={'Modify'}></MainButtons>
*/