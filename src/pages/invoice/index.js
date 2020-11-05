import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/layout";
import cx from "classnames";
import acceptedIcon from "../../assets/images/icons/accepted.png";
import pendingIcon from "../../assets/images/icons/pending.png";
import rejectedIcon from "../../assets/images/icons/rejected.png";
import { useHistory } from "react-router-dom";

const invioceData = [
  {
    name: "Jorge Rowe",
    money: "$360.00",
    invoice: "235265",
    date: "10/08/2020",
    address: "78 Andover Rd. Eugene, OR 97402",
    status: "Approved",
  },
  {
    name: "Jorge Rowe",
    money: "$360.00",
    invoice: "235265",
    date: "10/08/2020",
    address: "78 Andover Rd. Eugene, OR 97402",
    status: "Rejected",
  },
  {
    name: "Jorge Rowe",
    money: "$360.00",
    invoice: "235265",
    date: "10/08/2020",
    address: "78 Andover Rd. Eugene, OR 97402",
    status: "Pending",
  },
];

const InvioceCard = (props) => {
  const { name, money, invoice, date, address, status } = props;

  const statusIcon =
    status === "Approved" ? acceptedIcon : status === "Rejected" ? rejectedIcon : pendingIcon;
    const history = useHistory();

  return (
    <div className="invioce-card" onClick={() => history.push('/raffles')}>
      <div className="img-col">
        <img src={statusIcon} alt="" />
      </div>
      <div className="content-col">
        <div className="d-flex justify-content-between info">
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <h3 className="text-nowrp">{money}</h3>
          </div>
        </div>
        <div className="d-flex flex-wrap info-detail">
          <div className="c-left">
            <p>
              Invoice #{invoice} | {date}
            </p>
            <p>{address}</p>
          </div>
          <div className="c-right">
            <p
              className={cx(
                "status",
                { approved: status === "Approved" },
                { rejected: status === "Rejected" },
                { pending: status === "pending" }
              )}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Invoice = () => (
  <Layout>
    <div className="py-5" style={{ minHeight: "calc(100vh - 80px)" }}>
      <Container fluid>
        <h2 className="s-title text-center mb-3">Invoice</h2>
      </Container>
      {invioceData.map((data, index) => (
        <InvioceCard key={index} {...data} />
      ))}
    </div>
  </Layout>
);

export default Invoice;
