export type Language = 'en' | 'zh';

export type NavItem = {
  label: string;
  path: string;
};

export type StatItem = {
  value: string;
  label: string;
  description: string;
};

export type DestinationItem = {
  city: string;
  highlight: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type TrustPoint = {
  title: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
};

export type SiteContent = {
  languageLabel: string;
  languageSwitchLabel: string;
  skipToContent: string;
  nav: NavItem[];
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    assurance: string;
    stats: StatItem[];
    trustTitle: string;
    trustDescription: string;
    trustPoints: TrustPoint[];
    destinationsTitle: string;
    destinationsDescription: string;
    destinations: DestinationItem[];
    destinationsNote: string;
    servicesTitle: string;
    servicesDescription: string;
    services: ServiceItem[];
    testimonialsTitle: string;
    testimonials: TestimonialItem[];
    contactBandTitle: string;
    contactBandDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    storyTitle: string;
    storyBody: string[];
    strengthsTitle: string;
    strengths: TrustPoint[];
  };
  destinationsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    planningTitle: string;
    planningSteps: ServiceItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    methods: ContactMethod[];
    responseTitle: string;
    responsePoints: string[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  notFound: {
    title: string;
    description: string;
    action: string;
  };
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    languageLabel: 'EN',
    languageSwitchLabel: '切换到中文',
    skipToContent: 'Skip to content',
    nav: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Destinations', path: '/destinations' },
      { label: 'Travel Styles', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
    home: {
      eyebrow: 'Private China journeys for international travelers',
      title: 'A trusted partner for tailored travel across China.',
      description:
        'We help English- and Chinese-speaking guests explore China with thoughtful itinerary design, experienced local coordination, and clear communication from first enquiry to arrival.',
      primaryCta: 'Plan your trip',
      secondaryCta: 'Explore destinations',
      assurance: 'Trusted by global travelers seeking well-organized, culturally informed journeys in China.',
      stats: [
        { value: '120,000+', label: 'guests served', description: 'Long-term operating experience across inbound travel programs.' },
        { value: '6', label: 'featured cities', description: 'Core destinations presented clearly while supporting wider custom routing.' },
        { value: '2', label: 'languages', description: 'Consistent English and Chinese browsing for international visitors.' },
      ],
      trustTitle: 'Why travelers feel confident contacting us',
      trustDescription:
        'The first visit should answer who we are, what we arrange, and why our team can reliably support a custom China trip.',
      trustPoints: [
        { title: 'Experienced coordination', description: 'We combine destination knowledge, on-the-ground support, and practical itinerary planning for private journeys.' },
        { title: 'Clear international communication', description: 'Visitors can browse and contact us in English or Chinese with the same core information available in both languages.' },
        { title: 'Flexible custom planning', description: 'Our service is built around your timing, interests, and travel pace instead of fixed tour products.' },
        { title: 'Reliable travel network', description: 'We work with trusted transport, hotel, guide, and destination partners to support smooth trips.' },
      ],
      destinationsTitle: 'Featured destinations across China',
      destinationsDescription:
        'These destinations show our core strengths, while many more cities and regions can be arranged based on your plans.',
      destinations: [
        { city: 'Shanghai', highlight: 'Modern city stays', description: 'Design-led hotels, riverfront landmarks, shopping, and easy arrival logistics.' },
        { city: 'Beijing', highlight: 'History and culture', description: 'Imperial sites, food experiences, and curated access to the capital’s essential highlights.' },
        { city: 'Chengdu', highlight: 'Leisure and cuisine', description: 'Pandas, tea culture, and slower-paced urban travel with strong culinary appeal.' },
        { city: 'Xi’an', highlight: 'Heritage routes', description: 'Terracotta Warriors, ancient city history, and Silk Road storytelling.' },
        { city: 'Chongqing', highlight: 'River city energy', description: 'Mountain city views, hotpot culture, and distinctive urban experiences.' },
        { city: 'Zhangjiajie', highlight: 'Scenic nature', description: 'Dramatic landscapes for travelers wanting iconic natural scenery in China.' },
      ],
      destinationsNote: 'Need another destination? We also arrange custom itineraries for many other places across China.',
      servicesTitle: 'Travel designed around the way you want to experience China',
      servicesDescription:
        'From first-time visits to deeper regional journeys, we design practical plans that match your interests and pace.',
      services: [
        { title: 'Private custom itineraries', description: 'Trips built around your departure city, preferred destinations, schedule, and personal travel goals.' },
        { title: 'Multi-city route planning', description: 'Logical sequencing across major cities and scenic regions to save time and reduce complexity.' },
        { title: 'Family, couple, and small-group travel', description: 'Flexible planning for different comfort levels, interests, and trip styles.' },
      ],
      testimonialsTitle: 'What visitors look for before reaching out',
      testimonials: [
        { quote: 'The site made it clear that the company understands international guests and not only domestic tour products.', author: 'Prospective traveler perspective' },
        { quote: 'Seeing destination coverage and service experience together creates confidence before the first message.', author: 'Inbound travel planning insight' },
      ],
      contactBandTitle: 'Ready to discuss a custom China trip?',
      contactBandDescription: 'Reach us by WhatsApp, email, phone, or a planning enquiry. We keep the first step simple and practical.',
    },
    about: {
      eyebrow: 'About us',
      title: 'Professional support for travelers who want a well-planned China journey.',
      intro:
        'Our role is to help international visitors understand China travel options clearly, then turn that interest into a practical and reliable custom plan.',
      storyTitle: 'What we bring to the journey',
      storyBody: [
        'We focus on inbound travel planning for guests who want confidence before they commit to a conversation. That means clear information, realistic itinerary support, and a service posture that feels dependable from the first visit.',
        'Our team combines destination familiarity, coordination experience, and partner resources to support trips that are tailored rather than sold as one-size-fits-all packages.',
      ],
      strengthsTitle: 'Core strengths',
      strengths: [
        { title: 'Trusted operating experience', description: 'A strong service base reflected by 120,000+ guests served over time.' },
        { title: 'International guest readiness', description: 'Content and communication suited to travelers comparing providers from abroad.' },
        { title: 'Custom travel capability', description: 'Support for different destinations, pacing, and travel priorities rather than fixed product selection.' },
      ],
    },
    destinationsPage: {
      eyebrow: 'Destinations',
      title: 'Start with China’s best-known cities, then shape the route around your interests.',
      intro:
        'We highlight six core destinations that many international visitors understand immediately, while keeping the wider country open for custom planning.',
      note: 'Beyond these featured cities, we can plan many other destinations across China based on timing, interests, and travel style.',
    },
    servicesPage: {
      eyebrow: 'Travel styles',
      title: 'A custom service model instead of fixed tour packages.',
      intro:
        'We help travelers plan China trips that fit their goals, whether they want a first introduction, a cultural route, a scenic escape, or a multi-city journey.',
      planningTitle: 'How we shape the experience',
      planningSteps: [
        { title: 'Understand your trip goals', description: 'Departure location, destination priorities, timing, and preferred travel rhythm guide the proposal.' },
        { title: 'Recommend practical routing', description: 'We shape a realistic route across cities or regions with attention to comfort and efficiency.' },
        { title: 'Coordinate trusted local delivery', description: 'Hotels, guides, transport, and destination support are aligned around the final plan.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Choose the contact channel that feels easiest for you.',
      intro:
        'Some visitors prefer a direct message, while others want to discuss dates and destinations first. Either way, we make the first contact step clear.',
      methods: [
        { label: 'WhatsApp', value: '+86 138 0000 0000', href: 'https://wa.me/8613800000000' },
        { label: 'Email', value: 'hello@chinaprivatetravel.com', href: 'mailto:hello@chinaprivatetravel.com' },
        { label: 'Phone', value: '+86 21 4000 8000', href: 'tel:+862140008000' },
        { label: 'Planning enquiry', value: 'Share your departure city, destinations, timing, and contact details', href: 'mailto:hello@chinaprivatetravel.com?subject=China%20Trip%20Enquiry' },
      ],
      responseTitle: 'What happens next',
      responsePoints: [
        'We review your initial travel idea and preferred destinations.',
        'We respond with the most suitable next step or follow-up questions.',
        'A more detailed custom planning conversation can then begin.',
      ],
    },
    footer: {
      tagline: 'Custom China travel for international visitors',
      copyright: '© 2026 China Private Travel. All rights reserved.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you requested does not exist or is no longer available.',
      action: 'Return home',
    },
  },
  zh: {
    languageLabel: '中文',
    languageSwitchLabel: 'Switch to English',
    skipToContent: '跳转到正文',
    nav: [
      { label: '首页', path: '/' },
      { label: '关于我们', path: '/about' },
      { label: '目的地', path: '/destinations' },
      { label: '服务方式', path: '/services' },
      { label: '联系咨询', path: '/contact' },
    ],
    home: {
      eyebrow: '面向全球游客的中国私人定制旅行服务',
      title: '用清晰、可靠、专业的方式，帮助国际游客开启中国之旅。',
      description:
        '我们为使用英语和中文的访客提供中国定制旅游服务，从初次了解、路线规划到落地协调，都保持清楚沟通与稳妥安排。',
      primaryCta: '开始咨询行程',
      secondaryCta: '查看重点目的地',
      assurance: '适合希望先确认公司是否可信、再进一步沟通中国旅行计划的国际访客。',
      stats: [
        { value: '120,000+', label: '累计服务人次', description: '长期服务入境旅游客户，具备稳定的接待与协调经验。' },
        { value: '6', label: '重点展示城市', description: '先用清晰目的地内容帮助访客快速理解服务能力。' },
        { value: '2', label: '双语浏览体验', description: '核心导航、页面内容与联系入口支持中英一致切换。' },
      ],
      trustTitle: '为什么访客会更愿意继续了解并联系',
      trustDescription:
        '第一次访问网站时，最重要的是让访客快速明白：你们是谁、提供什么服务、为什么值得信任。',
      trustPoints: [
        { title: '有经验的旅行协调能力', description: '结合中国目的地理解、落地资源与实际行程规划经验，为私人定制行程提供支持。' },
        { title: '适合国际访客的沟通方式', description: '无论使用英语还是中文，访客都能获得一致、完整、清楚的核心信息。' },
        { title: '以定制为核心，而非固定线路销售', description: '根据出发地、目的地、时间与兴趣偏好安排更适合的中国旅行方案。' },
        { title: '稳定的合作与服务资源', description: '依托酒店、交通、导游与目的地合作资源，支持更顺畅的旅行体验。' },
      ],
      destinationsTitle: '中国重点目的地内容',
      destinationsDescription:
        '先展示国际访客容易理解的核心城市与景区，同时明确说明也可安排更多中国目的地。',
      destinations: [
        { city: '上海', highlight: '现代都市体验', description: '适合城市景观、品质酒店、地标游览与入境首站衔接。' },
        { city: '北京', highlight: '历史文化核心', description: '涵盖皇城古迹、文化地标与首都经典游览内容。' },
        { city: '成都', highlight: '休闲与美食', description: '熊猫、茶馆、川味体验与更松弛的城市旅行节奏。' },
        { city: '西安', highlight: '历史遗产线路', description: '兵马俑、古都文化与丝路历史故事是重要吸引点。' },
        { city: '重庆', highlight: '山城与烟火气', description: '立体城市景观、火锅文化与特色夜景体验鲜明。' },
        { city: '张家界', highlight: '自然风景', description: '适合希望体验中国标志性山水景观的访客。' },
      ],
      destinationsNote: '除了这些重点目的地，我们也可以根据需求安排更多中国城市和地区的定制行程。',
      servicesTitle: '围绕真实出行需求设计中国旅行方式',
      servicesDescription:
        '无论是首次来华、文化深度游、家庭出行还是多城市线路，我们都以定制方式协助规划。',
      services: [
        { title: '私人定制行程', description: '围绕出发地、目的地、时间和旅行诉求进行个性化规划。' },
        { title: '多城市组合路线', description: '帮助访客在热门城市与特色地区之间建立更顺畅的旅行路径。' },
        { title: '家庭、情侣与小团体出行', description: '根据不同舒适度与节奏偏好，安排更合适的体验方式。' },
      ],
      testimonialsTitle: '访客在联系前最在意的信号',
      testimonials: [
        { quote: '网站如果能同时讲清服务能力与目的地内容，会更容易让人愿意继续咨询。', author: '国际游客常见判断逻辑' },
        { quote: '双语一致、表达专业克制，会明显增强正规公司官网的可信感。', author: '品牌信任建立视角' },
      ],
      contactBandTitle: '准备开始了解你的中国定制旅行？',
      contactBandDescription: '你可以通过 WhatsApp、邮件、电话或行程咨询方式联系我们，第一步保持简单直接。',
    },
    about: {
      eyebrow: '关于我们',
      title: '为希望安心规划中国之旅的国际访客，提供专业而克制的定制支持。',
      intro:
        '我们的工作不是推销固定线路，而是先帮助访客清楚理解中国旅行选择，再逐步形成可靠的私人定制方案。',
      storyTitle: '我们能够带来的价值',
      storyBody: [
        '很多国际游客在第一次接触时，并不会立刻下决定，而是先判断一家公司是否专业、是否真实、是否适合沟通。我们用清晰的信息结构和可靠的服务表达来降低这种不确定感。',
        '团队结合目的地经验、接待协调能力与合作资源，为不同出行需求提供更灵活的中国旅行安排，而不是套用统一产品。',
      ],
      strengthsTitle: '核心优势',
      strengths: [
        { title: '稳定的服务经验基础', description: '累计服务人次达到 120,000+，体现长期接待能力与行业积累。' },
        { title: '适配国际访客浏览习惯', description: '中英双语、层级清晰、表达克制，更适合海外访客建立初步信任。' },
        { title: '真正以需求为导向的定制能力', description: '支持不同城市、节奏与兴趣偏好的中国旅游规划。' },
      ],
    },
    destinationsPage: {
      eyebrow: '目的地',
      title: '先从国际游客熟悉的中国重点目的地开始，再延展到更适合你的线路。',
      intro:
        '我们优先展示上海、北京、成都、西安、重庆、张家界等核心方向，帮助访客快速建立对中国旅游内容的理解。',
      note: '除了这些重点展示内容，我们同样可以根据你的时间、兴趣与出行方式安排更多中国目的地。',
    },
    servicesPage: {
      eyebrow: '服务方式',
      title: '不是固定产品下单，而是围绕你的需求设计中国之旅。',
      intro:
        '我们适合那些希望先沟通需求、再决定路线和服务细节的访客，让旅行从一开始就更贴近真实期待。',
      planningTitle: '我们如何协助规划',
      planningSteps: [
        { title: '理解你的出行目标', description: '从出发地、目的地、时间安排到旅行偏好，先明确关键基础信息。' },
        { title: '设计更合理的中国路线', description: '根据城市组合、节奏与体验重点，提出更实际可行的行程方向。' },
        { title: '协调落地服务资源', description: '围绕最终方案安排酒店、交通、导游与目的地支持。' },
      ],
    },
    contact: {
      eyebrow: '联系咨询',
      title: '选择你最方便的联系方式，先迈出轻量的一步。',
      intro:
        '有些访客希望直接发消息，有些希望先说明出发地、目的地与时间。无论哪种方式，我们都让联系入口足够清楚。',
      methods: [
        { label: 'WhatsApp', value: '+86 138 0000 0000', href: 'https://wa.me/8613800000000' },
        { label: '电子邮件', value: 'hello@chinaprivatetravel.com', href: 'mailto:hello@chinaprivatetravel.com' },
        { label: '电话', value: '+86 21 4000 8000', href: 'tel:+862140008000' },
        { label: '行程咨询', value: '可先告知出发地、目的地、出行时间与联系方式', href: 'mailto:hello@chinaprivatetravel.com?subject=%E4%B8%AD%E5%9B%BD%E6%97%85%E8%A1%8C%E5%92%A8%E8%AF%A2' },
      ],
      responseTitle: '联系后会发生什么',
      responsePoints: [
        '我们会先查看你的基础出行想法与重点目的地。',
        '根据情况回复更适合的下一步沟通方式或补充问题。',
        '随后进入更详细的私人定制旅行沟通。',
      ],
    },
    footer: {
      tagline: '面向国际访客的中国定制旅行服务',
      copyright: '© 2026 China Private Travel 版权所有',
    },
    notFound: {
      title: '页面不存在',
      description: '你访问的页面不存在，或已不可用。',
      action: '返回首页',
    },
  },
};
