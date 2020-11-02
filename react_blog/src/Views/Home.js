import React from 'react';
import HelloWorld from '../Components/HelloWorld';

function Home() {
  return (
    <React.Fragment>
      <h1 className="font-bold text-2xl mb-3">This is the home view.</h1>
      <HelloWorld name="Warsi" />
    </React.Fragment>
  );
}

export default Home;
