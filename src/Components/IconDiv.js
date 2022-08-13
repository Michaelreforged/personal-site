
const IconDiv = ({ url, children }) => {
  return (
    <div
    className="iconDiv"
      onClick={() => {
        window.open(url, "_blank").focus();
      }}
    >
      {children}
    </div>
  );
};

export default IconDiv