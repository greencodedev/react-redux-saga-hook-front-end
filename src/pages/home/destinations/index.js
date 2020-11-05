import React, { useState } from "react";
import { Container } from "reactstrap";
import { DestinationCard } from "../../../components/cards";
import { useHistory } from "react-router-dom";

const image1 =
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
const image2 =
  "https://images.unsplash.com/photo-1559687909-a483b19e088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";


const Side = (props) => {
  const {data, homeData} = props
  return (
  <div className="d-flex overflow-auto theme-md-scroll pb-md-2 px-10">
    {data.slice(0, 7).map((data, index) => (
      <div key={index} className="px-10">
        <DestinationCard {...data} homeData={homeData} />
      </div>
    ))}
  </div>
)
    }

const Destinations = (props) => {
  const history = useHistory();

  return(
    <>
  <section className="pt-20">
    <Container>
      <div className="d-flex">
        <div className="flex-grow-1 mb-20">
          <h2 className="s-title mb-0">Find your experience</h2>
        </div>
        <div>
          <a className="see-all-btn" onClick={() => history.push('/view-all-destination', {data: props.data})}>
            See All
          </a>
        </div>
      </div>
    </Container>
    <Side data={props.data} homeData={props.homeData}/>
  </section>
  </>
)
  }

export default Destinations;
