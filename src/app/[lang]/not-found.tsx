import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-amber-600">Página no encontrada</h1>
      <p className="mt-4 text-gray-600">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600">
        Volver al inicio
      </Link>
    </div>
  );
}
