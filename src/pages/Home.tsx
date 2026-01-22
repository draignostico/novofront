import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import acertosSrc from "../img/acertos.png";
import precisaoSrc from "../img/precisao.png";
import clarezaSrc from "../img/clareza.png";
import tempoSrc from "../img/tempo.png";
import phone from "../img/doctor-phone.png";
import laptop from "../img/doctor-laptop.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home-container">
        {/* sção HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Diagnóstico clínico <br />
              com IA para apoio <br />
              médico.
            </h1>

            <p>
              Apoio inteligente e decisivo médico com base nos sintomas
              relatados, análise de dados e protocolos clínicos. Rápido,
              preciso e 100% online.
            </p>
          </div>

          <div className="hero-image">
            <img src={phone} alt="Médico com celular" />
          </div>
        </section>

        {/* seção benefícios */}
        <section className="benefits">
          <div className="benefit">
            <img src={acertosSrc} alt="Redução de erros" />
            <span>Redução de erros</span>
          </div>

          <div className="benefit">
            <img src={precisaoSrc} alt="Maior precisão" />
            <span>Maior precisão</span>
          </div>

          <div className="benefit">
            <img src={clarezaSrc} alt="Mais clareza" />
            <span>Mais clareza</span>
          </div>

          <div className="benefit">
            <img src={tempoSrc} alt="Economia de tempo" />
            <span>Economia de tempo</span>
          </div>
        </section>

        {/* seção planos */}
        <section className="plans">
          <div className="plans-image">
            <img src={phone} alt="Sistema Dr AIgnóstico" />

            <div className="price-bubble free">
              <strong>3 Diagnósticos</strong>
              <span>A partir de</span>
              <h2>R$00,00</h2>
              <small>/mês</small>
            </div>

            <div className="price-bubble paid">
              <strong>Outros Planos Avançados</strong>
              <span>A partir de</span>
              <h2>R$ 123,00</h2>
              <small>/mês</small>
            </div>
          </div>

          <div className="plans-text">
            <h2>
              Os melhores planos,
              <br /> com os menores preços
            </h2>

            <p>
              Comece com 3 diagnósticos gratuitos e evolua para planos
              avançados pagos, com análises mais completas e recursos extras.
            </p>

            <button>Saiba mais..</button>
          </div>
        </section>

        {/* seção empresas */}
        <section className="enterprise">
          <div className="enterprise-text">
            <h2>Soluções de diagnóstico para Empresas</h2>

            <p>
              Aqui no Dr. AIgnóstico, ajudamos empresas a oferecer diagnósticos
              rápidos e inteligentes para seus colaboradores e funcionários,
              com tecnologia de ponta, facilidade de acesso e soluções que
              cabem no orçamento do seu negócio.
            </p>

            <button className="contact-btn">Contato</button>
          </div>

        <div className="enterprise-image">
            <img src={laptop} alt="Médica com notebook" />
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}