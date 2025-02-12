export default function SpecificationBlockClassic({ icon, title, description }) {
  return (
    <div className="cursor-default bg-gradient-to-br from-[#1C1C1C] to-[#050505] opacity-100 hover:opacity-75 transition-all ease-in-out duration-300 border border-[#2B2B2B] rounded-xl p-7 w-[280px] h-[252px]">
      <div className="p-3 w-11 h-11 bg-black/50 rounded-xl">
        <img src={icon} alt={title} />
      </div>
      <div>
        <div className="font-semibold mt-2">{title}</div>
        <div className="mt-2 text-[#f5f5f5d8]">{description}</div>
      </div>
    </div>
  )
}
