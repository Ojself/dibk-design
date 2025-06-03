import Container from './Container';
import style from './Footer.module.scss';

export interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className={style.footer}>
      <Container>{children}</Container>
    </footer>
  );
};

export default Footer;
