const AddCard2 = ({ image }) => {
  return (
    <div className="p-5 border flex gap-5 bg-background8">
      <img className="w-16 h-16" src={image} alt="avtr" />
      <div className="">
        <p className="text-base font-semibold text-gr12">
          Visiter de prévention
        </p>
        <p className="bg-primary/10 text-primary3 p-1 rounded-2xl w-fit">
          Chirurgien dentiste
        </p>
        <p className="text-gr13 text-[13px]">
          Controle dentaire et detartarge annuel. (Recommandé par le ministere
          de la santé)
        </p>
        <div className="flex items-center justify-end gap-5 mt-5">
          <button className="bg-white text-[13px] font-medium py-2 px-4 rounded-full">
            Deja fait
          </button>
          <button className="bg-primary text-[13px] font-medium text-white py-2 px-4 rounded-full">
            Prendre RDV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard2;
