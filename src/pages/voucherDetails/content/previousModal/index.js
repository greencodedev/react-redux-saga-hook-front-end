import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Table, Button } from "reactstrap";
import QRCode from "qrcode.react"

const PreviousModal = (props) => {
  const [ showCodeData, setShowCode] = useState([])
  const { isOpen = false, toggle = () => {}, oldPromosData } = props;
  const setVisibleQr = (id) => {
    const dataShow = []
    oldPromosData.map((value)=> {

      if(value.id === id) {
        dataShow.push({...value, isShow: true})
        setShowCode(dataShow)

      }
    })
}
const showCodeDataList = (data) => {
  if(showCodeData.length === 0) {
    return (
      <Button
      className="w-100"
      color="voucher-blue"
      onClick={() => setVisibleQr(data.id)}
    >
      Show QR 
    </Button> 
    )
  } 
  else {
  return (
    showCodeData?.map(value=> value.id === data.id ?
    <QRCode value={data?.voucher_code} /> :

    <Button
    className="w-100"
    color="voucher-blue"
    onClick={() => setVisibleQr(data.id)}
  >
    Show QR 
  </Button> 
    )
  )
    }
}
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered className="to-up">
      <ModalHeader toggle={toggle}>Previous Codes</ModalHeader>
      <ModalBody>
        <Table responsive>
          <thead>
            <tr>
              <th className="text-nowrap border-top-0">Code</th>
              <th className="text-nowrap border-top-0">Redeemed</th>
              <th className="text-nowrap border-top-0">Show QR</th>
            </tr>
          </thead>
          <tbody>
            {oldPromosData?.map((data, index) => (
              <tr key={data.id}>
                <td>{data.voucher_code}</td>
                <td>{'No'}</td>
                <td>
                  {showCodeDataList(data)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
};

export default PreviousModal;
