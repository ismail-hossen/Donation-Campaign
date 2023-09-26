import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { title, category, image, cardBg, textColor, categoryBg, id } =
    data || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        style={{ backgroundColor: cardBg }}
        className="overflow-hidden shadow-none"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={image} className="w-full" alt={title} />
        </CardHeader>
        <CardBody>
          <Typography
            style={{ backgroundColor: categoryBg, color: textColor }}
            className="inline py-1 px-2 rounded-md"
            variant="h5"
          >
            {category}
          </Typography>
          <Typography
            variant="h4"
            className="mt-1"
            style={{ color: textColor }}
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  data: PropTypes.object,
};
