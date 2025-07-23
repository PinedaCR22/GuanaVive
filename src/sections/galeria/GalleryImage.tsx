interface Props {
  src: string
  alt: string
}

export default function GalleryImage({ src, alt }: Props) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md break-inside-avoid group relative transition-transform duration-300 hover:scale-[1.03]">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <span className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-red-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {alt}
      </span>
    </div>
  )
}
