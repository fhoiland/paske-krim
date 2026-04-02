export type Suspect = {
  id: string;
  name: string;
  role: string;
  style: string;
  clueItem: string;
  clueDetail: string;
  alibi: string;
};

export type Motive = {
  id: string;
  label: string;
  clueText: string;
  revealText: string;
};

export type HidingSpot = {
  id: string;
  label: string;
  codeWord: string;
  routeClue: string;
  revealText: string;
};

export type TaskMeta = {
  id: number;
  slug: string;
  title: string;
  scene: string;
  question: string;
  nextHref: string;
  nextLabel: string;
};

export type Difficulty = {
  id: string;
  level: number;
  title: string;
  shortLabel: string;
  description: string;
  humor: string;
  optionCount: number;
  helperStrength: "max" | "high" | "medium" | "low" | "minimal";
};

export const storyTitle = "Påskekrimmen på Bru";
export const progressKey = "bru-hytte-paskekrim-progress";
export const caseKey = "bru-hytte-paskekrim-case";
export const settingsKey = "bru-hytte-paskekrim-settings";
export const statsKey = "bru-hytte-paskekrim-stats";
export const caseVersion = 3;

export const agencyNames = [
  "Bruagentene",
  "Kripos avdeling Bru",
  "Bru Spesialenhet for Eggrelaterte Hendelser",
  "Påskeberedskapen på Bru",
  "Operasjon Gulrotblink"
];

export const introText = [
  "Påskeaften på hytta på Bru skulle bli årets høydepunkt. Premiebordet var pyntet, snøen glitret blått i kveldssola, og alle ventet på avsløringen av det legendariske Bru-egget.",
  "Så eksploderte hele tunet i kaos. Påskeharen skrek 'NEEEIIIIII!!', en liten mus med kaninører spratt gjennom snøen med sekken full av fargerike egg, og alle stormet ut for å se hva som foregikk.",
  "Da folk kom inn igjen, var selve Bru-egget borte. Nå trenger hytta på Bru hjelp fra Bruagentene, Kripos avdeling Bru og alle som mener de er uvanlig gode til å følge snøspor og mistenkelig gulrotlogistikk."
];

export const difficulties: Difficulty[] = [
  {
    id: "trearing",
    level: 1,
    title: "Grad 1: Småsporeren",
    shortLabel: "3 år",
    description: "Ekstra tydelige spor, få alternativer og nesten komisk åpenbare svar.",
    humor: "Anbefalt av Bru barnehage og harepatruljen for små snødetektiver.",
    optionCount: 2,
    helperStrength: "max"
  },
  {
    id: "snosnute",
    level: 2,
    title: "Grad 2: Snøsnuta",
    shortLabel: "Nybegynner",
    description: "Litt mer lureri, men fortsatt trygt for ferske påskeetterforskere.",
    humor: "For de som kan telle til tre og mistenke minst én nabo.",
    optionCount: 3,
    helperStrength: "high"
  },
  {
    id: "sporhund",
    level: 3,
    title: "Grad 3: Sporhund",
    shortLabel: "Vanlig",
    description: "Balansen mellom moro, spor og faktisk tenking.",
    humor: "Standardnivået til Bru Spesialenhet for Eggrelaterte Hendelser.",
    optionCount: 4,
    helperStrength: "medium"
  },
  {
    id: "kripos",
    level: 4,
    title: "Grad 4: Kripos avdeling Bru",
    shortLabel: "Vanskelig",
    description: "Tettere spor, mer misledning og mindre håndholding.",
    humor: "For dem som mumler 'jeg stoler ikke på noen' før kakao nummer to.",
    optionCount: 5,
    helperStrength: "low"
  },
  {
    id: "kodeknekker",
    level: 5,
    title: "Grad 5: Avanserte kodeknekkere",
    shortLabel: "Ekspert",
    description: "Maks trøbbel. Flere bløffer, strammere hint og mer kodespråk i sporene.",
    humor: "Bare for dem som blir fornærmet hvis saken er løst før appelsinen er skrelt.",
    optionCount: 6,
    helperStrength: "minimal"
  }
];

