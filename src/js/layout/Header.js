import React from 'react';

export class Header extends React.Component {

  render () {
    return (
      <header className='app-header'>
        <div className='app-title'>{this.props.title}</div>
        <div className='app-subtitle'>{this.props.subtitle}</div>
      </header>
    );
  }

}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};
