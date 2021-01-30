import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ChatEngine
          height="100vh"
          projectID=""
          userName=""
          userSecret=""
      />
    </div>
  );
}

export default App;
