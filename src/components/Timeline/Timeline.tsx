import {
  FaArrowsSpin,
  FaBullseye,
  FaDollarSign,
  FaLightbulb,
  FaMagnifyingGlassChart,
} from 'react-icons/fa6';
import Line from './Line';
import { useEventListener } from 'usehooks-ts';
import { useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Step from './Step';
import React from 'react';

export type ICard = {
  title: string;
  description?: string;
};

export type IStep = {
  state: number;
  icon: React.ReactNode;
};

export const cards: ICard[] = [
  {
    title: 'Estudo e análise de mercado',
    description:
      'Esta é a etapa inicial. Começamos com uma análise profunda dos pilares fundamentais para o sucesso do seu negócio, a partir do estudo minucioso do produto, identificando seus pontos fortes e áreas de aprimoramento. Em seguida, examinamos as tendências do mercado para revelar oportunidades estratégicas. Definimos os canais de venda mais adequados para maximizar o alcance e, por fim, compreendemos o público-alvo para criar abordagens direcionadas',
  },
  {
    title: 'Definição da estratégia',
    description:
      'Nesta etapa crucial do projeto, iniciamos com a criação das soluções inovadoras, seguida da definição dos primeiros objetivos estratégicos. Em seguida, selecionamos cuidadosamente as métricas de desempenho para garantir uma avaliação precisa e bem-sucedida.',
  },
  {
    title: 'Prática das ações',
    description:
      'Na etapa de prática das ações, o foco está na implementação e experimentação das soluções propostas anteriormente. A implementação das soluções busca efetivar as mudanças e melhorias necessárias, alinhadas com a visão e metas do projeto. A experimentação das soluções é essencial para aprender com as ações realizadas. É uma oportunidade de coletar dados, avaliar resultados e ajustar o curso, caso necessário. Em suma, a prática das ações é o momento de transformar planos em realidade, buscando o progresso e a excelência.',
  },
  {
    title: 'Serviço em curso',
    description:
      'Ao alcançar a etapa final, colhemos os frutos da implementação estratégica. O tráfego e leads qualificados impulsionam o reconhecimento do branding, fidelidade dos clientes e crescimento sustentável das receitas. Essa jornada de sucesso reflete nosso compromisso com a excelência e dedicação em cada passo',
  },
  {
    title: 'Retorno do Investimento',
  },
];

const steps: IStep[] = [
  { state: 0, icon: <FaMagnifyingGlassChart /> },
  { state: 1, icon: <FaLightbulb /> },
  { state: 2, icon: <FaArrowsSpin /> },
  { state: 3, icon: <FaBullseye /> },
  { state: 4, icon: <FaDollarSign /> },
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollY } = useScroll();
  const [scrolledHeight, setScrolledHeight] = useState(0);

  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);

  const [activeIndex, setActiveIndex] = useState(-1);

  const height = 1600;

  // const rootMargin = 600;

  useEffect(() => {
    setScrolledHeight((height * activeIndex) / (steps.length - 1));
  }, [activeIndex]);

  useEffect(() => {
    const y1 = scrollY.get() + ref.current?.getBoundingClientRect().y;
    const y2 =
      scrollY.get() +
      ref.current?.getBoundingClientRect().y +
      ref.current?.getBoundingClientRect().height;
    // const scrolledHeight = scrollY.get() - y1 + rootMargin;

    setY1(y1);
    setY2(y2);

    // if (scrollY.get() < y1 - rootMargin) return setScrolledHeight(0);

    // if (scrollY.get() > y2 - rootMargin) return setScrolledHeight(height);

    // if (scrollY.get() >= y1 - rootMargin && scrollY.get() <= y2 - rootMargin)
    //   return setScrolledHeight(scrolledHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEventListener('scroll', () => {
    console.log((height * activeIndex) / (steps.length - 1));
    //   const scrolledHeight = scrollY.get() - y1 + rootMargin;

    //   if (scrollY.get() > y2 - rootMargin + 300) setActiveIndex(4);

    //   if (scrollY.get() < y1 - rootMargin) return setScrolledHeight(0);

    //   if (scrollY.get() > y2 - rootMargin) return setScrolledHeight(height);

    //   if (scrollY.get() >= y1 - rootMargin && scrollY.get() <= y2 - rootMargin)
    //     return setScrolledHeight(scrolledHeight);
  });

  return (
    <div ref={ref} style={{ height: height }} className='relative h-[2000px]'>
      <Line height={height} scrolledHeight={scrolledHeight} />

      {steps.map((step, idx) => (
        <div
          style={{ top: (100 * idx) / (steps.length - 1) + '%' }}
          className='absolute left-1/2 -translate-x-1/2 -translate-y-[40px]'
        >
          <Step
            step={step}
            isCurrent={idx === activeIndex}
            isActive={idx <= activeIndex}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
