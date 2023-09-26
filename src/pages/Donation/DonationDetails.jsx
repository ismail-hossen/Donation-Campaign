import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allData from "../../../public/data.json";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const findDataById = allData.find((d) => d.id == id);
    setData(findDataById);
  }, [id]);
  const { image, title, description, price, textColor } = data || {};

  const donationHandler = () => {
    const storedData = JSON.parse(localStorage.getItem("donations"));
    if (storedData) {
      localStorage.setItem("donations", JSON.stringify([...storedData, data]));
    } else {
      localStorage.setItem("donations", JSON.stringify([data]));
    }
    toast.success("You have successfully donated!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Card className="w-full overflow-hidden shadow-none rounded-md mt-16 mb-24">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none relative"
      >
        <img src={image} className="w-full rounded-md" alt={title} />
        <div
          color="transparent"
          className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 rounded-b-md flex items-center pl-8"
        >
          <Button
            onClick={donationHandler}
            style={{ backgroundColor: textColor }}
            className="rounded-sm capitalize text-xl"
          >
            Donate ${price}
          </Button>
          <ToastContainer />
        </div>
      </CardHeader>

      <CardBody className="p-0 my-7">
        <Typography className="text-4xl" variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal p-0"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default DonationDetails;
