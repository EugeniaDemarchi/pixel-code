let data = {
  english: {
    queOfrecemos: "What we offer",
    serviciosLink: "Services",
    sobreLink: "About us",
    contactoLink: "Contact",
    subtitle: "WEB SERVICES",
    ofrecemosFrase: "What we offer",
    descripcionServicio:
      "We are two entrepreneurs passionate about design and web development. We combine our skills in front and back-end to create innovative and functional digital solutions. We stay continuously trained to offer modern websites and efficient platforms.",
    fraseFinal: "Your project, our inspiration.",
    serviciosFrase: "OUR SERVICIES",
    sitiosWeb: "Web Pages",
    descripcionSitiosWeb:
      "Attractive and responsive design, aligned with the brand identity to enhance its digital presence.",
    mantenimiento: "Maintenance",
    descripcionMantenimiento:
      "Updates and bug fixes in code or design to ensure a functional and optimized site.",
    wordPress: "WordPress or Wix web pages",
    descripcionWordpress:
      "Accessible and quick solutions, ideal for those looking for an effective and easy-to-manage digital presence.",
    descripcionTesting:
      "Detailed assessment to detect and fix errors, ensuring optimal performance and a flawless user experience.",
    automatizacion: "Task automation",
    descripcionAutomatizacion:
      "Implementation of simple automated solutions to optimize repetitive processes and improve operational efficiency.",
    tituloNosotras: "OUR TEAM",
    descEuge:
      "Visual artist and software developer with a passion for aesthetics and functional design. I am defined by attention to detail, commitment, and a constant pursuit of excellence to create attractive and powerful digital environments.",
    descSandra:
      "Software developer passionate about creating functional and effective solutions. I am defined by dedication and a goal-oriented approach. I continue to learn and grow to deliver the best in every project and exceed my clients' expectations.",
    tituloContacto: "CONTACT",
    escribinos: "Get in touch",
    button: "Submit",
    footer: "©Copyright. Created by PIXEL&CODE. All rights reserved.",
  },
  spanish: {
    queOfrecemos: "Qué ofrecemos",
    serviciosLink: "Servicios",
    sobreLink: "Sobre nosotras",
    contactoLink: "Contacto",
    subtitle: "SERVICIOS WEB",
    ofrecemosFrase: "QUÉ OFRECEMOS",
    descripcionServicio:
      "  Somos dos emprendedoras apasionadas por el diseño y el desarrollo web. Combinamos nuestras habilidades en sistemas y diseño gráfico para crear soluciones digitales innovadoras yfuncionales. Nos mantenemos en constante formación para ofrecersitios web modernos y plataformas eficientes.",
    fraseFinal: "Tu proyecto, nuestra inspiración...",
    serviciosFrase: " NUESTROS SERVICIOS",
    sitiosWeb: " Sitios web",
    descripcionSitiosWeb:
      "  Diseño atractivo y responsive, alineado con la identidad de marca para potenciar su presencia digital.",
    mantenimiento: "Mantenimiento",
    descripcionMantenimiento:
      "Actualización y corrección de errores en código o diseño para asegurar un sitio funcional y optimizado.",
    wordPress: " Sitios WordPress o Wix",
    descripcionWordpress:
      " Soluciones accesibles y rápidas, ideales para quienes buscan una presencia digital efectiva y fácil de gestionar.",
    descripcionTesting:
      "      Evaluación detallada para detectar y corregir errores, asegurando un rendimiento óptimo y una experiencia de usuario sin fallos.",
    automatizacion: "Automatización de tareas",
    descripcionAutomatizacion:
      "Implementación de soluciones automatizadas simples para optimizar procesos repetitivos y mejorar la eficiencia operativa.",
    tituloNosotras: "CONOCÉ NUESTRO EQUIPO",
    descEuge:
      "Artista visual y desarrolladora de software con pasión por la estética y el diseño funcional.  Me definen la atención al detalle, el compromiso y la búsqueda constante de la excelencia para crear entornos digitales atractivos y potentes.",
    descSandra:
      "Desarrolladora de software apasionada por crear soluciones funcionales y efectivas. Me definen la dedicación y el enfoque en alcanzar metas. Me sigo formando para ofrecer lo mejor en cada proyecto y superar las expectativas de mis clientes.",
    tituloContacto: "CONTACTO",
    escribinos: "Escribinos",
    button: "Enviar",
    footer: "©Copyright. Creado por PIXEL&CODE. Todos los derechos reservados.",
  },
};

const links = document.querySelectorAll(".langWrap a");
const sections = document.querySelectorAll(
  "#queOfrecemos, #serviciosLink, #sobreLink, #contactoLink, .subtitle, .ofrecemosFrase, .descripcionServicio, .fraseFinal, .serviciosFrase, #sitiosWeb, #descripcionSitiosWeb, #mantenimiento, #descripcionMantenimiento, #wordPress, #descripcionWordpress, #descripcionTesting, #automatizacion, #descripcionAutomatizacion, #tituloNosotras, #descEuge, #descSandra, #tituloContacto, #escribinos, #button, .footer "
);

links.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the page from scrolling to the top

    const attr = el.getAttribute("language");

    sections.forEach((section) => {
      const classKey = section.classList[0];
      const idKey = section.id;

      if (data[attr][classKey]) {
        section.textContent = data[attr][classKey];
      }

      if (data[attr][idKey]) {
        section.textContent = data[attr][idKey];
      }
    });

    document.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});
