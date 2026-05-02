"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import styles from "./FizzyButton.module.scss";

export function FizzyButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    // The SCSS animation lasts about 5 seconds (tick animation is at 4.7s)
    setTimeout(() => {
      // Trigger download
      const link = document.createElement("a");
      link.href = "/Kamran_Hasan_CV.pdf";
      link.download = "Kamran_Hasan_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset button state slightly after download triggers
      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    }, 5000);
  };

  return (
    <div className={`${styles.container} ${isClicked ? styles.is_clicked : ""}`}>
      <div className={styles.button_inner} onClick={handleClick}>
        <i className={styles.l}>
          <Download size={20} />
        </i>
        <span className={styles.t}>Download CV</span>
        <span>
          <i className={styles.tick}>
            <Check size={24} strokeWidth={3} />
          </i>
        </span>
        <div className={styles.b_l_quad}>
          {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className={styles.button_spots}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
