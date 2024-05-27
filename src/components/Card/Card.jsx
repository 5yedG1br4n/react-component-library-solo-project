import React from "react";
import CardIcon from "../../assets/card_icon.svg";

export default function Card({ cardTitle }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const checkHovered = isHovered ? "card card-hovered" : "card";

  return (
    <div
      className={checkHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={CardIcon}
        alt="A minimalist icon representing uploading to the cloud"
        className="card-icon"
      />
      <h2 className="card-title">{cardTitle}</h2>
      <p className="card-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        pariatur officia quidem praesentium velit, necessitatibus optio quam
        assumenda vitae dignissimos nisi dolor illo aspernatur. Dicta amet
        similique quis distinctio blanditiis.
      </p>
    </div>
  );
}
