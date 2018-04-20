import React from 'react'
import { Breadcrumb } from 'antd'
import PropTypes from 'prop-types'
class BreadcrumbComponent extends React.Component {
  static propTypes = {
    BreadcrumbList: PropTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const BreadcrumbList = this.props.BreadcrumbList
    console.log(BreadcrumbList)
    return (
      <Breadcrumb>
        {
          BreadcrumbList.map((item, index) => {
            return <Breadcrumb.Item>{item}</Breadcrumb.Item>
          })
        }
      </Breadcrumb>
    )
  }
}

export default BreadcrumbComponent