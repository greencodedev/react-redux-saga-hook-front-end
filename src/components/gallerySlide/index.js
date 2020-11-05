import React from "react";
import mockData from "./mockData";

const GallerySlide = (props) => {
  const { data } = props
  return (
  <section className="gallerySlide">
    <ul className="wrapper theme-md-scroll pb-md-2">
      {data.map(({ img, url }, index) => (
        <li key={index}>
          <div className="image-card">
            <div className="image-box">
            <a href={url}>
              <img src={`https://spendwin-dev.xyz/files/${img}`} alt="" />
            </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
)
      }

export default GallerySlide;
