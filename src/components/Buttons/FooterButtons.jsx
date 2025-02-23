export default function FooterButtons({ icon }) {
  return (
    <button className="opacity-100 hover:opacity-70 ease-in-out duration-200 w-[48px] h-[48px] bg-[#151515] border border-[#2A2A2A] rounded-[100px] flex items-center justify-center">
      <img src={icon} alt="icon" />
    </button>
  )
}