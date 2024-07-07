import React, { useState } from "react";
import Container from "../../components/Container";
import avatar from "../../assets/avatar.png";
import c1 from "../../assets/confirm1.svg";
import c2 from "../../assets/confirm2.svg";
import info from "../../assets/info.svg";
import { Switch } from "antd";

const Confirm = () => {
  const [firstAction, setFirstAction] = useState(false);

  return (
    <Container>
      <div>
        <div className="bg-primary/5 p-10 flex gap-5 round">
          <div className="w-1/4 bg-white flex flex-col items-center p-5 rounded-2xl">
            <h3 className="mb-5">Récapitulatif du rendez-vous</h3>
            <img className="w-16" src={avatar} alt="avatar" />
            <p className="text-primary mt-3">Dr Andréa Fargeaon</p>
            <div className="relative flex items-center my-10">
              <div className="absolute left-4 flex flex-col items-center text-primary font-semibold bg-white rounded-full shadow-md p-3 border">
                <p>18</p>
                <p>Jan</p>
              </div>
              <div className="bg-gr/20 pl-20 pr-5 rounded-full p-2">
                Consultation dentaire
              </div>
            </div>
            <p>Votre Rendez-vous est confirmé</p>
            <p className="text-primary font-medium">18h00</p>
            <h6>Note du cabinet</h6>
            <p className="text-center">
              Veuillez vous présenter 15 minutes avant le début du rendez-vous,
              n’oubliez pas d’apporter votre carte vital et carte mutuelle. en
              cas d’impossibilité merci d’avertir 48h avant le début du
              rendez-vous
            </p>
          </div>
          <div className="w-1/4">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-7 items-center bg-white p-5 rounded-2xl">
                <h3 className="font-semibold">Actions</h3>
                <Option
                  label={"Ajouter à mon agenda"}
                  index={1}
                  action={firstAction}
                  setAction={setFirstAction}
                />
                {firstAction ? (
                  <p className="bg-red-50 text-red-500 py-2 px-4 rounded-full">
                    Annulez le rendez-vous
                  </p>
                ) : (
                  <Option label={"Recevoir un SMS de confirmation"} index={2} />
                )}
              </div>
              <div className="flex-1 flex flex-col items-center bg-white rounded-2xl">
                <h3 className="font-semibold mt-5">Honoraires</h3>
                {firstAction ? (
                  <p className="p-5 text-center">
                    Les honoraires ne sont pas affichés pour ce rendez vous, il
                    est possible que la tarification varie en fonction de votre
                    couverture social. Veuillez vous rapprocher de votre
                    praticien pour plus de détail.
                  </p>
                ) : (
                  <div className="w-full text-center">
                    <p className="text-primary font-semibold text-lg">108 €</p>
                    <p className="bg-gr/20 w-full p-5 my-5">
                      Consultation spécialisée 108 €
                    </p>
                    <div>
                      <p>Sécurité social</p>
                      <p>26 €</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-2/4 bg-white p-5 flex flex-col items-center rounded-2xl">
            <h3 className="font-semibold">Plan et moyens d’accés</h3>
            <iframe
              className="rounded-2xl h-80 w-96 bg-white p-2 border border-primary shadow-md shadow-primary my-10"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div className="flex items-center justify-center gap-10">
              <Details
                icon={c1}
                label={"Cabinet dentaire Bellevue"}
                bgColor={"#FFE8E8"}
                desc={
                  <div>
                    <p>Adresse: 41 Avenue du général</p>
                    <p>Galliéni 92190 MEUDON</p>
                    <p>Téléphone: 01.46.90.82.84</p>
                  </div>
                }
              />
              <Details
                icon={c2}
                label={"Moyens de transport"}
                bgColor={"#CBEFBE8C"}
                desc={
                  <div>
                    <p>Tramway - Brimborion (ligne T2)</p>
                    <p>RER - Gare de Sevres Rive Gauche (ligne N)</p>
                    <p>Bus - Gare De Bellevue (lignes 169 et 389)</p>
                  </div>
                }
              />
            </div>
            <Details
              rootClassName={"mt-10 flex flex-col items-center"}
              icon={info}
              label={"Moyens de transport"}
              bgColor={"#FBDA6642"}
              desc={"Rez-de-chaussée - Entrée accessible - Parking gratuit"}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <button className="bg-white shadow-md py-2 px-4 rounded-full">
            Retour
          </button>
          <button className="bg-primary text-white shadow-md py-2 px-4 rounded-full">
            Confirmer le rendez-vous
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Confirm;

const Option = ({ label, index, action, setAction }) => {
  return (
    <div className="w-full flex items-center gap-2">
      <p className="flex-1">{label}</p>
      <Switch
        checked={action}
        onChange={(e) => (index === 1 ? setAction(e) : () => {})}
      />
    </div>
  );
};

const Details = ({ icon, label, desc, bgColor, rootClassName }) => {
  return (
    <div className={`${rootClassName}`}>
      <div className="flex items-center gap-2">
        <img
          style={{
            background: bgColor,
          }}
          className="p-2 rounded-xl"
          src={icon}
          alt="icun"
        />
        <p className="text-lg font-semibold">{label}</p>
      </div>
      <p className="px-2 mt-2">{desc}</p>
    </div>
  );
};
