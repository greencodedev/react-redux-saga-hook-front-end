import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Footer from "../../components/layout/footer";

const DetailCard = (props) => {
  const { data } = props;
  return (
    <div className="detai-card">
      <div className="d-flex justify-content-between">
        <div>
          <h2 className="name">{data.package_name}</h2>
          <p className="days">2 Days . 1 Night</p>
        </div>
        {/* <div className="text-center">
          <p className="price">Price</p>
          <p className="price-value">AED {data.price}</p>
        </div> */}
      </div>
      <div>
        <h3 className="dec-title">Description</h3>
        <p className="dec mb-0">{data.description}</p>
      </div>
    </div>
  );
};

const PackageDetail = (props) => {
  const [addPerson, setAddPerson] = useState(1);
  const [addChild, setAddChild] = useState(1);
  const { data } = props.location.state;
  const { bookPackages, bookingPackageStatus, token } = props;
  const history = useHistory();

  const bookYourPackage = () => {
    const bookData = new FormData();
    bookData.append("action", "createOrder");
    bookData.append("package_id", data?.id);
    bookData.append("adult_qty", addPerson);
    bookData.append("child_qty", addChild);
    bookPackages(bookData);
  };

  useEffect(() => {
    if (bookingPackageStatus === "success") {
      setTimeout(
        function () {
          history.push("/booking-details");
        }.bind(this),
        500
      );
    }
  }, [bookingPackageStatus]);
  useEffect(() => {
    // if (token === "") {
    //   history.push("/login");

    // }
  }, []);

  return (
    <>
      <div className="package-detail">
        <div
          className="p-image"
          style={{
            backgroundImage: `url(${`https://spendwin-dev.xyz/files/${data.img}`})`,
          }}
        />
        <div className="card-wrap">
          <DetailCard data={data} />
          <div className="action row" style={{marginRight: 0, marginLeft: 0}}>
            <div className="counter col-md-4 col-6">
              <p>Adult ({data.price} AED) </p>
              <button onClick={() => setAddPerson(addPerson - 1)}>-</button>
              <input value={addPerson === 0 ? setAddPerson(1) : addPerson} />
              <button onClick={() => setAddPerson(addPerson + 1)}>+</button>
            </div>
            <div className="counter col-md-4 col-6">
              <p>Child ({data.child_price} AED) </p>

              <button onClick={() => setAddChild(addChild - 1)}>-</button>
              <input value={addChild === 0 ? setAddChild(1) : addChild} />
              <button onClick={() => setAddChild(addChild + 1)}>+</button>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center">
              {props.token?
                 <Button className="btn-dark mt-3" onClick={() => bookYourPackage()}>
                  Book Now (Total: {(addPerson * data.price) + (addChild *  data.child_price)} AED)
                </Button>
              :
              <Button
                  style={{backgroundColor: "#000000"}}
                  className="mt-3"
                  onClick={() => history.push('/login')}
                >
                Login to Book Ticket
              </Button> 
              }
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

const mapStateToProps = ({ user: { bookingPackageStatus, token } }) => ({
  bookingPackageStatus, token
});

const mapDispatchToProps = {
  bookPackages: userAction.bookPackages,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PackageDetail));
