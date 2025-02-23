export default function Accordion({ title, content, index, activeIndex, onAccordionClick }) {
  const isActive = index === activeIndex;

  return (
    <div className="w-full large:w-[696px] bg-gradient-to-tl from-[#050505] to-[#1C1C1C] p-[22px] rounded-[10px] border border-[#2B2B2B]" key={title}>
      <div className="accordion-title flex items-center justify-between" onClick={() => onAccordionClick(index)}>
        <div className="font-bold text-[18px]">{title}</div>
        <div className="cursor-pointer p-2 text-[20px]">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="w-full mt-5 text-[16px] opacity-70 large:w-[608px]">{content}</div>}
    </div>
  );
}
