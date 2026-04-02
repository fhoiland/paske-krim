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

export const storyTitle = "Påskekrimmen på Bru";
export const progressKey = "bru-hytte-paskekrim-progress";
export const caseKey = "bru-hytte-paskekrim-case";
export const caseVersion = 2;

export const introText = [
  "Påskeaften på hytta på Bru skulle bli årets høydepunkt. Premiebordet var pyntet, snøen glitret blått i kveldssola, og alle ventet på avsløringen av det legendariske Bru-egget.",
  "Så eksploderte hele tunet i kaos. Påskeharen skrek 'NEEEIIIIII!!', en liten mus med kaninører spratt gjennom snøen med sekken full av fargerike egg, og alle stormet ut for å se hva som foregikk.",
  "Da folk kom inn igjen, var selve Bru-egget borte. Nå trenger hytta på Bru en skarp etterforsker. Hver oppgave gir dere én ny nøkkel til saken, og hver nye runde kan ha en helt annen tyv."
];

export const suspects: Suspect[] = [
  {
    id: "oskar",
    name: "Oskar Bruvik",
    role: "naboen i blå parkas",
    style: "snakker rolig, men følger alltid med på alt som skjer rundt premiebordet",
    clueItem: "blå skismøring",
    clueDetail: "et blankt blått merke langs kanten av premiepallen",
    alibi: "hevdet at han bare sto ved vedstabelen og holdt øye med snøføyka"
  },
  {
    id: "pelle",
    name: "Pelle Påskehare",
    role: "den teatralske arrangementsverten",
    style: "lager store entréer, roper høyt og sprer alltid litt glitter etter seg",
    clueItem: "gult sceneglitter",
    clueDetail: "små gule glimt inne i smeltet snø ved den tomme eggsokkelen",
    alibi: "påsto at han aldri gikk inn igjen etter at han begynte å rope på tunet"
  },
  {
    id: "lovise",
    name: "Lovise Lyng",
    role: "påskemaleren med fiolette fingre",
    style: "ser uskyldig ut, men er ekstremt opptatt av detaljer, premier og hvem som vinner",
    clueItem: "fiolett eggmaling",
    clueDetail: "en tynn stripe fiolett maling bak silkeduken på premiebordet",
    alibi: "insisterte på at hun sto ved kakaoen hele tiden og aldri nærmet seg pokalen"
  },
  {
    id: "milla",
    name: "Milla Musetind",
    role: "oppfinneren bak påskemus-showet",
    style: "smiler lurt, trener små dyr og har alltid med seg rekvisitter i lomma",
    clueItem: "stripet gulrottråd",
    clueDetail: "en tynn gulrotfarget tråd hektet fast i kanten av premieduken",
    alibi: "sa at hun bare jaget musen ute og ikke rakk å komme inn før alle andre"
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
