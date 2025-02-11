import { motion } from 'framer-motion';
import img from '../../images/logimage.png';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ItemList from '../../Components/Items/Items';

export default function LandingPage() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-700">
        {/* Hero Section */}
        <header className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-16 gap-8 lg:pt-24">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Revolutionize Your Robotic
              <br />
              <span className="text-blue-300 lg:text-5xl">
                Assets with RoboLend
              </span>
            </h1>
            <p className="text-lg mt-4 text-gray-700">
              Welcome to the next era in robotic inventory management. RoboLend
              is your strategic partner, providing a comprehensive solution for
              tracking, managing, and optimizing your robotic assets.
            </p>
            <p className="text-lg mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid alias dolores provident quos nostrum distinctio modi odio quia nobis!
            </p>
            
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <img
              src={img}
              alt="Lab Equipment"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </header>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8"
          >
            <ItemList/>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}
