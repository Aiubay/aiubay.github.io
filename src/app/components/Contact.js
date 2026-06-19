import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" className="card contact-card c12 r3 reveal">
      <div className="contact-container">
        <h3>Let&apos;s build something great together</h3>
        <p>
          Feel free to contact me for business or just to say hi. I&apos;m
          always open to new opportunities, side projects, and interesting collaborations.
        </p>

        <div className="c-links">
          <a className="c-link" href="https://www.linkedin.com/in/aiubay/" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
          <a className="c-link" href="https://github.com/Aiubay" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
          <a className="c-link" href="https://wa.me/6281231508232" target="_blank" rel="noopener noreferrer"><FaWhatsapp />WhatsApp</a>
          <a className="c-link" href="mailto:airjikubay@gmail.com"><FaEnvelope />Email</a>
        </div>
      </div>
    </div>
  );
}
