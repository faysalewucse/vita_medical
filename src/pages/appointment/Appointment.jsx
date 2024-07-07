import Container from "../../components/Container";
import AddCard from "./AddCard";
import teeth from "../../assets/teeth.png";
import heart from "../../assets/heart.png";
import avatar from "../../assets/avatar.png";
import AddCard2 from "./AddCard2";
import { IoCall } from "react-icons/io5";

const Appointment = () => {
  return (
    <div>
      <Container>
        <div className="md:flex gap-5">
          <div className="md:p-0 p-2 md:w-3/12">
            <h3 className="text-primary2 font-medium mb-5 text-xl">
              Mes Rendez-vous
            </h3>
            <div className="bg-background2 p-3 rounded-2xl">
              <div className="bg-white rounded-2xl rounded-b-none p-5">
                <div className="flex w-fit items-center justify-center mx-auto px-2 gap-5 bg-primary/20 rounded-full font-semibold">
                  <p className="bg-white p-3 shadow-md rounded-full text-primary3">
                    RDV à venir
                  </p>
                  <p className="p-3 text-gr">RDV passés</p>
                </div>
              </div>
              <AddCard />
              <AddCard />
              <hr className="h-2 bg-background2" />
              <AddCard2 image={teeth} />
              <AddCard2 image={heart} />
            </div>
          </div>
          <div className="md:w-4/12 p-2 md:p-0">
            <h3 className="text-primary2 font-medium mb-5 text-xl">
              Détail du rendez-vous
            </h3>
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <img className="w-24" src={avatar} alt="avtr" />
                <p className="text-primary4 font-semibold">
                  Dr Andréa Fargeaon
                </p>
                <p className="bg-gr/5 text-gr text-sm rounded-full px-2 py-1">
                  Medecin généraliste
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="bg-primary text-center rounded-full py-2 px-6 text-white mb-5">
                  Consultation dentaire
                </p>
                <p>Votre Rendez-vous est confirmé</p>
                <p className="text-primary4 text-lg font-medium">
                  18 Janvier à 18h00
                </p>
              </div>
            </div>
            <div className="bg-background2 font-semibold p-3 md:flex gap-3 items-center my-3 rounded-2xl w-full mx-auto">
              <p className="flex-1 text-center bg-white p-3 shadow-md rounded-xl text-primary4">
                Contacter le cabinet
              </p>
              <p className="mt-3 md:mt-0 flex-1 text-center bg-white p-3 shadow-md rounded-xl text-error">
                Annuler le rendez-vous
              </p>
            </div>
            <p className="text-center my-5">
              Un rendez-vous vous engage et se doit d’etre respecté. En cas
              d’impossibilité, veillez à prevenir le praticien suffisament en
              avance et ou appeler le cabinet en cas d’imprévue urgent.
            </p>
            <h3 className="text-primary2 font-medium mb-5 text-xl">
              Adresse du cabinet
            </h3>
            <div className="h-80 w-full rounded-2xl bg-background2 py-2 px-3">
              <h6 className="font-semibold">Cabinet dentaire de bellevue</h6>
              <p className="text-gr text-xs">
                41 Avenue du général galliéni 92190 MEUDON
              </p>
              <iframe
                className="rounded-2xl h-60 w-full border border-primary shadow-md shadow-primary mt-4"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="md:w-5/12 p-2 md:p-0">
            <h3 className="text-primary2 font-medium mb-5 text-xl">
              Honoraires
            </h3>
            <div className="bg-background2 p-5 rounded-2xl">
              {/* <p className="p-5 rounded-2xl bg-white shadow-md text-center">
                Les honoraires ne sont pas affichés pour ce rendez vous, il est
                possible que la tarification varie en fonction de votre
                couverture social. Veuillez vous rapprocher de votre praticien
                pour plus de détail.
              </p> */}
              <div className="bg-white p-5 rounded-2xl">
                <div className="w-1/2">
                  <h3 className="font-bold text-center">
                    Consultation spécialisée
                  </h3>
                  <h3 className="font-bold text-primary4 text-center text-xl">
                    108 €
                  </h3>
                  <div className="font-medium text-text2 mt-5">
                    <p className="flex justify-between items-center">
                      Sécurité social
                      <span className="text-primary2">26 €</span>
                    </p>
                    <p className="flex justify-between items-center">
                      Mutuelle
                      <span className="text-primary2">48 €</span>
                    </p>
                    <p className="flex justify-between items-center">
                      Reste à charge
                      <span className="text-primary2">30 €</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-primary2 font-medium my-5 text-xl">
              Autres informations
            </h3>
            <div className="bg-background2 p-5 rounded-2xl">
              <div className="p-5 rounded-2xl bg-white shadow-md text-center">
                <h3 className="font-semibold">Note du cabinet</h3>
                <p>
                  Les honoraires ne sont pas affichés pour ce rendez vous, il
                  est possible que la tarification varie en fonction de votre
                  couverture social. Veuillez vous rapprocher de votre praticien
                  pour plus de détail.
                </p>
              </div>
              <div className="md:flex gap-5 mt-5">
                <div className="flex-1 p-5 rounded-2xl bg-white shadow-md text-center">
                  <h3 className="font-semibold mb-5">Document à apporter</h3>
                  <div className="flex items-center text-sm gap-2 justify-center font-semibold">
                    <p className="bg-background2 rounded-full p-1 text-primary2">
                      Carte Vitale
                    </p>
                    <p className="bg-background2 rounded-full p-1 text-primary2">
                      Carte Mutuelle
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 flex-1 p-5 rounded-2xl bg-white shadow-md text-center font-semibold">
                  <h3 className="font-semibold mb-5">Contact</h3>
                  <div className="flex flex-col items-center text-xs gap-2 justify-center">
                    <p className="flex items-center gap-2 bg-background2 rounded-full p-1 text-primary2">
                      <IoCall />
                      01.45.37.82.26
                    </p>
                    <p className="bg-background2 rounded-full p-1 text-primary2">
                      @ cmd.meudon@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
