import { SocialIcon } from 'react-social-icons';
import Container from './container';
import ISocialLinks from '../types/socialLinks';

type Props = {
  socialLinks: ISocialLinks;
};

const Footer = ({ socialLinks: { github, linkedIn, twitter } }: Props) => {
  return (
    <footer>
      <Container>
        <div className="py-8 flex justify-center">
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url={github}
            target="_blank"
            rel="noopener noreferrer"
            network="github"
            bgColor="#FFFFFF"
          />
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            network="linkedin"
            bgColor="#FFFFFF"
          />
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url={twitter}
            target="_blank"
            rel="noopener noreferrer"
            network="twitter"
            bgColor="#FFFFFF"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
