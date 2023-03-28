import { Link } from "react-router-dom";

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-flotes-400">
      Selecione ou crie um documento

      <Link to="/document">Acessar documento</Link>
    </main>
  );
}
