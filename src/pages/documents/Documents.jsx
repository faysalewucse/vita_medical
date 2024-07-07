import { BiPlus } from "react-icons/bi";
import Container from "../../components/Container";
import presp from "../../assets/prepscription.png";
import avatar from "../../assets/avatar.png";
import { FaAt, FaPhoneAlt } from "react-icons/fa";

const Documents = () => {
  const items = ["Devis", "Ordonnance", "Courrier", "Radiographies"];

  return (
    <div>
      <Container>
        <div className="md:flex gap-5">
          <div className="p-2 md:p-0 md:w-3/12">
            <div className="flex items-center gap-2 mb-5">
              <p className="font-semibold text-xl text-primary2">
                Mes documents
              </p>
              <BiPlus className="bg-primary2 p-1 text-3xl rounded-full text-white" />
            </div>
            <div className="bg-background2 p-3 rounded-2xl">
              <div className="bg-white flex flex-wrap gap-5 rounded-2xl rounded-b-none p-5">
                {items.map((item, index) => (
                  <p
                    className="bg-primary text-white text-center px-3 py-1 rounded-2xl"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <hr className="h-2 bg-background2" />
              <DocCard />
              <DocCard />
              <DocCard />
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="bg-background2 p-5">
              <img src={presp} alt="prescription" />
            </div>
          </div>
          <div className="p-2 md:p-0 md:w-4/12">
            <div className="bg-background2 p-5 rounded-2xl">
              <div className="p-5 rounded-2xl bg-white shadow-md">
                <div className="flex gap-2">
                  <img className="w-16 h-16" src={avatar} alt="avtr" />
                  <div className="">
                    <p className="text-primary2 font-medium">
                      Dr Johanna Feyrouz
                    </p>
                    <p className="text-sm mb-2 font-medium">
                      Chirurgien-dentiste
                    </p>
                    <p className=" flex items-center gap-2 bg-primary2 w-fit text-white font-semibold rounded-2xl px-3 py-1">
                      Prendre Rendez-vous
                    </p>
                  </div>
                </div>
                <div className="md:flex items-center justify-between gap-2">
                  <div className="mt-5 flex items-center gap-2 bg-primary/20 w-fit text-primary2 font-semibold rounded-2xl px-3 py-1">
                    <FaPhoneAlt />
                    01.45.37.82.26
                  </div>
                  <div className="mt-5 flex items-center gap-2 bg-primary/20 w-fit text-primary2 font-semibold rounded-2xl px-3 py-1">
                    <FaAt />
                    cmd.meudon@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-5">
              Document transmis le 17/05/2023 Au cabinet dentaire de Bellevue.
              41 Avenue du général galliéni 92190 Meudon
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Documents;

const DocCard = () => {
  return (
    <div className="border p-5 bg-primary/10">
      <p className="bg-background3 px-2 py-1 text-primary2 text-center w-fit mx-auto rounded-2xl mb-5">
        20 Juin 2023
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-10 w-1 bg-[#ECEDBA]"></div>
          <div>
            <p className="text-base font-semibold">Devis dentaire</p>
            <p className="text-lg text-primary font-semibold">
              Chirurgien dentiste
            </p>
          </div>
        </div>
        <div>
          <p className="bg-primary px-2 py-1 text-white text-center rounded-2xl font-semibold">
            Non lue
          </p>
          <p className="text-base font-semibold">Devis dentaire</p>
        </div>
      </div>
    </div>
  );
};