export const suspects: Suspect[] = [
  {
    id: "oskar",
    name: "Oskar Bruvik",
    role: "naboen i blå parkas",
    style: "snakker rolig, men følger alltid med på alt som skjer rundt premiebordet og later som om han bare studerer været",
    clueItem: "blå skismøring",
    clueDetail: "et blankt blått merke langs kanten av premiepallen",
    alibi: "hevdet at han bare sto ved vedstabelen og drev avansert værforskning med hendene i lomma"
  },
  {
    id: "pelle",
    name: "Pelle Påskehare",
    role: "den teatralske arrangementsverten",
    style: "lager store entréer, roper høyt og mener alle problemer kan løses med mer konfetti",
    clueItem: "gult sceneglitter",
    clueDetail: "små gule glimt inne i smeltet snø ved den tomme eggsokkelen",
    alibi: "påsto at han var for opptatt med å rope så høyt at hele Bru skulle høre det"
  },
  {
    id: "lovise",
    name: "Lovise Lyng",
    role: "påskemaleren med fiolette fingre",
    style: "ser uskyldig ut, men er ekstremt opptatt av detaljer, premier og hvem som får æren",
    clueItem: "fiolett eggmaling",
    clueDetail: "en tynn stripe fiolett maling bak silkeduken på premiebordet",
    alibi: "insisterte på at hun sto ved kakaoen hele tiden og bare bedømte marshmallow-kvalitet"
  },
  {
    id: "milla",
    name: "Milla Musetind",
    role: "oppfinneren bak påskemus-showet",
    style: "smiler lurt, trener små dyr og har alltid en altfor kreativ plan ingen ba om",
    clueItem: "stripet gulrottråd",
    clueDetail: "en tynn gulrotfarget tråd hektet fast i kanten av premieduken",
    alibi: "sa at hun bare jaget musen ute og slett ikke hadde tid til hovedforbrytelser"
  }
];

export const motives: Motive[] = [
  {
    id: "sabotage",
    label: "å sabotere finalen og nekte andre å vinne",
    clueText: "Ingen får løfte Bru-egget foran meg i kveld.",
    revealText: "Alt peker mot et sabotasje-motiv. Tyven ville ødelegge finalen heller enn å se noen andre vinne."
  },
  {
    id: "swap",
    label: "å bytte ut originalen med en kopi og selge den ekte senere",
    clueText: "Kopien er pen nok for publikum. Originalen er det bare jeg som trenger.",
    revealText: "Notatet viser et planlagt bytte. Tyven tenkte mer på gevinst enn på påskestemning."
  },
  {
    id: "spotlight",
    label: "å bruke egget i et hemmelig nattshow og stjele all oppmerksomheten",
    clueText: "Når lyset går på ved midnatt, må alle se på meg og ingen andre.",
    revealText: "Motivet er ren oppmerksomhet. Bru-egget skulle bli hovednummeret i et privat triumfshow."
  },
  {
    id: "ransom",
    label: "å gjemme egget og kreve en tjeneste for å levere det tilbake",
    clueText: "Ingen får egget tilbake før min avtale er oppfylt.",
    revealText: "Tyven ville bruke Bru-egget som pressmiddel og tvinge fram en avtale."
  }
];

export const hidingSpots: HidingSpot[] = [
  {
    id: "bridge",
    label: "under brua bak islykten",
    codeWord: "BRUA",
    routeClue: "sporene stopper ved den gamle brua, og det drypper gullmaling ned mot bekken",
    revealText: "Gjemmestedet er under brua. Tyven skjulte egget i skyggen bak islykten."
  },
  {
    id: "woodbox",
    label: "i vedkassen på verandaen",
    codeWord: "VEDKASSE",
    routeClue: "en svak stripe glansstøv og smeltet snø leder rett mot den lune verandaen",
    revealText: "Egget ligger i vedkassen. Der var det akkurat nok varme til å skjule sporene."
  },
  {
    id: "postbox",
    label: "i den gamle postkassen ved innkjørselen",
    codeWord: "POSTKASSE",
    routeClue: "små snøsprut og et enslig fiolett skjell peker bort mot innkjørselen",
    revealText: "Tyven brukte den gamle postkassen som skjulested. Ingen tenkte på å lete der først."
  },
  {
    id: "loft",
    label: "på hemsen over kjøkkenet",
    codeWord: "HEMS",
    routeClue: "det knirker over taket, og en gyllen prikk skimtes i støvet over kjøkkendøra",
    revealText: "Bru-egget er gjemt på hemsen. Tyven valgte høyden for å holde seg ett steg foran alle."
  }
];

export const taskMeta: TaskMeta[] = [
  {
    id: 1,
    slug: "1",
    title: "Oppgave 1: Avledningen",
    scene: "Tunet foran hytta",
    question: "Hva avslører egentlig bildet og kaoset på tunet?",
    nextHref: "/oppgave/2",
    nextLabel: "Videre til oppgave 2"
  },
  {
    id: 2,
    slug: "2",
    title: "Oppgave 2: Sporrommet",
    scene: "Premiebordet inne i hytta",
    question: "Hvem peker sporene mot denne gangen?",
    nextHref: "/oppgave/3",
    nextLabel: "Videre til oppgave 3"
  },
  {
    id: 3,
    slug: "3",
    title: "Oppgave 3: Kodelappen",
    scene: "Mellom verandaen og bekken",
    question: "Hvor ble Bru-egget gjemt?",
    nextHref: "/oppgave/4",
    nextLabel: "Videre til oppgave 4"
  },
  {
    id: 4,
    slug: "4",
    title: "Oppgave 4: Brennmerket brev",
    scene: "Ved peisen",
    question: "Hva var tyvens egentlige motiv?",
    nextHref: "/finale",
    nextLabel: "Gå til finalen"
  }
];

export const totalTasks = taskMeta.length;
