const RoundedContainer = ({ children, white }) => {
  return (
    <div className={`${white ? "bg-white" : "bg-background2"} rounded-2xl p-5`}>
      {children}
    </div>
  );
};

export default RoundedContainer;
