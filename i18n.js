/* ===========================================================
   Laura Rosero — i18n + shared behaviour
   All copy lives here so every page can switch ES <-> EN.
   =========================================================== */

const STRINGS = {
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_portfolio: "Portafolio",
    nav_contact: "Contacto",
    nav_cta: "Escríbeme",

    hero_eyebrow: "Diseño + comunicación",
    hero_title: "Laura Rosero\nChavarriaga",
    hero_lede: "Diseñadora gráfica y comunicadora social. Identidad de marca, diseño editorial y contenido digital.",
    hero_btn_work: "Ver portafolio",
    hero_btn_contact: "Hablemos",
    hero_tag: "Rionegro, Antioquia\nDisponible para proyectos",
    services_strip: "Branding · Diseño editorial · Contenido digital · Comunicación institucional · UX/UI",

    work_eyebrow: "Trabajo seleccionado",
    work_title: "Proyectos recientes.",
    work_desc: "Una muestra de identidades de marca, campañas y piezas editoriales que he desarrollado para empresas, entidades públicas y emprendimientos.",
    work_view_all: "Ver todo el portafolio →",

    method_eyebrow: "Cómo trabajo",
    method_title: "El método.",
    method_desc: "Diseño acompañado de estrategia, para marcas que quieren crecer con coherencia.",
    method_1_title: "Estratégico.",
    method_1_desc: "Cada pieza responde a un objetivo de marca, no solo a una tendencia visual.",
    method_2_title: "Cercano y claro.",
    method_2_desc: "Comunico ideas complejas de forma simple, tanto en el diseño como en el texto.",
    method_3_title: "Centrado en las personas.",
    method_3_desc: "Integro diseño, comunicación y experiencia de usuario alrededor de quien recibe el mensaje.",
    method_4_title: "De punta a punta.",
    method_4_desc: "Desde el concepto de marca hasta la pieza final lista para imprimir o publicar.",

    cta_band_title: "¿Tienes un proyecto en mente?",
    cta_band_btn: "Conversemos",

    about_eyebrow: "Sobre mí",
    about_title: "Laura Rosero\nChavarriaga",
    about_p1: "Comunicadora Social y especialista en Diseño Publicitario en Contenidos Digitales, con experiencia en branding, comunicación institucional y contenidos digitales.",
    about_p2: "He participado en proyectos de comunicación pública, marca ciudad y posicionamiento de marca, integrando estrategia, creatividad y diseño para fortalecer la conexión entre las organizaciones y sus audiencias.",
    about_p3: "Actualmente complemento mi perfil con formación en UX/UI, ampliando mis capacidades para diseñar experiencias digitales centradas en el usuario.",
    about_location: "📍 Rionegro / Medellín, Colombia",

    edu_title: "Educación",
    edu_1_when: "2024",
    edu_1_title: "Especialista en Diseño Publicitario en Contenidos Digitales",
    edu_1_where: "Universidad Autónoma de Occidente",
    edu_2_when: "2014 – 2019",
    edu_2_title: "Comunicadora Social",
    edu_2_where: "Universidad Católica de Oriente",
    edu_3_when: "2026",
    edu_3_title: "Diplomado en Diseño de Experiencias UX/UI",
    edu_3_where: "Universidad Pontificia Bolivariana",
    edu_4_when: "2020 – 2021",
    edu_4_title: "Técnica por Competencias en Diseño Gráfico",
    edu_4_where: "Politécnico ASDI",

    exp_title: "Experiencia",
    exp_1_when: "Oct. 2025 — Presente",
    exp_1_title: "Diseñadora Gráfica Independiente",
    exp_1_where: "Profesional independiente",
    exp_2_when: "Jun. 2024 — Oct. 2025",
    exp_2_title: "Diseñadora Gráfica",
    exp_2_where: "Tierra Querida S.A.S.",
    exp_3_when: "Jul. 2024 — Dic. 2024",
    exp_3_title: "Comunicadora Social",
    exp_3_where: "Alcaldía de Rionegro",
    exp_4_when: "Oct. 2022 — Dic. 2023",
    exp_4_title: "Diseñadora Gráfica",
    exp_4_where: "Alcaldía de Medellín",
    exp_5_when: "Feb. 2022 — Oct. 2022",
    exp_5_title: "Community Manager",
    exp_5_where: "Calzado Cosmos",
    exp_6_when: "Ene. 2021 — Jul. 2021",
    exp_6_title: "Aprendiz en Diseño Gráfico",
    exp_6_where: "Calcetines Crystal",

    tools_title: "Herramientas",
    tools_desc: "El software con el que trabajo día a día.",

    port_eyebrow: "Portafolio",
    port_title: "Proyectos.",
    port_desc: "Trabajo organizado por empresa: identidad de marca, contenido digital y aplicaciones para cada cliente.",
    port_independent: "Desde octubre de 2025 trabajo como diseñadora gráfica independiente, desarrollando identidad de marca, diseño editorial y comunicación estratégica para empresas y emprendimientos — acompañando cada proceso de construcción de marca con soluciones visuales alineadas a sus objetivos de posicionamiento.",
    filter_editorial: "Diseño editorial",

    tag_identity: "Identidad de marca",
    tag_applications: "Aplicaciones corporativas",
    tag_social: "Contenido digital",
    tag_illustration: "Ilustración",

    client_tierra_desc: "Cadena de hamburgueserías con presencia en Colombia. Lideré la evolución de su identidad visual, fortaleciendo su consistencia y posicionamiento en entornos físicos y digitales: desde el manual de marca hasta activaciones en punto de venta y participación en ferias del sector.",
    tierra_1_title: "Logotipo y manual de marca",
    tierra_2_title: "Vallas, vehículos y carné",
    tierra_3_title: "Piezas para nuevas sedes",
    tierra_4_title: "Campaña aniversario 5 años",

    client_rionegro_desc: "Como comunicadora social participé en la estrategia de Marca Ciudad Rionegro, fortaleciendo la identidad territorial y la conexión entre la administración municipal, la ciudadanía y los actores del territorio. Apoyé la planeación y ejecución de eventos de ciudad de alto impacto.",
    rionegro_1_title: "Apoyo en planeación y ejecución de eventos",
    rionegro_2_title: "Cobertura y registro de eventos institucionales",

    client_alaya_desc: "Escuela de equitación. Piezas de comunicación para clases, eventos y contenido de marca.",
    alaya_1_title: "Clases y jornadas de equitación",
    alaya_2_title: "Aperturas y bonos regalo",
    alaya_3_title: "Antes y después: primeras clases",
    alaya_4_title: "Antes y después: aprendizaje en familia",
    alaya_5_title: "Nuestro equipo Alaya Equs",
    alaya_6_title: "Celebraciones a caballo",
    alaya_7_title: "Mensaje de marca",
    alaya_8_title: "Antes y después: pequeños jinetes",

    rpac_title: "Red de Prácticas Artísticas y Culturales",
    client_rpac_desc: "Alcaldía de Medellín. Identidad, aplicaciones corporativas, contenido digital, ilustración y diseño editorial para el programa Nos Mueve la Cultura.",
    rpac_1_title: "Exploración de línea gráfica",
    rpac_2_title: "Cuaderno, paraguas y merchandising",
    rpac_3_title: "Piezas para Instagram",
    rpac_4_title: "Diseño piezas gráficas redes sociales",
    rpac_5_title: "Serie ilustrada — llegada a Medellín",
    rpac_6_title: "Tiempos de Imaginar",

    client_unrespiro_desc: "Taller de bordado artesanal. Identidad de marca, materiales y contenido de producto.",
    unrespiro_1_title: "Logotipo y aplicaciones",
    unrespiro_2_title: "Producto y redes sociales",

    client_palacio_desc: "Restaurante con 40 años de trayectoria. Línea gráfica conmemorativa para publicidad exterior.",
    palacio_1_title: "Campaña 40 años",
    palacio_2_title: "Valla instalada en punto",

    editorial_1_title: "Diagramación de revistas anuales",

    contact_eyebrow: "Contacto",
    contact_title: "Hablemos de tu\npróximo proyecto.",
    contact_desc: "Cuéntame qué estás construyendo. Respondo en 1–2 días hábiles.",
    contact_email_label: "Correo",
    contact_phone_label: "Teléfono / WhatsApp",
    contact_location_label: "Ubicación",
    contact_behance_label: "Behance",
    form_name: "Nombre",
    form_email: "Correo electrónico",
    form_message: "Cuéntame sobre tu proyecto",
    form_submit: "Enviar mensaje",
    form_note: "Este formulario abre tu cliente de correo con el mensaje listo para enviar.",

    footer_tagline: "Diseño gráfico + comunicación estratégica.",
    footer_rights: "Todos los derechos reservados.",
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_cta: "Get in touch",

    hero_eyebrow: "Design + communication",
    hero_title: "Laura Rosero\nChavarriaga",
    hero_lede: "Graphic designer and social communicator. Brand identity, editorial design and digital content.",
    hero_btn_work: "View portfolio",
    hero_btn_contact: "Let's talk",
    hero_tag: "Rionegro, Antioquia\nAvailable for projects",
    services_strip: "Branding · Editorial design · Digital content · Institutional communication · UX/UI",

    work_eyebrow: "Selected work",
    work_title: "Recent projects.",
    work_desc: "A sample of brand identities, campaigns and editorial pieces developed for companies, public institutions and small businesses.",
    work_view_all: "See full portfolio →",

    method_eyebrow: "How I work",
    method_title: "The method.",
    method_desc: "Design backed by strategy, for brands that want to grow with consistency.",
    method_1_title: "Strategic.",
    method_1_desc: "Every piece answers to a brand goal, not just a visual trend.",
    method_2_title: "Clear and approachable.",
    method_2_desc: "I communicate complex ideas simply, in both design and copy.",
    method_3_title: "People-centered.",
    method_3_desc: "I bring design, communication and user experience together around who receives the message.",
    method_4_title: "End to end.",
    method_4_desc: "From brand concept to the final file, ready to print or publish.",

    cta_band_title: "Have a project in mind?",
    cta_band_btn: "Let's talk",

    about_eyebrow: "About me",
    about_title: "Laura Rosero\nChavarriaga",
    about_p1: "Social Communicator and Advertising Design specialist in Digital Content, with experience in branding, institutional communication and digital content.",
    about_p2: "I've worked on public communication, city-branding and brand positioning projects, blending strategy, creativity and design to strengthen the connection between organizations and their audiences.",
    about_p3: "I'm currently complementing my profile with UX/UI training, expanding my ability to design user-centered digital experiences.",
    about_location: "📍 Rionegro / Medellín, Colombia",

    edu_title: "Education",
    edu_1_when: "2024",
    edu_1_title: "Specialization in Advertising Design for Digital Content",
    edu_1_where: "Universidad Autónoma de Occidente",
    edu_2_when: "2014 – 2019",
    edu_2_title: "Social Communicator",
    edu_2_where: "Universidad Católica de Oriente",
    edu_3_when: "2026",
    edu_3_title: "Diploma in UX/UI Experience Design",
    edu_3_where: "Universidad Pontificia Bolivariana",
    edu_4_when: "2020 – 2021",
    edu_4_title: "Technical Certificate in Graphic Design",
    edu_4_where: "Politécnico ASDI",

    exp_title: "Experience",
    exp_1_when: "Oct 2025 — Present",
    exp_1_title: "Independent Graphic Designer",
    exp_1_where: "Self-employed",
    exp_2_when: "Jun 2024 — Oct 2025",
    exp_2_title: "Graphic Designer",
    exp_2_where: "Tierra Querida S.A.S.",
    exp_3_when: "Jul 2024 — Dec 2024",
    exp_3_title: "Social Communicator",
    exp_3_where: "Municipality of Rionegro",
    exp_4_when: "Oct 2022 — Dec 2023",
    exp_4_title: "Graphic Designer",
    exp_4_where: "Municipality of Medellín",
    exp_5_when: "Feb 2022 — Oct 2022",
    exp_5_title: "Community Manager",
    exp_5_where: "Calzado Cosmos",
    exp_6_when: "Jan 2021 — Jul 2021",
    exp_6_title: "Graphic Design Apprentice",
    exp_6_where: "Calcetines Crystal",

    tools_title: "Tools",
    tools_desc: "The software I work with every day.",

    port_eyebrow: "Portfolio",
    port_title: "Projects.",
    port_desc: "Work organized by client: brand identity, digital content and applications for each company.",
    port_independent: "Since October 2025 I've worked as an independent graphic designer, developing brand identity, editorial design and strategic communication for companies and small businesses — supporting each brand-building process with visual solutions aligned to their positioning goals.",
    filter_editorial: "Editorial design",

    tag_identity: "Brand identity",
    tag_applications: "Corporate applications",
    tag_social: "Digital content",
    tag_illustration: "Illustration",

    client_tierra_desc: "Burger restaurant chain with presence in Colombia. I led the evolution of its visual identity, strengthening consistency and positioning across physical and digital touchpoints: from the brand manual to point-of-sale activations and trade-fair appearances.",
    tierra_1_title: "Logo and brand manual",
    tierra_2_title: "Billboards, vehicles and ID badge",
    tierra_3_title: "New-location content",
    tierra_4_title: "5th anniversary campaign",

    client_rionegro_desc: "As social communicator I took part in the Marca Ciudad Rionegro communication strategy, strengthening territorial identity and the connection between the local government, residents and community stakeholders. I helped plan and run high-impact city events.",
    rionegro_1_title: "Event planning and execution support",
    rionegro_2_title: "Institutional event coverage",

    client_alaya_desc: "Riding school. Communication pieces for classes, events and brand content.",
    alaya_1_title: "Riding classes and clinics",
    alaya_2_title: "Openings and gift vouchers",
    alaya_3_title: "Before and after: first classes",
    alaya_4_title: "Before and after: learning as a family",
    alaya_5_title: "Our Alaya Equs team",
    alaya_6_title: "Celebrations on horseback",
    alaya_7_title: "Brand message",
    alaya_8_title: "Before and after: young riders",

    rpac_title: "Network of Artistic and Cultural Practices",
    client_rpac_desc: "City of Medellín. Identity, corporate applications, digital content, illustration and editorial design for the Nos Mueve la Cultura program.",
    rpac_1_title: "Visual identity exploration",
    rpac_2_title: "Notebook, umbrella and merch",
    rpac_3_title: "Instagram content",
    rpac_4_title: "Social media graphic pieces",
    rpac_5_title: "Illustrated series — arrival in Medellín",
    rpac_6_title: "Tiempos de Imaginar",

    client_unrespiro_desc: "Handmade embroidery workshop. Brand identity, materials and product content.",
    unrespiro_1_title: "Logo and applications",
    unrespiro_2_title: "Product and social content",

    client_palacio_desc: "40-year-old restaurant. Commemorative visual line for outdoor advertising.",
    palacio_1_title: "40th anniversary campaign",
    palacio_2_title: "Billboard installed on site",

    editorial_title: "Annual magazines — Red de Medellín",
    client_editorial_desc: "Layout for institutional publications for the Dance, Visual Arts and Music Networks of the City of Medellín.",
    editorial_1_title: "Annual magazine layout",

    contact_eyebrow: "Contact",
    contact_title: "Let's talk about your\nnext project.",
    contact_desc: "Tell me what you're building. I reply within 1–2 business days.",
    contact_email_label: "Email",
    contact_phone_label: "Phone / WhatsApp",
    contact_location_label: "Location",
    contact_behance_label: "Behance",
    form_name: "Name",
    form_email: "Email",
    form_message: "Tell me about your project",
    form_submit: "Send message",
    form_note: "This form opens your email client with the message ready to send.",

    footer_tagline: "Graphic design + strategic communication.",
    footer_rights: "All rights reserved.",
  }
};

function getLang(){
  return localStorage.getItem('lrc_lang') || 'es';
}

function applyTranslations(lang){
  const dict = STRINGS[lang];
  document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined){
      el.innerHTML = dict[key].replace(/\n/g, '<br>');
    }
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function setLang(lang){
  localStorage.setItem('lrc_lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if (burger && links){
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // contact form -> mailto
  const form = document.querySelector('.contact-form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const message = form.querySelector('#message').value;
      const subject = encodeURIComponent(`Proyecto — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:laurarosero2@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
