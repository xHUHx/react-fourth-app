
export default function NavBarMain() {
  const a_style = {
    textDecoration: "none",
    color: "white",
  };

  const div_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: "5px",
    marginBottom: "50px",
    padding: "15px",
  };

  return (
    <>
      <div style={div_style}>
          <a href="/" style={a_style}>
            HOME
          </a>{" "}
          |
          <a href="/contact" style={a_style}>
            CONTACT
          </a>{" "}
          |
          <a href="/product" style={a_style}>
            PRODUCT
          </a>{" "}
          |
          <a href="/about" style={a_style}>
            ABOUT
          </a>
      </div>
    </>
  );
}