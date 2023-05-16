


import '../../pendingcampaign.css'

import { Card , Progress} from 'antd';
const { Meta } = Card;
function Popularcard({ img, heading, price1, price2, detail1, detail2, below1, below2,status , bordertopcolor }) {
    console.log(img);
    return (
      <Card
        hoverable
        bordered={false}
        className='pendingcampaigncard'
        style={{
          width: 290,
          borderRadius: "0",
          marginBottom:'20px',
          borderTop:`4px solid ${bordertopcolor}`,
          padding:'0px'
          
          
        }}
        cover={<img alt="example"style={{borderRadius:'0px'}} src={img} />}
      >
        <div className='pendingtopimgbtn' style={{backgroundColor:bordertopcolor}}>
            <p>{status}</p>
        </div>
        <p className="popcardheading">{heading}</p>
        <div className="popprogressprice">
          <Progress
            strokeColor="#1B70F0"
            percent={70}
            showInfo={false}
            trailColor='#E7EBFF'
            style={{ height: "1px" }}
          />
          <div className="poppriceanddetail">
            <div>
              <p className="popcardprice">
                {price1} <br />
                <span className="popcardpricedetail">Pledged</span>
              </p>
            </div>
            <div>
              <p className="popcardprice">
                {price2} <br />
                <span className="popcardpricedetailend">Target</span>
              </p>
            </div>
          </div>
          <div>
            <button className='pendingcampaingcards' >
                View Details
            </button>
          </div>
          {/* <div>
            <div className="poppriceanddetailbelow">
              <p className="popcardpricebelow">by romada D. </p>
              <p className="popcardpricebelow">at london </p>
            </div>
          </div> */}
        </div>
      </Card>
    );
  }
  
export default Popularcard;