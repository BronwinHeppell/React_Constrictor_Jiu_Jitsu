import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HeartIcon, FireIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Anyone can Join!",
    description:
      "No Matter your Size, Age or Gender,fitness can improve mental health by reducing stress and anxiety, boosting mood, and improving cognitive function. It can also promote better sleep, which is important for overall health and well-being.",
  },
  {
    icon: <FireIcon className="h-6 w-6" />,
    title: "Diverse Classes",
    description:
      "Diverse fitness classes such as Muay Thai, BJJ (Brazilian Jiu-Jitsu), and functional fitness offer unique training experiences that cater to a range of fitness levels, goals, and interests.",
  },
  {
    icon: <TrophyIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Having experienced coaches for each of these diverse fitness classes is crucial to ensuring that participants receive proper instruction and guidance to achieve their fitness goals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6  py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST FITNESS</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:content-abstractwaves before:absolute before:-left-20 before:-top-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    LETS GET <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              We are dedicated to helping you become the best version of yourself. Whether you're just starting out or you're a seasoned athlete, our facilities and trainers are here to help you achieve your fitness goals. We believe that fitness is not just about looking good, but about feeling great and living a healthier, happier life. That's why we're committed to providing you with the tools, resources, and support you need to succeed. So come on in, work hard, and see what you're capable of. You got this!
              </p>
              <p className="mb-5">
              We are committed to creating a welcoming and supportive community that encourages you to be your best self. Our coaches are passionate about helping you achieve your goals, and our members are friendly, motivating, and always ready to lend a helping hand.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
