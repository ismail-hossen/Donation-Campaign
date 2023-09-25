import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ServiceCard = () => {
  return (
    <Card className="max-w-[24rem] overflow-hidden shadow-none bg-[#0051ff31]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography
          className="bg-[#0051ff4d] text-[#0052ff] inline py-1 px-2 rounded-md"
          variant="h5"
        >
          Health
        </Typography>
        <Typography variant="h4" className="text-[#0052FF] mt-1">
          UI/UX Review Check
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
