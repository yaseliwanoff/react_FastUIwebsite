import Input from "@components/Input/Input"
import ClassicButton from "@components/Buttons/ClassicButtons"
import Star from "@assets/png/star.png"
import Spline from "@assets/png/spline.png"

const inputsContent = [
  {
    name: "email",
    placeholder: "example@email.com",
    type: "email",
    area: false,
  },
  {
    name: "name",
    placeholder: "write your name",
    type: "text",
    area: false,
  },
  {
    name: "message",
    placeholder: "write your message...",
    type: "text",
    area: true,
  },
]

export default function Contacts() {
  return (
    <section className="font-[Raleway] font-normal pb-5">
      <div className="hidden middle:flex justify-between absolute w-full">
        <div className="flex items-end">
          <img className="mb-4" src={Star} alt="star" />
        </div>
        <div className="flex items-start">
          <img className="mt-4" src={Spline} alt="star" />
        </div>
      </div>
      <div className="container relative">
        <h2 className="h2__title font-bold flex justify-center text-center mt-[25px] large:mt-[150px]">Let’s Get in Touch</h2>
        <div className="flex flex-col gap-4 items-center w-[100%]">
          {inputsContent.map((item) => (
            <Input
              key={item.name}
              inputName={item.name}
              inputPlaceholder={item.placeholder}
              inputType={item.type}
              area={item.area}
            />
          ))}
          <div>
          <ClassicButton
            text="Get in Touch"
            textColor="#FFFFFF"
            fontWeight="500"
            backgroundColor="#4E47FF"
            paddingY="19px"
            borderRadius="10px"
            paddingX="21vw"
          />
          </div>
        </div>
      </div>
    </section>
  )
}