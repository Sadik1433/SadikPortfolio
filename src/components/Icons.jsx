import "./CssFile/icons.css";

const Icons = ({
  icon,
  color,
  name,
  username,
  followers,
  profileBg = "#2a2b2f",
}) => {
  return (
    <div
      className="tooltip-container"
      style={{
        "--icon-color": color,
        "--profile-border": color,
        "--profile-bg": profileBg,
      }}
    >
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">{name[0]}</div>

            <div className="details">
              <div className="name">{name}</div>
              <div className="username">@{username}</div>
            </div>
          </div>

          <div className="about">{followers}+ Followers</div>
        </div>
      </div>

      <div className="text">
        <a className="icon">{icon}</a>
      </div>
    </div>
  );
};

export default Icons;
