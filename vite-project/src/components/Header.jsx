import { useEffect } from "react";
import "./styles/Header.css";
export const Header = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // stop observing after first show
          }
        });
      },
      {
        threshold: 0.1, // 60% in view
      }
    );

    document.querySelectorAll(".section-to-pop").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <div className="container-header section-to-pop visible">
        <div className="left-header">
          <img src="/images/header.jpg" alt="Laptop Work" />
        </div>
        <div className="right-header">
          <h1>Rudraksh</h1>
          <h2>Developer</h2>
        </div>
      </div>
    </>
  );
};
