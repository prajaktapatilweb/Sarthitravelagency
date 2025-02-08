import React, { useState } from "react";

const MentorCardItem = ({ item }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const description = item.description ? String(item.description) : "";
  const truncatedText = description.slice(0, 160); // First 230 characters

  return (
    <div className="mentor-card">
      <div className="mentor-card-inner">
        <img src={item.photo} alt={item.name} className="mentor-img" />
        <h3 className="mentor-name">{item.name}</h3>
        <p className="mentor-description">
          {isReadMore ? description : `${truncatedText}...`}
          <span onClick={toggleReadMore} className="toggle-read-more">
            {isReadMore ? " Show Less" : " Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MentorCardItem;
