import { Button, Input, Select, Switch } from "antd";
import MedicineCard from "../../components/MedicineCard";
import { SCHEDULE_PATH } from "../../slugs";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";

const Home = () => {
  const navigate = useNavigate();

  const medicines = ["Carte", "Documents", "Rendex-vous", "Parameters"];
  return (
    <div className="p-2">
      <Container>
        <div className="md:flex gap-5">
          <div className="flex-1 w-full rounded-2xl bg-background2 p-2 md:p-5">
            <div className="flex md:flex-row flex-col items-start gap-1">
              <div className="w-full">
                <p className="mb-2 text-grText text-[13px]">Specialities</p>
                <Select
                  variant="borderless"
                  defaultValue="lucy"
                  size="large"
                  className="bg-white rounded-l-xl w-full"
                  onChange={() => {}}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
              <div className="w-full">
                <p className="mb-2 text-grText text-[13px]">NOM</p>
                <Input
                  variant="borderless"
                  className="bg-white w-full rounded-none p-2"
                  size="large"
                />
              </div>
              <div className="w-full">
                <p className="mb-2 text-grText text-[13px]">Location</p>
                <Input
                  variant="borderless"
                  className="bg-white rounded-none p-2"
                  size="large"
                />
              </div>
              <Button
                onClick={() => navigate(SCHEDULE_PATH)}
                type="text"
                className="bg-primary text-white md:mt-auto w-full md:w-fit md:rounded-none md:rounded-r-xl py-2 px-4 mt-2"
                size="large"
              >
                Recherchez
              </Button>
            </div>
            <p className="my-5 text-gr text-[13px]">
              <span className="text-primary6 text-xl font-semibold">
                Medecines
              </span>{" "}
              (25 results)
            </p>
            <div className="flex flex-col h-[500px] overflow-y-scroll gap-5">
              {medicines.map((item, i) => (
                <MedicineCard key={i} />
              ))}
            </div>
          </div>
          <div className="md:w-1/3 relative mt-5 md:mt-0">
            <iframe
              className="md:absolute rounded-2xl h-96 md:h-full w-full"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div className="absolute flex items-center gap-2 bg-white py-2 px-3 top-3 right-3 rounded-xl  shadow-xl shadow-black/20">
              <p>Afficher la carte</p>
              <Switch />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
