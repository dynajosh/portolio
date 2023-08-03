import React from "react";
import PropTypes from "prop-types";

const Pill = ({ text, imgSrc }) => {

  return (
    <div className="inline-flex items-center px-4 py-2 text-sm font-semibold mr-2 mb-2 border-2 border-black">
      <img src={imgSrc} className="inline mr-[15px]" width="30px" height="auto"/>{text}
    </div>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};


export const IndustryPill = ({ text }) => {

  return (
    <div className="inline-flex items-center px-4 py-2 text-sm font-semibold mr-2 mb-2 border-2 border-black">
      {text}
    </div>
  );
};


// IndustryPill.PropTypes = {
//   text: PropTypes.string.isRequired,
// }


export default Pill;