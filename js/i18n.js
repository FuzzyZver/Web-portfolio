// ============================================================
// Tranlate file
// Language codes: en, ru, de, es, pl
// ============================================================

const translations = {

  // ──────────────────────────────────────────────
  // 🇬🇧 ENGLISH
  // ──────────────────────────────────────────────
  en: {
    nav_home:     "Home",
    nav_journey:  "My Journey",
    nav_projects: "Projects",
    nav_gallery:  "Gallery",
    nav_contact:  "Contact",

    hero_name:     "Andrew Zverev",
    hero_role:     "Game Developer | Unity",
    hero_subtitle: "Doing what I love — making games — since 2023",
    hero_cta:      "View Projects",

    about_title:  "About Me",
    about_text1:  "I'm Andrew, I'm 20 years old and I've been making games for 3 years now. I'm a Junior+ game developer. From a young age I was a very creative person with a vivid imagination, and more than anything I wanted to express my inner world through my future profession. Along the way I got into programming and loved games, so I decided to combine the two.",
    about_text2:  "Outside of work: I do sports at home and play padel on the court with a friend, I'm quite well-read, and I enjoy studying history.",
    skills_title: "Technical Skills",

    journey_title:    "My Journey",
    journey_subtitle: "From the first prototype to real releases — the story of my growth as a game developer",

    timeline: [
      { year: "2023",            icon: "🌱", title: "First Steps",       text: "Discovered game development and started learning Unity and C#." },
      { year: "Spring 2024",     icon: "🏆", title: "First Award",       text: "Won first place in mobile and PC game development competitions across the Belgorod region." },
      { year: "Summer 2024",     icon: "🎮", title: "First Game",        text: "Released my first mobile game — Baloons." },
      { year: "First half 2025", icon: "📚", title: "Deep Dive",         text: "Studied the Data-Oriented approach together with the LeoECS framework." },
      { year: "Autumn 2025",     icon: "🔧", title: "Experiments",       text: "Built prototypes and experimented with mechanics and tools. Released the game Dize." },
      { year: "Winter 2026",     icon: "🌟", title: "Mini-game Launch",  text: "Released Kitty-Claus in winter. Stumbled a bit — will do better next time." },
      { year: "2026 — Now",      icon: "⚡", title: "Now",               text: "Working on a new project and actively looking for a job. Sharing the process in my Telegram channel." },
    ],

    current_title:        "Current Project",
    current_subtitle:     "What I'm working on right now",
    current_badge:        "In Development",
    current_game_title:   "Way to Home",
    current_description:  "A PSX-style horror with a corridor open world. The player's main goal is to make it home from the store alive and in one piece — which the monsters lurking in the night will do their best to prevent...",
    current_progress:     "Development progress",

    projects_title: "Completed Projects",
    projects: [
      {
        title:   "Baloons",
        desc:    "My first solo project — a small arcade game developed over 3 months.",
        tags:    ["Unity", "C#", "FirstProject"],
        details: "Gameplay: the player bounces a ball upward through an endless vertical level, collecting coins and boosts without letting the ball hit the floor. Link: https://appgallery.huawei.com/app/C111348147",
        // ← Добавь пути к скриншотам: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.jpg"]
        screenshots: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.png","assets/projects/baloons/3.jpg"],
      },
      {
        title:   "Dize",
        desc:    "An experimental game I made in just 2 days.",
        tags:    ["Unity", "C#", "LeoEcs"],
        details: "Gameplay: there is a game board with three pairs of columns. The player places dice on their 3 columns, and the opponent on theirs. Each turn a die is rolled and placed in one of the columns. Matching values in a player's column multiply; matching values in the opponent's column are removed. The goal is to score higher than your opponent.",
        screenshots: ["assets/projects/dize/1.png", "assets/projects/dize/2.png","assets/projects/dize/3.png"],
      },
      {
        title:   "Kitty-Claus",
        desc:    "A small runner game I made as a New Year event project.",
        tags:    ["Unity", "C#", "LeoEcs", "DOTween"],
        details: "Gameplay: at the start the player, as a cat, reads letters from other cats, remembers their wishes, and packs gifts into a sack — the packing itself is a separate mechanic where you physically toss gift-shaped objects with physics into the sack. Then Santa-cat sets off to deliver them.",
        screenshots: ["assets/projects/kitty claus/1.png", "assets/projects/kitty claus/2.png","assets/projects/kitty claus/3.png"],
      },
    ],

    achievements_title:    "Achievements",
    achievements_subtitle: "Awards, competitions and milestones",

    gallery_title:    "Dev Gallery",
    gallery_subtitle: "Behind the scenes — the process of creating games",

    inspo_title:    "Games That Inspired Me",
    inspo_subtitle: "Masterpieces that shaped my approach to game development",

    contact_title:    "Get In Touch",
    contact_subtitle: "Open to new projects and collaborations. Let's create something amazing together!",
    contact_email:    "Email",
    contact_github:   "GitHub",
    contact_itch:     "itch.io",
    contact_youtube:  "YouTube",
    contact_tg:       "Telegram",
    contact_tg_ch:    "TG Channel",
    contact_discord:  "Discord",

    footer: "© 2026 Andrew Zverev. All rights reserved.",
  },

  // ──────────────────────────────────────────────
  // 🇷🇺 РУССКИЙ
  // ──────────────────────────────────────────────
  ru: {
    nav_home:     "Главная",
    nav_journey:  "Мой путь",
    nav_projects: "Проекты",
    nav_gallery:  "Галерея",
    nav_contact:  "Контакты",

    hero_name:     "Андрей Зверев",
    hero_role:     "Game Developer | Unity",
    hero_subtitle: "Занимаюсь моей любимой разработкой игр с 2023 года",
    hero_cta:      "Посмотреть проекты",

    about_title:  "Обо мне",
    about_text1:  "Я Андрей, мне 20 лет и уже как 3 года я занимаюсь разработкой игр. Я Junior+ разработчик игр. С юных лет я был очень творческим человеком с богатой фантазией и больше всего мне хотелось реализовать свой внутренний мир через свою будущую профессию. Попутно я занимался программированием и любил игры, поэтому решил связать эти две вещи во едино.",
    about_text2:  "Из личной жизни: я занимаюсь спортом дома и играю в падл на корте с другом, довольно начитанный, увлекаюсь изучением истории.",
    skills_title: "Технические навыки",

    journey_title:    "Мой путь",
    journey_subtitle: "От первого прототипа до успешных релизов — история моего развития как разработчика игр",

    timeline: [
      { year: "2023",                  icon: "🌱", title: "Первые шаги",           text: "Открыл для себя разработку игр, начал изучать Unity и C#." },
      { year: "Весна 2024",            icon: "🏆", title: "Первая награда",         text: "Занял первые места в компетенциях разработки мобильных и компьютерных игр по Белгородской области." },
      { year: "Лето 2024",             icon: "🎮", title: "Первая игра",            text: "Выпустил свою первую игру на телефоны — Baloons." },
      { year: "Первая половина 2025",  icon: "📚", title: "Углублённое изучение",   text: "Изучал Data-Oriented подход вместе с фреймворком LeoEcs." },
      { year: "Осень 2025",            icon: "🔧", title: "Эксперименты",           text: "Создавал прототипы и экспериментировал с механиками и инструментами. Выпустил игру Dize." },
      { year: "Зима 2026",             icon: "🌟", title: "Запуск мини-игры",       text: "Выпустил зимой игру Kitty-Claus. Немного облажался, в следующий раз буду стараться лучше." },
      { year: "2026 — сейчас",         icon: "⚡", title: "Сейчас",                 text: "Работаю над новым проектом и активно ищу работу, делюсь процессом в своём телеграмм канале." },
    ],

    current_title:        "Текущий проект",
    current_subtitle:     "Над чем я работаю прямо сейчас",
    current_badge:        "В разработке",
    current_game_title:   "Way to Home",
    current_description:  "Хоррор в стиле PSX с коридорным открытым миром. Основная задача игрока — пройти путь от магазина до дома живым и невредимым, чему будут активно мешать монстры, прячущиеся в ночи...",
    current_progress:     "Прогресс разработки",

    projects_title: "Завершённые проекты",
    projects: [
      {
        title:   "Baloons",
        desc:    "Мой первый самостоятельный проект, игра которую я разрабатывал. Маленькая аркада, разработанная за 3 месяца.",
        tags:    ["Unity", "C#", "FirstProject"],
        details: "Геймплей: задача игрока подкидывать шарик наверх через бесконечный вертикальный уровень, собирая монетки и бусты, при этом не уронив шарик на пол.",
        // ← Добавь пути к скриншотам: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.jpg"]
        screenshots: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.png","assets/projects/baloons/3.jpg"],
        link: "https://appgallery.huawei.com/app/C111348147",
      },
      {
        title:   "Dize",
        desc:    "Игра-эксперимент, которую я сделал всего за 2 дня.",
        tags:    ["Unity", "C#", "LeoEcs"],
        details: "Геймплей: существует игровое поле, на котором расположены три пары столбцов. Игрок может ставить игральные кости на свои 3 столбца, а соперник — на свои 3 столбца. Каждый ход подкидывается кость, игрок ставит её в один из столбцов. Одинаковые значения на кубах в столбце игрока множатся, а в столбце напротив у соперника — удаляются с поля. Задача — набрать значение больше соперника.",
        screenshots: ["assets/projects/dize/1.png", "assets/projects/dize/2.png","assets/projects/dize/3.png"],
        link: "https://fuzzyzver.itch.io/dize",
      },
      {
        title:   "Kitty-Claus",
        desc:    "Небольшая игра в жанре runner, которую я сделал в качестве новогоднего ивента.",
        tags:    ["Unity", "C#", "LeoEcs", "DOTween"],
        details: "Геймплей: в начале игры игрок в роли кота читает письма от других котов, запоминает их пожелания и складывает подарки в мешок. Причём сам процесс складывания — отдельная механика: игрок буквально закидывает подарки с физикой в мешок. После этого кот-Санта отправляется доставлять подарки.",
        screenshots: ["assets/projects/kitty claus/1.png", "assets/projects/kitty claus/2.png","assets/projects/kitty claus/3.png"],
        link: "https://fuzzyzver.itch.io/kitty-claus",
      },
    ],

    achievements_title:    "Достижения",
    achievements_subtitle: "Награды, конкурсы и важные вехи",

    gallery_title:    "Галерея разработки",
    gallery_subtitle: "Заглянем за кулисы — процесс создания игр",

    inspo_title:    "Игры, которые меня вдохновили",
    inspo_subtitle: "Шедевры, которые повлияли на мой подход к разработке",

    contact_title:    "Свяжитесь со мной",
    contact_subtitle: "Открыт для новых проектов и сотрудничества. Давайте создадим что-то потрясающее вместе!",
    contact_email:    "Email",
    contact_github:   "GitHub",
    contact_itch:     "itch.io",
    contact_youtube:  "YouTube",
    contact_tg:       "Telegram",
    contact_tg_ch:    "TG Канал",
    contact_discord:  "Discord",

    footer: "© 2026 Андрей Зверев. Все права защищены.",
  },

  // ──────────────────────────────────────────────
  // 🇩🇪 DEUTSCH
  // ──────────────────────────────────────────────
  de: {
    nav_home:     "Startseite",
    nav_journey:  "Mein Weg",
    nav_projects: "Projekte",
    nav_gallery:  "Galerie",
    nav_contact:  "Kontakt",

    hero_name:     "Andrei Swerjow",
    hero_role:     "Game Developer | Unity",
    hero_subtitle: "Ich mache, was ich liebe — Spiele entwickeln — seit 2023",
    hero_cta:      "Projekte ansehen",

    about_title:  "Über mich",
    about_text1:  "Ich bin Andrei, 20 Jahre alt, und entwickle seit 3 Jahren Spiele. Ich bin ein Junior+-Spieleentwickler. Schon von klein auf war ich ein sehr kreativer Mensch mit einer lebhaften Phantasie — und am meisten wollte ich meine innere Welt durch meinen zukünftigen Beruf ausdrücken. Nebenbei habe ich mich mit Programmierung beschäftigt und Spiele geliebt, also beschloss ich, beides zu verbinden.",
    about_text2:  "Privat: Ich treibe Sport zu Hause und spiele Padel auf dem Platz mit einem Freund, bin ziemlich belesen und beschäftige mich gerne mit Geschichte.",
    skills_title: "Technische Fähigkeiten",

    journey_title:    "Mein Weg",
    journey_subtitle: "Vom ersten Prototyp bis zu echten Releases — die Geschichte meiner Entwicklung als Game Developer",

    timeline: [
      { year: "2023",                    icon: "🌱", title: "Erste Schritte",          text: "Entdeckte die Spieleentwicklung und begann, Unity und C# zu lernen." },
      { year: "Frühling 2024",           icon: "🏆", title: "Erste Auszeichnung",      text: "Errang den ersten Platz in Wettbewerben für Mobile- und PC-Spieleentwicklung in der Region Belgorod." },
      { year: "Sommer 2024",             icon: "🎮", title: "Erstes Spiel",            text: "Veröffentlichte mein erstes Mobilspiel — Baloons." },
      { year: "Erste Hälfte 2025",       icon: "📚", title: "Vertiefung",              text: "Studierte den Data-Oriented-Ansatz zusammen mit dem LeoECS-Framework." },
      { year: "Herbst 2025",             icon: "🔧", title: "Experimente",             text: "Erstellte Prototypen und experimentierte mit Mechaniken und Tools. Veröffentlichte das Spiel Dize." },
      { year: "Winter 2026",             icon: "🌟", title: "Mini-Spiel-Launch",       text: "Veröffentlichte Kitty-Claus im Winter. Habe ein bisschen Fehler gemacht — beim nächsten Mal besser." },
      { year: "2026 — Jetzt",            icon: "⚡", title: "Jetzt",                   text: "Arbeite an einem neuen Projekt und suche aktiv nach Arbeit. Teile den Prozess in meinem Telegram-Kanal." },
    ],

    current_title:        "Aktuelles Projekt",
    current_subtitle:     "Woran ich gerade arbeite",
    current_badge:        "In Entwicklung",
    current_game_title:   "Way to Home",
    current_description:  "Ein PSX-Stil-Horror mit einer Korridor-Offenen-Welt. Das Hauptziel des Spielers ist es, den Weg vom Laden nach Hause lebend und unverletzt zu überstehen — was die in der Nacht lauernden Monster aktiv verhindern werden...",
    current_progress:     "Entwicklungsfortschritt",

    projects_title: "Abgeschlossene Projekte",
    projects: [
      {
        title:   "Baloons",
        desc:    "Mein erstes eigenständiges Projekt — ein kleines Arcade-Spiel, das ich in 3 Monaten entwickelt habe.",
        tags:    ["Unity", "C#", "FirstProject"],
        details: "Gameplay: Der Spieler wirft einen Ball durch ein endloses vertikales Level nach oben, sammelt Münzen und Boosts ein, ohne den Ball auf den Boden fallen zu lassen. Link: https://appgallery.huawei.com/app/C111348147",
        screenshots: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.png","assets/projects/baloons/3.jpg"],
      },
      {
        title:   "Dize",
        desc:    "Ein Experiment-Spiel, das ich in nur 2 Tagen erstellt habe.",
        tags:    ["Unity", "C#", "LeoEcs"],
        details: "Gameplay: Es gibt ein Spielfeld mit drei Spaltenpaaren. Der Spieler platziert Würfel auf seinen 3 Spalten, der Gegner auf seinen 3 Spalten. Jede Runde wird ein Würfel geworfen und in einer Spalte platziert. Gleiche Werte in der eigenen Spalte multiplizieren sich; gleiche Werte in der gegnerischen Spalte werden entfernt. Ziel ist es, mehr Punkte als der Gegner zu sammeln.",
        screenshots: ["assets/projects/dize/1.png", "assets/projects/dize/2.png","assets/projects/dize/3.png"],
      },
      {
        title:   "Kitty-Claus",
        desc:    "Ein kleines Runner-Spiel, das ich als Neujahrs-Event-Projekt erstellt habe.",
        tags:    ["Unity", "C#", "LeoEcs", "DOTween"],
        details: "Gameplay: Zu Beginn liest der Spieler als Katze Briefe anderer Katzen, merkt sich deren Wünsche und packt Geschenke in einen Sack — das Einpacken selbst ist eine eigene Mechanik, bei der Geschenke mit Physik-Simulation in den Sack geworfen werden. Danach macht sich Weihnachtsmann-Katze auf den Weg, die Geschenke zu liefern.",
        screenshots: ["assets/projects/kitty claus/1.png", "assets/projects/kitty claus/2.png","assets/projects/kitty claus/3.png"],
      },
    ],

    achievements_title:    "Auszeichnungen",
    achievements_subtitle: "Preise, Wettbewerbe und Meilensteine",

    gallery_title:    "Entwicklungsgalerie",
    gallery_subtitle: "Hinter den Kulissen — der Prozess der Spielentwicklung",

    inspo_title:    "Spiele, die mich inspiriert haben",
    inspo_subtitle: "Meisterwerke, die meinen Ansatz zur Spielentwicklung geprägt haben",

    contact_title:    "Kontakt aufnehmen",
    contact_subtitle: "Offen für neue Projekte und Zusammenarbeit. Lass uns gemeinsam etwas Großartiges schaffen!",
    contact_email:    "E-Mail",
    contact_github:   "GitHub",
    contact_itch:     "itch.io",
    contact_youtube:  "YouTube",
    contact_tg:       "Telegram",
    contact_tg_ch:    "TG-Kanal",
    contact_discord:  "Discord",

    footer: "© 2026 Andrei Swerjow. Alle Rechte vorbehalten.",
  },

  // ──────────────────────────────────────────────
  // 🇪🇸 ESPAÑOL
  // ──────────────────────────────────────────────
  es: {
    nav_home:     "Inicio",
    nav_journey:  "Mi camino",
    nav_projects: "Proyectos",
    nav_gallery:  "Galería",
    nav_contact:  "Contacto",

    hero_name:     "Andréi Zverev",
    hero_role:     "Game Developer | Unity",
    hero_subtitle: "Haciendo lo que amo — crear juegos — desde 2023",
    hero_cta:      "Ver proyectos",

    about_title:  "Sobre mí",
    about_text1:  "Soy Andréi, tengo 20 años y llevo 3 años desarrollando videojuegos. Soy desarrollador de juegos Junior+. Desde pequeño fui una persona muy creativa con una imaginación viva, y más que nada quería expresar mi mundo interior a través de mi futura profesión. Por el camino me interesé por la programación y amaba los juegos, así que decidí unir ambas cosas.",
    about_text2:  "En lo personal: hago deporte en casa y juego al pádel en la cancha con un amigo, soy bastante lector y me apasiona el estudio de la historia.",
    skills_title: "Habilidades técnicas",

    journey_title:    "Mi camino",
    journey_subtitle: "Del primer prototipo a lanzamientos reales — la historia de mi crecimiento como desarrollador de juegos",

    timeline: [
      { year: "2023",                    icon: "🌱", title: "Primeros pasos",          text: "Descubrí el desarrollo de juegos y empecé a aprender Unity y C#." },
      { year: "Primavera 2024",          icon: "🏆", title: "Primer premio",           text: "Obtuve el primer lugar en competencias de desarrollo de juegos móviles y de PC en la región de Belgorod." },
      { year: "Verano 2024",             icon: "🎮", title: "Primer juego",            text: "Lancé mi primer juego para móviles — Baloons." },
      { year: "Primera mitad de 2025",   icon: "📚", title: "Estudio profundo",        text: "Estudié el enfoque Data-Oriented junto con el framework LeoECS." },
      { year: "Otoño 2025",              icon: "🔧", title: "Experimentos",            text: "Creé prototipos y experimenté con mecánicas y herramientas. Lancé el juego Dize." },
      { year: "Invierno 2026",           icon: "🌟", title: "Lanzamiento de mini-juego", text: "Lancé Kitty-Claus en invierno. Me equivoqué un poco — la próxima vez lo haré mejor." },
      { year: "2026 — Ahora",            icon: "⚡", title: "Ahora",                   text: "Trabajo en un nuevo proyecto y busco activamente empleo. Comparto el proceso en mi canal de Telegram." },
    ],

    current_title:        "Proyecto actual",
    current_subtitle:     "En qué estoy trabajando ahora mismo",
    current_badge:        "En desarrollo",
    current_game_title:   "Way to Home",
    current_description:  "Un horror de estilo PSX con un mundo abierto en corredor. El objetivo principal del jugador es llegar sano y salvo desde la tienda hasta casa — algo que los monstruos que acechan en la noche harán todo lo posible por impedir...",
    current_progress:     "Progreso de desarrollo",

    projects_title: "Proyectos completados",
    projects: [
      {
        title:   "Baloons",
        desc:    "Mi primer proyecto en solitario — un pequeño juego de arcade desarrollado en 3 meses.",
        tags:    ["Unity", "C#", "FirstProject"],
        details: "Jugabilidad: el jugador lanza una pelota hacia arriba a través de un nivel vertical infinito, recogiendo monedas y potenciadores sin dejar que la pelota toque el suelo. Enlace: https://appgallery.huawei.com/app/C111348147",
        screenshots: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.png","assets/projects/baloons/3.jpg"],
      },
      {
        title:   "Dize",
        desc:    "Un juego experimental que hice en solo 2 días.",
        tags:    ["Unity", "C#", "LeoEcs"],
        details: "Jugabilidad: existe un tablero de juego con tres pares de columnas. El jugador coloca dados en sus 3 columnas y el adversario en las suyas. Cada turno se lanza un dado y se coloca en una columna. Los valores iguales en la columna del jugador se multiplican; los valores iguales en la columna del adversario se eliminan del tablero. El objetivo es superar la puntuación del adversario.",
        screenshots: ["assets/projects/dize/1.png", "assets/projects/dize/2.png","assets/projects/dize/3.png"],
      },
      {
        title:   "Kitty-Claus",
        desc:    "Un pequeño juego de runner que hice como proyecto de evento de Año Nuevo.",
        tags:    ["Unity", "C#", "LeoEcs", "DOTween"],
        details: "Jugabilidad: al inicio el jugador, como un gato, lee cartas de otros gatos, recuerda sus deseos y mete regalos en un saco — el propio proceso de meter los regalos es una mecánica aparte donde se lanzan objetos con física al saco. Después el gato-Papá Noel sale a repartir los regalos.",
        screenshots: ["assets/projects/kitty claus/1.png", "assets/projects/kitty claus/2.png","assets/projects/kitty claus/3.png"],
      },
    ],

    achievements_title:    "Logros",
    achievements_subtitle: "Premios, concursos e hitos importantes",

    gallery_title:    "Galería de desarrollo",
    gallery_subtitle: "Entre bastidores — el proceso de crear juegos",

    inspo_title:    "Juegos que me inspiraron",
    inspo_subtitle: "Obras maestras que marcaron mi enfoque del desarrollo de juegos",

    contact_title:    "Contáctame",
    contact_subtitle: "Abierto a nuevos proyectos y colaboraciones. ¡Creemos algo increíble juntos!",
    contact_email:    "Email",
    contact_github:   "GitHub",
    contact_itch:     "itch.io",
    contact_youtube:  "YouTube",
    contact_tg:       "Telegram",
    contact_tg_ch:    "Canal TG",
    contact_discord:  "Discord",

    footer: "© 2026 Andréi Zverev. Todos los derechos reservados.",
  },

  // ──────────────────────────────────────────────
  // 🇵🇱 POLSKI
  // ──────────────────────────────────────────────
  pl: {
    nav_home:     "Strona główna",
    nav_journey:  "Moja droga",
    nav_projects: "Projekty",
    nav_gallery:  "Galeria",
    nav_contact:  "Kontakt",

    hero_name:     "Andriej Zwieriew",
    hero_role:     "Game Developer | Unity",
    hero_subtitle: "Robię to, co kocham — tworzę gry — od 2023 roku",
    hero_cta:      "Zobacz projekty",

    about_title:  "O mnie",
    about_text1:  "Jestem Andriej, mam 20 lat i od 3 lat tworzę gry. Jestem programistą gier na poziomie Junior+. Od najmłodszych lat byłem bardzo kreatywną osobą z bogatą wyobraźnią i najbardziej chciałem realizować swój wewnętrzny świat przez przyszły zawód. Przy okazji zajmowałem się programowaniem i uwielbiałem gry, więc postanowiłem połączyć te dwie rzeczy.",
    about_text2:  "Prywatnie: ćwiczę w domu i gram w padla na korcie z przyjacielem, dużo czytam i pasjonuję się historią.",
    skills_title: "Umiejętności techniczne",

    journey_title:    "Moja droga",
    journey_subtitle: "Od pierwszego prototypu do prawdziwych wydań — historia mojego rozwoju jako game developera",

    timeline: [
      { year: "2023",                    icon: "🌱", title: "Pierwsze kroki",          text: "Odkryłem tworzenie gier i zacząłem uczyć się Unity i C#." },
      { year: "Wiosna 2024",             icon: "🏆", title: "Pierwsza nagroda",        text: "Zdobyłem pierwsze miejsca w konkursach z zakresu tworzenia gier mobilnych i komputerowych w obwodzie biełgorodzkim." },
      { year: "Lato 2024",               icon: "🎮", title: "Pierwsza gra",            text: "Wydałem swoją pierwszą grę mobilną — Baloons." },
      { year: "Pierwsza połowa 2025",    icon: "📚", title: "Pogłębiona nauka",        text: "Studiowałem podejście Data-Oriented wraz z frameworkiem LeoECS." },
      { year: "Jesień 2025",             icon: "🔧", title: "Eksperymenty",            text: "Tworzyłem prototypy i eksperymentowałem z mechanikami i narzędziami. Wydałem grę Dize." },
      { year: "Zima 2026",               icon: "🌟", title: "Premiera mini-gry",       text: "Wydałem zimą Kitty-Claus. Trochę poległem — następnym razem będę się starał bardziej." },
      { year: "2026 — teraz",            icon: "⚡", title: "Teraz",                   text: "Pracuję nad nowym projektem i aktywnie szukam pracy. Dzielę się procesem na swoim kanale Telegram." },
    ],

    current_title:        "Aktualny projekt",
    current_subtitle:     "Nad czym właśnie pracuję",
    current_badge:        "W trakcie tworzenia",
    current_game_title:   "Way to Home",
    current_description:  "Horror w stylu PSX z korytarzowym otwartym światem. Głównym zadaniem gracza jest dotarcie żywym i zdrowym ze sklepu do domu — czemu aktywnie będą przeszkadzać potwory czające się w nocy...",
    current_progress:     "Postęp prac",

    projects_title: "Ukończone projekty",
    projects: [
      {
        title:   "Baloons",
        desc:    "Mój pierwszy samodzielny projekt — mała gra zręcznościowa stworzona w ciągu 3 miesięcy.",
        tags:    ["Unity", "C#", "FirstProject"],
        details: "Rozgrywka: zadaniem gracza jest podrzucanie piłki w górę przez nieskończony pionowy poziom, zbierając monety i ulepszenia, nie pozwalając piłce spaść na podłogę. Link: https://appgallery.huawei.com/app/C111348147",
        screenshots: ["assets/projects/baloons/1.jpg", "assets/projects/baloons/2.png","assets/projects/baloons/3.jpg"],
      },
      {
        title:   "Dize",
        desc:    "Eksperymentalna gra, którą zrobiłem w zaledwie 2 dni.",
        tags:    ["Unity", "C#", "LeoEcs"],
        details: "Rozgrywka: istnieje plansza z trzema parami kolumn. Gracz umieszcza kości na swoich 3 kolumnach, a przeciwnik na swoich 3 kolumnach. Każda runda to rzut kością umieszczaną w jednej z kolumn. Takie same wartości w kolumnie gracza mnożą się; takie same wartości w kolumnie przeciwnika są usuwane z planszy. Celem jest uzbieranie więcej punktów niż przeciwnik.",
        screenshots: ["assets/projects/dize/1.png", "assets/projects/dize/2.png","assets/projects/dize/3.png"],
      },
      {
        title:   "Kitty-Claus",
        desc:    "Mała gra runner zrobiona jako projekt na wydarzenie noworoczne.",
        tags:    ["Unity", "C#", "LeoEcs", "DOTween"],
        details: "Rozgrywka: na początku gracz jako kot czyta listy od innych kotów, zapamiętuje ich życzenia i pakuje prezenty do worka — samo pakowanie to osobna mechanika, gdzie dosłownie wrzuca się prezenty z fizyką do worka. Następnie Kot-Mikołaj wyrusza, by dostarczyć prezenty.",
        screenshots: ["assets/projects/kitty claus/1.png", "assets/projects/kitty claus/2.png","assets/projects/kitty claus/3.png"],
      },
    ],

    achievements_title:    "Osiągnięcia",
    achievements_subtitle: "Nagrody, konkursy i ważne kamienie milowe",

    gallery_title:    "Galeria deweloperska",
    gallery_subtitle: "Za kulisami — proces tworzenia gier",

    inspo_title:    "Gry, które mnie zainspirowały",
    inspo_subtitle: "Arcydzieła, które ukształtowały moje podejście do tworzenia gier",

    contact_title:    "Skontaktuj się ze mną",
    contact_subtitle: "Otwarty na nowe projekty i współpracę. Stwórzmy razem coś niesamowitego!",
    contact_email:    "E-mail",
    contact_github:   "GitHub",
    contact_itch:     "itch.io",
    contact_youtube:  "YouTube",
    contact_tg:       "Telegram",
    contact_tg_ch:    "Kanał TG",
    contact_discord:  "Discord",

    footer: "© 2026 Andriej Zwieriew. Wszelkie prawa zastrzeżone.",
  },
};

