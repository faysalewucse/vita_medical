import circle from "../assets/circle.png";

const CircleBar = () => {
  return (
    <div className="flex justify-between p-3">
      <div>
        <p className="text-[13px] font-medium">Sécurité social</p>
        <span className="text-primary4 text-base font-[700]">26 €</span>
      </div>
      <img src={circle} alt="circle" className="w-[130px] h-[130px]" />
      <div className="flex items-end">
        <div>
          <p className="text-[13px] font-medium">Mutuelle</p>
          <span className="text-primary4 text-base font-[700]">48 €</span>
        </div>
      </div>
    </div>
  );
};

export default CircleBar;
