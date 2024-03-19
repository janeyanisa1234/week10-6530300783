
import './App.css';
import Posts from './Post';
import Home from './home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">All posts</Link></li>
          <li><Link to="/posts/1">Detail item 1</Link></li>
          <li><Link to="/post?fname=tehapuet&lname=weerawat">Tehapuet</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Posts} />
        <Route path="/posts/:id" component={Posts} />
        {/* Add more routes as needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
