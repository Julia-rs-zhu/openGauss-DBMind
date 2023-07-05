import React, { Component } from 'react';
import { Card, Table } from 'antd';
import PropTypes from 'prop-types';
import ResizeableTitle from '../../../common/ResizeableTitle';
import '../../../../assets/css/main/databaseOptimization.css';
import { formatTableTitle } from '../../../../utils/function';

export default class TotalConnections extends Component {
  static propTypes={
    totalConnections:PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
     
    }
  }
  components = {
    header: {
      cell: ResizeableTitle,
    },
  };
  handleTableData (data) {
    let totalArr = [];

    for (let i in data) {
      let activeObj = {
        name: i,
        value: data[i],
      };
      totalArr.push(activeObj);
    }
    this.setState(() => ({
      dataSource: totalArr,
     
    }))
  }
  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };
  UNSAFE_componentWillReceiveProps (nextProps) {
    this.handleTableData(nextProps.totalConnections)
  }
  render () {
   
    return (
      <div className='tableDiv'>
        <Card title="Total Connections"  style={{height:129}}>
 
         <ul style={{width:'100%',display:'flex'}}>
         {this.state.dataSource.map((item) => {
              return (
                <li className="connectionTitle">
                  <p>{item.name}</p>
                  <h4>{item.value}</h4>
                </li>
              );
            })}
         </ul>
        </Card>
         {/* <Table bordered components={this.components} columns={columns} dataSource={this.state.dataSource} size="small" rowKey={record => record.key} pagination={false} style={{ height: 157, overflowY: 'auto' }} scroll={{ x: '100%'}}/> */}
      
      </div>
    )
  }
}
