import React, { useEffect, useState } from 'react'
import "./index.scss"
import LoginService from '../../services/foodService'
import "./Uudai.js"
import Endow from './Uudai.js'

class ListItem extends React.Component {
  state = {
    listItem: []
  }

  fetchData = () => {
    LoginService.getList().then((data) => {
      this.setState({
        listItem: [...data]

      })
    })
  }

  componentDidMount() {
    this.fetchData()

  }

  handleDelete = (id) => {
    LoginService.Delete("/data/" + id).then(() => {
      this.fetchData()
    })

  }


  render() {
    let { listItem } = this.state;
    return (
      <>
        <div className='page'>
          <div className='page-container'>
            {listItem && listItem.length > 0 &&
              listItem.map((item, index) => {
                console.log(listItem.length)
                return (
                  <div>
                    <Endow
                      data={item}
                      handleDelete={this.handleDelete}
                    />
                  </div>

                )
              })
            }

          </div>
        </div>

      </>





    )
  }
}

export default ListItem;