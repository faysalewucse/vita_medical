import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { CONFIRMED_PATH } from "../slugs";

const MedicineCard = () => {
  const navigate = useNavigate();

  const days = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const dates = [10, 11, 12, 13, 14, 15];
  const schedule = { 10: ["10:00", "11:00"], 12: ["12:00", "01:00"] };

  return (
    <div
      onClick={() => navigate(CONFIRMED_PATH)}
      className="flex gap-2 bg-white p-5 rounded-2xl cursor-pointer"
    >
      <img className="w-16 h-16" src={avatar} alt="avtr" />
      <div className="">
        <p className="text-primary mb-2 font-medium">Dr Sarah Fargeon</p>
        <div className="flex items-center justify-start gap-2">
          <Skill name={"Reservation en ligne"} />
          <Skill name={"Conventionné secteur 1"} />
        </div>
        <p className="text-gr my-5">
          41 Avenue du général Gallieni 92190 Meudon
        </p>
        <div className="flex items-center gap-2 bg-primary/20 w-fit rounded-2xl px-3 py-1">
          <FaPhoneAlt />
          01.45.37.82.26
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-primary/20 rounded-xl flex-1 mb-5">
          <div className="bg-white shadow-md rounded-xl px-4 py-2 flex gap-2 items-center justify-between">
            <FaChevronLeft className="text-primary" />
            {days.map((day, i) => (
              <div className="flex flex-col items-center" key={i}>
                <p className="text-primary font-medium">{day}</p>{" "}
                <p className="text-gr">{dates[i]}Avr</p>
              </div>
            ))}
            <FaChevronRight className="text-primary" />
          </div>
          <div className="px-4 py-2 flex gap-2 items-center justify-between">
            <div></div>
            {dates.map((date, i) => (
              <div className="" key={i}>
                <div className="mt-2 flex flex-col gap-2 text-primary font-medium">
                  {schedule[10].map((time) => (
                    <p className="bg-primary text-white px-2 rounded-lg">
                      {time}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
        <p className="text-center underline text-gr font-medium">
          Afficher plus d’horaires
        </p>
      </div>
    </div>
  );
};

export default MedicineCard;

const Skill = ({ name }) => {
  return <p className="bg-primary py-1 px-3 rounded-2xl text-white">{name}</p>;
};
