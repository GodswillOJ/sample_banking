"use client"; // Ensure this component is rendered only on the client

interface HeaderBoxProps {
  title: string;
  subtext: string;
  backgroundImage?: string; // Optional prop with a default background image
}

const HeaderBox = ({ title, subtext, backgroundImage = "/default-bg.jpg" }: HeaderBoxProps) => {
  return (
    <div
      className="header-box"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
        minHeight: "600px", // Minimum height for the header box
      }}
    >
      <div className="hero_text">
        <h1 className="header-box-title">
          {title}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
      </div>
    </div>
  );
};

export default HeaderBox;
