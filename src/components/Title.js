import PropTypes from "prop-types";

function Title ({name, type}) {
    const className = type === "bold" ? "bold" : "normal";

    return <h1 className={className}>{name}</h1>;
}

Title.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(["bold", "normal"]),
  };

export default Title;