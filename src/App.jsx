import ResturantMenu from "./components/Menu/ResturantMenu";
import Navbar from "./components/Navbar/Navbar";
import { MainCarousel } from "./components/Slider/Slider";
import "./index.css"

const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto mb-24">
      <Navbar />
      <MainCarousel />
      <ResturantMenu />
    </div>
  );
}

export default App;
