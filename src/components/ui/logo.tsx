import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Logo = () => {
  return (

      <svg
        className="site-branding__logo--full"
        // viewBox="0 0 157 62"
        width="157"
        height="62"
        role="img"
        aria-labelledby="sc-logo"
      >
        <title id="sc-logo">Standard Chartered</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-green"
          d="M28.9647 13.5687C29.8849 12.9703 30.8283 12.553 32.1542 12.5527C35.1952 12.5521 37.6604 15.0148 37.6604 18.052C37.6604 21.0891 35.1952 23.5511 32.1542 23.5511C30.8691 23.5511 29.894 23.1327 28.9647 22.5351L22.0721 18.052L28.9647 13.5687ZM4.21638 43.8988L30.0411 60.6903C32.5584 62.3193 36.0669 61.7306 37.7741 59.0631C39.4362 56.4661 38.7301 53.0234 36.1448 51.34L2.62803 29.5401C2.62803 29.5401 -0.805552 33.7103 0.23567 38.5748C0.977282 42.0396 4.21638 43.8988 4.21638 43.8988Z"
          fill="#38D200"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-blue"
          d="M1.62342 18.0384C1.62342 23.556 5.57937 25.9416 5.57937 25.9416L36.1454 45.8223C36.1454 45.8223 39.5348 41.7708 38.5313 36.8528C37.8121 33.328 34.1628 31.2393 34.1628 31.2393L13.888 18.0521L25.7872 10.3133C28.3749 8.63344 29.109 5.17668 27.4269 2.59245C25.7449 0.00822502 22.2839 -0.725041 19.6961 0.954835L5.57779 10.184C5.57779 10.184 1.62342 12.5393 1.62342 18.0384ZM8.69567 60.5642C7.77544 61.1626 6.8321 61.5799 5.50624 61.5802C2.46521 61.5809 0 59.1182 0 56.081C0 53.0439 2.46521 50.5818 5.50624 50.5818C6.79141 50.5818 7.76651 51.0003 8.69567 51.5978L15.5883 56.0809L8.69567 60.5642Z"
          fill="#0473EA"
        ></path>
        <text
          className="logo-lettering"
          x="45"
          y="15"
          fontFamily="SC Prosper Sans, sans-serif"
          fontSize="16"
          fill="#fff"
        >
          <tspan x="55" dy="16">
            standard
          </tspan>
          <tspan x="55" dy="18">
            chartered
          </tspan>
        </text>
      </svg>
    
  );
};

const Logo4 = () => {
  return (
    
      <svg
        className="site-branding__logo--full"
        // viewBox="0 0 157 62"
        width="157"
        height="62"
        role="img"
        aria-labelledby="sc-logo"
      >
        <title id="sc-logo">Standard Chartered</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-green"
          d="M28.9647 13.5687C29.8849 12.9703 30.8283 12.553 32.1542 12.5527C35.1952 12.5521 37.6604 15.0148 37.6604 18.052C37.6604 21.0891 35.1952 23.5511 32.1542 23.5511C30.8691 23.5511 29.894 23.1327 28.9647 22.5351L22.0721 18.052L28.9647 13.5687ZM4.21638 43.8988L30.0411 60.6903C32.5584 62.3193 36.0669 61.7306 37.7741 59.0631C39.4362 56.4661 38.7301 53.0234 36.1448 51.34L2.62803 29.5401C2.62803 29.5401 -0.805552 33.7103 0.23567 38.5748C0.977282 42.0396 4.21638 43.8988 4.21638 43.8988Z"
          fill="#38D200"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-blue"
          d="M1.62342 18.0384C1.62342 23.556 5.57937 25.9416 5.57937 25.9416L36.1454 45.8223C36.1454 45.8223 39.5348 41.7708 38.5313 36.8528C37.8121 33.328 34.1628 31.2393 34.1628 31.2393L13.888 18.0521L25.7872 10.3133C28.3749 8.63344 29.109 5.17668 27.4269 2.59245C25.7449 0.00822502 22.2839 -0.725041 19.6961 0.954835L5.57779 10.184C5.57779 10.184 1.62342 12.5393 1.62342 18.0384ZM8.69567 60.5642C7.77544 61.1626 6.8321 61.5799 5.50624 61.5802C2.46521 61.5809 0 59.1182 0 56.081C0 53.0439 2.46521 50.5818 5.50624 50.5818C6.79141 50.5818 7.76651 51.0003 8.69567 51.5978L15.5883 56.0809L8.69567 60.5642Z"
          fill="#0473EA"
        ></path>
        <text
          className="logo-lettering"
          x="45"
          y="15"
          fontFamily="SC Prosper Sans, sans-serif"
          fontSize="16"
          fill="#000"
        >
          <tspan x="55" dy="16">
            standard
          </tspan>
          <tspan x="55" dy="18">
            chartered
          </tspan>
        </text>
      </svg>
    
  );
};

