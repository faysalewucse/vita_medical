import Container from "../../components/Container";
import avatar from "../../assets/avatar.png";
import { IoCall } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Checkbox, Input } from "antd";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import RoundedContainer from "../../components/RoundedContainer";
import { BiPhone } from "react-icons/bi";

const Profile = () => {
  const checkBoxValues = [
    { label: "Aucun", value: "Aucun" },
    { label: "Mutuelle", value: "Mutuelle" },
    { label: "CMU", value: "CMU" },
    { label: "AME", value: "AME" },
  ];

  return (
    <div>
      <Container>
        <div className="md:flex p-2 md:p-0 gap-10">
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-primary2 mb-5">
              Mon profil
            </h3>
            <div className="bg-background2 p-5 rounded-2xl">
              <div className="bg-white shadow-md p-5 rounded-t-2xl">
                <div className="flex flex-col items-center gap-2 mb-5">
                  <img className="w-[75px]" src={avatar} alt="avtr" />
                  <p className="font-semibold text-base">Amelie Formiere</p>
                  <p className="font-medium text-gr2">26/02/1972</p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="flex items-center gap-2 font-medium text-[15px]">
                    <IoCall />
                    0765817097
                  </p>
                  <p className="bg-primaryBg text-primary5 p-1 rounded-full text-xs">
                    Vérifié
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <p className="flex items-center gap-2 text-[15px]">
                    <MdAlternateEmail />
                    amlelie-fourneire@gmail.com
                  </p>
                  <p className="bg-yellowBg text-ylwText p-1 rounded-full text-xs">
                    Non vérifié
                  </p>
                </div>
              </div>
              <hr className="bg-background2 h-2 border-none" />
              <div className="bg-white p-5">
                <p className="text-center text-base font-medium">Sécurité</p>
                <div className="md:flex items-center gap-5 justify-between my-3">
                  <p className="">Mot de passe</p>
                  <div className="mt-2 md:mt-0 flex items-center gap-5">
                    <Input.Password className="flex-1" />
                    <FaPencilAlt className="text-primary" />
                  </div>
                </div>
              </div>
              <hr className="bg-background2 h-2 border-none" />

              <div className="bg-white p-5">
                <p className="text-center text-base font-medium">
                  Couverture sociale
                </p>
                <div className="md:flex items-center gap-5 justify-between my-3">
                  <p className="">Numéro de sécurité social</p>
                  <div className="mt-2 md:mt-0 flex items-center gap-5">
                    <Input type="number" className="flex-1" />
                    <FaPencilAlt className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-5 md:mt-12 flex flex-col gap-10">
            <RoundedContainer>
              <RoundedContainer white>
                <h3 className="text-center font-semibold text-base mb-5">
                  Famille
                </h3>
                <div className="flex gap-10">
                  <div>
                    <img
                      src={avatar}
                      alt="avtr"
                      className="w-14 border-2 border-primary3 rounded-full"
                    />
                    <p className="font-medium">Amelie</p>
                  </div>
                  <div>
                    <img
                      src={avatar}
                      alt="avtr"
                      className="w-14 rounded-full"
                    />
                    <p className="font-medium">Sarah</p>
                  </div>
                  <div className="w-32 -ml-10 flex flex-col items-center">
                    <div className="w-14 h-14 flex items-center justify-center border border-primary border-dashed rounded-full p-3">
                      <FaPlus className="text-2xl" />
                    </div>
                    <p className="font-medium text-center">
                      Ajouter un nouveau membre
                    </p>
                  </div>
                </div>
              </RoundedContainer>
            </RoundedContainer>
            <RoundedContainer>
              <RoundedContainer white>
                <h3 className="text-center font-semibold text-base mb-5">
                  Couverture complementaire
                </h3>
                <Checkbox.Group
                  options={checkBoxValues}
                  defaultValue={["Apple"]}
                  onChange={() => {}}
                />
                <div className="flex items-center gap-5 justify-between my-3">
                  <p className="">Nom de la mutuelle</p>
                  <Input className="flex-1" />
                  <FaPencilAlt className="text-primary" />
                </div>
              </RoundedContainer>
            </RoundedContainer>
            <RoundedContainer>
              <RoundedContainer white>
                <h3 className="text-center font-semibold text-base mb-5">
                  Documents
                </h3>

                <div className="flex items-center gap-5 justify-between my-3">
                  <p className="">Carte mutuelle</p>
                  <Input className="flex-1" />
                </div>
                <div className="flex items-center gap-5 justify-between my-3">
                  <p className="">Tableau de garantie</p>
                  <Input className="flex-1" />
                </div>
                <p className="text-center text-gr3">
                  Ces informations sont utilisé par les praticiens que vous
                  consultez pour réaliser des devis et le tiers payant. ces
                  informations chiffrées seront transmises uniquement avec vos
                  praticiens.
                </p>
              </RoundedContainer>
            </RoundedContainer>
          </div>
          <div className="flex-1 flex flex-col gap-10 md:mt-12 mt-5">
            <RoundedContainer>
              <RoundedContainer white>
                <h3 className="text-center font-semibold text-base">
                  Mes praticiens
                </h3>
                <p className="text-primary text-center mb-5">(3)</p>
                <DrCard />
                <DrCard />
              </RoundedContainer>
            </RoundedContainer>
            <RoundedContainer>
              <RoundedContainer white>
                <h3 className="text-center font-semibold text-base">
                  Parametre de confidentialité
                </h3>
              </RoundedContainer>
            </RoundedContainer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;

const DrCard = () => {
  return (
    <div className="border-b-8 border-b-background2 flex md:flex-row flex-col items-center gap-5 md:items-start justify-between md:py-0 md:p-5 py-5">
      <div className="md:flex gap-5">
        <img className="w-14 h-14 mx-auto md:mx-0" src={avatar} alt="avtr" />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-base font-semibold text-primary6">
            Dr Johanna Feyrouz
          </p>
          <p className="font-medium text-gr4">Chirurgien-dentiste</p>
          <button className="mt-5 bg-primary3 text-white px-4 py-1 rounded-2xl font-medium">
            Prendre Rendez-vous
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 text-3xl">
        <BiPhone className="bg-background4 p-1 rounded-2xl" />
        <MdAlternateEmail className="bg-background4 p-1 rounded-2xl" />
      </div>
    </div>
  );
};
