import Logo from "@/assets/Logo.png";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width="100px" />
          <p className="my-5">
            In addition to the physical benefits, fitness can also improve
            mental health by reducing stress and anxiety, boosting mood, and
            improving cognitive function. It can also promote better sleep,
            which is important for overall health and well-being.
          </p>
          <p>© Constrictor All rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
          <p>WhatsApp</p>
          {/* MAYBE ADDING ICONS HERE WOULD LOOK BETTER */}
        </div>

        <div className="mt-6 flex items-center">
          <PhoneIcon className="mr-2 h-5 w-6" />
          <h4 className="text-md font-bold">
            Alternatively you can contact Darren Potts on: (076) 659 8703
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
