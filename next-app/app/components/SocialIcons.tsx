import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      <div className="flex items-center size-40">
        <FontAwesomeIcon icon={faTwitter} className="text-lime-100 mx-2" />
        <FontAwesomeIcon icon={faFacebook} className="text-lime-100 mx-2" />
        <FontAwesomeIcon icon={faInstagram} className="text-lime-100 mx-2" />
        <FontAwesomeIcon icon={faLinkedin} className="text-lime-100 mx-2" />
        {/* Add more icons as needed */}
      </div>
    </>
  );
};

export default SocialIcons;