const Logo2 = () => {
  return (
              <svg className="site-branding__logo--full" 
                    // viewBox="0 0 157 62" 
                    width="157"
                    height="62"
                    role="img" 
                    aria-labelledby="sc-logo" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                <title id="sc-logo">Standard Chartered</title>
                <path fillRule="evenodd" clipRule="evenodd" className="icon-part-green" d="M28.9647 13.5687C29.8849 12.9703 30.8283 12.553 32.1542 12.5527C35.1952 12.5521 37.6604 15.0148 37.6604 18.052C37.6604 21.0891 35.1952 23.5511 32.1542 23.5511C30.8691 23.5511 29.894 23.1327 28.9647 22.5351L22.0721 18.052L28.9647 13.5687ZM4.21638 43.8988L30.0411 60.6903C32.5584 62.3193 36.0669 61.7306 37.7741 59.0631C39.4362 56.4661 38.7301 53.0234 36.1448 51.34L2.62803 29.5401C2.62803 29.5401 -0.805552 33.7103 0.23567 38.5748C0.977282 42.0396 4.21638 43.8988 4.21638 43.8988Z" fill="#38D200"></path>
                <path fillRule="evenodd" clipRule="evenodd" className="icon-part-blue" d="M1.62342 18.0384C1.62342 23.556 5.57937 25.9416 5.57937 25.9416L36.1454 45.8223C36.1454 45.8223 39.5348 41.7708 38.5313 36.8528C37.8121 33.328 34.1628 31.2393 34.1628 31.2393L13.888 18.0521L25.7872 10.3133C28.3749 8.63344 29.109 5.17668 27.4269 2.59245C25.7449 0.00822502 22.2839 -0.725041 19.6961 0.954835L5.57779 10.184C5.57779 10.184 1.62342 12.5393 1.62342 18.0384ZM8.69567 60.5642C7.77544 61.1626 6.8321 61.5799 5.50624 61.5802C2.46521 61.5809 0 59.1182 0 56.081C0 53.0439 2.46521 50.5818 5.50624 50.5818C6.79141 50.5818 7.76651 51.0003 8.69567 51.5978L15.5883 56.0809L8.69567 60.5642Z" fill="#0473EA"></path>
                <text
                  className="logo-lettering2"
                  x="45"
                  y="15"
                  fontFamily="SC Prosper Sans', sans-serif"
                  fontSize="16"
                  fill="#000000"
                >
                  <tspan x="55" dy="16">standard</tspan>
                  <tspan x="55" dy="18">chartered</tspan>
                </text>
              </svg>
  )
}

const Logo3 = () => {
  return (
              <svg className="signin-branding__logo--full" 
                    // viewBox="0 0 157 62"
                    width="157"
                    height="62" 
                    role="img" 
                    aria-labelledby="sc-logo"
                    >
                <title id="sc-logo">Standard Chartered</title>
                <path fillRule="evenodd" clipRule="evenodd" className="icon-part-green" d="M28.9647 13.5687C29.8849 12.9703 30.8283 12.553 32.1542 12.5527C35.1952 12.5521 37.6604 15.0148 37.6604 18.052C37.6604 21.0891 35.1952 23.5511 32.1542 23.5511C30.8691 23.5511 29.894 23.1327 28.9647 22.5351L22.0721 18.052L28.9647 13.5687ZM4.21638 43.8988L30.0411 60.6903C32.5584 62.3193 36.0669 61.7306 37.7741 59.0631C39.4362 56.4661 38.7301 53.0234 36.1448 51.34L2.62803 29.5401C2.62803 29.5401 -0.805552 33.7103 0.23567 38.5748C0.977282 42.0396 4.21638 43.8988 4.21638 43.8988Z" fill="#38D200"></path>
                <path fillRule="evenodd" clipRule="evenodd" className="icon-part-blue" d="M1.62342 18.0384C1.62342 23.556 5.57937 25.9416 5.57937 25.9416L36.1454 45.8223C36.1454 45.8223 39.5348 41.7708 38.5313 36.8528C37.8121 33.328 34.1628 31.2393 34.1628 31.2393L13.888 18.0521L25.7872 10.3133C28.3749 8.63344 29.109 5.17668 27.4269 2.59245C25.7449 0.00822502 22.2839 -0.725041 19.6961 0.954835L5.57779 10.184C5.57779 10.184 1.62342 12.5393 1.62342 18.0384ZM8.69567 60.5642C7.77544 61.1626 6.8321 61.5799 5.50624 61.5802C2.46521 61.5809 0 59.1182 0 56.081C0 53.0439 2.46521 50.5818 5.50624 50.5818C6.79141 50.5818 7.76651 51.0003 8.69567 51.5978L15.5883 56.0809L8.69567 60.5642Z" fill="#0473EA"></path>
                <text
                  className="logo-lettering2"
                  x="45"
                  y="15"
                  fontFamily="SC Prosper Sans', sans-serif"
                  fontSize="18"
                  fill="#fff"
                >
                  <tspan x="55" dy="16">standard</tspan>
                  <tspan x="55" dy="18">chartered</tspan>
                </text>
              </svg>
  )
}


