import React from 'react'
import { motion } from 'framer-motion'

const datos = {
  habitantes: '354,154 (2022)',
  playas: 'Más de 70 playas reconocidas',
  actividades: 'Surf, avistamiento de tortugas, cabalgatas, senderismo, fiestas típicas, gastronomía, tours de hacienda, deportes acuáticos y más.',
  fauna: 'Monos, iguanas, venados, tortugas marinas, aves exóticas, cocodrilos, jaguares.',
  flora: 'Guanacaste (árbol nacional), ceibas, pochotes, manglares, bosques secos y tropicales.',
}

const EstoEsGuanacaste: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-[#f9fafb] py-16 px-4 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto descriptivo */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1c7ab9] drop-shadow">Esto es Guanacaste</h2>
          <p className="text-lg mb-4 text-gray-700">
            Guanacaste es la provincia del sol, la cultura y la naturaleza exuberante de Costa Rica. Con una población de <b>{datos.habitantes}</b>, es famosa por sus <b>{datos.playas}</b> de arena dorada y aguas cristalinas.
          </p>
          <ul className="mb-4 text-gray-700">
            <li><b>¿Qué se puede hacer?</b> {datos.actividades}</li>
            <li><b>Fauna:</b> {datos.fauna}</li>
            <li><b>Flora:</b> {datos.flora}</li>
          </ul>
          <p className="text-base text-gray-500 mt-2">Un destino donde la tradición y la biodiversidad se encuentran bajo el sol del Pacífico.</p>
        </motion.div>
        {/* Imagen del mapa con interacción */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="/images/mapa2.png"
            alt="Mapa de Costa Rica resaltando Guanacaste"
            className="w-full max-w-md h-auto drop-shadow-xl rounded-xl border border-[#e0e7ef] bg-white p-4 cursor-pointer"
            whileHover={{ scale: 1.07, rotate: 2, boxShadow: '0 8px 32px #1c7ab9aa' }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EstoEsGuanacaste 