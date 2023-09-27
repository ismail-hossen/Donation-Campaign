import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { image, category, title, price, cardBg, textColor, categoryBg, id } =
    donation || {};
  return (
    <Card style={{ backgroundColor: cardBg }} className="flex-row shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          style={{ backgroundColor: categoryBg, color: textColor }}
          className="inline py-1 px-2 rounded-md"
          variant="h5"
        >
          {category}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography
          style={{ color: textColor }}
          className="mb-8 font-normal text-2xl"
        >
          ${price}
        </Typography>
        <Link to={`/donation-details/${id}`}>
          <Button
            variant="text"
            style={{ backgroundColor: textColor }}
            className="capitalize text-white"
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default DonationCard;

DonationCard.propTypes = {
  donation: PropTypes.object,
};
