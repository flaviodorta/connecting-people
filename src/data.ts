import developmentSVG from './assets/services/development.svg';
import uiSVG from './assets/services/ui.svg';
import uxSVG from './assets/services/ux.svg';
import midiaSocialSVG from './assets/services/midia-social.svg';
import seoSVG from './assets/services/seo.svg';
import emailMarketingSVG from './assets/services/marketing-de-email.svg';
import { ICard } from './types';

export const pages = ['sobre', 'serviços', 'projetos', 'contato'];

export const services = [
  {
    src: developmentSVG,
    alt: 'Desenvolvimento Web',
    content: 'Seu site moderno e adaptável a todos dispositivos e plataformas.',
  },
  {
    src: uiSVG,
    alt: 'Interface de Usuário',
    content:
      'Desenvolvemos interfaces que cativam e encantam os usuários,proporcionando uma experiência única e memorável.',
  },
  {
    src: uxSVG,
    alt: 'Experiência de Usuário',
    content: 'Seu produto com um design intuitivo, funcional e envolvente.',
  },
  {
    src: emailMarketingSVG,
    alt: 'Email Marketing',
    content:
      'Alcance seus clientes de forma eficaz e impulsione o sucesso do seu negócio com campanhas de e-mails funcionais.',
  },
  {
    src: midiaSocialSVG,
    alt: 'Mídia Social',
    content:
      'Aumente sua presença online e impulsione seus negócios com nosso serviço de marketing de mídia social.',
  },
  {
    src: seoSVG,
    alt: 'Optimização de SEO',
    content:
      'Melhoramos a estrutura do seu site, a velocidade de carregamento e a indexação para garantir uma experiência perfeita aos visitantes e aos motores de busca.',
  },
];

export const texts = [
  'Marketing Digital',
  'Desenvolvimento Web',
  'Design Criativo',
];

export const projects = [
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

export const cards: ICard[] = [
  {
    title: 'Estudo e análise de mercado',
    description:
      'Esta é a etapa inicial. Começamos com uma análise profunda dos pilares fundamentais para o sucesso do seu negócio, a partir do estudo minucioso do produto, identificando seus pontos fortes e áreas de aprimoramento. Em seguida, examinamos as tendências do mercado para revelar oportunidades estratégicas. Definimos os canais de venda mais adequados para maximizar o alcance e, por fim, compreendemos o público-alvo para criar abordagens direcionadas.',
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
      'Ao alcançar a etapa final, colhemos os frutos da implementação estratégica. O tráfego e leads qualificados impulsionam o reconhecimento do branding, fidelidade dos clientes e crescimento sustentável das receitas. Essa jornada de sucesso reflete nosso compromisso com a excelência e dedicação em cada passo.',
  },
  {
    title: 'Retorno do Investimento',
  },
];
