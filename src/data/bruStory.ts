export type Suspect = {
  id: string;
  name: string;
  role: string;
  style: string;
  clueItem: string;
  clueDetail: string;
  alibi: string;
  contradiction: string;
  interviewTell: string;
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
export const caseVersion = 5;

export const agencyNames = [
  "Bruagentene",
  "Kripos avdeling Bru",
  "Bru Spesialenhet for Eggrelaterte Hendelser",
  "Påskeberedskapen på Bru",
  "Operasjon Gulrotblink"
];

export const versionBadge = "v6.0.0 | Nå med såpass mye påskekrim at selv Kripos avdeling Bru ba oss roe oss litt";

export const introText = [
  "Påskeaften på hytta på Bru skulle bli årets store finale. Premiebordet sto klart, det legendariske Bru-egget lå under glasslokk, og alle gjestene ventet på den høytidelige avdukingen.",
  "Så smalt sambandsradioen. Påskeharen skrek ute på tunet, en mus med kaninører raste gjennom snøen med en sekk småegg, og hele gjengen styrtet ut i det som senere ble omtalt som den mest unødvendig dramatiske gulrotkrisen i nyere Bru-historie.",
  "Da alle kom inn igjen, var Bru-egget borte, glasslokket sto på gløtt, og flere vitneforklaringer passet mistenkelig dårlig sammen. Nå må dere lese logger, kodeord, tidslinjer og avhørsglipper langt skarpere enn før."
];

export const difficulties: Difficulty[] = [
  {
    id: "trearing",
    level: 1,
    title: "Grad 1: Småsporeren",
    shortLabel: "3 år",
    description: "Veldig tydelige spor, få valg og en sak som nærmest peker på seg selv.",
    humor: "Anbefalt av Bru barnehage og harepatruljen for små superdetektiver.",
    optionCount: 2,
    helperStrength: "max"
  },
  {
    id: "snosnute",
    level: 2,
    title: "Grad 2: Snøsnuta",
    shortLabel: "Lett",
    description: "En snill, men ekte liten påskekrim med noen bløffer og litt tenking.",
    humor: "For dem som kan telle til tre, men fortsatt vil ha kakao-hint.",
    optionCount: 3,
    helperStrength: "high"
  },
  {
    id: "sporhund",
    level: 3,
    title: "Grad 3: Sporhund",
    shortLabel: "Vanlig",
    description: "Mer sammenheng mellom sporene og mindre gratis hjelp.",
    humor: "Standardnivået til Bru Spesialenhet for Eggrelaterte Hendelser.",
    optionCount: 4,
    helperStrength: "medium"
  },
  {
    id: "kripos",
    level: 4,
    title: "Grad 4: Kripos avdeling Bru",
    shortLabel: "Vanskelig",
    description: "Tettere spor, flere mistenkte og lengre oppgaver med ordentlig kryssjekking.",
    humor: "For dem som mumler 'jeg stoler ikke på noen' mens de later som morgenkåpen er et alibi.",
    optionCount: 5,
    helperStrength: "low"
  },
  {
    id: "kodeknekker",
    level: 5,
    title: "Grad 5: Avanserte kodeknekkere",
    shortLabel: "Ekspert",
    description: "Lang sak, mange mistenkte, tynne spor og oppgaver som krever faktisk kodeknekk.",
    humor: "Bare for dem som tåler voksenhumor, sauna-kaos og strategisk dårlig dømmekraft etter midnatt.",
    optionCount: 6,
    helperStrength: "minimal"
  }
];

export const suspectRosters: Record<string, Suspect[]> = {
  trearing: [
    {
      id: "malin",
      name: "Malin",
      role: "den snille påskemaleren",
      style: "smiler bredt, får maling overalt og later som om alt er tilfeldig",
      clueItem: "gul maling",
      clueDetail: "en liten gul malingsprikk ved sokkelen",
      alibi: "sa at hun bare malte egg ved vinduet hele tiden",
      contradiction: "påstår at hun aldri gikk inn i stua, men malingsprikken hennes ligger ved selve premiebordet",
      interviewTell: "hun sier 'oi da' så ofte at selv harepatruljen blir mistenksomme"
    },
    {
      id: "loke",
      name: "Loke",
      role: "den raske snøløperen",
      style: "løper fort, tramper høyt og blir altfor stolt når han finner spor først",
      clueItem: "blå snøtråkk",
      clueDetail: "to tydelige blå snøtråkk rett ved duken",
      alibi: "hevdet at han bare var ute og telte fargerike egg",
      contradiction: "sier at han sto ute hele tiden, men snøtråkkene hans fortsetter inn i hytta",
      interviewTell: "glemmer alltid hvilken fot som var våt"
    }
  ],
  snosnute: [
    {
      id: "jorgen",
      name: "Jørgen",
      role: "den ivrige vedbæreren",
      style: "slepper ved overalt og tror all etterforskning blir bedre av å peke dramatisk",
      clueItem: "vedstøv",
      clueDetail: "et lite bånd av vedstøv bak silkeduken",
      alibi: "sa at han kun var på verandaen og drev med ved og været",
      contradiction: "hevder han ikke var inne, men støvet hans stopper ved den tomme eggsokkelen",
      interviewTell: "blunker dobbelt hver gang noen sier ordet 'premiebord'"
    },
    {
      id: "kristian",
      name: "Kristian",
      role: "den rolige kakaoansvarlige",
      style: "virker trygg, men holder koppen sin som om den skjuler statshemmeligheter",
      clueItem: "kakaodrypp",
      clueDetail: "et søtt kakaodrypp helt inntil sokkelen",
      alibi: "insisterte på at han holdt seg ved kjøkkenbenken hele tiden",
      contradiction: "sa at koppen aldri forlot kjøkkenet, men dryppet fortsetter mot premiebordet",
      interviewTell: "svarer veldig fort når ingen har anklaget ham ennå"
    },
    {
      id: "hedda",
      name: "Hedda",
      role: "den detaljfikserte påskepyntsjefen",
      style: "retter på servietter, sløyfer og mennesker med samme alvor",
      clueItem: "oransje båndtråd",
      clueDetail: "en oransje båndtråd som sitter fast i duken",
      alibi: "sa at hun bare pyntet gangen og ikke rørte premiebordet",
      contradiction: "hevder hun sto i gangen, men båndet hennes er hektet i duken ved egget",
      interviewTell: "smiler litt for bredt når noen nevner orden"
    }
  ],
  sporhund: [
    {
      id: "jorgen",
      name: "Jørgen",
      role: "den ivrige vedbæreren",
      style: "slepper ved overalt og tror all etterforskning blir bedre av å peke dramatisk",
      clueItem: "vedstøv",
      clueDetail: "et lite bånd av vedstøv bak silkeduken",
      alibi: "sa at han kun var på verandaen og drev med ved og været",
      contradiction: "hevder han ikke var inne, men støvet hans stopper ved den tomme eggsokkelen",
      interviewTell: "blunker dobbelt hver gang noen sier ordet 'premiebord'"
    },
    {
      id: "kristian",
      name: "Kristian",
      role: "den rolige kakaoansvarlige",
      style: "virker trygg, men holder koppen sin som om den skjuler statshemmeligheter",
      clueItem: "kakaodrypp",
      clueDetail: "et søtt kakaodrypp helt inntil sokkelen",
      alibi: "insisterte på at han holdt seg ved kjøkkenbenken hele tiden",
      contradiction: "sa at koppen aldri forlot kjøkkenet, men dryppet fortsetter mot premiebordet",
      interviewTell: "svarer veldig fort når ingen har anklaget ham ennå"
    },
    {
      id: "hedda",
      name: "Hedda",
      role: "den detaljfikserte påskepyntsjefen",
      style: "retter på servietter, sløyfer og mennesker med samme alvor",
      clueItem: "oransje båndtråd",
      clueDetail: "en oransje båndtråd som sitter fast i duken",
      alibi: "sa at hun bare pyntet gangen og ikke rørte premiebordet",
      contradiction: "hevder hun sto i gangen, men båndet hennes er hektet i duken ved egget",
      interviewTell: "smiler litt for bredt når noen nevner orden"
    }
  ],
  kripos: [
    {
      id: "tove",
      name: "Tove",
      role: "den metodiske løypeføreren",
      style: "noterer alt i små blokker og virker mistenkelig komfortabel med tidslinjer, håndklær og andres pinlige afterski-valg",
      clueItem: "røde skivoksspor",
      clueDetail: "et tynt rødt merke langs kanten av den tomme sokkelen",
      alibi: "hevdet at hun bare målte snødybde ved brua og absolutt ikke hadde noe med den halvåpne badstuedøra å gjøre",
      contradiction: "påstår hun sto ute ved brua, men voksen og tørr skivoks hører til inne ved peisen",
      interviewTell: "siterer klokkeslett litt for presist uten å ha blitt spurt"
    },
    {
      id: "siw",
      name: "Siw",
      role: "den elegante premiebordansvarlige",
      style: "retter på duker med ro og ser fornærmet ut hvis noen puster nær serviettene, champagneglassene eller silkekåpen hennes",
      clueItem: "glitterstøv",
      clueDetail: "gullglitter som drysser i en presis bue ved premiebordet",
      alibi: "sa at hun var i gangen og beroliget haren hele tiden, og definitivt ikke drev med dramatisk garderobekrise",
      contradiction: "hevder hun aldri rørte bordet, men glitteret hennes danner en halvsirkel der noen lente seg inn",
      interviewTell: "sukker før hvert svar som om avhøret er under hennes nivå"
    },
    {
      id: "therese",
      name: "Therese",
      role: "den teatralske dekorbyggeren",
      style: "snakker i store bilder og mener belysning, stemning og riktig mengde strategisk naken skulder er viktigere enn sannhet",
      clueItem: "fiolett tape",
      clueDetail: "en tynn stripe fiolett tape bak duken",
      alibi: "påsto at hun testet lysslyngene ute på verandaen og bare tilfeldigvis manglet den ene paljettjakken sin",
      contradiction: "sier at tapen hennes var ute ved verandaen, men den samme typen sitter under premieduken",
      interviewTell: "svarer med tre detaljer når ett ord hadde holdt"
    },
    {
      id: "inge",
      name: "Inge",
      role: "den stille logistikksjefen",
      style: "bærer ting uten å lage lyd og liker at alle tror han bare ordner praktiske småting, morgenkåper og diskret rot",
      clueItem: "grå sekketråd",
      clueDetail: "en grå fibertråd som sitter fast i dukekanten",
      alibi: "sa at han sto ved vedkassen og ryddet tauverk mens andre løp rundt i altfor lite planlagt påskebekledning",
      contradiction: "hevder han bare håndterte tau ute, men en lik fibertråd sitter i silkeduken inne",
      interviewTell: "nikker før han svarer, som om han først godkjenner sin egen løgn"
    },
    {
      id: "jan",
      name: "Jan",
      role: "den joviale grillmesteren uten grill",
      style: "ler høyt, tar plass og tror at godt humør, bar overkropp og et håndkle over skulderen teller som alibi",
      clueItem: "røykstøv",
      clueDetail: "en luktstripe av røykstøv i retning peisen og bordet",
      alibi: "insisterte på at han bare sto på tunet og fortalte lange historier, til tross for at halve hytta husker et meget unødvendig badstue-innslag",
      contradiction: "hevder han var ute, men røykstøvet fra jakken hans er ferskest inne ved peisen",
      interviewTell: "skifter tema til pølser når spørsmålene blir konkrete"
    },
    {
      id: "fredrik",
      name: "Fredrik",
      role: "den tekniske dørvokteren",
      style: "kan åpne alt, fikse alt og forklare alt litt for selvsikkert, spesielt hvorfor buksa hans plutselig lå i feil etasje",
      clueItem: "kobberstøv",
      clueDetail: "små kobberfargede prikker ved låsen på premiestativet",
      alibi: "sa at han bare justerte en dørlist i gangen og aldri kom nær egget, selv om flere vitner nevner en pinlig sprint etter et bortkommet håndkle",
      contradiction: "hevder han jobbet i gangen, men kobberstøvet ligger ved låsen der egget sto",
      interviewTell: "bruker ordet 'teknisk sett' når sannheten begynner å vingle"
    }
  ],
  kodeknekker: [
    {
      id: "tove",
      name: "Tove",
      role: "den metodiske løypeføreren",
      style: "noterer alt i små blokker og virker mistenkelig komfortabel med tidslinjer",
      clueItem: "røde skivoksspor",
      clueDetail: "et tynt rødt merke langs kanten av den tomme sokkelen",
      alibi: "hevdet at hun bare målte snødybde ved brua og aldri gikk inn",
      contradiction: "påstår hun sto ute ved brua, men voksen og tørr skivoks hører til inne ved peisen",
      interviewTell: "siterer klokkeslett litt for presist uten å ha blitt spurt"
    },
    {
      id: "siw",
      name: "Siw",
      role: "den elegante premiebordansvarlige",
      style: "retter på duker med ro og ser fornærmet ut hvis noen puster nær serviettene",
      clueItem: "glitterstøv",
      clueDetail: "gullglitter som drysser i en presis bue ved premiebordet",
      alibi: "sa at hun var i gangen og beroliget haren hele tiden",
      contradiction: "hevder hun aldri rørte bordet, men glitteret hennes danner en halvsirkel der noen lente seg inn",
      interviewTell: "sukker før hvert svar som om avhøret er under hennes nivå"
    },
    {
      id: "therese",
      name: "Therese",
      role: "den teatralske dekorbyggeren",
      style: "snakker i store bilder og mener belysning er viktigere enn sannhet",
      clueItem: "fiolett tape",
      clueDetail: "en tynn stripe fiolett tape bak duken",
      alibi: "påsto at hun testet lysslyngene ute på verandaen",
      contradiction: "sier at tapen hennes var ute ved verandaen, men den samme typen sitter under premieduken",
      interviewTell: "svarer med tre detaljer når ett ord hadde holdt"
    },
    {
      id: "inge",
      name: "Inge",
      role: "den stille logistikksjefen",
      style: "bærer ting uten å lage lyd og liker at alle tror han bare ordner praktiske småting",
      clueItem: "grå sekketråd",
      clueDetail: "en grå fibertråd som sitter fast i dukekanten",
      alibi: "sa at han sto ved vedkassen og ryddet tauverk",
      contradiction: "hevder han bare håndterte tau ute, men en lik fibertråd sitter i silkeduken inne",
      interviewTell: "nikker før han svarer, som om han først godkjenner sin egen løgn"
    },
    {
      id: "jan",
      name: "Jan",
      role: "den joviale grillmesteren uten grill",
      style: "ler høyt, tar plass og tror at godt humør teller som alibi",
      clueItem: "røykstøv",
      clueDetail: "en luktstripe av røykstøv i retning peisen og bordet",
      alibi: "insisterte på at han bare sto på tunet og fortalte lange historier",
      contradiction: "hevder han var ute, men røykstøvet fra jakken hans er ferskest inne ved peisen",
      interviewTell: "skifter tema til pølser når spørsmålene blir konkrete"
    },
    {
      id: "fredrik",
      name: "Fredrik",
      role: "den tekniske dørvokteren",
      style: "kan åpne alt, fikse alt og forklare alt litt for selvsikkert",
      clueItem: "kobberstøv",
      clueDetail: "små kobberfargede prikker ved låsen på premiestativet",
      alibi: "sa at han bare justerte en dørlist i gangen og aldri kom nær egget",
      contradiction: "hevder han jobbet i gangen, men kobberstøvet ligger ved låsen der egget sto",
      interviewTell: "bruker ordet 'teknisk sett' når sannheten begynner å vingle"
    }
  ]
};

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
    question: "Hva avslører sambandsloggen og kaoset rundt tunet egentlig?",
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
    question: "Hva skjuler kodelappen, og hvor peker den egentlig?",
    nextHref: "/oppgave/4",
    nextLabel: "Videre til oppgave 4"
  },
  {
    id: 4,
    slug: "4",
    title: "Oppgave 4: Tidslinjebrudd",
    scene: "Ved peisen og notatveggen",
    question: "Hvem sprekker når tidslinje, varme og vitneglipper presses mot hverandre?",
    nextHref: "/oppgave/5",
    nextLabel: "Videre til oppgave 5"
  },
  {
    id: 5,
    slug: "5",
    title: "Oppgave 5: Kryssforhøret",
    scene: "Kjøkkenbordet etter midnatt",
    question: "Hvilket kodeord og motiv står igjen når alle notater, glipper og mønstre samles?",
    nextHref: "/finale",
    nextLabel: "Gå til finalen"
  }
];

export const totalTasks = taskMeta.length;
