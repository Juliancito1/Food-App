import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const BannerMain = () => {
  return (
    <section className="banner text-light text-center mb-5">
      <Image src="../src/assets/banner.png" className="w-100"></Image>
      <h3>Sabores irresistibles</h3>
      <p>
        recetas deliciosas y faciles de aprender, ¡inspirate en nuestra cocina!
      </p>
      <Button className="w-75 btn-banner">
        Empeza a cocinar <i class="bi bi-arrow-right"></i>
      </Button>
    </section>
  );
};

export default BannerMain;
