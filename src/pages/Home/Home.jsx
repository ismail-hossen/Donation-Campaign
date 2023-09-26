import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import ServiceCard from "../../components/Services/ServiceCard";

const Home = () => {
  const allData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-4 gap-4">
        {allData?.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
