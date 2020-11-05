import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import billIcon from "../../../assets/images/icons/bill.svg";
import cameraIcon from "../../../assets/images/icons/camera.svg";
import { useHistory } from "react-router-dom";
import Logo from'../../../assets/images/logo.png';

const CameraUploadCard = () => {
  const history = useHistory();

  return(
    <div class="camera-upload-card">
      <a class="upload-btn" href="/upload">
      <div class="d-flex align-items-center pb-3 w-100">
        <div class="title-wrapper w-100">
          <h2 class="title-camera" style={{ textAlign: 'center !important'}}>Spend AED 50 only and upload your invoices for a chance to win</h2>
        </div>
      </div>
      <div class="mx-0 mt-1 row">
        <div class="col-5" style={{padding: '0px !important', margin: '0px !important'}}>
          <img src="https://i.postimg.cc/4dWcZtxG/1-02-1.png" style={{ width: '130px'}}  />
        </div>
        <div class="col-7">
          {/* <button type="button" class="w-100 btn btn-dark" style={{ width: '90% !important', marginLeft: '13px', display: 'block'}} onClick={() => history.push('/upload')}>
            <img src="/static/media/camera.92cf80a4.svg" alt="camera" />Use Camera
          </button>
          <div class="text-center px-0 col-12" style={{textAlign: 'center', margin: 'auto'}}>
            <p class="or">or</p>
            <a class="upload-btn" href="/upload">Upload Online</a>
          </div> */}
          <img src="https://i.postimg.cc/jjtkFQGn/upload-icon.png" style={{ width: '75px', float: 'right' }} />
        </div>
      </div>
      </a>
    </div>
  )
}

export default CameraUploadCard;
