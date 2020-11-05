import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import barcode from "./bar-code.png";
import { useHistory } from "react-router-dom";
import { scrollToTop } from "../../../util";
import PreviousModal from "./previousModal";
import GetNewModal from "./getNewModal";
import QRCode from "qrcode.react"

const Terms = (props) => {
  const { getNewBar } = props.props;
  const [previousModal, setPreviousModal] = useState(false);
  const [getNewModal, setgetNewModal] = useState(false);

  const previousModalToggle = () => setPreviousModal((provious) => !provious);
  const getNewModalToggle = () => setgetNewModal((provious) => !provious);

  return (
    <>
      <div className="terms flex-grow-1 d-flex flex-column">
        <div className="wrapper flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <h2>Terms & Conditions:</h2>
            <p>
              Where rationale not began behind sort live a the with diet, in its phase neuter.
              Destined time really he me. Of small will how their tone, so from be study, of scent
              in economics.
            </p>
          </div>
          {/* <Row className="voucher-btn-row">
            <Col xs={5}>
              <Button className="w-100" color="voucher-blue" outline onClick={previousModalToggle}>
                Previous Codes
              </Button>
            </Col>
            <Col xs={7}>
              <Button
                className="w-100"
                color="voucher-blue"
                onClick={getNewModalToggle}
                // onClick={() => getNewBar(true)}
              >
                Get New Code
              </Button>
            </Col>
          </Row> */}
        </div>
      </div>
      <PreviousModal isOpen={previousModal} toggle={previousModalToggle} />
      <GetNewModal isOpen={getNewModal} toggle={getNewModalToggle} />
    </>
  );
};

const BardCodeComponent = (props) => {
  const [previousModal, setPreviousModal] = useState(false);
  const [getNewModal, setgetNewModal] = useState(false);

  const previousModalToggle = () => setPreviousModal((provious) => !provious);
  const history = useHistory();
  const { getNewBar, newPromosData, oldPromosData, token } = props.props;


  return (
    <div className="bar-code-container flex-grow-1 d-flex flex-column">
      <div className="wrapper flex-grow-1 d-flex flex-column">
        <div className="holder flex-grow-1 d-flex flex-column justify-content-between">
          <div className="code">
            {/* <img src={barcode} className="w-100" alt="barcode" /> */}
            {token?
              newPromosData?.voucher_code &&<QRCode value={newPromosData?.voucher_code} />
            :
            <Button
                style={{backgroundColor: "#000000", paddingLeft: 10, paddingRight:10, height: 40}}
                className="mt-3"
                onClick={() => history.push('/login')}
              >
              Login to get QR Code
            </Button> 
            }
            {/* {newPromosData?.voucher_code &&<QRCode value={newPromosData?.voucher_code} />} */}
            {/* <p className="code-text">*25689858468</p> */}
          </div>
          {token &&
            <div className="code-info">
              <p className="code-name">{newPromosData?.voucher_code}</p>
              <p className="code-text">Share your QR code with the seller to reedem the rewards.</p>
            </div> 
          }
          {/* <Button
            className="w-100"
            color="voucher-blue"
            onClick={previousModalToggle}
          >
            Previous Codes
          </Button> */}
        </div>
      </div>
      <PreviousModal isOpen={previousModal} toggle={previousModalToggle} oldPromosData={oldPromosData?.data} />

    </div>
  );
};

const Content = (props) => {
  return (
    <div className="voucher-content flex-grow-1  d-flex flex-column">
      <Terms props={props} />
       <BardCodeComponent props={props} />
    </div>
  );
};

export default Content;
