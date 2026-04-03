const translations = {
  tr: {
    pageTitle: 'Arda ALP - Portfoy',
    navAbout: 'Hakkimda',
    navProjects: 'Projeler',
    navTimeline: 'Deneyim',
    navContact: 'Iletisim',
    heroLabel: 'Elektrik-Elektronik Muhendisligi Ogrencisi',
    aboutTitle: 'Benim Hakkimda',
    aboutText: 'Dicle Universitesi Elektrik ve Elektronik Muhendisligi ogrencisiyim. 2018\'den bu yana yazilim gelistirme alaninda aktif olarak bireysel projeler uretiyor, farkli dillerde script ve moduller gelistiriyorum. Gomulu sistemler, FPGA, mikrodenetleyici tabanli otomasyon cozumleri ve temel Full-Stack web gelistirme konulariyla ilgileniyorum; Front-End, Back-End ve API mimarisi tarafinda kendimi surekli ileri tasiyorum. Kisisel motivasyonumla teknik birikimimi buyuturken, genel kulturumu gelistirmeyi ve farkli kulturleri tanimayi da bu yolculugun onemli bir parcasi olarak goruyorum.',
    projectsTitle: 'Bazi Projelerim',
    p1Tag: 'API / Backend',
    p1Text: 'Flask tabanli kimlik dogrulama akislarini ve API guvenlik yapisini ornekleyen backend projesi.',
    p2Tag: 'API / Backend',
    p2Text: 'Gorev yonetimi uzerine kurulu, temel CRUD endpoint\'leri ve sade servis mimarisi iceren Flask API uygulamasi.',
    p3Tag: 'Python / OOP',
    p3Text: 'Python OOP prensipleriyle gelistirilmis, temel bankacilik operasyonlarini modelleyen kapsamli bir sistem denemesi.',
    repoBtn: 'Repo',
    projectsCta: 'Goz At',
    timelineTitle: 'Yolculugum',
    t1Title: 'HTML ve CSS ile Baslangic',
    t1Text: 'HTML ve CSS temelleriyle ilk adimlarimi attim; temel seviyede Front-End web siteleri gelistirerek pratik kazandim.',
    t2Title: 'Altyapi ve Teorik Derinlesme',
    t2Text: 'Back-End, algoritma ve programlama altyapim uzerine yogunlastim; bilgisayar aglari alaninda genel kulturumu gelistirmeye calistim. Universite egitiminin baslamasiyla birlikte C ve Python dillerinde algoritmalar yazarak problem cozme refleksimi guclendirdim.',
    t4Title: 'Arduino ile Mikrodenetleyici Girisi',
    t4Text: 'Arduino projeleriyle temel mikrodenetleyici gelistirme alanina adim attim ve donanim-yazilim etkilesimini daha yakindan deneyimledim.',
    t5Title: 'Python Backend Projeleri',
    t5Text: 'Basta FastAPI ve Flask olmak uzere Python tabanli Back-End projeleri gelistirerek API tasarimi ve servis kurgusu tarafinda ilerleme kaydettim.',
    t6Year: 'Simdi',
    t6Title: 'Guncel Odak',
    t6Text: 'Guncel olarak FPGA dili ile donanim muhendisligi ve gomulu sistemler alaninda ilerleme katetmeye basladim.',
    contactTitle: 'Iletisim ve Sosyal Medya',
    directContact: 'Dogrudan Iletisim',
    emailLabel: 'E-Posta',
    phoneLabel: 'Telefon',
    socialTitle: 'Sosyal Medya',
    footerSignature: 'Arda ALP - Ogren > Uret > Gelistir.'
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
