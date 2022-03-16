// Dependencies
import React, {Component} from 'react';

// Stylesheets
import style from './Container.module.scss';

class Container extends Component {

  render() {
    return (<div className={style.container}>
      {this.props.children}
    </div>)
  }
}

export default Container;