const currentProject = {
  name:     "Way to Home",
  progress: 32,
  tags:     ["Unity", "C#", "LeoEcs", "DOTween"],
  image:    "assets/current/wwww.gif",
};

const achievements = [
  {
    year:    "2024",
    place:   "1-е место",
    org:     "Профессионалы 2024",
    desc_ru: "1 место по Белгородской области в компетенции «Разработчик мобильных игр»",
    desc_en: "1st place in the Belgorod region in the Mobile Game Developer competency",
    desc_de: "1. Platz in der Region Belgorod in der Kompetenz «Mobile Game Developer»",
    desc_es: "1.er lugar en la región de Belgorod en la competencia «Desarrollador de juegos móviles»",
    desc_pl: "1. miejsce w obwodzie biełgorodzkim w kompetencji «Twórca gier mobilnych»",
    icon:    "🥇",
  },
  {
    year:    "2024",
    place:   "1-е место",
    org:     "Профессионалы 2024",
    desc_ru: "1 место по Белгородской области в компетенции «Разработка компьютерных и мультимедийных приложений» (комп. игры)",
    desc_en: "1st place in the Belgorod region in the Computer & Multimedia Application Development competency (PC games)",
    desc_de: "1. Platz in der Region Belgorod in der Kompetenz «Entwicklung von Computer- und Multimedia-Anwendungen» (PC-Spiele)",
    desc_es: "1.er lugar en la región de Belgorod en la competencia «Desarrollo de aplicaciones informáticas y multimedia» (juegos de PC)",
    desc_pl: "1. miejsce w obwodzie biełgorodzkim w kompetencji «Tworzenie aplikacji komputerowych i multimedialnych» (gry PC)",
    icon:    "🥇",
  },
];

