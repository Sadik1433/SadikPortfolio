import "./CssFile/icons.css";

const Icons = ({
icon,
color,
name
}) => {
  return (
    <div
      className="tooltip-container"
      style={{
        "--icon-color": color,
      }}
    >
      <div className="tooltip">
        <span className="name">{name}</span>
      </div>
      <div className="text">
        <a className="icon">{icon}</a>
      </div>
    </div>
  );
};

export default Icons;
