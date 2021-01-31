import { useState, useEffect } from 'react'
import alanBtn  from '@alan-ai/alan-sdk-web'

import { NewsCards } from './components'

const alanKey = 'a59849212bfc741cb6fe82405a3b4d642e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [ newsArticles, setNewsArticles ] = useState([]);
  useEffect(() => {
    // This will display the Alan button on the page
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) =>{
        // switch or if can be used here
          if(command === 'newsHeadlines'){
            setNewsArticles(articles);
          }
      }
    })
  }, []);

  return (
    <div className="App">
     <h1>App Works!!..........</h1>
     <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
