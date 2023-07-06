import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Underline from './Underline';

const Projects = () => {
  const projects = [
    {
      img: 'bg-[url("./assets/projects/project-1.jpg")]',
      title: 'Mogney',
      description:
        'Um site para um serviço de pagamento por QR code sediado na Califórnia.',
    },
    {
      img: 'bg-[url("./assets/projects/project-2.jpg")]',
      title: 'Leviev Group',
      description:
        'Um site tecnologicamente avançado para uma empresa de design de interiores.',
    },
    {
      img: 'bg-[url("./assets/projects/project-3.webp")]',
      title: 'VitaKey',
      description:
        'Um site corporativo que criamos em 2019 para uma empresa de FoodTech de Washington.',
    },
    {
      img: 'bg-[url("./assets/projects/project-4.webp")]',
      title: 'Agapium',
      description:
        'Uma plataforma de comércio eletrônico para uma marca de moda feminina.',
    },
    {
      img: 'bg-[url("./assets/projects/project-5.jpg")]',
      title: 'Lincor',
      description:
        'Uma plataforma de comércio eletrônico para uma marca de relógios de pulso.',
    },
    {
      img: 'bg-[url("./assets/projects/project-6.jpg")]',
      title: 'Save Whales',
      description:
        'Um site institucional que promove as formas de ajudar a proteger as criaturas marinhas da extinção.',
    },
  ];

  return (
    <div
      id='projects'
      className='bg-white w-full min-h-[1000px] px-[4rem] py-[6rem] lg:py-[12rem] lg:px-[15rem]'
    >
      <h2
        className={twMerge([
          'relative text-[2.2rem] md:text-[4rem] font-bold mb-[6rem]',
          // 'before:content-[""] before:bg-gradient before:-bottom-2 before:absolute before:h-[3px] before:w-[48px]',
        ])}
      >
        Projetos que realizamos
        <motion.div
          initial={{ height: '100%' }}
          whileInView={{ height: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeIn' }}
          viewport={{ once: true }}
          className='w-full bg-white absolute top-0 left-0'
        />
        <Underline />
      </h2>

      <ul className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[192px_56px]'>
        {projects.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='group  max-w-[54rem] mx-auto'
          >
            <div className='overflow-hidden'>
              <a href='#'>
                <img
                  className={twMerge([
                    'w-full mx-auto min-h-[54rem] bg-cover bg-center hover:scale-[1.2] transition-all duration-[800ms] ease-[var(--ease)]',
                    p.img,
                  ])}
                />
              </a>
            </div>

            <div className='mt-[2rem]'>
              <h3 className='group-hover:text-secondary font-neutra transition-all duration-300 text-[2.4rem] mb-[0.6rem] font-bold'>
                {p.title}
              </h3>

              <p className='group-hover:text-secondary font-montserrat transition-all duration-300 text-[1.8rem] leading-[160%]'>
                {p.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
