import "./styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
export const Footer = () => {

    const handleTop = () => {
        const y = 0
        window.scroll({ top: y, behavior: 'smooth' });
    }

  return (
    <>
      <section className="contact-section section-to-pop">
        <div className="contact-container">
          <div className="contact-image">
            <img src="images/footer.jpg" alt="Typing on Laptop" />
          </div>
          <div className="contact-info">
            <h1>Reach out</h1>
            <div className="divider"></div>
            <h2>Rudraksh</h2>
            <p className="email">rudrakshmishra026@gmail.com</p>
            <p className="connect-text">CONNECT WITH ME</p>
            <div className="social-icons">
              <a className="footerIcon-outer" href="https://www.instagram.com/rudr_09_05/">
                <FaInstagram className="footerIcon" />
              </a>

              <a className="footerIcon-outer" href="https://www.linkedin.com/in/rudraksh-ab7a73293/">
                <AiOutlineLinkedin className="footerIcon" />
              </a>

              <a className="footerIcon-outer" href="https://github.com/Rudraksh026">
                <FiGithub className="footerIcon" />
              </a>
            </div>
            <div onClick={handleTop} className="back-btn">
              Back to Top
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