// Игры-вдохновители
const inspirations = [
  {
    title:    "Hollow Knight",
    studio:   "Team Cherry",
    year:     "2017",
    image:    "assets/inspo/hollow-knight.jpg",
    emoji:    "🦋",
    quote_ru: "Невероятный, наполненный деталями мир, покоривший мой разум.",
    quote_en: "An incredible world full of details that captured my mind.",
    quote_de: "Eine unglaubliche, detailreiche Welt, die meinen Geist in ihren Bann gezogen hat.",
    quote_es: "Un mundo increíble lleno de detalles que cautivó mi mente.",
    quote_pl: "Niesamowity, pełen szczegółów świat, który zawładnął moim umysłem.",
  },
  {
    title:    "Bendy and the Ink Machine",
    studio:   "Joey Drew Studios Inc.",
    year:     "2017",
    image:    "assets/inspo/bendy.jpg",
    emoji:    "🖋️",
    quote_ru: "Инди-игра с уникальной стилистикой, показавшая что мечты воплощаются в реальность.",
    quote_en: "An indie game with a unique style that showed me dreams can become reality.",
    quote_de: "Ein Indie-Spiel mit einzigartigem Stil, das mir gezeigt hat, dass Träume Wirklichkeit werden können.",
    quote_es: "Un juego indie con un estilo único que me demostró que los sueños se hacen realidad.",
    quote_pl: "Gra indie z unikalną stylistyką, która pokazała mi, że marzenia mogą stać się rzeczywistością.",
  },
  {
    title:    "Sally Face",
    studio:   "Portable Moose",
    year:     "2018",
    image:    "assets/inspo/sallyface.jpg",
    emoji:    "🎭",
    quote_ru: "Sally Face показала мне, как написать интересную самобытную историю.",
    quote_en: "Sally Face showed me how to write an interesting, original story.",
    quote_de: "Sally Face hat mir gezeigt, wie man eine interessante, eigenständige Geschichte schreibt.",
    quote_es: "Sally Face me mostró cómo escribir una historia interesante y original.",
    quote_pl: "Sally Face pokazała mi, jak napisać interesującą i oryginalną historię.",
  },
  {
    title:    "Crusader Kings 3",
    studio:   "Paradox Interactive",
    year:     "2020",
    image:    "assets/inspo/cr3.jpg",
    emoji:    "👑",
    quote_ru: "Игра, открывшая для меня жанр ролевых стратегий.",
    quote_en: "The game that introduced me to the genre of role-playing strategy.",
    quote_de: "Das Spiel, das mir das Genre der Rollenspielstrategien eröffnet hat.",
    quote_es: "El juego que me abrió las puertas al género de la estrategia de rol.",
    quote_pl: "Gra, która otworzyła mi drzwi do gatunku strategii fabularnych.",
  },
];

