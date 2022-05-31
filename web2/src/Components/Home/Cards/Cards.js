import React from "react";
import CardItem from "../CardItems";
import "./Cards.css";
import img from "./../../../assets/images/Balenciaga Fall 22 backstage by STYLEDUMONDE0K3A5050FullRes.webp";
import img2 from "./../../../assets/images/Gucci-Fall_Winter-2022-feature-image.jpg";
import img3 from "./../../../assets/images/louis-vuitton-aw21-index-1615404436.jpg";
import img4 from "./../../../assets/images/https-__aeworld.com_fashion_paris-fashion-week-dior-spring-summer-2021_-1024x682.jpeg";
import img5 from "./../../../assets/images/Cruise_2021-22_show_in_Dubai__CHANEL_5-H-2021.webp";
export default function Cards() {
  return (
    <div className="cards">
      <h1>Brands's Collection</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img}
              text="Balenciaga showed its Fall-Winter 2022-2023 show in an artificial snowstorm"
              label="Balenciaga"
              path="/product"
            ></CardItem>
            <CardItem
              src={img2}
              text="Gucci Fall/Winter 2022"
              label="Gucci"
              path="/product"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Louis Vuitton's Fall-Winter 2021 Collection"
              label="Louis Vuitton"
              path="/product"
            />
            <CardItem
              src={img4}
              text="CHRISTIAN DIOR: DESIGNER OF DREAMS 2021 EXHIBITION"
              label="DIOR"
              path="/product"
            />
            <CardItem
              src={img5}
              text="Chanel Shows Its Cruise 2021-22 Collection Live From Dubai"
              label="Chanel"
              path="/product"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
