import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import ProductLink from "./../components/ProductLink";

export default function Product() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "purple" }}>Product Page</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <ProductLink 
          url="/product/computer" 
          title="COMPUTER" 
          bgcolor="red"
          />
        <ProductLink
          url="/product/smartphone"
          title="SMARTPHONE"
          bgcolor="blue"
        />
      </div>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam ut
        neque debitis quisquam, minima sapiente nesciunt dignissimos asperiores
        porro iste consequuntur facere aspernatur sint, odit illo, minus
        repudiandae perspiciatis vero soluta iure quos. Beatae rerum architecto
        possimus tempora consequatur, qui quod! Corporis labore, facere ab nobis
        recusandae at voluptas?
      </p>
      <Footer />
    </>
  );
}