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
    about_p1: "Diseñadora gráfica creativa con más de 4 años de experiencia en el fortalecimiento de la identidad visual de marcas. Me destaco en la creación de contenido estratégico para redes sociales y campañas, tanto digitales como impresas.",
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
    port_desc: "Identidad de marca, diseño editorial, contenido para redes e ilustración — organizado por categoría.",
    filter_all: "Todos",
    filter_brand: "Identidad de marca",
    filter_editorial: "Diseño editorial",
    filter_social: "Contenido digital",
    filter_illustration: "Ilustración",

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
    about_p1: "Creative graphic designer with 4+ years of experience strengthening brands' visual identity. I specialize in strategic content for social media and campaigns, both digital and print.",
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
    port_desc: "Brand identity, editorial design, digital content and illustration — organized by category.",
    filter_all: "All",
    filter_brand: "Brand identity",
    filter_editorial: "Editorial design",
    filter_social: "Digital content",
    filter_illustration: "Illustration",

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

  // portfolio filters (only present on portfolio.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  if (filterBtns.length){
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        cards.forEach(card => {
          card.classList.toggle('hidden', cat !== 'all' && card.getAttribute('data-cat') !== cat);
        });
      });
    });
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
