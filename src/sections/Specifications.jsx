import SpecificationBlockClassic from "@components/SpecificationBlock"
import WebDesign from "@assets/svg/web-design.svg"

export default function Specifications() {
  return (
    <section className="container">
      <div className="mt-40">
        <h2 className="font-[Raleway] font-bold text-6xl">What We do</h2>
        <div>
          <div className="mt-8 grid">
            <div className="block large:flex large:gap-8">
              <SpecificationBlockClassic
                icon={WebDesign}
                title="Web Design"
                description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience."
              ></SpecificationBlockClassic>
              <SpecificationBlockClassic
                icon={WebDesign}
                title="UI/UX Design"
                description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience."
              ></SpecificationBlockClassic>
              <SpecificationBlockClassic
                icon={WebDesign}
                title="Responsive Design"
                description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience."
              ></SpecificationBlockClassic>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}