const galleryItems = [
  {
    src:      "assets/gallery/ffff.gif",
    emoji:    "🎮",
    title_ru: "Coloress Sky",
    title_en: "Coloress Sky",
    title_de: "Coloress Sky",
    title_es: "Coloress Sky",
    title_pl: "Coloress Sky",
    desc_ru:  "Она могла стать моим первым проектом, но так и не вышла. Здесь представлен прототип первого уровня.",
    desc_en:  "It could have been my first project, but it never came out. Here is the prototype of the first level.",
    desc_de:  "Es hätte mein erstes Projekt werden können, wurde aber nie veröffentlicht. Hier ist der Prototyp des ersten Levels.",
    desc_es:  "Podría haber sido mi primer proyecto, pero nunca salió. Aquí se muestra el prototipo del primer nivel.",
    desc_pl:  "Mogło to być moje pierwsze dzieło, ale nigdy nie zostało wydane. Tutaj widać prototyp pierwszego poziomu.",
  },
  {
    src:      "assets/gallery/rrrr.gif",
    emoji:    "❤️",
    title_ru: "MyLove",
    title_en: "MyLove",
    title_de: "MyLove",
    title_es: "MyLove",
    title_pl: "MyLove",
    desc_ru:  "Замороженный проект. MyLove — это экшн-рогалик, в котором нужно взять под управление главного героя и его 5 субличностей, чтобы помочь выбраться из комы.",
    desc_en:  "A frozen project. MyLove is an action roguelite where you control the main character and their 5 sub-personalities to help escape from a coma.",
    desc_de:  "Ein eingefrorenes Projekt. MyLove ist ein Action-Roguelite, in dem man den Hauptcharakter und seine 5 Unterpersönlichkeiten steuert, um aus dem Koma zu entkommen.",
    desc_es:  "Un proyecto congelado. MyLove es un roguelite de acción donde controlas al personaje principal y sus 5 subpersonalidades para escapar de un coma.",
    desc_pl:  "Zamrożony projekt. MyLove to action roguelite, w którym sterujesz głównym bohaterem i jego 5 osobowościami, aby pomóc mu wydostać się z śpiączki.",
  },
  {
    src:      "assets/gallery/for-gif2.gif",
    emoji:    "🐻",
    title_ru: "Медвежонок-пухни",
    title_en: "Bear Puffball",
    title_de: "Bärchen-Puhni",
    title_es: "Osito Inflable",
    title_pl: "Miś-Puchnatek",
    desc_ru:  "MVP проект игры, которую я делал на прошлой работе.",
    desc_en:  "An MVP game project I worked on at my previous job.",
    desc_de:  "Ein MVP-Spielprojekt, an dem ich bei meiner letzten Stelle gearbeitet habe.",
    desc_es:  "Un proyecto MVP de juego que desarrollé en mi trabajo anterior.",
    desc_pl:  "Projekt MVP gry, który robiłem na poprzedniej pracy.",
  },
  {
    src:      "assets/gallery/tttttt.gif",
    emoji:    "⚽",
    title_ru: "Смешные шары",
    title_en: "Funny Balls",
    title_de: "Lustige Bälle",
    title_es: "Bolas Graciosas",
    title_pl: "Śmieszne Kule",
    desc_ru:  "Смешной баг, который произошёл при разработке одного Tower Defence проекта.",
    desc_en:  "A funny bug that happened during the development of a Tower Defence project.",
    desc_de:  "Ein lustiger Bug, der während der Entwicklung eines Tower-Defence-Projekts aufgetreten ist.",
    desc_es:  "Un gracioso bug que ocurrió durante el desarrollo de un proyecto Tower Defence.",
    desc_pl:  "Śmieszny bug, który pojawił się podczas tworzenia projektu Tower Defence.",
  },
];

// ============================================================
// Contacts
// ============================================================
const contacts = {
  email:      "mailto:12andzver@gmail.com",
  github:     "https://github.com/FuzzyZver", 
  itch:       "https://fuzzyzver.itch.io/",
  youtube:    "https://www.youtube.com/@FuzzyZver",
  telegram:   "https://t.me/fuzzyzver",
  tg_channel: "https://t.me/gamemakerFuzzco",
  discord:    "https://discord.gg/gbVXJmWky",
};
