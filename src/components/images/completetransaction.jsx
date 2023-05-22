


import { Table } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
import graphimh1 from '../images/graphbluesmall.png'
import graphimh2 from '../images/graphgreensmall.png'
import graphimh3 from '../images/graphorangesmall.png'
import graphimh4 from '../images/graphyellowsmall.png'
import Smallcard from './dashboardtopsmallcards';
import Button from 'react-bootstrap/Button';
import { Row , Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const Completetransaction = () => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: 'email',
        },
      {
        title: 'Transaction Date',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '100%',
      },
      {
        title: 'Transaction Amount',
        dataIndex: 'gender',
       
        
      },
      {
        title: 'Transaction Method',
        dataIndex: 'email',
      },
      {
        title: 'Sender',
        dataIndex: 'email',
      },
      {
        title: 'Receiver',
        dataIndex: 'email',
      },
     
      {
        title: 'Status',
        dataIndex: 'email',
        render: () => {return <p style={{backgroundColor:'green' , border:'none' , borderRadius:'5px' , padding:'5px 10px' , color:'white' , fontFamily:'Rubik' , fontSize:'13px'}} >Completed</p>},
      },
    ];
    const getRandomuserParams = (params) => ({
      results: params.pagination?.pageSize,
      page: params.pagination?.current,
      ...params,
    });


  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <>
    <p className='addcreatorheading'>Completed Transaction</p>
    <div >


    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      style={{overflow:'auto'}}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      />

      </div>


     
      </>
  );
};
export default Completetransaction;