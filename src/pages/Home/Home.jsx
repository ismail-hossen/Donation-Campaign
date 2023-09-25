import Banner from "../../components/Header/Banner";
import ServiceCard from "../../components/Services/ServiceCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <div>
          <ServiceCard></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
