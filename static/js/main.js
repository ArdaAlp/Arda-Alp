const translations = {
  tr: {
    pageTitle: 'Arda ALP - Portföy',
    navAbout: 'Hakkımda',
    navProjects: 'Projeler',
    navTimeline: 'Deneyim',
    navContact: 'İletişim',
    heroLabel: 'Elektrik-Elektronik Mühendisliği Öğrencisi',
    aboutTitle: 'Benim Hakkımda',
    aboutText: 'Dicle Üniversitesi Elektrik ve Elektronik Mühendisliği öğrencisiyim. 2018\'den bu yana yazılım geliştirme alanında aktif olarak bireysel projeler üretiyor, farklı dillerde script ve modüller geliştiriyorum. Gömülü sistemler, FPGA, mikrodenetleyici tabanlı otomasyon çözümleri ve temel Full-Stack web geliştirme konularıyla ilgileniyorum; Front-End, Back-End ve API mimarisi tarafında kendimi sürekli ileri taşıyorum. Kişisel motivasyonumla teknik birikimimi büyütürken, genel kültürümü geliştirmeyi ve farklı kültürleri tanımayı da bu yolculuğun önemli bir parçası olarak görüyorum.',
    projectsTitle: 'Bazı Projelerim',
    p1Tag: 'API / Backend',
    p1Text: 'Flask tabanlı kimlik doğrulama akışlarını ve API güvenlik yapısını örnekleyen backend projesi.',
    p2Tag: 'API / Backend',
    p2Text: 'Görev yönetimi üzerine kurulu, temel CRUD endpoint\'leri ve sade servis mimarisi içeren Flask API uygulaması.',
    p3Tag: 'Python / OOP',
    p3Text: 'Python OOP prensipleriyle geliştirilmiş, temel bankacılık operasyonlarını modelleyen kapsamlı bir sistem denemesi.',
    repoBtn: 'Repo',
    projectsCta: 'Göz At',
    timelineTitle: 'Yolculuğum',
    t1Title: 'HTML ve CSS ile Başlangıç',
    t1Text: 'HTML ve CSS temelleriyle ilk adımlarımı attım; temel seviyede Front-End web siteleri geliştirerek pratik kazandım.',
    t2Title: 'Altyapı ve Teorik Derinleşme',
    t2Text: 'Back-End, algoritma ve programlama altyapım üzerine yoğunlaştım; bilgisayar ağları alanında genel kültürümü geliştirmeye çalıştım. Üniversite eğitiminin başlamasıyla birlikte C ve Python dillerinde algoritmalar yazarak problem çözme refleksimi güçlendirdim.',
    t4Title: 'Arduino ile Mikrodenetleyici Girişi',
    t4Text: 'Arduino projeleriyle temel mikrodenetleyici geliştirme alanına adım attım ve donanım-yazılım etkileşimini daha yakından deneyimledim.',
    t5Title: 'Python Backend Projeleri',
    t5Text: 'Başta FastAPI ve Flask olmak üzere Python tabanlı Back-End projeleri geliştirerek API tasarımı ve servis kurgusu tarafında ilerleme kaydettim.',
    t6Year: 'Şimdi',
    t6Title: 'Güncel Odak',
    t6Text: 'Güncel olarak FPGA dili ile donanım mühendisliği ve gömülü sistemler alanında ilerleme katetmeye başladım.',
    contactTitle: 'İletişim ve Sosyal Medya',
    directContact: 'Doğrudan İletişim',
    emailLabel: 'E-Posta',
    phoneLabel: 'Telefon',
    socialTitle: 'Sosyal Medya',
    footerSignature: 'Arda ALP - Öğren > Üret > Geliştir.'
  },
  en: {
    pageTitle: 'Arda ALP - Portfolio',
    navAbout: 'About',
    navProjects: 'Projects',
    navTimeline: 'Timeline',
    navContact: 'Contact',
    heroLabel: 'Electrical and Electronics Engineering Student',
    aboutTitle: 'About Me',
    aboutText: 'I am an Electrical and Electronics Engineering student at Dicle University. Since 2018, I have been actively building personal software projects and developing scripts and modules in different languages. I am interested in embedded systems, FPGA, microcontroller-based automation solutions, and core Full-Stack web development; and I keep improving myself in Front-End, Back-End, and API architecture. While expanding my technical skills through personal discipline, I also see improving my general culture and discovering different cultures as an essential part of this journey.',
    projectsTitle: 'Selected Projects',
    p1Tag: 'API / Backend',
    p1Text: 'A backend project that demonstrates authentication flows and API security practices with Flask.',
    p2Tag: 'API / Backend',
    p2Text: 'A Flask API app focused on task management with core CRUD endpoints and a clean service structure.',
    p3Tag: 'Python / OOP',
    p3Text: 'A comprehensive system experiment that models core banking operations using Python OOP principles.',
    repoBtn: 'Repo',
    projectsCta: 'Explore',
    timelineTitle: 'Journey',
    t1Title: 'Getting Started with HTML and CSS',
    t1Text: 'I took my first steps with HTML and CSS, building basic Front-End websites to gain hands-on practice.',
    t2Title: 'Foundation and Theoretical Depth',
    t2Text: 'I focused on my Back-End, algorithm, and programming fundamentals while improving my general knowledge of computer networks. With the start of my university education, I wrote algorithms in C and Python and strengthened my problem-solving habits.',
    t4Title: 'Entering Microcontrollers with Arduino',
    t4Text: 'I stepped into basic microcontroller development through Arduino projects and gained closer experience with hardware-software interaction.',
    t5Title: 'Python Backend Projects',
    t5Text: 'I started Python Back-End projects, mainly with FastAPI and Flask, and improved my API design and service architecture skills.',
    t6Year: 'Now',
    t6Title: 'Current Focus',
    t6Text: 'Currently, I have started making progress in hardware engineering and embedded systems with FPGA language.',
    contactTitle: 'Contact and Social Media',
    directContact: 'Direct Contact',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    socialTitle: 'Social Media',
    footerSignature: 'Arda ALP - Learn > Build > Iterate.'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const langSwitch = document.querySelector('.lang-switch');

function applyLanguage(lang) {
  const selected = translations[lang] || translations.tr;

  document.documentElement.lang = lang;
  document.title = selected.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (selected[key]) {
      el.textContent = selected[key];
    }
  });

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  if (langSwitch) {
    langSwitch.setAttribute('data-active-lang', lang);
  }
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage('tr');
