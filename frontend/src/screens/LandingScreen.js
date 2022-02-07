import React from "react";
import "./Screen.css";
import { Link } from "react-router-dom";
import farmBG from "../images/5.png";
import transparentBG from "../images/p_bgTrans.png";
import windMill from "../images/3.png";
import farmer from "../images/front2.png";
import plant from "../images/plant.gif";
// import cattle from "../images/cattleOrange1.png";
import logo from "../images/DummyLogo_mix.png";
import model from "../images/model.jpg";
import { useEffect } from "react";

const LandingScreen = () => {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let btn = document.getElementById("btn");
    let text = document.getElementById("text");
    let mountains_front = document.getElementById("mountains_front");
    let header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      if (stars && moon && mountains_front && mountains_behind) {
        stars.style.top = value * 0.25 + "px";
        moon.style.right = value * 1.05 + "px";
        mountains_behind.style.top = value * 0.5 + "px";
        mountains_front.style.top = value * 0 + "px";
        text.style.marginRight = value * 4 + "px";
        text.style.MarginTop = value * 1.5 + "px";
        btn.style.marginTop = value * 1.5 + "px";
        header.style.top = value * 0.5 + "px";
      }
    });
  }, []);

  return (
    <>
      {/* <!-- --------------------------------------------------------- navbar----------------------------------------------- ---> */}
      <header className="navbar navbar-expand-lg navbar-dark bg-transparent navbar-custom">
        <logo className="#">
          <a href="#">
            <img src={logo} />
          </a>
        </logo>
        {/* <!-- <logo><a href="#" className="logo">Logo</a></logo> --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="bg-trans collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" />
          <li className="nav-item">
            <Link to={"/home"}>
              <a href="#" className="active">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </div>
      </header>
      {/* <!-- -----------------------------------------------parallax effect-------------------------------------------------- --> */}
      <parallax className="parallax">
        <img src={farmBG} id="stars" />
        <img src={transparentBG} id="moon" />
        <img src={windMill} id="mountains_behind" />
        <h2 id="text">FARM HUB</h2>
        <a href="#sec" id="btn">
          Explore
        </a>
        <img src={farmer} id="mountains_front" />
      </parallax>
      {/* <!--------------------------------------------------- section---------------------------------------------------------- --> */}
      <section>
        <div className="sec secUp " id="sec">
          <heading>FARM HUB</heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aliquid inventore consequatur doloribus cupiditate enim suscipit
            quam, praesentium totam nesciunt aliquam obcaecati assumenda
            perferendis corrupti in saepe molestias harum optio, soluta facere
            aperiam nam dicta quia ipsum! Necessitatibus cum iusto adipisci
            veritatis placeat temporibus ipsam libero, sint a asperiores neque
            quas saepe alias esse magnam molestiae! Voluptatem, deleniti quia!
            Optio repellat fuga nobis voluptatibus modi blanditiis. Doloribus
            asperiores optio quidem sequi vero provident labore recusandae
            ducimus exercitationem aliquam ullam quos corporis consequuntur
            veritatis, sit praesentium? Odio, cupiditate nihil magni dolorem
            facere tempore, sunt obcaecati dolorum quam quo dolores eos
            repudiandae cum necessitatibus? Enim ex eveniet eaque magnam facere
            quos dolores accusamus animi voluptate itaque porro veritatis
            quaerat quibusdam distinctio doloribus, maxime molestias recusandae.
            Illo magni fuga, reprehenderit sequi commodi, molestiae suscipit, ex
            ut quam quos dolorum eveniet magnam eligendi cum animi dicta iure
            atque? Voluptatum autem repellat obcaecati pariatur accusantium qui,
            laboriosam consequuntur itaque beatae explicabo reiciendis sequi
            repellendus! Sunt in, porro aliquam ipsum molestias dolore unde. Est
            iusto esse error ea eum recusandae unde enim, quibusdam ipsa laborum
            odit illum vel atque nihil iste ipsam numquam blanditiis doloribus?
            Nam explicabo quod aperiam iste voluptatem adipisci, perspiciatis
            excepturi corrupti eum!
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            dolorem, nam corrupti rerum necessitatibus quisquam praesentium
            facilis vel illum deleniti alias? Qui exercitationem perspiciatis
            similique tenetur iure beatae aperiam modi eveniet! Perspiciatis
            incidunt delectus exercitationem illo iste modi ipsam culpa, minima
            reprehenderit maxime non tempora quaerat libero provident voluptates
            deserunt! Quibusdam, nihil placeat. Sint ex expedita, libero dolorum
            quia quam assumenda non, maxime, ipsum perferendis repellat magnam
            eum iste nihil consequuntur vero quaerat fuga. Provident tempora,
            sint quas suscipit deserunt accusamus illo laboriosam facere rerum
            iusto, facilis, adipisci harum quod. Commodi vel autem voluptate
            amet corrupti nostrum ipsam mollitia molestiae tempora totam,
            necessitatibus quaerat culpa rem in iusto unde eos perspiciatis
            libero veniam quos nemo dolorum beatae ratione! Quod ab eos
            veritatis consectetur eaque soluta molestias? Autem magnam mollitia
            perferendis quod eius ut libero modi! Saepe, repellendus? Non,
            tempora impedit eligendi ipsum modi explicabo quasi cum numquam
            odit! Quod repellat doloribus eveniet fuga qui iste nobis in
            doloremque quos numquam distinctio atque accusantium, maxime nemo a
            eius. Quia nulla adipisci veritatis, voluptatibus atque nostrum
            ullam labore sapiente ratione est tenetur reiciendis, doloribus cum
            cumque sint aliquid ad veniam fuga quasi quas provident! Eos
            repellendus incidunt eius? Sunt aspernatur debitis vero!
          </p>
          <br />
        </div>

        <div className="secUp">
          <article>
            <svg
              id="wave"
              style={{ transform: "rotate(180deg)", transition: "0.3s" }}
              viewBox="0 0 1440 260"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stop-color="rgba(236, 121, 14, 1)" offset="0%"></stop>
                  <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                style={{ transform: "translate(0, 0px)", opacity: "1" }}
                fill="url(#sw-gradient-0)"
                d="M0,182L48,151.7C96,121,192,61,288,39C384,17,480,35,576,65C672,95,768,139,864,169C960,199,1056,217,1152,195C1248,173,1344,113,1440,82.3C1536,52,1632,52,1728,73.7C1824,95,1920,139,2016,164.7C2112,191,2208,199,2304,169C2400,139,2496,69,2592,52C2688,35,2784,69,2880,82.3C2976,95,3072,87,3168,104C3264,121,3360,165,3456,151.7C3552,139,3648,69,3744,39C3840,9,3936,17,4032,26C4128,35,4224,43,4320,43.3C4416,43,4512,35,4608,52C4704,69,4800,113,4896,147.3C4992,182,5088,208,5184,186.3C5280,165,5376,95,5472,73.7C5568,52,5664,78,5760,91C5856,104,5952,104,6048,95.3C6144,87,6240,69,6336,78C6432,87,6528,121,6624,143C6720,165,6816,173,6864,177.7L6912,182L6912,260L6864,260C6816,260,6720,260,6624,260C6528,260,6432,260,6336,260C6240,260,6144,260,6048,260C5952,260,5856,260,5760,260C5664,260,5568,260,5472,260C5376,260,5280,260,5184,260C5088,260,4992,260,4896,260C4800,260,4704,260,4608,260C4512,260,4416,260,4320,260C4224,260,4128,260,4032,260C3936,260,3840,260,3744,260C3648,260,3552,260,3456,260C3360,260,3264,260,3168,260C3072,260,2976,260,2880,260C2784,260,2688,260,2592,260C2496,260,2400,260,2304,260C2208,260,2112,260,2016,260C1920,260,1824,260,1728,260C1632,260,1536,260,1440,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              ></path>
              <defs>
                <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                  <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
                  <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
                fill="url(#sw-gradient-1)"
                d="M0,156L48,169C96,182,192,208,288,203.7C384,199,480,165,576,130C672,95,768,61,864,47.7C960,35,1056,43,1152,69.3C1248,95,1344,139,1440,130C1536,121,1632,61,1728,30.3C1824,0,1920,0,2016,21.7C2112,43,2208,87,2304,121.3C2400,156,2496,182,2592,177.7C2688,173,2784,139,2880,130C2976,121,3072,139,3168,125.7C3264,113,3360,69,3456,47.7C3552,26,3648,26,3744,26C3840,26,3936,26,4032,47.7C4128,69,4224,113,4320,147.3C4416,182,4512,208,4608,195C4704,182,4800,130,4896,91C4992,52,5088,26,5184,26C5280,26,5376,52,5472,69.3C5568,87,5664,95,5760,95.3C5856,95,5952,87,6048,104C6144,121,6240,165,6336,173.3C6432,182,6528,156,6624,138.7C6720,121,6816,113,6864,108.3L6912,104L6912,260L6864,260C6816,260,6720,260,6624,260C6528,260,6432,260,6336,260C6240,260,6144,260,6048,260C5952,260,5856,260,5760,260C5664,260,5568,260,5472,260C5376,260,5280,260,5184,260C5088,260,4992,260,4896,260C4800,260,4704,260,4608,260C4512,260,4416,260,4320,260C4224,260,4128,260,4032,260C3936,260,3840,260,3744,260C3648,260,3552,260,3456,260C3360,260,3264,260,3168,260C3072,260,2976,260,2880,260C2784,260,2688,260,2592,260C2496,260,2400,260,2304,260C2208,260,2112,260,2016,260C1920,260,1824,260,1728,260C1632,260,1536,260,1440,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              ></path>
            </svg>
            <div className="about-us">
              <div className="section-header">
                <h1 className="section-heading problems-heading">Problems</h1>
                <div className="underline"></div>
              </div>
              <div className="services">
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-tractor"></i>
                    <h3>Interior</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-hammer"></i>
                    <h3>Exterior</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-pencil-alt"></i>
                    <h3>Design</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-sun"></i>
                    <h3>Decoration</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-temperature-low"></i>
                    <h3>Planning</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="service">
                  <div className="service-header">
                    <i className="fas fa-crow"></i>
                    <h3>Execution</h3>
                  </div>
                  <p className="service-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque, officia! Necessitatibus delectus sed dicta
                    corrupti voluptatibus, omnis eius vel ab magni nemo,
                    incidunt esse! Quod!
                  </p>
                </div>
                <div className="about-us-img-wrapper">
                  <img src={plant} />
                </div>
              </div>
            </div>
          </article>
          {/* <!-- cards --> */}
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 220"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(244, 120, 48, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-0)"
              d="M0,22L34.3,33C68.6,44,137,66,206,84.3C274.3,103,343,117,411,124.7C480,132,549,132,617,117.3C685.7,103,754,73,823,73.3C891.4,73,960,103,1029,110C1097.1,117,1166,103,1234,80.7C1302.9,59,1371,29,1440,22C1508.6,15,1577,29,1646,47.7C1714.3,66,1783,88,1851,95.3C1920,103,1989,95,2057,102.7C2125.7,110,2194,132,2263,117.3C2331.4,103,2400,51,2469,44C2537.1,37,2606,73,2674,77C2742.9,81,2811,51,2880,51.3C2948.6,51,3017,81,3086,84.3C3154.3,88,3223,66,3291,62.3C3360,59,3429,73,3497,84.3C3565.7,95,3634,103,3703,121C3771.4,139,3840,169,3909,172.3C3977.1,176,4046,154,4114,150.3C4182.9,147,4251,161,4320,150.3C4388.6,139,4457,103,4526,95.3C4594.3,88,4663,110,4731,121C4800,132,4869,132,4903,132L4937.1,132L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"
            ></path>
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(244, 120, 48, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
              fill="url(#sw-gradient-1)"
              d="M0,132L34.3,132C68.6,132,137,132,206,113.7C274.3,95,343,59,411,51.3C480,44,549,66,617,73.3C685.7,81,754,73,823,62.3C891.4,51,960,37,1029,33C1097.1,29,1166,37,1234,55C1302.9,73,1371,103,1440,124.7C1508.6,147,1577,161,1646,150.3C1714.3,139,1783,103,1851,80.7C1920,59,1989,51,2057,47.7C2125.7,44,2194,44,2263,36.7C2331.4,29,2400,15,2469,7.3C2537.1,0,2606,0,2674,7.3C2742.9,15,2811,29,2880,51.3C2948.6,73,3017,103,3086,110C3154.3,117,3223,103,3291,99C3360,95,3429,103,3497,113.7C3565.7,125,3634,139,3703,146.7C3771.4,154,3840,154,3909,157.7C3977.1,161,4046,169,4114,161.3C4182.9,154,4251,132,4320,102.7C4388.6,73,4457,37,4526,33C4594.3,29,4663,59,4731,88C4800,117,4869,147,4903,161.3L4937.1,176L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"
            ></path>
          </svg>
          <div className="bg">
            <div className="main showcase" />
            <div className="section-header">
              <h1 className="section-heading about-heading">About Us</h1>
              <div className="underline"></div>
            </div>
            <ul className="cards container">
              <li className="cards_item">
                <div className="card-me">
                  <div className="card_image">
                    <img src={model} />
                  </div>
                  <div className="card_content box2">
                    <h2 className="card_title">Lorem, ipsum dolor.</h2>
                    <p className="card_text"></p>
                    <div className="links">
                      <i class="fab fa-linkedin-in fa-2x"></i>
                      <i class="fab fa-github fa-2x"></i>
                      <i class="fas fa-envelope-open fa-2x"></i>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card-me">
                  <div className="card_image">
                    <img src={model} />
                  </div>
                  <div className="card_content box2">
                    <h2 className="card_title">Lorem, ipsum dolor.</h2>
                    <p className="card_text"></p>
                    <div className="links">
                      <i class="fab fa-linkedin-in fa-2x"></i>
                      <i class="fab fa-github fa-2x"></i>
                      <i class="fas fa-envelope-open fa-2x"></i>
                    </div>
                  </div>
                </div>
              </li>

              <li className="cards_item">
                <div className="card-me">
                  <div className="card_image">
                    <img src={model} />
                  </div>
                  <div className="card_content box2">
                    <h2 className="card_title">Lorem, ipsum dolor.</h2>
                    <p className="card_text"></p>
                    <div className="links">
                      <i class="fab fa-linkedin-in fa-2x"></i>
                      <i class="fab fa-github fa-2x"></i>
                      <i class="fas fa-envelope-open fa-2x"></i>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card-me">
                  <div className="card_image">
                    <img src={model} />
                  </div>
                  <div className="card_content box2">
                    <h2 className="card_title">Lorem, ipsum dolor.</h2>
                    <p className="card_text"></p>
                    <div className="links">
                      <i class="fab fa-linkedin-in fa-2x"></i>
                      <i class="fab fa-github fa-2x"></i>
                      <i class="fas fa-envelope-open fa-2x"></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="links container">
          <ul className="social-media-links">
            <li>
              <a href="#">
                <i className="fab fa-discord fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-at fa-2x"></i>
              </a>
            </li>
          </ul>
          <p>FarmHUB &copy;, 2021 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LandingScreen;
