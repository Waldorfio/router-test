import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <Link to='/Profile'>Profile Link</Link>
      <Link to='/Contact'>Contact Link</Link>
    </div>
  )
}

export default App