const BOX2 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Monitoring",
      content:
        "Banking systems and transactions are continuously monitored by our security team to detect and respond to any threats.",
    },
    {
      title: "Securing your account",
      content:
        "We give you the option to configure SMS and email alerts to stay informed when important account information changes or transactions are made.",
    },
    {
      title: "Using strong passwords",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Two-Factor Authentication (2FA) is required for adding new payees, completing bill payments, or performing fund transfers.",
    },
    {
      title: "Protecting your mobile device",
      content:
        "Get tips on securing your mobile devices from unauthorized access and malicious software.",
    },
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images0.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Online security</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

const BOX3 = () => {

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container" style={{
          display: "block"
        }}>
            <Box sx={{
              display: "flex"
            }}>
              <div className="image-container">
                <Image src="/icons/images0.png" alt="Online security" width={400} height={300} className="image" />
              </div>
              <div className="text-container">
                <h2>We are here to protect you:</h2>
                <p>Scammers use a variety of tactics to trick potential victims into revealing sensitive information, making fraudulent payments or allowing unauthorised access to accounts.</p>
              </div>
            </Box>
            <Box sx={{
              display: "block"
            }}>
              <div className="text-container">
                <h2>Reporting social engineering threats</h2>
                <p>If you have received a suspicious email (phishing), call (vishing) or text message (smishing) targeting you as a customer of Standard Chartered, or identified a suspicious social media account claiming to represent Standard Chartered, report it to us immediately by emailing phishing@sc.com. In your report, please share as many details as you can to help us with our investigations e.g., sender details, attachments, screenshots and links.</p>
              </div>

              <div className="text-container">
                <h2>Reporting other security concerns</h2>
                <p>For anything urgent (e.g., to report a suspected fraudulent transaction), call us immediately using the number on the back of your bank card. To report any security issues related to our online services and applications, please contact security@sc.com.</p>
              </div>
            </Box>
          </div>
      </ul>
    </Box>
  );
};

const BOX4 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Enable personal firewalls",
      content:
        "Personal firewalls will ensure the right data goes to the right places and keep unwanted connections from accessing your personal information.",
    },
    {
      title: "Turn on password protection",
      content:
        "Lock your machine when you’re stepping away from your computer or configure a password-protected screensaver to be activated after a few minutes of inactivity.",
    },
    {
      title: "Install anti-virus and malware scanning",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Anti-virus/malware protection solutions are key in securing your computer from online threats. Always update your anti-virus software with the latest version.",
    }
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/image9.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Keeping your security safe</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

const BOX5 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Monitoring",
      content:
        "Banking systems and transactions are continuously monitored by our security team to detect and respond to any threats.",
    },
    {
      title: "Securing your account",
      content:
        "We give you the option to configure SMS and email alerts to stay informed when important account information changes or transactions are made.",
    },
    {
      title: "Using strong passwords",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Two-Factor Authentication (2FA) is required for adding new payees, completing bill payments, or performing fund transfers.",
    },
    {
      title: "Protecting your mobile device",
      content:
        "Get tips on securing your mobile devices from unauthorized access and malicious software.",
    },
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images8.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Online security</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export { Logo2, Logo, Logo3, Logo4, BOX2, BOX3, BOX4, BOX5 }