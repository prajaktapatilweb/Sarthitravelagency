import { Box } from "@mui/material";
import React, { useState } from "react";

const MentorCardItem = ({ item }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const description = item.description ? String(item.description) : "";
  const truncatedText = description.slice(0, 160); // First 230 characters

  return (
<Box sx={{pb:3}}>
    <div class="review-card">
    <div class="review-header">
        <h3 class="review-name">{item.name}</h3>
        <div class="review-stars">⭐⭐⭐⭐⭐</div>
    </div>
    <p class="review-text">
   
          {isReadMore ? description : `${truncatedText}...`}
          <span onClick={toggleReadMore} className="toggle-read-more">
            {isReadMore ? " Show Less" : " Read More"}
          </span>
       
    </p>
    <div class="review-footer">
        <span class="review-source">Google Review ⭐</span>
    </div>
</div>
</Box>
  );
};

export default MentorCardItem;
