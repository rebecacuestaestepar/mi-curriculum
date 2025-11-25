import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronRight,
  Menu,
  X,
  Linkedin,
  Github,
  Award,
  Terminal
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos extraídos del CV y estructurados
  const profile = {
    name: "Rebeca Cuesta Estépar",
    role: "Estudiante de Ingeniería Informática",
    tagline: "Apasionada por la Ciberseguridad y la Inteligencia Artificial",
    about: "Soy una persona comprometida, trabajadora y responsable. Tengo muchas ganas de aprender y superarme día a día. Actualmente cursando 4º curso del Grado en Ingeniería Informática con especial interés en el mundo de la ciberseguridad y la IA. Mi experiencia en el deporte de alto nivel me ha dotado de disciplina y capacidad de trabajo en equipo.",
    location: "Burgos, España",
    email: "rebecacuestaestepar@gmail.com",
    phone: "618 854 172",
    birthDate: "02/03/2004"
  };

  const education = [
    {
      title: "Grado en Ingeniería Informática",
      institution: "Universidad de Burgos",
      period: "2022 - Actualidad",
      description: "Actualmente en 4º curso.",
      icon: "university"
    },
    {
      title: "Arquitectura de Ciberseguridad",
      institution: "IBM (Coursera)",
      period: "10 horas",
      description: "Certificación online especializada.",
      icon: "shield"
    },
    {
      title: "Seguridad de la Red",
      institution: "CISCO (Coursera)",
      period: "10 horas",
      description: "Fundamentos de seguridad en redes.",
      icon: "shield"
    },
    {
      title: "Curso de Verano: IA en el Ámbito Público",
      institution: "Universidad de Burgos",
      period: "Julio 2025",
      description: "Aplicaciones y desafíos de la Inteligencia Artificial.",
      icon: "brain"
    }
  ];

  const experience = [
    {
      role: "Jugadora de Fútbol Profesional",
      company: "Burgos C.F.",
      period: "2025 - 2026",
      description: "Contrato profesional durante la temporada actual. Desarrollo de disciplina y rendimiento bajo presión."
    },
    {
      role: "Monitora Campus de Fútbol",
      company: "Campus Escuderas",
      period: "Julio 2025",
      description: "Monitora de fútbol femenino (22,5 h/semana). Gestión de grupos y liderazgo."
    },
    {
      role: "Jugadora de Fútbol Profesional",
      company: "Parquesol C.F.",
      period: "2021 - 2022",
      description: "Contrato profesional."
    }
  ];

  // He añadido lenguajes comunes de la carrera, ¡edítalos según tus conocimientos reales!
  const skills = {
    technical: [
      "Java",
      "C",
      "Bash Scripting",
      "Python",
      "SQL / Bases de Datos",
      "Redes & Seguridad"
    ],
    soft: [
      "Trabajo en Equipo",
      "Compromiso",
      "Disciplina",
      "Perseverancia",
      "Responsabilidad"
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio (ESO Bilingüe)" },
      { name: "Francés", level: "Intermedio" }
    ]
  };

  // Control del scroll para la navegación
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'resumen', 'educacion', 'experiencia', 'habilidades'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('inicio')}>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Rebeca Cuesta
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Resumen', 'Educación', 'Experiencia', 'Habilidades'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className={`${activeSection === item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? 'text-blue-600 font-semibold' : 'text-slate-500 hover:text-blue-500'} transition-colors duration-200 text-sm uppercase tracking-wider`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Inicio', 'Resumen', 'Educación', 'Experiencia', 'Habilidades'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar / Foto */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img 
              src="./public/foto.jpg" 
              alt="Rebeca Cuesta" 
              className="relative w-full h-full rounded-full border-4 border-white shadow-xl object-cover bg-white"
            />
          </div>
          
          {/* Intro Text */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Ingeniera en formación</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
              {profile.name}
            </h1>
            <p className="text-xl text-slate-600 mb-6 font-light max-w-2xl">
              {profile.tagline}. {profile.about}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                <Mail size={18} /> {profile.email}
              </a>
              <span className="flex items-center gap-2 text-slate-600">
                <Phone size={18} /> {profile.phone}
              </span>
              <span className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} /> {profile.location}
              </span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button onClick={() => window.open('./public/cv.pdf')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                <Download size={20} /> Descargar CV PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD SUMMARY (Lo que pediste) --- */}
      <section id="resumen" className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Resumen del Perfil</h2>
            <p className="text-slate-500 mt-2">Un vistazo rápido a mi trayectoria y capacidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Educacion */}
            <div onClick={() => scrollTo('educacion')} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Formación</h3>
              <p className="text-sm text-slate-500 mb-3">Grado en Ingeniería Informática y Cursos de Especialización.</p>
              <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Ver detalles <ChevronRight size={16} /></span>
            </div>

            {/* Card Experiencia */}
            <div onClick={() => scrollTo('experiencia')} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Experiencia</h3>
              <p className="text-sm text-slate-500 mb-3">Deporte profesional y monitora. Liderazgo y disciplina.</p>
              <span className="text-emerald-600 text-sm font-medium flex items-center gap-1">Ver trayectoria <ChevronRight size={16} /></span>
            </div>

            {/* Card Skills */}
            <div onClick={() => scrollTo('habilidades')} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Skills & Tech</h3>
              <p className="text-sm text-slate-500 mb-3">Ciberseguridad, IA, Idiomas y Competencias Personales.</p>
              <span className="text-purple-600 text-sm font-medium flex items-center gap-1">Ver stack <ChevronRight size={16} /></span>
            </div>

            {/* Card Intereses */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Intereses</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md border border-orange-100">Ciberseguridad</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md border border-orange-100">IA</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md border border-orange-100">Deporte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-12">
        
        {/* --- LEFT COLUMN: EXPERIENCIA & EDUCACION --- */}
        <div className="flex-1 space-y-16">
          
          {/* EDUCACION */}
          <section id="educacion" className="scroll-mt-24">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
              <GraduationCap className="text-blue-600" /> Formación Académica
            </h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-xl font-bold text-slate-800">{edu.title}</h3>
                  <div className="text-slate-600 font-medium mb-1">{edu.institution}</div>
                  <div className="text-sm text-blue-600 mb-2 font-mono">{edu.period}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
              
              {/* Bachillerato item separado */}
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                <h3 className="text-lg font-bold text-slate-700">Bachillerato en Ciencias de la Salud</h3>
                <div className="text-slate-600 mb-1">I.E.S. Cardenal López de Mendoza / Parquesol</div>
                <div className="text-sm text-slate-500 font-mono">2020 - 2022</div>
              </div>
            </div>
          </section>

          {/* EXPERIENCIA */}
          <section id="experiencia" className="scroll-mt-24">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
              <Briefcase className="text-emerald-600" /> Experiencia Laboral
            </h2>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                    <h3 className="text-lg font-bold text-slate-800">{job.role}</h3>
                    <span className="text-xs font-bold px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full w-fit mt-1 sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-emerald-600 font-medium mb-3">{job.company}</div>
                  <p className="text-slate-500 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- RIGHT COLUMN: SKILLS & IDIOMAS --- */}
        <div className="lg:w-1/3 space-y-12">
          
          {/* TECH STACK */}
          <section id="habilidades" className="scroll-mt-24">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              <Code className="text-purple-600" /> Tecnologías
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-5">
              <ul className="space-y-3">
                {skills.technical.map((tech, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SOFT SKILLS */}
          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-6">
              <User className="text-pink-600" /> Competencias Personales
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((soft, idx) => (
                <span key={idx} className="px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-lg border border-pink-100">
                  {soft}
                </span>
              ))}
            </div>
          </section>

          {/* IDIOMAS */}
          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-6">
              <MapPin className="text-blue-500" /> Idiomas
            </h2>
            <div className="space-y-3">
              {skills.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                  <span className="font-medium text-slate-700">{lang.name}</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>

           {/* OTROS */}
           <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-6">
              <Award className="text-yellow-600" /> Otros Datos
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
               <li className="flex gap-2">
                 <div className="min-w-[6px] h-[6px] mt-2 rounded-full bg-yellow-500"></div>
                 Carnet de conducir
               </li>
               <li className="flex gap-2">
                 <div className="min-w-[6px] h-[6px] mt-2 rounded-full bg-yellow-500"></div>
                 Experiencia en trabajo de equipo de alto rendimiento
               </li>
               <li className="flex gap-2">
                 <div className="min-w-[6px] h-[6px] mt-2 rounded-full bg-yellow-500"></div>
                 Interés activo en investigación de IA
               </li>
            </ul>
          </section>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="flex justify-center gap-6 mb-8">
           <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
           <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
           <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
        <p>© 2025 {profile.name}. Todos los derechos reservados.</p>
        <p className="text-slate-600 text-sm mt-2">Diseñado con React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;