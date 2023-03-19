import React, { useState } from 'react';
import { Topics } from '../components/topic/Topics';
import { Posts } from '../components/posts/Posts';
import { Head } from '../components/headBanner/Head';
import { NavBarMenu } from '../components/NavBarMenu';

function App() {

  const [navBarDisplayStyle, setNavBarDisplayStyle] = useState('none')

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
        <Head navBarDisplayStyle={navBarDisplayStyle} setNavBarDisplayStyle={setNavBarDisplayStyle} />
        <NavBarMenu navBarDisplayStyle={navBarDisplayStyle} setNavBarDisplayStyle={setNavBarDisplayStyle}/>
        <div className='fullDisplay'>
          <Posts />
          <Topics />
        </div>


      
    </div>
  );
}

export default App;
