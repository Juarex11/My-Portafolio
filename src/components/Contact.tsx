function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-8">Contáctame</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Tu nombre" className="w-full px-4 py-2 border rounded-lg" required />
        <input type="email" placeholder="Tu correo" className="w-full px-4 py-2 border rounded-lg" required />
        <textarea placeholder="Tu mensaje" className="w-full px-4 py-2 border rounded-lg h-32" required></textarea>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-full transition">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact

