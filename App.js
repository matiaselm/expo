import React from 'react';
import {MediaProvider} from "./contexts/MediaContext";
import Navigator from "./navigators/Navigator";

/*
The main application that loads the content inside Navigator to show
 */

const App = () => {
  return (
      <MediaProvider>
          <Navigator/>
      </MediaProvider>
    );
};

export default App;
