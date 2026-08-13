// Central copy dictionary for the site. Add a new language by adding a key
// here and to LANGS in src/i18n/langs.ts.

export const translations = {
  en: {
    htmlLang: 'en',
    locale: 'en-US',
    meta: {
      title: 'Quantum Computing and Sustainability: Hackathon and Workshop — Quantum Computing Applications for Food Security and Environmental Protection',
      description:
        'Nov 30–Dec 2, 2026 at CBPF, Rio de Janeiro. A regional hackathon exploring quantum computing for food security and environmental protection, part of the Open Quantum Institute global initiative.',
    },
    nav: {
      purpose: 'Purpose',
      programme: 'Programme',
      partners: 'Partners',
      join: 'Join the event',
    },
    hero: {
      eyebrow: 'International Science & Technology',
      titleBefore: 'Quantum Computing for ',
      titleAccent: 'Food Security',
      titleAfter: ' & Environmental Protection',
      subtitle:
        'A regional hackathon bringing together experts and innovators to explore how quantum computing can solve critical real-world challenges — part of a global initiative led by the Open Quantum Institute (OQI).',
      dates: 'Nov 30 – Dec 2, 2026',
      location: 'CBPF, Rio de Janeiro, Brazil',
      ctaPrimary: 'Join the event',
      ctaSecondary: 'See the programme',
    },
    purpose: {
      eyebrow: 'Purpose',
      title: 'Real-world quantum, real-world impact',
      textBefore: 'The event aims to strengthen capacities and foster collaboration around strategic initiatives at the intersection of ',
      textStrong: 'quantum computing and real-world applications',
      textAfter:
        '. It brings together experts from diverse backgrounds to advance concrete actions addressing challenges in food security and environmental protection.',
      stats: {
        countdownLabel: 'Countdown to kickoff',
        days: 'Days',
        hours: 'Hours',
        min: 'Min',
        sec: 'Sec',
        hostedLabel: 'Hosted at',
        hostedValue: 'CBPF / Rio · BR',
        programmeLabel: 'Programme',
        programmeValue: '3 days / Nov 30 → Dec 02',
      },
    },
    programme: {
      eyebrow: 'Programme',
      title: 'Three days, one mission',
      subtitle:
        'The hackathon runs alongside a workshop and preparatory school, from mid-November through the closing ceremony on December 2nd.',
      note: 'Times marked TBA are still being finalized and will be confirmed closer to the event.',
      days: [
        {
          id: 'nov30',
          tabLabel: 'Nov 30 — Kickoff',
          date: '2026-11-30',
          dayLabel: 'Kickoff',
          items: [
            { time: 'TBA', title: 'Inspirational keynote (selected speakers from the workshop)', tag: 'TALK' },
            { time: 'TBA', title: 'Start of the hackathon — participants begin working in teams', tag: 'HACKATHON' },
          ],
        },
        {
          id: 'dec01',
          tabLabel: 'Dec 01 — Build',
          date: '2026-12-01',
          dayLabel: 'Build',
          items: [
            { time: 'TBA', title: 'Joint opening activities with the workshop', tag: 'WORKSHOP' },
            { time: 'TBA', title: 'Inspirational keynote by workshop participants', tag: 'TALK' },
            { time: 'TBA', title: 'Hackathon teams present and discuss projects with experts for feedback', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Hackathon continues', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Talks and roundtables on quantum computing and its applications', tag: 'TALK' },
            { time: 'TBA', title: 'Dinner and networking', tag: 'SOCIAL' },
          ],
        },
        {
          id: 'dec02',
          tabLabel: 'Dec 02 — Pitch',
          date: '2026-12-02',
          dayLabel: 'Pitch',
          items: [
            { time: 'TBA', title: 'Hackathon continues', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Final pitch preparation and rehearsals', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Interaction sessions between participants', tag: 'SOCIAL' },
            { time: 'TBA', title: 'Closing ceremony', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Institutional remarks', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Final project presentations (hackathon)', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Workshop outcomes panel', tag: 'TALK' },
            { time: 'TBA', title: 'Jury deliberation (in parallel)', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Award ceremony', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Networking cocktail', tag: 'SOCIAL' },
          ],
        },
      ],
    },
    participate: {
      eyebrow: 'Participation',
      title: 'Join us in Rio de Janeiro',
      text: 'Take part in the Quantum Computing Applications for Food Security and Environmental Protection Regional Event, hosted at CBPF.',
      ctaDisabled: 'Applications opening soon',
      subscribe: 'Subscribe here',
      location: 'CBPF, Rio de Janeiro, Brazil',
      locationFull: 'Centro Brasileiro de Pesquisas Físicas (CBPF) — Rua Dr. Xavier Sigaud, 150, Urca, Rio de Janeiro, RJ, Brazil',
    },
    partners: {
      eyebrow: 'Partners',
      title: 'Made possible together',
      intro:
        'This regional event is made possible through the collaboration of the Centro Brasileiro de Pesquisas Físicas (CBPF), Open Quantum Institute (OQI), ICTP-SAIFR, Venturus Centro de Inovação Tecnológica and the Inter-American Development Bank (IDB), along with key partners supporting quantum development.',
      items: [
        { id: 'cbpf', tag: 'HOST', name: 'CBPF', subtitle: 'Centro Brasileiro de Pesquisas Físicas', logo: '/logos/cbpf.png' },
        { id: 'oqi', tag: 'LEAD', name: 'OQI', subtitle: 'Open Quantum Institute', logo: '/logos/oqi.png' },
        { id: 'ictp', tag: 'PARTNER', name: 'ICTP-SAIFR', subtitle: 'International Centre for Theoretical Physics', logo: '/logos/ictp-saifr.png' },
        { id: 'venturus', tag: 'PARTNER', name: 'Venturus', subtitle: 'Centro de Inovação Tecnológica', logo: '' },
        { id: 'idb', tag: 'PARTNER', name: 'IDB', subtitle: 'Inter-American Development Bank', logo: '' },
      ],
    },
    footer: {
      tagline: 'Quantum Computing Applications for Food Security and Environmental Protection — CBPF, Rio de Janeiro',
      credit: 'Hosted by CBPF · An Open Quantum Institute regional initiative · Organized with Venturus',
    },
  },
  pt: {
    htmlLang: 'pt-BR',
    locale: 'pt-BR',
    meta: {
      title: 'Quantum Computing and Sustainability: Hackathon and Workshop — Computação Quântica Aplicada à Segurança Alimentar e Proteção Ambiental',
      description:
        '30 de novembro a 2 de dezembro de 2026, no CBPF, Rio de Janeiro. Um hackathon regional que explora computação quântica para segurança alimentar e proteção ambiental, parte da iniciativa global do Open Quantum Institute.',
    },
    nav: {
      purpose: 'Propósito',
      programme: 'Programação',
      partners: 'Parceiros',
      join: 'Participe do evento',
    },
    hero: {
      eyebrow: 'Ciência e Tecnologia Internacional',
      titleBefore: 'Computação Quântica para ',
      titleAccent: 'Segurança Alimentar',
      titleAfter: ' e Proteção Ambiental',
      subtitle:
        'Um hackathon regional que reúne especialistas e inovadores para explorar como a computação quântica pode resolver desafios reais críticos — parte de uma iniciativa global liderada pelo Open Quantum Institute (OQI).',
      dates: '30 nov – 02 dez, 2026',
      location: 'CBPF, Rio de Janeiro, Brasil',
      ctaPrimary: 'Participe do evento',
      ctaSecondary: 'Ver a programação',
    },
    purpose: {
      eyebrow: 'Propósito',
      title: 'Quântica no mundo real, impacto no mundo real',
      textBefore: 'O evento tem como objetivo fortalecer capacidades e fomentar a colaboração em torno de iniciativas estratégicas na interseção entre ',
      textStrong: 'computação quântica e aplicações do mundo real',
      textAfter:
        '. Ele reúne especialistas de diferentes áreas para promover ações concretas voltadas aos desafios de segurança alimentar e proteção ambiental.',
      stats: {
        countdownLabel: 'Contagem para o início',
        days: 'Dias',
        hours: 'Horas',
        min: 'Min',
        sec: 'Seg',
        hostedLabel: 'Sediado em',
        hostedValue: 'CBPF / Rio · BR',
        programmeLabel: 'Programação',
        programmeValue: '3 dias / 30 nov → 02 dez',
      },
    },
    programme: {
      eyebrow: 'Programação',
      title: 'Três dias, uma missão',
      subtitle:
        'O hackathon acontece junto a um workshop e a uma escola preparatória, de meados de novembro até a cerimônia de encerramento em 2 de dezembro.',
      note: 'Os horários marcados como TBA ainda estão sendo finalizados e serão confirmados mais perto do evento.',
      days: [
        {
          id: 'nov30',
          tabLabel: '30 nov — Abertura',
          date: '2026-11-30',
          dayLabel: 'Abertura',
          items: [
            { time: 'TBA', title: 'Palestra inspiradora (palestrantes selecionados do workshop)', tag: 'TALK' },
            { time: 'TBA', title: 'Início do hackathon — as equipes começam a trabalhar', tag: 'HACKATHON' },
          ],
        },
        {
          id: 'dec01',
          tabLabel: '01 dez — Construção',
          date: '2026-12-01',
          dayLabel: 'Construção',
          items: [
            { time: 'TBA', title: 'Atividades de abertura conjunta com o workshop', tag: 'WORKSHOP' },
            { time: 'TBA', title: 'Palestra inspiradora com participantes do workshop', tag: 'TALK' },
            { time: 'TBA', title: 'Equipes do hackathon apresentam e discutem projetos com especialistas', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Hackathon continua', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Palestras e mesas-redondas sobre computação quântica e suas aplicações', tag: 'TALK' },
            { time: 'TBA', title: 'Jantar e networking', tag: 'SOCIAL' },
          ],
        },
        {
          id: 'dec02',
          tabLabel: '02 dez — Pitch',
          date: '2026-12-02',
          dayLabel: 'Pitch',
          items: [
            { time: 'TBA', title: 'Hackathon continua', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Preparação e ensaios para o pitch final', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Sessões de interação entre participantes', tag: 'SOCIAL' },
            { time: 'TBA', title: 'Cerimônia de encerramento', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Discursos institucionais', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Apresentações finais dos projetos (hackathon)', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Painel de resultados do workshop', tag: 'TALK' },
            { time: 'TBA', title: 'Deliberação do júri (em paralelo)', tag: 'HACKATHON' },
            { time: 'TBA', title: 'Cerimônia de premiação', tag: 'CEREMONY' },
            { time: 'TBA', title: 'Coquetel de networking', tag: 'SOCIAL' },
          ],
        },
      ],
    },
    participate: {
      eyebrow: 'Participação',
      title: 'Venha para o Rio de Janeiro',
      text: 'Participe do Quantum Computing Applications for Food Security and Environmental Protection Regional Event, sediado no CBPF.',
      subscribe: 'Inscreva-se aqui',
      ctaDisabled: 'Inscrições em breve',
      location: 'CBPF, Rio de Janeiro, Brasil',
      locationFull: 'Centro Brasileiro de Pesquisas Físicas (CBPF) — Rua Dr. Xavier Sigaud, 150, Urca, Rio de Janeiro, RJ, Brasil',
    },
    partners: {
      eyebrow: 'Parceiros',
      title: 'Realização conjunta',
      intro:
        'Este evento regional é realizado através da colaboração entre o Centro Brasileiro de Pesquisas Físicas (CBPF), Open Quantum Institute (OQI), ICTP-SAIFR, Venturus Centro de Inovação Tecnológica e o Banco Interamericano de Desenvolvimento (BID/IDB), além de parceiros-chave que apoiam o desenvolvimento quântico.',
      items: [
        { id: 'cbpf', tag: 'ANFITRIÃO', name: 'CBPF', subtitle: 'Centro Brasileiro de Pesquisas Físicas', logo: '/logos/cbpf.png' },
        { id: 'oqi', tag: 'LÍDER', name: 'OQI', subtitle: 'Open Quantum Institute', logo: '/logos/oqi.png' },
        { id: 'ictp', tag: 'PARCEIRO', name: 'ICTP-SAIFR', subtitle: 'International Centre for Theoretical Physics', logo: '/logos/ictp-saifr.png' },
        { id: 'venturus', tag: 'PARCEIRO', name: 'Venturus', subtitle: 'Centro de Inovação Tecnológica', logo: '' },
        { id: 'idb', tag: 'PARCEIRO', name: 'IDB', subtitle: 'Banco Interamericano de Desenvolvimento', logo: '' },
      ],
    },
    footer: {
      tagline: 'Computação Quântica Aplicada à Segurança Alimentar e Proteção Ambiental — CBPF, Rio de Janeiro',
      credit: 'Sediado pelo CBPF · Uma iniciativa regional do Open Quantum Institute · Organizado com a Venturus',
    },
  },
} as const;

export type Lang = keyof typeof translations;
export const LANGS: Lang[] = ['en', 'pt'];

// Kickoff instant used by the countdown — Nov 30, 2026, 09:00 America/Sao_Paulo (UTC-3).
export const KICKOFF_ISO = '2026-11-30T09:00:00-03:00';

// Google Maps link for the CBPF venue, provided by the organizers.
export const MAPS_URL = 'https://maps.app.goo.gl/XZivmuofgwaCZuai8';
