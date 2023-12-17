// import all images from assets/images directory
import img01 from "../images/WhatsApp Image 2023-12-11 at 22.43.05_f0ce9044.jpg";
import img02 from "../images/imgcar1.jpg";
import img03 from "../images/benz.jpg";
import img04 from "../images/Golf7.jpg";

import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Audi",
    rating: 112,
    carName: "Audi A6",
    imgUrl: img01,
    model: "Model-2006",
    price: 35,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: " Automatic",
  },

  {
    id: 2,
    brand: "Volkswagen",
    rating: 102,
    carName: "Golf 5",
    imgUrl: img02,
    model: "Model-2006",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
  },
  {
    id: 3,
    brand: "Volkswagen",
    rating: 132,
    carName: "Golf 7",
    imgUrl: img04,
    model: "Model-2016",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Benz",
    rating: 132,
    carName: "Mercedes benz",
    imgUrl: img03,
    model: "Model-2002",
    price: 65,
    speed: "20kmpl",
    gps: "No GPS",
    seatType: "Heated seats",
    automatic: "Automatic",
  },


];

export default carData;
