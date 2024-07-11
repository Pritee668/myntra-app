
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyleFeed from './components/StyleFeed';
import SocialLookbook from './components/SocialLookBook';
import SocialChallenges from './components/SocialChallenges';
function App() {
  return (
    <div className="App">
      <SocialChallenges/>
     {/* <SocialLookbook/>
      <StyleFeed/> */}
    </div>
  );
}

export default App;
