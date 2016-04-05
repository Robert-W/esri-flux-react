/* @flow */
import React, {
  Component
} from 'react';

type HeaderPropTypes = {
  title: string
};

export default class Header extends Component {

  props: HeaderPropTypes;

  render () {
    const {title} = this.props;

    return (
      <header className='app-header'>
        <div className='app-header__content inner'>
          <h2 className='app-header__title'>{title}</h2>
        </div>
      </header>
    );
  }

}
