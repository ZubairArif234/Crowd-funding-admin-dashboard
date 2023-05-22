
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
const Creatoranalytcs = () => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '100%',
      },
      {
        title: 'Tittle',
        dataIndex: 'email',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
          {
            text: 'Male',
            value: 'male',
          },
          {
            text: 'Female',
            value: 'female',
          },
        ],
        width: '20%',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Country',
        dataIndex: 'email',
      },
      {
        title: 'Language',
        dataIndex: 'email',
      },
      {
        title: 'Phone number',
        dataIndex: 'email',
      },
      {
        title: 'Analytis',
        dataIndex: 'email',
        render: () => {return <button style={{backgroundColor:'#6100B3' , border:'none' , borderRadius:'5px' , padding:'5px 10px' , color:'white' , fontFamily:'Rubik' , fontSize:'13px'}} onClick={() => setModalShow(true)}>View Analytics</button>},
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
    <p className='addcreatorheading'>Creator Analytics</p>
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


        <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Analytics
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
            <Col xs={12} lg={6}>
            
        <Smallcard bordercolour={'red'} graphimg={graphimh1}/>
        <Smallcard bordercolour={'red'} graphimg={graphimh2}/>
            </Col>
            <Col xs={12} lg={6}>
        <Smallcard bordercolour={'red'} graphimg={graphimh3}/>
        <Smallcard bordercolour={'red'} graphimg={graphimh4}/>
            </Col>
        </Row>
       
      </Modal.Body>
      {/* <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer> */}
    </Modal>
      </>
  );
};
export default Creatoranalytcs;