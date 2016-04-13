import React, {
  Component,
  PropTypes
} from 'react';

export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render () {
    const {title} = this.props;

    return (
      <header className='app-header'>
        <div className='app-header__content inner'>
          <h1 className='app-header__title'>{title}</h1>
        </div>
      </header>
    );
  }

}
