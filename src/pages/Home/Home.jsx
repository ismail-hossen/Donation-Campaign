import { useState, useEffect } from "react";
import Banner from "../../components/Header/Banner";
import ServiceCard from "../../components/Services/ServiceCard";

const Home = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <Banner></Banner>
      <div>
        <div className="grid grid-cols-4 gap-4 my-4">
          {allData?.map((data) => (
            <ServiceCard key={data.id} data={data}></ServiceCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
