import { SocialIcon } from "react-social-icons";

const Footer = () => {
  // very simple footer
  return (
    <div className="bg-gray-200">
      <div
        className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap flex-col
        sm:flex-row
      "
      >
        <p className="text-gray-800 text-sm text-center sm:text-left my-auto">
          © 2021 Copyright
          <a className="text-gray-900 ml-1">InternNova</a>
        </p>
        <span
          className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
        >
          <a href="" className="text-gray-500">
            <SocialIcon
              network="twitter"
              url="https://twitter.com/InternNovaLabs"
              target="blank"
              bgColor="#455a64"
              fgColor="#fff"
            />
          </a>
          <a href="" className="mx-3 text-gray-500">
            <SocialIcon
              network="linkedin"
              url="http://linkedin.com/company/internnova"
              target="blank"
              bgColor="#455a64"
              fgColor="#fff"
            />
          </a>
          <a href="" className="text-gray-500">
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/internnova/"
              target="blank"
              bgColor="#455a64"
              fgColor="#fff"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
