import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

const Banner = () => {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center rounded-none"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/5Yd7cVJ/Rectangle4281.png')] bg-cover bg-center"
      >
        <div className="bg-white absolute inset-0 h-full w-full opacity-95 flex flex-col items-center justify-center">
          <Typography
            variant="h2"
            className="mb-6 font-bold text-5xl text-black leading-[1.5]"
          >
            I Grow By Helping People In Need
          </Typography>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="email"
              label="Search here..."
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />

            <Button
              size="sm"
              className="!absolute bg-red-600 right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Banner;
