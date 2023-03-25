import React from "react";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";
import "./TourList.scss";

const TourList = () => {
  return (
    <section className="tourList">
      {tourData.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </section>
  );
};

export default TourList;
