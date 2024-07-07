import Container from "../../components/Container";
import AddCard from "./AddCard";
import teeth from "../../assets/teeth.png";
import heart from "../../assets/heart.png";
import avatar from "../../assets/avatar.png";
import AddCard2 from "./AddCard2";

const Appointment = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-5">
          <div className="">
            <h3 className="text-primary font-medium mb-5">Mes Rendez-vous</h3>
            <div className="bg-primary/10 pt-1 rounded-2xl">
              <div className="bg-white p-5 m-3 rounded-2xl">
                <div className="flex w-fit items-center justify-center mx-auto gap-5 p-1 bg-primary/20 rounded-full">
                  <p className="bg-white p-3 shadow-md rounded-full">
                    RDV à venir
                  </p>
                  <p className="p-3">RDV passés</p>
                </div>
              </div>
              <AddCard />
              <AddCard />
              <hr className="h-2 bg-gr/50" />
              <AddCard2 image={teeth} />
              <AddCard2 image={heart} />
            </div>
          </div>
          <div>
            <h3 className="text-primary font-medium mb-5">
              Détail du rendez-vous
            </h3>
            <div className="flex items-center gap-10">
              <div>
                <img className="w-20" src={avatar} alt="avtr" />
                <p className="text-primary">Dr Andréa Fargeaon</p>
                <p className="bg-gr/5 text-gr rounded-full p-2">
                  Medecin généraliste
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="bg-primary text-center rounded-full py-2 px-6 text-white mb-5">
                  Consultation dentaire
                </p>
                <p>Votre Rendez-vous est confirmé</p>
                <p className="text-primary text-lg font-medium">
                  18 Janvier à 18h00
                </p>
              </div>
            </div>
            <div className="bg-primary/10 p-3 flex gap-3 items-center my-3 rounded-2xl">
              <p className="bg-white p-3 shadow-md rounded-xl">
                Contacter le cabinet
              </p>
              <p className="bg-white p-3 shadow-md rounded-xl">
                Annuler le rendez-vous
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
