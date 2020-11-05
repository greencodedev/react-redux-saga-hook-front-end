import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import qrcode from "qrcode";

import Layout from "../../components/layout";
import './style.css';
import Tick from '../../assets/images/icons/success.svg';
import USB from '../../assets/images/icons/usb_paribahan.svg';
import Arrow from '../../assets/images/icons/right-arrow.svg';


const BookingDetail = (props) => {
    const { bookingData } = props;
    const history = useHistory();
    const [qrCode, setQrCode] = useState(1);
    const promise = qrcode.toDataURL(bookingData.order_number).then(res => { setQrCode(res) }).catch(error => {
      console.log("something bad happened somewhere, rollback!");
  });
    return (
        <Layout>
            <div className="order-success">
                <img src={Tick} alt="Tick icon" className="tick"/>
                <div className="ticket">
                    <div className="name">{`${bookingData.package_name} (${bookingData.destination_name})`}</div>
                    <hr className="line"/>
                    <div className="shape_left"></div>
                    <div className="ticket_row man_count">
                        <div className="ticket_column" style={{width:"auto"}}>
                            <p className="venue">Adults</p>
                            <p className="time">{bookingData.adult_qty}</p>
                        </div>
                        <span style={{fontSize: 24, fontWeight: 'bold'}}>+</span>
                        <div className="ticket_column" style={{width:"auto"}}>
                            <p className="venue">Kids</p>
                            <p className="time">{bookingData.child_qty}</p>
                        </div>
                    </div>
                    
                    <div className="shape_right"></div>
                    <hr className="line"/>
                    <div className="ticket_row">
                        <div className="ticket_column">
                            <div className="text_small">Passenger</div>
                            <div className="text_big email_text">{bookingData.email}</div>
                            <div className="text_big">{bookingData.mobile}</div>
                        </div>
                    </div>
                    <div className="ticket_row">
                        <div className="ticket_column booking_date">
                            <div className="text_small">Booking Date</div>
                            <div className="text_big">{bookingData.created_at}</div>
                        </div>
                    </div>
                    <div className="ticket_row">
                        <div className="ticket_column">
                            <div className="text_small">Order Number</div>
                            <div className="text_big">{bookingData.order_number}</div>
                        </div>
                        <div className="ticket_column">
                            <div className="text_small">Total</div>
                            <div className="text_big">{bookingData.total_amount}</div>
                        </div>
                    </div>
                    <div className="qr_container">
                        <img src={qrCode} alt="QRCode" />
                        <div className="ticket_row">
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  };
  
  const mapStateToProps = ({ user: { bookingData } }) => ({
    bookingData,
  });
  
  const mapDispatchToProps = {
    bookPackages: userAction.bookPackages,
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(BookingDetail));
