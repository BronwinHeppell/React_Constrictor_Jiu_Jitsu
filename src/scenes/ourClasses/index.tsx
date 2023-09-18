import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Jiu-Jitsu Fundamental Classes",
    description:
      "Fundamental Brazilian Jiu-Jitsu (BJJ) classes are designed to teach participants the basic techniques and principles of this grappling martial art. In these classes, participants will learn how to apply various chokes, joint locks, and submissions, as well as defensive techniques and strategies.Fundamental classes in BJJ are an excellent way for beginners to learn the essential techniques and principles of this martial art",
    image: image1,
  },
  {
    name: "Jiu-Jitsu Intermediate Classes",
    description:
      "Intermediate Brazilian Jiu-Jitsu (BJJ) classes are designed for students who have a good understanding of the basic techniques and principles of BJJ and are ready to take their skills to the next level. These classes typically focus on more advanced techniques, strategies, and concepts, as well as increased drilling and sparring to improve proficiency and build stamina.",
    image: image2,
  },
  {
    name: "Muay Thai Classes",
    description:
      "In Muay Thai classes, participants learn basic techniques, including stance, footwork, and striking techniques such as the jab, cross, hook, uppercut, roundhouse kick, and clinch work. They also learn how to defend themselves against various attacks and develop their agility, speed, and endurance through drills and sparring sessions.",
    image: image3,
  },
  {
    name: "Functional Fitness Classes",
    description:
      "Functional fitness classes are designed to improve overall fitness and wellness by focusing on functional movements and exercises that mimic real-life activities and movements. These classes typically involve a combination of strength training, endurance exercises, and mobility work, as well as guidance on nutrition and lifestyle habits to support optimal health.",
    image: image4,
  },
  {
    name: "Beginner Basic Fitness Classes",
    description:
      "Beginner basic fitness classes are designed for individuals who are new to fitness or have limited experience with exercise. These classes focus on introducing participants to basic exercises and movements that target major muscle groups and improve cardiovascular health and endurance.",
    image: image5,
  },
  {
    name: "Intense Workout Classes",
    description:
      "Intense workout classes are designed to challenge participants with high-intensity exercises and intervals that target multiple muscle groups and improve cardiovascular health and endurance. These classes can incorporate a variety of equipment, including weights, resistance bands, and cardio machines. In intense workout classes, participants perform exercises that are designed to push them to their limits.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full  py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            We offer a variety of fitness classes to help you achieve your health and fitness goals. Our Muay Thai classes are perfect for those looking for a high-intensity workout that combines striking techniques with cardio and endurance training. Our Brazilian Jiu-Jitsu classes focus on grappling and ground fighting techniques, emphasizing leverage and technique over brute strength. And our functional fitness classes are designed to improve overall physical health and fitness, with workouts that mimic real-life movements and build strength, flexibility, and endurance. Our certified instructors are experienced and passionate about helping you reach your full potential, no matter your fitness level. Come join us and start your fitness journey today!







            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
