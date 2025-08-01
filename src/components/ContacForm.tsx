import type React from "react"

import { useState } from "react"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    canton: "",
    descripcion: "",
    referencias: [""],
    imagen: "",
  })
  const [subiendo, setSubiendo] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleReferenciaChange = (index: number, value: string) => {
    const updated = [...form.referencias]
    updated[index] = value
    setForm({ ...form, referencias: updated })
  }

  const addReferencia = () => {
    setForm({ ...form, referencias: [...form.referencias, ""] })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      alert("La imagen no debe superar los 2MB.")
      return
    }

    const formData = new FormData()
    formData.append("image", file)
    setSubiendo(true)

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (!data.success || !data.data || !data.data.url) {
        console.error("Respuesta inesperada de ImgBB:", data)
        alert("Error al obtener la URL de la imagen. Intente nuevamente.")
        setSubiendo(false)
        return
      }

      const imageUrl = data.data.url
      setForm((prev) => ({ ...prev, imagen: imageUrl }))
      alert("Imagen cargada correctamente.")
    } catch (error) {
      console.error("Error al subir imagen:", error)
      alert("Hubo un error al subir la imagen. Intente nuevamente.")
    }
    setSubiendo(false)
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (subiendo) {
      alert("Por favor, espera que la imagen termine de subir.")
      return
    }
    if (!form.imagen) {
      alert("Por favor, sube una imagen antes de enviar.")
      return
    }

    const payload = {
      nombre: form.nombre || "(sin nombre)",
      categoria: form.categoria || "(sin categoría)",
      canton: form.canton || "(sin cantón)",
      descripcion: form.descripcion || "(sin descripción)",
      referencias: form.referencias.filter(Boolean).join(", ") || "(sin referencias)",
      imagen: form.imagen || "",
    }

    console.log("Payload enviado:", payload)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then(() => {
        alert("¡Formulario enviado correctamente!")
        setForm({
          nombre: "",
          categoria: "",
          canton: "",
          descripcion: "",
          referencias: [""],
          imagen: "",
        })
      })
      .catch((err) => {
        console.error("Error al enviar:", err)
        alert("Ocurrió un error al enviar el formulario.")
      })
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Fondo de imagen completo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://i.ibb.co/3Y8569m0/IMG-20250720-WA0042.jpg')",
        }}
      />

      {/* Overlay con gradientes complejos */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 via-transparent to-slate-800/30" />

      {/* Efectos ondulantes animados */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 0%, transparent 50%),
               radial-gradient(circle at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 50%),
               radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Efectos de cristal flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/3 backdrop-blur-sm rounded-full border border-white/8"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/4 backdrop-blur-sm rounded-full border border-white/12"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Texto */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Únete a
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-100 bg-clip-text text-transparent">
                Nosotros
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl leading-relaxed text-gray-200 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Forma parte de una comunidad vibrante donde tu talento y creatividad pueden brillar.
            </motion.p>

            {/* Elementos decorativos */}
            <motion.div
              className="flex space-x-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="w-4 h-4 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-gray-200/60 rounded-full animate-pulse delay-300"></div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full animate-pulse delay-700"></div>
            </motion.div>
          </motion.div>

          {/* Lado derecho - Formulario con efecto cristal extremo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Contenedor principal con múltiples capas de cristal */}
            <div className="relative">
              {/* Capa de fondo con blur intenso */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-3xl transform rotate-1 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl transform -rotate-1" />

              {/* Contenedor principal */}
              <motion.div
                className="relative bg-white/20 backdrop-blur-3xl rounded-3xl p-8 border border-white/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Efectos de brillo interno */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-3xl" />
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-3xl" />

                <div className="mb-8">
                  <motion.h2
                    className="text-3xl font-bold text-white drop-shadow-lg mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Completa tu registro
                  </motion.h2>
                  <motion.p
                    className="text-gray-100 drop-shadow-md font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Todos los campos son obligatorios
                  </motion.p>
                </div>

                <form onSubmit={sendEmail} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Nombre del artista/grupo"
                      className="w-full p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg placeholder-white/80 text-white font-medium drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/30 focus:placeholder-white/90 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <select
                      name="categoria"
                      value={form.categoria}
                      onChange={handleChange}
                      className="p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg text-white font-medium drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/30 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50"
                      required
                    >
                      <option value="" className="text-gray-800">
                        Categoría
                      </option>
                      <option value="artesanos" className="text-gray-800">
                        Artesanos
                      </option>
                      <option value="eventos" className="text-gray-800">
                        Eventos
                      </option>
                      <option value="baile" className="text-gray-800">
                        Baile
                      </option>
                      <option value="haciendas" className="text-gray-800">
                        Haciendas
                      </option>
                      <option value="retahilero" className="text-gray-800">
                        Retahilero
                      </option>
                    </select>
                    <select
                      name="canton"
                      value={form.canton}
                      onChange={handleChange}
                      className="p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg text-white font-medium drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/30 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50"
                      required
                    >
                      <option value="" className="text-gray-800">
                        Cantón
                      </option>
                      <option value="Liberia" className="text-gray-800">
                        Liberia
                      </option>
                      <option value="Santa Cruz" className="text-gray-800">
                        Santa Cruz
                      </option>
                      <option value="Carrillo" className="text-gray-800">
                        Carrillo
                      </option>
                      <option value="Nicoya" className="text-gray-800">
                        Nicoya
                      </option>
                      <option value="La Cruz" className="text-gray-800">
                        La Cruz
                      </option>
                      <option value="Nandayure" className="text-gray-800">
                        Nandayure
                      </option>
                      <option value="Bagaces" className="text-gray-800">
                        Bagaces
                      </option>
                      <option value="Cañas" className="text-gray-800">
                        Cañas
                      </option>
                      <option value="Hojancha" className="text-gray-800">
                        Hojancha
                      </option>
                      <option value="Tilarán" className="text-gray-800">
                        Tilarán
                      </option>
                      <option value="Abangares" className="text-gray-800">
                        Abangares
                      </option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      placeholder="Describe tu actividad o grupo"
                      className="w-full p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg resize-none h-28 placeholder-white/80 text-white font-medium drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/30 focus:placeholder-white/90 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50"
                      required
                    />
                  </motion.div>

                  {form.referencias.map((ref, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    >
                      <input
                        type="url"
                        placeholder={`Referencia ${index + 1}`}
                        value={ref}
                        onChange={(e) => handleReferenciaChange(index, e.target.value)}
                        className="w-full p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg placeholder-white/80 text-white font-medium drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/30 focus:placeholder-white/90 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50"
                        required={index === 0}
                      />
                    </motion.div>
                  ))}

                  <motion.button
                    type="button"
                    onClick={addReferencia}
                    className="text-gray-100 hover:text-white text-sm flex items-center gap-2 group transition-all duration-300 font-medium drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40 border border-white/20">
                      +
                    </span>
                    Agregar referencia
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full p-4 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/30 file:backdrop-blur-sm file:text-white file:font-medium hover:file:shadow-lg hover:file:bg-white/40 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:border-white/50 text-white font-medium drop-shadow-sm"
                      required
                    />
                  </motion.div>

                  {subiendo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-white font-medium drop-shadow-md"
                    >
                      <div className="w-4 h-4 border-2 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
                      <p>Subiendo imagen...</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-white/30 hover:border-white/40 drop-shadow-lg"
                    disabled={subiendo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Enviar Solicitud</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
