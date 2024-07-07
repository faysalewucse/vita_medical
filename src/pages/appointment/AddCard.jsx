import avatar from "../../assets/avatar.png";

const AddCard = ({ image }) => {
  return (
    <div className="p-5 border flex gap-5 bg-primary/10">
      <img className="w-16 h-16" src={image ? image : avatar} alt="avtr" />
      <div className="">
        <p className="text-lg font-medium">Dr Sarah Fargeon</p>
        <div className="flex items-center justify-start gap-2">
          <Skill name={"Medecin généraliste"} />
        </div>
        <p className="text-gr">41 Avenue du général Gallieni 92190 Meudon</p>
        <div className="flex items-center gap-2 bg-white text-primary w-fit rounded-2xl px-3 py-1 mt-4">
          8 Mai 2025 à 16:00
        </div>
      </div>
    </div>
  );
};

export default AddCard;

const Skill = ({ name }) => {
  return <p className="text-primary">{name}</p>;
};
