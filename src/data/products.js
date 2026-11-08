import coatImage from "../assets/pexels-guney-akcay-271956164-30951487.jpg";
import tweedImage from "../assets/maxim-bogdanov-o-VtXaJD7Uc-unsplash.jpg";
import blueCoatImage from "../assets/centre-for-ageing-better-oIAr3Hepn3I-unsplash.jpg";
import darkCoatImage from "../assets/pexels-hbharun-4052692.jpg";
import camelCoatImage from "../assets/taras-chernus-iIjResyhhW0-unsplash.jpg";
import cityCoatImage from "../assets/Legacy_Background_2.jpg";
import editorialCoatImage from "../assets/Collections_Hero_Background.jpg";
import studioCoatImage from "../assets/pexels-omerderinyar-22481682.jpg";

// TODO: Replace this fixture with fetch inside useEffect; model loading, error,
// success, and retry states, with the right dependency array.
const products = [
  {
    id: "rowan-wool-coat",
    name: "The Rowan Wool Coat",
    category: "Wool coats",
    price: 495,
    image: tweedImage,
    isNew: true,
  },
  {
    id: "heritage-trench",
    name: "The Heritage Trench",
    category: "Trench coats",
    price: 420,
    image: coatImage,
    isNew: false,
  },
  {
    id: "marlowe-overcoat",
    name: "The Marlowe Overcoat",
    category: "Tailored coats",
    price: 560,
    image: blueCoatImage,
    isNew: true,
  },
  {
    id: "field-jacket",
    name: "The Field Jacket",
    category: "Jackets",
    price: 385,
    image: darkCoatImage,
    isNew: false,
  },
  {
    id: "alder-cashmere-coat",
    name: "The Alder Cashmere Coat",
    category: "Cashmere coats",
    price: 695,
    image: camelCoatImage,
    isNew: true,
  },
  {
    id: "city-wool-jacket",
    name: "The City Wool Jacket",
    category: "Jackets",
    price: 375,
    image: cityCoatImage,
    isNew: false,
  },
  {
    id: "atelier-longline-coat",
    name: "The Atelier Longline Coat",
    category: "Made to measure",
    price: 620,
    image: editorialCoatImage,
    isNew: true,
  },
  {
    id: "weekend-car-coat",
    name: "The Weekend Car Coat",
    category: "Car coats",
    price: 445,
    image: studioCoatImage,
    isNew: false,
  },
];

export default products;
