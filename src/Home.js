import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_3000x1200._CB451871227_.jpg"
        alt=""
        className="home__image"
      />

      {/* product elements id, title, price rating, image */}
      <div className="home__row">
        <Product
          id="12"
          price={(1, 244.99)}
          rating={5}
          title="Apple MacBook Air (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)"
          image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SX679_.jpg"
        />
        <Product
          id="123"
          price={9.99}
          rating={4}
          title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for phone-call and Alexa Voice Control"
          image="https://images-na.ssl-images-amazon.com/images/I/71oe-qtRokL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          price={22.99}
          rating={4}
          title="Modoker Vintage Laptop Backpack for Women Men,School College Backpack"
          image="https://images-na.ssl-images-amazon.com/images/I/81Unr0Qa-cL._AC_UX679_.jpg"
        />
        <Product
          id="12345"
          price={99.99}
          rating={4}
          title="MOSISO Laptop Sleeve Bag Compatible with 13-13.3 inch MacBook Pro, MacBook Air, Notebook Computer, Water Repellent Polyester Vertical Protective Case Cover with Pocket, Gray"
          image="https://images-na.ssl-images-amazon.com/images/I/91DaRmWFaGL._AC_SX679_.jpg"
        />
        <Product
          id="12346"
          price={708.99}
          rating={5}
          title="Lenovo Flex 14 2-in-1 Convertible Laptop, 14 Inch FHD Touchscreen Display, AMD Ryzen 5 3500U Processor, 12GB DDR4 RAM, 256GB NVMe SSD, Windows 10, 81SS000DUS, Black, Pen Included"
          image="https://images-na.ssl-images-amazon.com/images/I/81OzyRLdsEL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          price={999.99}
          rating={5}
          title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
          image="https://images-na.ssl-images-amazon.com/images/I/81B0xCF%2BPWL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
