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
        <h2 className='app-header__title'>{title}</h2>
      </header>
    );
  }

}
