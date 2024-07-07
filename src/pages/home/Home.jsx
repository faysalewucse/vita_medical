import { Button, Input, Select, Switch } from "antd";
import MedicineCard from "../../components/MedicineCard";
import { SCHEDULE_PATH } from "../../slugs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const medicines = ["Carte", "Documents", "Rendex-vous", "Parameters"];
  return (
    <div className="p-2 md:p-10 max-w-screen-2xl mx-auto">
      <div className="md:flex gap-5">
        <div className="flex-1 w-full rounded-2xl bg-background1 p-2 md:p-5">
          <div className="flex md:flex-row flex-col items-start gap-1">
            <div className="w-full">
              <p className="mb-2">Specialities</p>
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
              <p className="mb-2">NOM</p>
              <Input
                variant="borderless"
                className="bg-white w-full rounded-none p-2"
                size="large"
              />
            </div>
            <div className="w-full">
              <p className="mb-2">Location</p>
              <Input
                variant="borderless"
                className="bg-white rounded-none p-2"
                size="large"
              />
            </div>
            <Button
              onClick={() => navigate(SCHEDULE_PATH)}
              type="text"
              className="bg-primary md:mt-auto w-full md:w-fit md:rounded-none md:rounded-r-xl py-2 px-4 mt-2"
              size="large"
            >
              Research
            </Button>
          </div>
          <p className="my-5">
            <span className="text-primary">Medecines</span> (25 results)
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
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="absolute flex items-center gap-2 bg-white py-2 px-3 top-3 right-3 rounded-xl">
            <p>Afficher la carte</p>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
