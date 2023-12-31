import { useState, useEffect } from "react";
import Banner from "../../components/Header/Banner";
import ServiceCard from "../../components/Services/ServiceCard";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setSearchedData(data);
      });
  }, []);

  const searchBtnHandler = (txt) => {
    const filtered = allData?.filter((d) =>
      d.category.toLowerCase().includes(txt)
    );

    setSearchedData(filtered);
  };

  return (
    <>
      <Banner searchBtnHandler={searchBtnHandler}></Banner>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 md:my-16 lg:my-24 ">
          {searchedData.length == 0
            ? "No Data Found!"
            : searchedData?.map((data) => (
                <ServiceCard key={data.id} data={data}></ServiceCard>
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
