"use client"; // Ensure this component is rendered only on the client

interface HeaderBoxProps {
  title: string;
  subtext: string;
  backgroundImage?: string; // Optional prop with a default background image
}

const HeaderBox = ({ title, subtext, backgroundImage = "/default-bg.jpg" }: HeaderBoxProps) => {
  return (
    <div
      className="header-box relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
        minHeight: "600px", // Minimum height for the header box
      }}
    >
      <div className="hero_text relative z-10 px-4">
        <h1 className="header-box-title text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="header-box-subtext text-lg md:text-xl">{subtext}</p>
      </div>
    </div>
  );
};

export default HeaderBox;
