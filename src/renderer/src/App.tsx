import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/globals.css'

export function App() {
  return (
    <div className="flex h-screen w-screnn bg-flotes-900 text-flotes-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center text-flotes-400">
          Selecione ou crie um documento
        </main>
      </div>
    </div>
  )
}
