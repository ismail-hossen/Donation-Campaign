import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("donations"));
    setDonations(storedData);
  }, []);
  return (
    <div className="my-16">
      <div className="grid grid-cols-2 gap-6">
        {donations ? (
          seeAll ? (
            donations?.map((donation, index) => (
              <DonationCard key={index} donation={donation} />
            ))
          ) : (
            donations
              .slice(0, 4)
              ?.map((donation, index) => (
                <DonationCard key={index} donation={donation} />
              ))
          )
        ) : (
          <h4>You have not donated.</h4>
        )}
      </div>
      {donations?.length > 4 && !seeAll ? (
        <div className="flex items-center justify-center py-10">
          <Button
            variant="text"
            onClick={() => setSeeAll(true)}
            className="capitalize bg-green-800 text-white"
          >
            See All
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Donation;
