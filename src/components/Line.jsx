const Line = ({ title, symbol }) => {
  return (
    <>
      <button
        className="line"
        onClick={() => {
          navigator.clipboard.writeText(symbol);
        }}
      >
        {symbol} {title}
        <span>Copy me!</span>
      </button>
    </>
  );
};

export default Line;
