import {
  FaArrowDown,
  FaArrowUp,
  FaChevronLeft,
  FaCircle,
} from "react-icons/fa";
import Container from "../../components/Container";
import { Progress } from "antd";

const Schedule = () => {
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
    "#33FF57", // A bright green
    "#3357FF", // A strong blue
    "#FF33A1", // A vivid pink
    "#33FFF5", // A bright cyan
    "#FF9933", // A warm orange
    "#9933FF", // A rich purple
    "#33FF99", // A fresh mint green
    "#FF3333", // A bold red
  ];

  return (
    <Container>
      <div className="flex items-center justify-center gap-5 min-h-[70vh]">
        <div className="w-1/2">
          <div className="flex text-gr items-center gap-2">
            <FaChevronLeft />
            <p>Retour</p>
          </div>
          <div className="bg-primary/20 p-5 rounded-2xl mt-5">
            <h3 className="text-2xl">Séléctionnez un motif de Rendez-vous</h3>
            <div className="grid grid-cols-3 gap-10 mt-5">
              {data.map((item, i) => (
                <div
                  key={i}
                  style={{
                    color: hexColors[i],
                    "&:hover": {
                      color: "white",
                    },
                  }}
                  className="relative bg-white shadow-lg h-[81px] flex items-center justify-center text-center rounded-xl font-semibold hover:bg-primary hover:text-white cursor-pointer"
                >
                  {item}
                  <hr
                    style={{ border: "2.5px solid #81818133" }}
                    className="absolute bottom-1 rounded-xl w-1/2 left-1/2 -translate-x-1/2"
                  />
                </div>
              ))}
            </div>
            <div className="bg-primary/20 text-primary flex items-center justify-center w-fit p-3 mx-auto mt-5 rounded-full gap-2 text-3xl">
              <FaArrowUp className="cursor-pointer" />
              <FaArrowDown className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <div className="bg-white drop-shadow-xl p-3 rounded-2xl">
            <div className="flex items-center gap-2 text-xs">
              <FaCircle className="text-red-500" />
              <FaCircle className="text-blue-500" />
              <FaCircle className="text-yellow-500" />
            </div>
            <div className="border rounded-2xl mt-3 py-5 px-3">
              <p className="text-xs">Première étape</p>
              <p className="text-primary">Choix du motif de Rendez-vous</p>
              <p className="bg-primary/10 w-fit py-1 px-4 my-3 rounded-2xl text-primary">
                Première consultation dentaire
              </p>
              <p>Tarif appliqué et prise en charge</p>
              <div className="my-3 bg-[#F8F8F8] p-2 rounded-2xl flex gap-10 items-center justify-center text-xs">
                <p className="w-20 h-20 rounded-full bg-primary/20 text-primary text-xl font-semibold flex items-center justify-center">
                  23 €
                </p>
                <div className="flex-1">
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={40}
                    color={"#189EFF"}
                  />
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={40}
                    color={"#90C34E"}
                  />
                  <Percentage
                    label={"securité social"}
                    amount={"9,20 €"}
                    progress={40}
                    color={"#9D7971"}
                  />
                </div>
              </div>
              <p className="text-xs text-center">
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
      <div className="w-1/2 flex items-center gap-2">
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
