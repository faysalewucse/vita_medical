import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { CONFIRMED_PATH } from "../slugs";

const MedicineCard = () => {
  const navigate = useNavigate();

  const days = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const dates = [10, 11, 12, 13, 14, 15];
  const schedule = {
    10: ["10:00", "11:00"],
    12: [
      "12:00",
      "13:00",
      "12:00",
      "13:00",
      "13:00",
      "12:00",
      "13:00",
      "13:00",
      "12:00",
      "13:00",
    ],
  };

  return (
    <div
      onClick={() => navigate(CONFIRMED_PATH)}
      className="flex md:flex-row flex-col gap-2 bg-white p-2 rounded-2xl cursor-pointer"
    >
      <div>
        <div className="flex gap-5">
          <img className="w-16 h-16" src={avatar} alt="avtr" />
          <div className="">
            <p className="text-primary mb-2 font-medium">Dr Sarah Fargeon</p>
            <div className="font-medium flex items-center gap-2 bg-background4 text-linear1 text-xs w-fit rounded-xl px-3 py-1">
              <FaPhoneAlt />
              01.45.37.82.26
            </div>
            <p className="text-gr9 my-5 text-sm font-medium w-2/3">
              41 Avenue du général Gallieni 92190 Meudon
            </p>
          </div>
        </div>
        <div className="flex md:items-center justify-start gap-2">
          <Skill name={"Reservation en ligne"} />
          <Skill name={"Conventionné secteur 1"} />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-primary/20 rounded-xl flex-1 mb-5">
          <div className="bg-white shadow-md rounded-xl p-2 flex gap-2 items-center justify-between">
            <FaChevronLeft className="text-primary" />
            {days.map((day, i) => (
              <div className="flex flex-col items-center" key={i}>
                <p className="text-primary text-base font-medium">{day}</p>
                <p className="text-gr8 text-[11px]">{dates[i]} Avr</p>
              </div>
            ))}
            <FaChevronRight className="text-primary" />
          </div>
          <div className="px-4 ml-12 py-2 h-full flex gap-2 items-center justify-between">
            <div></div>
            {dates.map((date, i) => (
              <div className="h-full" key={i}>
                {schedule[date] ? (
                  <div className="my-2 flex flex-col gap-2 text-primary font-medium">
                    {schedule[date].map((time, index) => (
                      <p
                        key={index}
                        className="bg-primary text-white px-2 rounded"
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
            <div></div>
          </div>
        </div>
        <p className="text-center underline text-gr font-semibold">
          Afficher plus d’horaires
        </p>
      </div>
    </div>
  );
};

export default MedicineCard;

const Skill = ({ name }) => {
  return (
    <p className="w-fit bg-gradient-to-l to-linear1 from-linear2 text-xs p-1 rounded-2xl text-white font-medium">
      {name}
    </p>
  );
};
