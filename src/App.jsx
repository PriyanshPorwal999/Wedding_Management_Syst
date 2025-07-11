import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar.jsx'
import Footer from './component/footer.jsx'
import Services from './component/Services/services.jsx'

function App() {
  return (
    <div className="app-container">
      <div className='navbar-container'>
          <Navbar />
      </div>
      <div className="main-content-container">
        <Services Title="Budget Management" Description="We handle it smoothly" Price={25}/>
        <Services Title="Time Management" Description="We handle it smoothly" Price={50}/>
        <Services Title="Fast Services" Description="We handle it smoothly" Price={500}/>
      </div>
      {/* &nbsp; */}
     {/* <main className="main-content">
      <div className="home-content">
            <img src="../maincel/images/imagecopy2.jpg" className="home-image" alt="Vite logo"></img>
            <h1>Hello</h1>
      </div>
     </main> */}

     {/* <div style={{ height: "1200px", background: "#f2f2f2" }}></div> */}
        
      <div className="footer-container">
        <Footer />
      </div>  
      
    </div>

  );
};







// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
