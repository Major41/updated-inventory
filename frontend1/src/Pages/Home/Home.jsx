import { motion } from 'framer-motion';
import img from '../../images/logimage.png';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

export default function LandingPage() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-800 text-white">
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
            <p className="text-lg mt-4 text-gray-200">
              Welcome to the next era in robotic inventory management. RoboLend
              is your strategic partner, providing a comprehensive solution for
              tracking, managing, and optimizing your robotic assets.
            </p>
            <p className="text-lg mt-4 text-gray-200">
              Welcome to the next era in robotic inventory management. RoboLend
              is your strategic partner, providing a comprehensive solution for
              tracking, managing, and optimizing your robotic assets.
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
            className="w-[90%] mx-auto mb-8"
          >
          <section className="mt-8">
              <h2 className="text-3xl font-semibold">Lab Items Categories</h2>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <p className="p-2 bg-blue-950 text-center rounded-md">DEMO</p>
                <p className="p-2 bg-blue-950 text-center rounded-md">LEVERS</p>
                <p className="p-2 bg-blue-950 text-center rounded-md">
                  ROBOTICS
                </p>
                <p className="p-2 bg-blue-950 text-center rounded-md">RELAYS</p>
                <p className="p-2 bg-blue-950 text-center rounded-md">
                  SENSORS
                </p>
                <p className="p-2 bg-blue-950 text-center rounded-md">MOTORS</p>
                <p className="p-2 bg-blue-950 text-center rounded-md">
                  CIRCUITS
                </p>
                <p className="p-2 bg-blue-950 text-center rounded-md">
                  ACTUATORS
                </p>
                <p className="p-2 bg-blue-950 text-center rounded-md">
                  GRIPPERS
                </p>
              </div>
            </section>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}
