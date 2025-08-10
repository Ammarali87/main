import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext.jsx'
//  in main chatProvider not context 
  
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </BrowserRouter>
)
