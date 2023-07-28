import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const SocialMediaIcons = () => {
  return (
    <ul className='icons'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'anticipate', delay: 0.05 }}
      >
        <li>
          <a href=''>
            <FaInstagram />
          </a>
        </li>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'anticipate', delay: 0.15 }}
      >
        <li>
          <a href=''>
            <FaFacebookF />
          </a>
        </li>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'anticipate', delay: 0.25 }}
      >
        <li>
          <a href=''>
            <FaLinkedin />
          </a>
        </li>
      </motion.div>
    </ul>
  );
};

export default SocialMediaIcons;
