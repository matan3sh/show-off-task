import React from 'react';

const Loader = () => (
  <img
    src='https://thumbs.gfycat.com/SpecificCharmingLeafcutterant-size_restricted.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: 'auto',
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Loader;
