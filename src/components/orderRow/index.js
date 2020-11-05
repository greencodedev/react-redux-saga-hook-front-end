import React from 'react';
import { useHistory } from "react-router-dom";
import { getRaffleByInvoice } from '../../actions/user-action-type';
 

function OrderRow({name, tickets, address, currency, amount, dot_color, date, data}) {
    const style = {
        pendingstyle: 'gray',
        approvedstyle: 'green',
        rejectedstyle: 'red',
        resubmitstyle: 'red'
    };
    const history = useHistory();
    console.log('data------', data)
    return (
      <>
      <div className="order_row" onClick={() => history.push('raffles', {invoice_id: data?.id})}>
        <div className="order_left">
          <div style={{display: 'flex'}}>
            <p className="invoice_from">Invoice</p>
            <p className="invoice_from">{data?.invoice_number}</p>
          </div>
          <p>
            <span className="name">
              <b>{data?.vendor_name}</b>
            </span> 
          </p>
          <p className="address">{data?.destination_name}</p>
          <p className="invoice_from">{data?.created_at.split(' ')[0]}</p>
        </div>
        <div className="order_right">
          <p className="amount_due" style={{display: 'none'}}>Amount</p>
          <p className="price">
            {/* <span className="currency">{'AED'}</span> */}
            <span className="amount">{data?.amount}</span>
          </p>
          <div className="date_row">
              <span className="dot" style={{color:data?.status == 0 ? style.pendingstyle : data?.status == 1 ? style.approvedstyle : data?.status == 2 ? style.rejectedstyle : data?.status == 3 ? style.resubmitstyle : null}}>
                  <svg width="15px" height="15px" viewBox="0 0 20 20" class="bi bi-dot" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M6 10.5a5 5 0 1 0 0-3 5 5 0 0 0 0 5z"/>
                  </svg>
              </span>
              <span className="date" style={{marginRight: '10px'}}>{data?.status == 0 ? `Pending` : data?.status == 1 ? `Approved` : data?.status == 2 ? `Rejected` : data?.status == 3 ? `Resubmit` : null}</span>
             
          </div>
        </div>
      </div> 
      {
        data?.status == 1 &&
        <div className="black-line">
          <div className="black-line-content">
            <p>View Raffles for this Invoice</p>
            <i class="fas fa-arrow-right right-arrow"></i>
          </div>
        </div>  
      }   
      </>   
    )
}

export default OrderRow;
