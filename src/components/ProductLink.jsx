
export default function ProductLink({ url, title, bgcolor }) {
  const a_link = {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: bgcolor,
  };
  
  return (
    <>
      <a
        href={url}
        style={a_link}
      >
        {title}
      </a>
    </>
  );
}
