import React, {
  PropTypes
} from 'react';

const stylesheet = {
  loader: {
    background: 'rgba(220, 220, 220, 0.75)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0
  },
  spinner: {
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    height: '50px',
    width: '50px',
    left: '50%',
    top: '50%'
  },
  foreground: {
    animation: 'loader 0.95s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite'
  }
};

/* This requires the following CSS to be loaded as well
@keyframes loader {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
*/

const Loader = (props) => {
  //- Apply the keyframe animation if active
  const foregroundStyles = props.active ? `animation: ${stylesheet.foreground.animation}` : '';
  //- Show the loader if active
  stylesheet.loader.display = props.active ? 'block' : 'none';
  return (
    <div style={stylesheet.loader}>
      <div style={stylesheet.spinner}>
        <svg width="50" height="50" dangerouslySetInnerHTML={{
          __html: `<g transform="translate(25,25) rotate(-90)">
                    <path d="M0,25A25,25 0 1,1 0,-25A25,25 0 1,1 0,25M0,20A20,20 0 1,0 0,-20A20,20 0 1,0 0,20Z" style="fill: rgb(255, 255, 255); stroke: rgb(204, 204, 204);"></path>
                    <path style="${foregroundStyles}" d="M1.5308084989341915e-15,-25A25,25 0 0,1 25,0L20,0A20,20 0 0,0 1.2246467991473533e-15,-20Z" style="fill: rgb(85, 85, 85);" transform="rotate(709.287459262793)"></path>
                  </g>`
        }} />
      </div>
    </div>
  );
};

Loader.propTypes = {
  active: PropTypes.bool.isRequired
};

export { Loader as default };
