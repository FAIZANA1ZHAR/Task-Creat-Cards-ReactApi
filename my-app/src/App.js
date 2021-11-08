import './App.css'
import Cards from './component/Card'

function App() {
  return (
    <div className='grid-container text-center'>
      <header style={{ color: '#007bff' }} className='header'>
        <div className='brand'>
          <h4> WELCOME USER </h4>
        </div>
      </header>

      <main className='main'>
        <div className='App'>
          <Cards />
        </div>
      </main>
      <footer style={{ color: '#007bff' }} className='footer'>
        <h4> All right reserved. </h4>
      </footer>
    </div>
  )
}

export default App
