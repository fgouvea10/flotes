import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Routes } from './Routes'

import './styles/globals.css'

export function App() {
  return (
    <div className="flex h-screen w-screnn bg-flotes-900 text-flotes-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <Routes />
      </div>
    </div>
  )
}
