// Dependencies
import React from 'react';

// Components
import Container from './Container';

// Stylesheets
import style from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (<footer className={style.footer}>
      <Container>
        {this.props.children}
      </Container>
    </footer>)
  }
}

export default Footer;
