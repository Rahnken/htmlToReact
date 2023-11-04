import React from "react";
import styles from "./card.module.css";

interface CardProps {
  name: string;
  nickName?: string;
  background: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  name,
  background,
  imageUrl,
  nickName,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay50}>
        <h3>{name}</h3>
        {nickName && <h3>{nickName}</h3>}
      </div>
      <img className={styles.cardImage} src={imageUrl} alt={name} />
      <div className={styles.cardBody}>
        <p>{background}</p>
      </div>
    </div>
  );
};

export default Card;
