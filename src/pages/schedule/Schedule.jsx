import {
  FaArrowDown,
  FaArrowUp,
  FaChevronLeft,
  FaCircle,
} from "react-icons/fa";
import Container from "../../components/Container";
import { Progress } from "antd";
import { useState } from "react";
import vector from "../../assets/vector.png";

const Schedule = () => {
  const [hovering, setHovering] = useState();

  const data = [
    "Première consultation dentaire",
    "Détartrage",
    "Extraction dentaire",
    "Orthodontie",
    "Endodontie",
    "Urgence dentaire",
    "Pose de prothese dentaire",
    "Soins dentaires",
    "Bilanbucco-dentaire",
  ];

  const hexColors = [
    "#FF5733", // A vibrant red-orange
    "#7953E7", // A bright green
    "#90C34E", // A strong blue
    "#CB897A", // A vivid pink
    "#E8BD25", // A bright cyan
    "#DF1E1E", // A warm orange
    "#F13B93", // A rich purple
    "#7DC0F1", // A fresh mint green
    "#8F8F8F", // A bold red
  ];

  return (
    <Container>
      <div className="flex md:flex-row flex-col items-center gap-5 min-h-[70vh] p-2">
        <div className="md:w-1/2">
          <div className="flex text-gr11 text-xl font-medium items-center gap-2">
            <FaChevronLeft />
            <p>Retour</p>
          </div>
          <div className="bg-background6 p-5 rounded-2xl mt-5">
            <div className="bg-white md:p-5 p-2 rounded-2xl">
              <h3 className="md:text-2xl text-[28px] font-medium md:w-1/2">
                Séléctionnez un motif de Rendez-vous
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-5 mt-5">
                {data.map((item, i) => (
                  <div
                    onMouseEnter={() => setHovering(i)}
                    onMouseLeave={() => setHovering()}
                    key={i}
                    className={`group p-4 relative bg-white drop-shadow-lg h-[100px] flex items-center justify-center text-center rounded-xl font-semibold text-[15px] cursor-pointer transition-colors duration-300`}
                    style={{
                      color: hovering === i ? "white" : hexColors[i],
                      background: hovering === i ? "#6EB9F8" : "white",
                    }}
                  >
                    {item}
                    <hr className="absolute bottom-1 w-1/2 left-1/2 transform -translate-x-1/2 border-[2.5px] border-[#81818133] rounded-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  </div>
                ))}
              </div>
              <div className="bg-background6 text-[#6EB9F8] flex items-center justify-center w-fit p-3 mx-auto mt-5 rounded-full gap-2 text-3xl">
                <FaArrowUp className="cursor-pointer" />
                <FaArrowDown className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:w-1/2 flex items-center justify-center">
          <img src={vector} alt="" className="absolute -top-5" />
          <div className="bg-white drop-shadow-xl p-3 rounded-2xl md:w-[75vh]">
            <div className="flex items-center gap-2 text-xs">
              <FaCircle className="text-red-500" />
              <FaCircle className="text-yellow-500" />
              <FaCircle className="text-green-500" />
            </div>
            <div className="border rounded-2xl mt-3 py-5 px-3">
              <p className="text-sm">Première étape</p>
              <p className="text-primary text-xl font-medium">
                Choix du motif de Rendez-vous
              </p>
              <p className="bg-primary25p w-fit py-1 px-4 mx-6 my-3 text-base font-medium rounded-2xl text-primaryDark">
                Première consultation dentaire
              </p>
              <p className="font-medium">Tarif appliqué et prise en charge</p>
              <div className="my-3 bg-[#F8F8F8] p-2 rounded-2xl flex gap-10 items-center justify-center text-xs">
                <p className="w-20 h-20 rounded-full bg-primary/20 text-primary text-xl font-semibold flex items-center justify-center">
                  23 €
                </p>
                <div className="flex-1">
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={50}
                    color={"#189EFF"}
                  />
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={80}
                    color={"#90C34E"}
                  />
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={30}
                    color={"#9D7971"}
                  />
                </div>
              </div>
              <p className="text-xs text-center md:w-5/6 md:mx-auto">
                Les honoraires affichés sont à titre indicatif, Les honoraires
                ou la prise en charge est susceptible d’etre modifié en fonction
                selon la couverture social du patient et la nature des actes
                réalisés par le praticien
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Schedule;

const Percentage = ({ label, amount, progress, color }) => {
  return (
    <div className="flex flex-col items-center">
      <h6 className="">{label}</h6>
      <div className="md:w-1/2 w-full flex items-center gap-2">
        <p style={{ color: color, fontWeight: "bold" }}>{amount}</p>
        <Progress
          className="flex-1"
          percent={progress}
          showInfo={false}
          strokeColor={color}
        />
      </div>
    </div>
  );
};
