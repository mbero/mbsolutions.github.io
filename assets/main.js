(function () {
  'use strict';
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Copy (EN is the source of truth; PL mirrors it) ---------- */
  var T = {
    en: {
      'skip': 'Skip to content',
      'nav.stack': 'Stack', 'nav.exp': 'Experience', 'nav.cred': 'Credentials', 'nav.contact': 'Contact',
      'role': 'Backend and distributed systems: Java, Spring Boot, Apache Kafka, PostgreSQL.',
      'pitch': 'I build and run backend systems for FinTech and e-commerce: microservices, event-driven pipelines and the data stores behind them. Over 12 years on projects for UBS, Franklin Templeton, Empik and Inter Cars, from carving domains out of a monolith to owning services in production on Kubernetes.',
      'copy': 'Copy email', 'copied': 'Email copied', 'copyfail': 'Copy failed. Email: ',
      'hub.go': 'Read ->',
      'hub.title': 'My engineering notes, in the open',
      'hub.body': 'My public notebook for concepts related to software engineering in general.',
      'log.title': 'Career log, 2013 to 2026',
      'fact.years': 'years of commercial experience in web applications, microservices and distributed systems',
      'fact.sectors.n': 'FinTech and e-commerce',
      'fact.loc.n': 'Poznań, Poland',
      'fact.loc.l': 'Polish native, English fluent. English has been my daily working language in international teams.',
      'stack.h': 'Engineering capabilities',
      'stack.sub': 'Technologies used in recent years, grouped by the part of the system they serve.',
      'stack.be': 'Backend and distributed systems',
      'stack.be.p': 'Microservices and REST APIs on the JVM, with tested persistence and versioned schemas.',
      'stack.data': 'Event streaming and data',
      'stack.data.p': 'Stream processing and Kafka-to-PostgreSQL synchronisation with resilient, lag-aware consumers.',
      'stack.ops': 'Cloud, DevOps and observability',
      'stack.ops.p': 'GitOps delivery across four environments and production diagnostics.',
      'stack.fe': 'Frontend', 'stack.plat': 'Platforms and process', 'stack.ai': 'AI tools',
      'exp.h': 'Experience and architectural impact',
      'exp.sub': 'Six roles, newest first. Open a role for the details.',
      'x.ic.t': 'Software Engineer', 'x.ic.g': 'Event-driven microservices',
      'x.ic.1': 'Developing and maintaining event-driven microservices.',
      'x.fl.c': '(client: UBS)', 'x.fl.t': 'Senior Software Engineer', 'x.fl.g': 'Flowable for a multinational investment bank',
      'x.fl.1': 'Developing custom functionalities and providing support for an existing Flowable implementation in a multinational investment bank.',
      'x.em.t': 'Java Developer', 'x.em.g': "Subscription services at one of Poland's largest e-commerce platforms",
      'x.em.1': 'Backend developer of the Subscriber Management Module behind EmpikGo, EmpikMusic and EmpikPremium.',
      'x.em.2': 'Owned new features from technical planning to deployment, turning business requirements into microservices in a fully remote team.',
      'x.ft.t': 'Software Engineer', 'x.ft.g': 'Mission-critical market data integration platform',
      'x.ft.1': 'Developed a mission-critical data integration and dashboarding platform that financial analysts use to monitor changes in market data: trades, securities and prices.',
      'x.ft.2': 'Worked in English in a distributed engineering team across Poland, the USA and India, over multiple time zones.',
      'x.pc.t': 'Software Developer', 'x.pc.g': 'Greenfield research portal for an ESA-funded project',
      'x.pc.1': 'At the Poznań Supercomputing and Networking Center, co-developed the ROHUB portal (rohub.org) from scratch for the ESA-funded EVEREST project in a three-person team: RESTful APIs in Java and Play Framework, plus the Angular frontend.',
      'x.su.t': 'Implementation Specialist, Programmer', 'x.su.g': 'BPMN-driven process solutions for large organisations',
      'x.su.1': 'Progressed from Junior to Implementation Specialist, delivering BPMN-driven business process solutions: requirements gathering, technical specifications and custom Java and JavaScript modules.',
      'cred.h': 'Certifications and education',
      'cred.msc': 'MSc in Computer Science',
      'cred.msc.p': 'Poznań University of Technology. Data Processing Technologies.',
      'cred.eng': "Engineer's degree in Computer Science",
      'cred.eng.p': 'Polish-Japanese Academy of Information Technology (PJATK), Gdańsk. Web Applications Development.',
      'cred.off': 'Away from the keyboard',
      'cred.off.p': 'Brazilian Jiu-Jitsu black belt (Gracie Barra), strength training and mountain biking.',
      'con.h': 'Want to get in touch?',
      'con.p': 'Email is the fastest way to reach me. You can also find me on LinkedIn and GitHub.',
      'con.mail': 'Open in mail app',
      'theme.toLight': 'Switch to light theme', 'theme.toDark': 'Switch to dark theme'
    },
    pl: {
      'skip': 'Przejdź do treści',
      'nav.stack': 'Technologie', 'nav.exp': 'Doświadczenie', 'nav.cred': 'Certyfikaty', 'nav.contact': 'Kontakt',
      'role': 'Backend i systemy rozproszone: Java, Spring Boot, Apache Kafka, PostgreSQL.',
      'pitch': 'Buduję i utrzymuję systemy backendowe dla branży FinTech i e-commerce: mikroserwisy, przetwarzanie zdarzeń i stojące za nimi bazy danych. Ponad 12 lat w projektach dla UBS, Franklin Templeton, Empiku i Inter Cars, od wydzielania domen z monolitu po odpowiedzialność za usługi na produkcji w Kubernetesie.',
      'copy': 'Kopiuj e-mail', 'copied': 'Skopiowano e-mail', 'copyfail': 'Nie udało się skopiować. E-mail: ',
      'hub.go': 'Czytaj ->',
      'hub.title': 'Moje notatki inżynierskie, publicznie',
      'hub.body': 'Mój publiczny notatnik z zagadnieniami związanymi szeroko z inżynierią oprogramowania.',
      'log.title': 'Przebieg kariery, 2013–2026',
      'fact.years': 'lat komercyjnego doświadczenia w aplikacjach webowych, mikroserwisach i systemach rozproszonych',
      'fact.sectors.n': 'FinTech i e-commerce',
      'fact.loc.n': 'Poznań, Polska',
      'fact.loc.l': 'Polski ojczysty, angielski biegły. Angielski to mój codzienny język pracy w międzynarodowych zespołach.',
      'stack.h': 'Kompetencje inżynierskie',
      'stack.sub': 'Technologie używane w ostatnich latach, pogrupowane według części systemu, której służą.',
      'stack.be': 'Backend i systemy rozproszone',
      'stack.be.p': 'Mikroserwisy i REST API na JVM, z przetestowaną warstwą danych i wersjonowanym schematem.',
      'stack.data': 'Strumienie zdarzeń i dane',
      'stack.data.p': 'Przetwarzanie strumieniowe i synchronizacja Kafka–PostgreSQL z odpornymi konsumentami, świadomymi opóźnienia (lag).',
      'stack.ops': 'Chmura, DevOps i obserwowalność',
      'stack.ops.p': 'Wdrożenia GitOps na czterech środowiskach i diagnostyka produkcyjna.',
      'stack.fe': 'Frontend', 'stack.plat': 'Platformy i procesy', 'stack.ai': 'Narzędzia AI',
      'exp.h': 'Doświadczenie i wpływ na architekturę',
      'exp.sub': 'Sześć ról, od najnowszej. Rozwiń rolę, żeby zobaczyć szczegóły.',
      'x.ic.t': 'Software Engineer', 'x.ic.g': 'Mikroserwisy sterowane zdarzeniami',
      'x.ic.1': 'Rozwój i utrzymanie mikroserwisów sterowanych zdarzeniami.',
      'x.fl.c': '(klient: UBS)', 'x.fl.t': 'Senior Software Engineer', 'x.fl.g': 'Flowable dla międzynarodowego banku inwestycyjnego',
      'x.fl.1': 'Rozwój niestandardowych funkcji i wsparcie istniejącego wdrożenia Flowable w międzynarodowym banku inwestycyjnym.',
      'x.em.t': 'Java Developer', 'x.em.g': 'Usługi subskrypcyjne jednej z największych platform e-commerce w Polsce',
      'x.em.1': 'Programista backendu modułu Subscriber Management, na którym działają EmpikGo, EmpikMusic i EmpikPremium.',
      'x.em.2': 'Prowadziłem nowe funkcje od planowania technicznego po wdrożenie, przekładając wymagania biznesowe na mikroserwisy w w pełni zdalnym zespole.',
      'x.ft.t': 'Software Engineer', 'x.ft.g': 'Krytyczna platforma integracji danych rynkowych',
      'x.ft.1': 'Rozwijałem krytyczną dla biznesu platformę integracji danych i dashboardów, z której analitycy finansowi korzystają do śledzenia zmian danych rynkowych: transakcji, papierów wartościowych i cen.',
      'x.ft.2': 'Praca po angielsku w rozproszonym zespole inżynierskim (Polska, USA, Indie), w wielu strefach czasowych.',
      'x.pc.t': 'Software Developer', 'x.pc.g': 'Portal badawczy budowany od zera dla projektu finansowanego przez ESA',
      'x.pc.1': 'W Poznańskim Centrum Superkomputerowo-Sieciowym współtworzyłem od zera portal ROHUB (rohub.org) dla finansowanego przez ESA projektu EVEREST, w trzyosobowym zespole: REST API w Javie i Play Framework oraz frontend w Angularze.',
      'x.su.t': 'Specjalista ds. wdrożeń, programista', 'x.su.g': 'Rozwiązania procesowe oparte na BPMN dla dużych organizacji',
      'x.su.1': 'Droga od juniora do specjalisty ds. wdrożeń: rozwiązania procesów biznesowych oparte na BPMN, zbieranie wymagań, specyfikacje techniczne i własne moduły w Javie i JavaScripcie.',
      'cred.h': 'Certyfikaty i wykształcenie',
      'cred.msc': 'Magister inżynier informatyki',
      'cred.msc.p': 'Politechnika Poznańska. Technologie przetwarzania danych.',
      'cred.eng': 'Inżynier informatyki',
      'cred.eng.p': 'Polsko-Japońska Akademia Technik Komputerowych (PJATK), Gdańsk. Tworzenie aplikacji internetowych.',
      'cred.off': 'Poza klawiaturą',
      'cred.off.p': 'Czarny pas w brazylijskim jiu-jitsu (Gracie Barra), trening siłowy i kolarstwo górskie.',
      'con.h': 'Chcesz się ze mną skontaktować?',
      'con.p': 'Najszybciej złapiesz mnie mailowo. Znajdziesz mnie też na LinkedInie i GitHubie.',
      'con.mail': 'Otwórz w programie pocztowym',
      'theme.toLight': 'Przełącz na jasny motyw', 'theme.toDark': 'Przełącz na ciemny motyw'
    }
  };

  var ROLES = {
    suncode:   { org: 'Suncode', key: 'x.su.t', d: '03/2013 – 03/2016' },
    pcss:      { org: 'PCSS', key: 'x.pc.t', d: '03/2016 – 01/2019' },
    ft:        { org: 'Franklin Templeton', key: 'x.ft.t', d: '01/2019 – 09/2021' },
    empik:     { org: 'Empik', key: 'x.em.t', d: '09/2021 – 12/2022' },
    flowable:  { org: 'Flowable (UBS)', key: 'x.fl.t', d: '12/2022 – 03/2026' },
    intercars: { org: 'Inter Cars', key: 'x.ic.t', d: '03/2026 – 11/2026' }
  };

  var lang = root.getAttribute('lang') === 'pl' ? 'pl' : 'en';
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || ''; }

  /* ---------- Language ---------- */
  function applyLang() {
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    labelTheme();
    labelLog();
    showRole(current);
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      store.set('lang', lang);
      applyLang();
    });
  });

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('themeBtn');
  function labelTheme() {
    var dark = root.getAttribute('data-theme') !== 'light';
    themeBtn.setAttribute('aria-label', t(dark ? 'theme.toLight' : 'theme.toDark'));
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#000000' : '#FFFFFF');
  }
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    store.set('theme', next);
    labelTheme();
  });

  /* ---------- Career log ---------- */
  var read = document.getElementById('logRead');
  var segs = Array.prototype.slice.call(document.querySelectorAll('#logBar a'));
  var current = 'intercars';
  function line(k) { var r = ROLES[k]; return r.d + '  ' + r.org + ', ' + t(r.key); }
  function showRole(k) {
    read.textContent = line(k);
    segs.forEach(function (s) { s.classList.toggle('is-on', s.getAttribute('data-k') === k); });
  }
  function labelLog() {
    segs.forEach(function (s) { s.setAttribute('aria-label', line(s.getAttribute('data-k'))); });
  }
  segs.forEach(function (s) {
    var k = s.getAttribute('data-k');
    s.addEventListener('mouseenter', function () { showRole(k); });
    s.addEventListener('focus', function () { showRole(k); });
    s.addEventListener('click', function () {
      current = k;
      var target = document.querySelector(s.getAttribute('href'));
      if (target && target.tagName === 'DETAILS') target.open = true;
    });
  });
  document.getElementById('logBar').addEventListener('mouseleave', function () { showRole(current); });

  /* ---------- Copy email + toast ---------- */
  var toast = document.getElementById('toast'), toastTimer;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
  }
  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var done = function () { say(t('copied')); };
      var fail = function () { legacyCopy(text) ? done() : say(t('copyfail') + text); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fail);
      else fail();
    });
  });

  /* ---------- Logo label (touch devices have no hover) ---------- */
  var mark = document.querySelector('.mark'), markTimer;
  if (mark) mark.addEventListener('click', function () {
    mark.classList.add('tip');
    clearTimeout(markTimer);
    markTimer = setTimeout(function () { mark.classList.remove('tip'); }, 2500);
  });

  /* ---------- Scroll reveal ---------- */
  var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motionOK && 'IntersectionObserver' in window) {
    var items = document.querySelectorAll('.sect__head, .sect .card, .roles');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  applyLang();
})();
