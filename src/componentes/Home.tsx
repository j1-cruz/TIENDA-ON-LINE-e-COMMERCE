import ComboInterior from "./ComboInterior";
import Carousel from './carousel/Carousel';
import FormCombo from "./Combo/FormCombo";

const Home: React.FC = () => {
    return (<div>
      <Carousel/>
      <ComboInterior />
      <FormCombo/>
    </div>)
  };
  
  export default Home;
  