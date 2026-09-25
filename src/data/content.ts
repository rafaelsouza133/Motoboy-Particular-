export const LINKS = {
  whatsapp: 'https://w.app/905ula',
  instagram: 'https://www.instagram.com/filhopaij?stkn=M2xlcHl4aGFoOGRz&utm_source=qr',
};

export const IMAGES = {
  // Provided real reference photographs
  img1: 'https://i.postimg.cc/FRHkm0yw/E2130BB5-3623-407E-8275-194F7854D55F.jpg',
  img2: 'https://i.postimg.cc/xdHtMDB2/76783D31-64ED-4F8C-8701-8844509E7430.jpg', // Foto 2 (Foto de perfil da Bio)
  img3: 'https://i.postimg.cc/RZJRxxSc/56C4A286-FD2D-45F3-A6F8-53C9DD202FCF.jpg',
  img4: 'https://i.postimg.cc/9FKdpgdG/CD54635B-7149-431C-8D2D-2B97C628ABA3.jpg',
  img5: 'https://i.postimg.cc/nzh9Zq40/5185FBD8-1ECE-4C7C-9E9F-26079ADBD0BE.jpg',
  img6: 'https://i.postimg.cc/8Cz4jfNQ/a208eb5c-3a9c-433d-a058-35c69b9cb65e.jpg',
};

// Foto 2 configurada como foto de perfil principal da Bio
export const BIO_PROFILE_PHOTO = IMAGES.img2;

export const GALLERY_ITEMS = [
  {
    id: 1,
    url: IMAGES.img1,
    alt: 'Motoboy Particular perfil oficial',
    caption: 'Prontidão e profissionalismo para sua demanda',
    tag: 'Perfil Oficial',
  },
  {
    id: 2,
    url: IMAGES.img2,
    alt: 'Motoboy Particular pronto para coletas e entregas',
    caption: 'Equipamento e atenção dedicada',
    tag: 'Na Estrada',
  },
  {
    id: 3,
    url: IMAGES.img3,
    alt: 'Agilidade e cuidado no trânsito urbano',
    caption: 'Pontualidade e cuidado com sua encomenda',
    tag: 'Rotina Urbana',
  },
  {
    id: 4,
    url: IMAGES.img4,
    alt: 'Atendimento exclusivo de motoboy particular',
    caption: 'Comunicação transparente do início ao fim',
    tag: 'Confiança',
  },
  {
    id: 5,
    url: IMAGES.img5,
    alt: 'Segurança e eficiência em duas rodas',
    caption: 'Transporte ágil e responsável de encomendas',
    tag: 'Segurança',
  },
  {
    id: 6,
    url: IMAGES.img6,
    alt: 'Compromisso com cada trajeto e destino',
    caption: 'Compromisso e responsabilidade em cada trajeto',
    tag: 'Dedicação',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  type: 'entregas' | 'coletas' | 'documentos' | 'compras' | 'particular';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'entregas',
    title: 'ENTREGAS',
    description: 'Entregas rápidas e cuidadosas com total responsabilidade.',
    badge: 'Prioridade & Cuidado',
    type: 'entregas',
  },
  {
    id: 'coletas',
    title: 'COLETAS',
    description: 'Coleta e transporte de pequenos volumes com agilidade no ponto de origem.',
    badge: 'Pequenos Volumes',
    type: 'coletas',
  },
  {
    id: 'documentos',
    title: 'DOCUMENTOS',
    description: 'Transporte de documentos e encomendas com total sigilo e pontualidade.',
    badge: 'Sigilo & Segurança',
    type: 'documentos',
  },
  {
    id: 'compras',
    title: 'COMPRAS',
    description: 'Retirada e entrega de produtos para facilitar a sua rotina diária.',
    badge: 'Praticidade Total',
    type: 'compras',
  },
  {
    id: 'particular',
    title: 'SERVIÇO PARTICULAR',
    description: 'Atendimento personalizado conforme a necessidade específica do cliente.',
    badge: 'Sob Demanda VIP',
    type: 'particular',
  },
];

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'AGILIDADE',
    description: 'Atendimento pensado para facilitar sua rotina com rapidez e rota inteligente.',
    detail: 'Tempo otimizado sem perder o foco na segurança da sua encomenda.',
  },
  {
    number: '02',
    title: 'CONFIANÇA',
    description: 'Comunicação direta durante o serviço. Você fala comigo sem intermediários.',
    detail: 'Atualizações em tempo real pelo WhatsApp sobre o status da entrega.',
  },
  {
    number: '03',
    title: 'CUIDADO',
    description: 'Atenção com suas encomendas e documentos, transportados com máxima cautela.',
    detail: 'Acomodação segura para que tudo chegue em perfeito estado.',
  },
  {
    number: '04',
    title: 'PRATICIDADE',
    description: 'Você solicita o serviço de maneira rápida pelo WhatsApp sem burocracia.',
    detail: 'Basta uma mensagem para agendar ou chamar de imediato.',
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'CHAME NO WHATSAPP',
    description: 'Acesse o link direto e dê início ao contato de forma simples e imediata.',
  },
  {
    step: '02',
    title: 'ENVIE OS DETALHES DO SERVIÇO',
    description: 'Informe os endereços de coleta, destino e características da encomenda.',
  },
  {
    step: '03',
    title: 'COMBINAMOS A COLETA E A ENTREGA',
    description: 'Acertamos os horários e o trajeto é iniciado com acompanhamento contínuo.',
  },
];
