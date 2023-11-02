const Line = ({ title, symbol }) => {
  return (
    <>
      <div className="line">
        {symbol} {title}
      </div>
    </>
  );
};

export default Line;
