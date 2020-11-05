import React from "react";
import { Link } from "react-router-dom";
import { WavePattern } from "../../../components/svgComponents";
import styled from "styled-components";
import moment from "moment";


const Head = (props) => {
  const { color = "#e94661", image, amount, type, expiry_date } = props;
  return (
    <Root style={{ background: '#e94661' }}>
      <WavePattern />
      <div className="position-relative">
        <LinkWrapper style={{marginBottom: '20px'}}>
          <Link to="/" className="action-btn light ">
            <i className="fas fa-chevron-left" /> Voucher
          </Link>
        </LinkWrapper>
        <Content>
          <div>
            <Logo
              className="brand-logo"
              src={`https://spendwin-dev.xyz/files/${image}`}
              alt={"alt"}
            />
          </div>
          <div className="pl-20">
            <p className="offer">{amount} {type} OFF</p>
            <p className="dec">
              Surprise bidding to it thin her case phase as each remote the have ocean.
            </p>
            <p className="expire mb-0">Expires: {moment(expiry_date).format("MMM-DD")}</p>
          </div>
        </Content>
      </div>
    </Root>
  );
};

export default Head;

const Root = styled("div")`
  position: relative;
  padding: 40px 24px 40px;
  border-radius: 0 0 20px 20px;
  .wave-pattern {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: auto;
  }
  .action-btn {
    margin-bottom: 55px;
  }
`;

const LinkWrapper = styled("div")`
  margin-bottom: 55px;
  @media (max-width: 414px) {
    margin-bottom: 38px;
  }
`;
const Logo = styled("img")`
  width: 100px;
  @media (max-width: 414px) {
    width: 70px;
  }
`;
const Content = styled("div")`
  color: #fff;
  display: flex;
  .offer {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
    @media (max-width: 414px) {
      font-size: 22px;
    }
  }
  .dec {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 20px;
    @media (max-width: 414px) {
      font-size: 14px;
    }
    @media (max-width: 414px) {
      margin-bottom: 16px;
    }
  }
  .expire {
    font-size: 13px;
    font-weight: 700;
    @media (max-width: 414px) {
      font-size: 12px;
    }
  }
`;
