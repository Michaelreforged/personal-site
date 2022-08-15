
export const IconDiv = ({ url, children }) => {
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

export const PillDiv = ({ url, children }) => {
  return (
    <div
    className="pillDiv"
      onClick={() => {
        window.open(url, "_blank").focus();
      }}
    >
      {children}
    </div>
  );
};

