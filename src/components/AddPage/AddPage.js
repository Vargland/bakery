import React from 'react'

class AddPage extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      currentPage: 'AddPage',
      nextPage: ''
    }
  }

  AddComponent() {
    return(
      <div>
        <h1> AddPage </h1>
      </div>
    )
  }

  render() {
    return this.AddComponent()
  }
}

export default AddPage;