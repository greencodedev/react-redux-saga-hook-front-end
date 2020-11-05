import React from "react";
import { Container, Row, Col } from "reactstrap";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import { HomeIcon, InvoiceIcon, UserAccount, VoucherIcon } from "../../svgComponents";

export default () => {
  const tabs = [
    {
      icon: <HomeIcon />,
      name: "Home",
      link: "/",
    },
    {
      icon: <InvoiceIcon />,
      name: "Invoices",
      link: "/invoics",
    },
    {
      icon: <VoucherIcon />,
      name: "Deals",
      link: "/view-all-destination",
    },
    {
      icon: <UserAccount />,
      name: "Vouchers",
      link: "/vouchers",
    },

  ];

  const history = useHistory();
  const { pathname } = history.location;

  return (
    <footer id="footer">
      <Container>
        <Row form>
          {tabs.map(({ icon, name, className = "", link = "/" }, index) => (
            <Col key={index} className={cx("text-center", className)}>
              <Link className={cx({ active: pathname === link })} to={link}>
                <div className="icon">{icon}</div>
                {name}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};
