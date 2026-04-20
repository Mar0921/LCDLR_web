"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  // Header
  home: string
  bitacora: string
  equipo: string
  team: string
  
  // Hero
  gameTitle: string
  gameLogo: string
  heroDescription: string
  discoverMore: string
  watchTrailer: string
  scroll: string
  
  // Characters
  protagonists: string
  protagonistsDesc: string
  lumen: string
  lumenTitle: string
  lumenDesc: string
  lumenAbilities: string
  illumination: string
  revelation: string
  healing: string
  vyre: string
  vyreTitle: string
  vyreDesc: string
  vyreAbilities: string
  hiding: string
  protection: string
  transformation: string
  lightAndShadow: string
  characterOfLight: string
  characterOfShadow: string
  illustrationOf: string
  
  // Story
  theStory: string
  storyImagePlaceholder: string
  storyParagraph1: string
  storyParagraph2: string
  storyQuote: string
  theMystery: string
  mysteryDesc: string
  theNostalgia: string
  nostalgiaDesc: string
  theDarkness: string
  darknessDesc: string
  
  // Objectives
  objectives: string
  objectivesDesc: string
  objective1Title: string
  objective1Desc: string
  objective2Title: string
  objective2Desc: string
  objective3Title: string
  objective3Desc: string
  objective4Title: string
  objective4Desc: string
  objective5Title: string
  objective5Desc: string
  readyToEnter: string
  startAdventure: string
  
  // Bitacora
  devLog: string
  devLogDesc: string
  weekRange: string
  weeksOfDev: string
  week: string
  weekProgress: string
  progress: string
  completed: string
  tasks: string
  projectStatus: string
  developmentContinues: string
  nextUpdate: string
  visualDemo: string
  datePlaceholder: string
  progressPlaceholder: string
  weekProgressLabel: string
  weeksLabel: string
  tasksLabel: string
  projectContinues: string
  nextUpdateLabel: string
  weekImagePlaceholder: string
  finalWeek: string
  weekSanta: string
  week7Title: string
  week7Items: string[]
  week8Title: string
  week8Items: string[]
  week9Title: string
  week9Items: string[]
  weekSantaTitle: string
  weekSantaItems: string[]
  week10Title: string
  week10Items: string[]
  week11Title: string
  week11Items: string[]
  week12Title: string
  week12Items: string[]
  week13Title: string
  week13Items: string[]
  week14Title: string
  week14Items: string[]
  week15Title: string
  week15Items: string[]
  
  // Equipo
  ourTeam: string
  teamDesc: string
  developer: string
  designer: string
  
  // Footer
  copyright: string
  videoGameProject: string
  footerQuote: string
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const translations: Record<Language, Translations> = {
  es: {
    // Header
    home: "Página Principal",
    bitacora: "Bitácora",
    equipo: "Equipo",
    team: "Equipo",
    
    // Hero
    gameTitle: "La Casa de los Recuerdos",
    gameLogo: "Logo del Juego",
    heroDescription: "Un viaje a través de la memoria, donde cada habitación guarda un secreto y cada recuerdo puede ser tanto una bendición como una maldición.",
    discoverMore: "Descubrir más",
    watchTrailer: "Ver tráile",
    scroll: "Scroll",
    
    // Characters
    protagonists: "Los Protagonistas",
    protagonistsDesc: "Dos almas conectadas por un destino que se entrelaza entre la luz y la oscuridad.",
    lumen: "Lumen",
    lumenTitle: "Guardián de los recuerdos luminosos",
    lumenDesc: "Lumen representa la esperanza y la claridad en medio de la oscuridad. Como guía espiritual de la casa, su propósito es ayudar a los visitantes a encontrar los recuerdos que traen paz y comprensión. Sin embargo, su luz también puede revelar verdades que algunos prefieren olvidar.",
    lumenAbilities: "Habilidades",
    illumination: "Iluminación",
    revelation: "Revelación",
    healing: "Sanación",
    vyre: "Vyre",
    vyreTitle: "Custodio de las memorias olvidadas",
    vyreDesc: "Vyre habita en las sombras de la casa, protegiendo los recuerdos que fueron enterrados por dolor o vergüenza. No es malvado, sino incomprendido. Su rol es recordarnos que incluso las memorias oscuras son parte esencial de quienes somos.",
    vyreAbilities: "Habilidades",
    hiding: "Ocultamiento",
    protection: "Protección",
    transformation: "Transformación",
    lightAndShadow: "Luz y Sombra — Un equilibrio necesario",
    
    // Story
    theStory: "La Historia",
    storyImagePlaceholder: "Imagen de la Casa",
    storyParagraph1: "En las profundidades de un pueblo olvidado por el tiempo, se alza una mansión cuyas paredes guardan los ecos de memorias fragmentadas. La Casa de los Recuerdos no es solo un lugar, es un laberinto de emociones donde el pasado y el presente se entrelazan de maneras inexplicables.",
    storyParagraph2: "Cada habitación representa un capítulo de una historia olvidada. Los jugadores deberán explorar cada rincón, descifrar acertijos emocionales y enfrentarse a las sombras de recuerdos que prefirieron quedar enterrados.",
    storyQuote: "Los recuerdos no mueren, solo esperan ser encontrados.",
    theMystery: "El Misterio",
    mysteryDesc: "Descubre los secretos ocultos tras cada puerta cerrada y cada fotografía desvanecida.",
    theNostalgia: "La Nostalgia",
    nostalgiaDesc: "Sumérgete en una atmósfera donde cada objeto cuenta una historia de tiempos pasados.",
    theDarkness: "La Oscuridad",
    darknessDesc: "No todos los recuerdos son amables. Algunos prefieren permanecer en las sombras.",
    
    // Objectives
    objectives: "Objetivos del Jugador",
    objectivesDesc: "Tu misión en La Casa de los Recuerdos es restaurar el equilibrio entre la luz y la sombra.",
    objective1Title: "Explorar la Mansión",
    objective1Desc: "Recorre cada habitación de La Casa de los Recuerdos. Cada estancia guarda fragmentos de historias olvidadas que deberás descubrir y conectar.",
    objective2Title: "Descifrar los Acertijos",
    objective2Desc: "Resuelve puzzles emocionales y mentales que te permitirán desbloquear nuevas áreas y revelar secretos ocultos en las paredes de la mansión.",
    objective3Title: "Recolectar Memorias",
    objective3Desc: "Encuentra y colecciona fragmentos de recuerdos dispersos. Cada memoria recuperada te acerca más a comprender la verdadera historia de la casa.",
    objective4Title: "Equilibrar Luz y Sombra",
    objective4Desc: "Aprende a utilizar las habilidades de Lumen y Vyre en armonía. Solo el balance entre ambas fuerzas te permitirá acceder a la verdad final.",
    objective5Title: "Revelar el Secreto",
    objective5Desc: "Descubre qué sucedió realmente en La Casa de los Recuerdos y decide el destino de las almas que aún habitan entre sus muros.",
    readyToEnter: "¿Estás listo para adentrarte en los recuerdos?",
    startAdventure: "Comenzar la aventura",
    
    // Bitacora
    devLog: "Bitácora de Desarrollo",
    devLogDesc: "Registro semanal del progreso en el desarrollo de La Casa de los Recuerdos.",
    weekRange: "Semana 7 - 15",
    weeksOfDev: "10 semanas de desarrollo (incluye Semana Santa)",
    week: "Sem",
    weekProgress: "Progreso de la semana",
    progress: "Completado",
    completed: "Completado",
    tasks: "Tareas",
    projectStatus: "Estado del Proyecto",
    developmentContinues: "El desarrollo continúa según lo planificado. Próxima actualización:",
    nextUpdate: "Próxima actualización",
    visualDemo: "Demostración visual",
    week7Title: "Configuración del Proyecto y Primer Nivel",
    week7Items: [
      "Se creó el proyecto, configuró el repositorio y se organizón la escena del menú y el primer nivel, implementando los assets básicos de la cocina.",
    ],
    week8Title: "Mecánicas de Personajes y Nivel 1",
    week8Items: [
      "Se implementaron las mecánicas de caminar, saltar y habilidades de los personajes Lumen y Vyre, utilizando modelos temporales para probar estas funciones.",
      "Se añadió una llave en la nevera para avanzar al siguiente nivel, junto con un cartel informativo sobre las habilidades de los personajes y una zona sombra que afecta al jugador.",
      "Se configuró el flujo del nivel y se añadió un efecto visual al finalizar, mostrando cómo la sombra sigue al jugador, generando una atmósfera de suspense.",
    ],
    week9Title: "Transición de Niveles y Audio",
    week9Items: [
      "Se creó la subzona de transición entre la cocina (nivel 1) y la sala (nivel 2).",
      "Descarga de soundtracks para el menú y la cocina.",
    ],
    weekSantaTitle: "Modelos Finales y Script de La Sombra",
    weekSantaItems: [
      "Últimos retoques a los modelos finales de Lumen y Vyre en Blender para su implementación en el juego.",
      "Se desarrolló un nuevo script para La Sombra, para que persiga al jugador en areas específicas",
    ],
    week10Title: "Assets para Niveles 3 y 4",
    week10Items: [
      "Descarga de los assets para los niveles 3 (Cuarto propio) y 4 (Cuarto de la hermana).",
    ],
    week11Title: "Desarrollo del Teaser Trailer",
    week11Items: [
      "Se desarrolló el primer teaser trailer del juego",
      "Se aplicó un modelo a La Sombra",
      "Se mejoraron los escenarios establecidos anteriormente",
      "Se integraron los modelos definitivos para Lumen y Vyre junto con sus mecánicas"
    ],
    week12Title: "Sistema de Puzzles",
    week12Items: [
      "Diseño de los primeros tres puzzles del juego",
      "Implementación del sistema de interacción con objetos",
      "Creación del inventario de memorias coleccionables",
      "Testing de dificultad y ajuste de mecánicas",
    ],
    week13Title: "Narrativa y Audio",
    week13Items: [
      "Escritura de los diálogos principales del juego",
      "Selección y creación de la banda sonora ambiental",
      "Implementación del sistema de texto y narración",
      "Grabación de efectos de sonido para interacciones",
    ],
    week14Title: "Integración y Testing",
    week14Items: [
      "Integración de todos los sistemas desarrollados",
      "Sesiones de playtesting con usuarios externos",
      "Corrección de bugs y problemas de rendimiento",
      "Ajustes de balance y dificultad basados en feedback",
    ],
    week15Title: "Pulido Final",
    week15Items: [
      "Optimización general del rendimiento del juego",
      "Revisión final de todos los assets visuales",
      "Preparación de la documentación del proyecto",
      "Compilación de la versión final para presentación",
    ],
    datePlaceholder: "Fecha placeholder",
    progressPlaceholder: "Porcentaje placeholder",
    weekProgressLabel: "Progreso de la semana",
    weeksLabel: "Semanas",
    tasksLabel: "Tareas",
    projectContinues: "El desarrollo continúa según lo planificado. Próxima actualización:",
    nextUpdateLabel: "Próxima actualización",
    weekImagePlaceholder: "Imagen de avance - Semana",
    finalWeek: "Final",
    weekSanta: "Santa",
    characterOfLight: "Personaje de luz",
    characterOfShadow: "Personaje de sombra",
    illustrationOf: "Ilustración de",
    
    // Equipo
    ourTeam: "Nuestro Equipo",
    teamDesc: "Los creadores detrás de 'La Casa de los Recuerdos', un equipo apasionado por contar historias interactivas.",
    developer: "Desarrollador",
    designer: "Diseñadora",
    
    // Footer
    copyright: "2024",
    videoGameProject: "Proyecto de Videojuego",
    footerQuote: "Los recuerdos son las estrellas que iluminan el cielo de nuestra memoria.",
  },
  en: {
    // Header
    home: "Home",
    bitacora: "Dev Log",
    equipo: "Team",
    team: "Team",
    
    // Hero
    gameTitle: "The House of Memories",
    gameLogo: "Game Logo",
    heroDescription: "A journey through memory, where each room holds a secret and each memory can be both a blessing and a curse.",
    discoverMore: "Discover more",
    watchTrailer: "Watch trailer",
    scroll: "Scroll",
    
    // Characters
    protagonists: "The Protagonists",
    protagonistsDesc: "Two souls connected by a destiny intertwined between light and darkness.",
    lumen: "Lumen",
    lumenTitle: "Guardian of luminous memories",
    lumenDesc: "Lumen represents hope and clarity in the midst of darkness. As the spiritual guide of the house, his purpose is to help visitors find memories that bring peace and understanding. However, his light can also reveal truths some prefer to forget.",
    lumenAbilities: "Abilities",
    illumination: "Illumination",
    revelation: "Revelation",
    healing: "Healing",
    vyre: "Vyre",
    vyreTitle: "Keeper of forgotten memories",
    vyreDesc: "Vyre dwells in the shadows of the house, protecting memories buried by pain and shame. He is not evil, but misunderstood. His role is to remind us that even dark memories are an essential part of who we are.",
    vyreAbilities: "Abilities",
    hiding: "Hiding",
    protection: "Protection",
    transformation: "Transformation",
    lightAndShadow: "Light and Shadow — A necessary balance",
    
    // Story
    theStory: "The Story",
    storyImagePlaceholder: "House Image",
    storyParagraph1: "In the depths of a town forgotten by time, stands a mansion whose walls hold echoes of fragmented memories. The House of Memories is not just a place, it's a labyrinth of emotions where past and present intertwine in inexplicable ways.",
    storyParagraph2: "Each room represents a chapter of a forgotten story. Players must explore every corner, decipher emotional puzzles, and face the shadows of memories that preferred to remain buried.",
    storyQuote: "Memories don't die, they just wait to be found.",
    theMystery: "The Mystery",
    mysteryDesc: "Discover the secrets hidden behind every closed door and faded photograph.",
    theNostalgia: "Nostalgia",
    nostalgiaDesc: "Immerse yourself in an atmosphere where every object tells a story of times past.",
    theDarkness: "The Darkness",
    darknessDesc: "Not all memories are kind. Some prefer to remain in the shadows.",
    
    // Objectives
    objectives: "Player Objectives",
    objectivesDesc: "Your mission in The House of Memories is to restore the balance between light and shadow.",
    objective1Title: "Explore the Mansion",
    objective1Desc: "Explore every room of The House of Memories. Each chamber holds fragments of forgotten stories that you must discover and connect.",
    objective2Title: "Decipher the Puzzles",
    objective2Desc: "Solve emotional and mental puzzles that will unlock new areas and reveal secrets hidden in the mansion walls.",
    objective3Title: "Collect Memories",
    objective3Desc: "Find and collect scattered memory fragments. Each recovered memory brings you closer to understanding the true story of the house.",
    objective4Title: "Balance Light and Shadow",
    objective4Desc: "Learn to use Lumen and Vyre's abilities in harmony. Only the balance between both forces will grant you access to the final truth.",
    objective5Title: "Reveal the Secret",
    objective5Desc: "Discover what really happened in The House of Memories and decide the fate of the souls that still inhabit its walls.",
    readyToEnter: "Are you ready to enter the memories?",
    startAdventure: "Start the adventure",
    
    // Bitacora
    devLog: "Development Log",
    devLogDesc: "Weekly record of progress in the development of The House of Memories.",
    weekRange: "Week 7 - 15",
    weeksOfDev: "10 weeks of development (includes Holy Week)",
    week: "Week",
    weekProgress: "Weekly progress",
    progress: "Progress",
    completed: "Completed",
    tasks: "Tasks",
    projectStatus: "Project Status",
    developmentContinues: "Development continues as planned. Next update:",
    nextUpdate: "Next update",
    visualDemo: "Visual demo",
    week7Title: "Project Setup and First Level",
    week7Items: [
      "Project was created, repository was configured, and the menu scene and first level were organized, implementing basic kitchen assets.",
    ],
    week8Title: "Character Mechanics and Level 1",
    week8Items: [
      "Implemented walking, jumping, and character abilities for Lumen and Vyre, using temporary models to test these functions.",
      "Added a key in the fridge to advance to the next level, along with an informational sign about character abilities and a shadow zone that affects the player.",
      "Configured level flow and added a visual effect at the end, showing how the shadow follows the player, creating an atmosphere of suspense.",
    ],
    week9Title: "Level Transitions and Audio",
    week9Items: [
      "Created the transition subzone between the kitchen (level 1) and the living room (level 2).",
      "Downloaded soundtracks for the menu and kitchen.",
    ],
    weekSantaTitle: "Final Models and Shadow Script",
    weekSantaItems: [
      "Final touches to the final models of Lumen and Vyre in Blender for implementation in the game.",
      "Developed a new script for The Shadow to chase the player in specific areas.",
    ],
    week10Title: "Assets for Levels 3 and 4",
    week10Items: [
      "Downloaded assets for levels 3 (Own Room) and 4 (Sister's Room).",
    ],
    week11Title: "Visual Development",
    week11Items: [
      "Creation of visual assets for the first room",
      "Implementation of atmospheric lighting system",
      "Development of visual effects for character abilities",
      "Integration of the first definitive UI elements",
    ],
    week12Title: "Puzzle System",
    week12Items: [
      "Design of the first three puzzles in the game",
      "Implementation of the object interaction system",
      "Creation of the collectible memories inventory",
      "Testing of difficulty and mechanic adjustments",
    ],
    week13Title: "Narrative and Audio",
    week13Items: [
      "Writing of the main dialogues of the game",
      "Selection and creation of the ambient soundtrack",
      "Implementation of the text and narration system",
      "Recording of sound effects for interactions",
    ],
    week14Title: "Integration and Testing",
    week14Items: [
      "Integration of all developed systems",
      "Playtesting sessions with external users",
      "Bug correction and performance issues",
      "Balance and difficulty adjustments based on feedback",
    ],
    week15Title: "Final Polish",
    week15Items: [
      "General optimization of game performance",
      "Final review of all visual assets",
      "Preparation of project documentation",
      "Compilation of the final version for presentation",
    ],
    datePlaceholder: "Date placeholder",
    progressPlaceholder: "Percentage placeholder",
    weekProgressLabel: "Progress of the week",
    weeksLabel: "Weeks",
    tasksLabel: "Tasks",
    projectContinues: "Development continues as planned. Next update:",
    nextUpdateLabel: "Next update",
    weekImagePlaceholder: "Progress image - Week",
    finalWeek: "Final",
    weekSanta: "Santa",
    characterOfLight: "Character of light",
    characterOfShadow: "Character of shadow",
    illustrationOf: "Illustration of",
    
    // Team
    ourTeam: "Our Team",
    teamDesc: "The creators behind 'The House of Memories', a team passionate about telling interactive stories.",
    developer: "Developer",
    designer: "Designer",
    
    // Footer
    copyright: "2024",
    videoGameProject: "Video Game Project",
    footerQuote: "Memories are the stars that illuminate the sky of our memory.",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  
  const value: TranslationContextType = {
    language,
    setLanguage,
    t: translations[language],
  }
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}