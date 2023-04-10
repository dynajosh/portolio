import React from "react";
import PropTypes from "prop-types";

const Pill = ({ text, bgColor }) => {
  const bgStyle = bgColor.startsWith("#")
    ? { backgroundColor: bgColor }
    : { backgroundColor: `bg-${bgColor}` };

  return (
    <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mr-2 mb-2" style={bgStyle}>
      {text}
    </div>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Pill;