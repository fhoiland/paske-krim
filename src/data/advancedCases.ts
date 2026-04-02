export type AdvancedEvidenceTone = "ambiguous" | "support" | "decisive";

export type AdvancedEvidence = {
  id: string;
  scene: number;
  title: string;
  detail: string;
  tone: AdvancedEvidenceTone;
  tags: string[];
  suspectIds?: string[];
};

export type AdvancedScene = {
  routeLabel: string;
  title: string;
  kicker: string;
  paragraphs: string[];
  prompt: string;
  helper: string;
  answerMode: "input" | "options";
  answer: string;
  acceptedAnswers?: string[];
  placeholder?: string;
  evidenceIds: string[];
  success: string;
};

export type AdvancedCase = {
  id: string;
  minLevel: number;
  title: string;
  tagline: string;
  culpritId: string;
  motiveId: string;
  hidingSpotId: string;
  falseLeadId: string;
  decisiveEvidenceIds: string[];
  falseLeadEvidenceIds: string[];
  opening: string[];
  scenes: Record<number, AdvancedScene>;
  evidence: AdvancedEvidence[];
  final: {
    brief: string;
    evidenceRule: string;
    success: string;
    falseLeadOutcome: string;
    wrongSuspectOutcome: string;
    wrongMotiveOutcome: string;
    wrongHidingOutcome: string;
    weakEvidenceOutcome: string;
  };
};

export const advancedCases: AdvancedCase[] = [
  {
    id: "kald-las",
    minLevel: 4,
    title: "Sak 7A: Den kalde låsen",
    tagline: "Den opplagte synderen bærer voksen. Den faktiske synderen bærer metall.",
    culpritId: "fredrik",
    motiveId: "sabotage",
    hidingSpotId: "woodbox",
    falseLeadId: "tove",
    decisiveEvidenceIds: ["bridge-camera", "copper-hook", "repair-receipt"],
    falseLeadEvidenceIds: ["red-wax-mark", "bridge-measure-note"],
    opening: [
      "Midnattsdemonstrasjonen på Bru skulle avsløre et nytt stativ og et nytt lysopplegg. I stedet fikk hytta et skingrende harenødskrik, nakne føtter i sidegangen og et premiestativ som sto åpent et øyeblikk for lenge.",
      "Det første alle ser, peker mot Tove. Det første alle glemmer, peker mot noen som kan låser, skruer og raske forklaringer. Denne saken straffer den som forelsker seg i det første sporet."
    ],
    scenes: {
      1: {
        routeLabel: "Blindsonen",
        title: "Blindsonen",
        kicker: "Hva slags hendelse var tunkaoset egentlig?",
        paragraphs: [
          "Sambandsloggen er brutal i sin enkelhet: 18.07 rop ute, 18.08 folk river opp døra, 18.09 stativet står allerede på gløtt. Ingen rekker å tenke. Alle rekker å reagere.",
          "I loggen ligger ikke løsningen, men formen på den. Noen trengte ikke mer enn et kort hull i alles oppmerksomhet. Nakne ankler, mistet håndkle og panikk på tunet gjør resten."
        ],
        prompt: "Skriv ett ord: Hva var hele utekaoset i praksis?",
        helper: "Hvis alle ser ut, får én person arbeide inne.",
        answerMode: "input",
        answer: "AVLEDNING",
        placeholder: "ett ord",
        evidenceIds: [],
        success: "Riktig. Dette var ikke hovedhendelsen, men gardinen foran hovedhendelsen."
      },
      2: {
        routeLabel: "Første Mistanke",
        title: "Første mistanke",
        kicker: "Hvem ser skyldig ut hvis dere tenker for raskt?",
        paragraphs: [
          "Tørre voksrester ved peisen passer nesten altfor pent til Toves utstyr.",
          "Overivrige vitner peker på målebåndet hennes og glemmer hvor behagelig det er å få et navn med én gang.",
          "Ved første gjennomlesning virker alt solid, men hvert spor er laget for å stoppe tenkningen tidlig.",
          "Egentlig er dette bare den personen saken vil at dere skal arrestere før dere har fortjent det."
        ],
        prompt: "Skriv navnet på personen saken vil at dere skal anklage for tidlig.",
        helper: "Les forbokstavene i de fire linjene.",
        answerMode: "input",
        answer: "tove",
        placeholder: "navn",
        evidenceIds: ["red-wax-mark", "bridge-measure-note", "glitter-arc"],
        success: "Riktig. Tove er den pene, feilaktige første mistanken denne saken serverer med vilje."
      },
      3: {
        routeLabel: "Ruten Ut",
        title: "Ruten ut",
        kicker: "Hvor ble egget faktisk ført etter avledningen?",
        paragraphs: [
          "I sidegangen finner dere en våt lapp brettet inn i et tørt håndkle. Midt på lappen står ordet WFELBTTF skrevet med hard penn.",
          "Baksiden er mindre dramatisk og langt mer nyttig: tre hakk markerer verandadøra, vedstabelen og et kort stoppested ingen gidder å sjekke hvis de fortsatt stirrer på voksen."
        ],
        prompt: "Dekod stedkoden og skriv den uten mellomrom.",
        helper: "Gå én bokstav tilbake i alfabetet. Ruten er like viktig som ordet.",
        answerMode: "input",
        answer: "VEDKASSE",
        acceptedAnswers: ["VEDKASSE", "VEDKASSA"],
        placeholder: "stedkode",
        evidenceIds: ["woodbox-code-note", "veranda-slush"],
        success: "Riktig. Ruten peker mot vedkassen, ikke mot den mer teatralske flukten alle snakket om."
      },
      4: {
        routeLabel: "Tidskollisjon",
        title: "Tidskollisjon",
        kicker: "Hvilket minutt får den pene, men feilaktige anklagen til å rakne?",
        paragraphs: [
          "Viltkameraet ved brua fanger Tove ute i kulda med målebåndet synlig. Bildet er stygt, ufrivillig komisk og helt avgjørende.",
          "Samtidig bryter karaokeloggen på høyttaleren nøyaktig i ett minutt. Det er minuttet der den opplagte forklaringen dør og en mer ubehagelig forklaring overtar."
        ],
        prompt: "Skriv nøkkelminuttet som avslører at første mistanke ikke holder.",
        helper: "Bruk tall uten tegnsetting, for eksempel 1809.",
        answerMode: "input",
        answer: "1809",
        placeholder: "klokkeslett",
        evidenceIds: ["bridge-camera", "karaoke-gap", "peis-heat-note"],
        success: "Riktig. 18.09 er minuttet der Tove faller ut og noen med bedre tilgang blir stående igjen."
      },
      5: {
        routeLabel: "Det Lille Sporet",
        title: "Det lille sporet",
        kicker: "Hvilket trivielt spor gjør den rette personen farlig konkret?",
        paragraphs: [
          "Kalde metallkorn ligger igjen der et vått håndkle ble hektet av i fart.",
          "Rett i sidegangen finnes ett lite punkt som binder lås, hudvarme og hastverk sammen.",
          "Ofte blir slike små festepunkter oversett fordi resten av rommet skriker om større drama.",
          "Kikk på starten av linjene hvis du fortsatt ikke ser hvor det lille sporet faktisk bor."
        ],
        prompt: "Skriv ordet for stedet det lille metallsporet faktisk satt på.",
        helper: "Les forbokstavene i de fire linjene.",
        answerMode: "input",
        answer: "KROK",
        acceptedAnswers: ["KROK", "KOBBERKROK", "HÅNDKLEKROK", "HANDKLEKROK"],
        placeholder: "sporord",
        evidenceIds: ["copper-hook", "repair-receipt", "ash-cuff"],
        success: "Riktig. Det lille metallsporet er det som gjør teorien om Fredrik til mer enn en magefølelse."
      }
    },
    evidence: [
      {
        id: "red-wax-mark",
        scene: 2,
        title: "Rød voks på sokkelen",
        detail: "Et tørt rødt voksmerke matcher Toves skiutstyr så godt at det føles som en gavepakke til den slurvete etterforskeren.",
        tone: "ambiguous",
        tags: ["romspor", "mistanke"],
        suspectIds: ["tove"]
      },
      {
        id: "bridge-measure-note",
        scene: 2,
        title: "Våt målenotis",
        detail: "Toves blokk er funnet ved peisen, men papiret er vått på utsiden og tørt inni. Den kan ha blitt slengt fra seg i panikk, ikke i tyveri.",
        tone: "ambiguous",
        tags: ["romspor", "alibi"],
        suspectIds: ["tove"]
      },
      {
        id: "glitter-arc",
        scene: 2,
        title: "Glitterbue ved bordet",
        detail: "Siws glitter ligger der noen lent seg inn, men det sier ingenting sikkert om når eller hvorfor.",
        tone: "support",
        tags: ["romspor", "støy"],
        suspectIds: ["siw"]
      },
      {
        id: "woodbox-code-note",
        scene: 3,
        title: "Kodet rutenotis",
        detail: "En enkel forskyvningskode peker mot vedkassen. Det er ikke sexy, bare effektivt.",
        tone: "decisive",
        tags: ["skjulested", "rute"]
      },
      {
        id: "veranda-slush",
        scene: 3,
        title: "Slaps i sidegangen",
        detail: "Slapsdryppene går bare halve veien ut og tilbake. Noen gikk ikke langt, bare smart nok.",
        tone: "support",
        tags: ["rute", "bevegelse"]
      },
      {
        id: "bridge-camera",
        scene: 4,
        title: "Viltkamera ved brua",
        detail: "18.09: Tove er ute ved brua. Hun ser latterlig ut. Hun ser ikke ut som personen ved stativet.",
        tone: "decisive",
        tags: ["tidslinje", "avkler feilspor"],
        suspectIds: ["tove"]
      },
      {
        id: "karaoke-gap",
        scene: 4,
        title: "Brudd i karaokeloggen",
        detail: "Høyttaleren mister strøm akkurat i minuttet ingen lenger ser mot stua. Noen sto nær uttaket og stativet samtidig.",
        tone: "support",
        tags: ["tidslinje", "tilgang"]
      },
      {
        id: "peis-heat-note",
        scene: 4,
        title: "Varmeforskjell ved peisen",
        detail: "Ski voksen ved peisen er gammel og tørr. Metallstøvet på kroken er ferskt. Det er forskjellen mellom et skittent rom og en fersk handling.",
        tone: "support",
        tags: ["tidslinje", "trivielt spor"]
      },
      {
        id: "copper-hook",
        scene: 5,
        title: "Kobber på håndklekroken",
        detail: "Kobberstøv fra samme legering som låsen på premiestativet ligger på håndklekroken i sidegangen. Noen med lås i hendene brukte håndkleet på vei ut.",
        tone: "decisive",
        tags: ["trivielt spor", "tilgang"],
        suspectIds: ["fredrik"]
      },
      {
        id: "repair-receipt",
        scene: 5,
        title: "Kvittering for reserveskruer",
        detail: "I Fredriks lommebok ligger en kvittering og en notis: 'Ikke la den låsen bli demonstrert varm.' Det er ikke et alibi. Det er et motiv.",
        tone: "decisive",
        tags: ["motiv", "sabotasje"],
        suspectIds: ["fredrik"]
      },
      {
        id: "ash-cuff",
        scene: 5,
        title: "Aske på mansjetten",
        detail: "Fuktig aske på innsiden av Fredriks mansjett tyder på kort vei mellom peis, håndkle og verandadør.",
        tone: "support",
        tags: ["rute", "tilgang"],
        suspectIds: ["fredrik"]
      }
    ],
    final: {
      brief:
        "Bygg en sak som både avkler det pene feilsporet og plasserer rett person ved stativet med et motiv som holder i dagslys.",
      evidenceRule:
        "Velg tre bevis: ett som knuser første mistanke, ett som plasserer riktig person ved åstedet, og ett som forklarer hvorfor vedkommende måtte stanse finalen.",
      success:
        "Fredrik tok egget for å sabotere demonstrasjonen før den varme låsen avslørte hans egen slurvete fiks. Vedkassen var bare et kort, praktisk skjulested mens han prøvde å redde ansikt.",
      falseLeadOutcome:
        "Dette er den elegante feilanklagen. Voksen peker høyt mot Tove, men viltkameraet ved brua 18.09 gjør henne for dum, våt og synlig til å være tyven. Saken deres kollapser på tidslinjen.",
      wrongSuspectOutcome:
        "Den anklagen har støy, men ikke nok logikk. Personen dere peker på bærer pinlige løgner, men bevisrekken deres plasserer ikke vedkommende sikkert ved stativet i nøkkelminuttet.",
      wrongMotiveOutcome:
        "Dere har nesten rett person, men feil drivkraft. Denne saken handler ikke om show eller gevinst, men om å stoppe en avsløring som ville blitt offentlig og ydmykende.",
      wrongHidingOutcome:
        "Dere ser hvem som tok egget, men overser ruten ut. Skjulestedet må passe både den korte tidslommen og bevegelsen gjennom sidegangen.",
      weakEvidenceOutcome:
        "Anklagen lukter riktig, men holder ikke. Uten både viltkameraet, kobberkroken og kvitteringen blir dette bare en sterk mistanke, ikke en sak som overlever motspørsmål."
    }
  },
  {
    id: "sort-bytte",
    minLevel: 4,
    title: "Sak 7B: Kopien i mørket",
    tagline: "Teipen peker mot showkvinnen. Saltet peker mot vertinnen.",
    culpritId: "siw",
    motiveId: "swap",
    hidingSpotId: "postbox",
    falseLeadId: "therese",
    decisiveEvidenceIds: ["rehearsal-note", "salt-cuff", "copy-padding"],
    falseLeadEvidenceIds: ["violet-tape", "spotlight-card"],
    opening: [
      "Denne natta skulle Bru-egget avdukes i dempet lys med en hemmelig overgang Therese hadde rigget under duken. Så kom skriket ute, døra slo opp og en hel hytte sprang i hver sin grad av påkledning.",
      "Når alle kommer inn igjen, er det forførende lett å peke på den teatralske kvinnen med teip under bordet. Problemet er at denne saken ikke løses av den høyeste energien i rommet, men av den mest kontrollerte."
    ],
    scenes: {
      1: {
        routeLabel: "Blindsonen",
        title: "Blindsonen",
        kicker: "Hva ga plass til selve byttet?",
        paragraphs: [
          "Ropet ute var ikke bare bråk. Det var et perfekt øyeblikk for noen som allerede hadde planlagt mer enn resten av hytta.",
          "Alle andre løp ut. En person trengte bare noen få sekunder alene ved duken, glasset og en ferdig tenkt reserveplan."
        ],
        prompt: "Skriv ett ord: Hva var hele hendelsen ute på tunet?",
        helper: "Tenk funksjon, ikke kaos.",
        answerMode: "input",
        answer: "AVLEDNING",
        placeholder: "ett ord",
        evidenceIds: [],
        success: "Riktig. Nakne skuldre og harenødskrik var bare røyken foran selve byttet."
      },
      2: {
        routeLabel: "Første Mistanke",
        title: "Første mistanke",
        kicker: "Hvem ser mest skyldig ut hvis dere lar dere rive med av sceneshowet?",
        paragraphs: [
          "Teipen under duken er akkurat teatralsk nok til å bli husket.",
          "Hennes cue-kort ligger også synlig, som om rommet selv har valgt synderen for dere.",
          "Et slikt oppsett er bygget for å gi dere et navn raskt.",
          "Rommet roper på den mest sceniske kvinnen lenge før det peker på den mest kontrollerte.",
          "Etterforskere som haster, stanser gjerne her og kaller det godt arbeid.",
          "Skammen hennes er høylytt, men ikke avgjørende.",
          "Egentlig er hun denne sakens vakreste feilspor."
        ],
        prompt: "Skriv navnet på personen denne ruta vil at dere skal låse dere til for tidlig.",
        helper: "Les forbokstavene i de sju linjene.",
        answerMode: "input",
        answer: "therese",
        placeholder: "navn",
        evidenceIds: ["violet-tape", "spotlight-card", "glitter-crescent"],
        success: "Riktig. Therese er den storslåtte feilanklagen denne saken lokker dere mot først."
      },
      3: {
        routeLabel: "Ruten Ut",
        title: "Ruten ut",
        kicker: "Hvor havnet originalen etter byttet?",
        paragraphs: [
          "Bak en linserviett finner dere en liten kode skrevet med rolig hånd: QPTULBTTF.",
          "Ruten ut er kort og skitten på den kjedelige måten: gang, ytterdør, mørke og et skjulested ingen gidder å se i hvis de fortsatt stirrer på teipen under duken."
        ],
        prompt: "Dekod stedkoden og skriv skjulestedet uten mellomrom.",
        helper: "Samme kode som før: én bokstav tilbake.",
        answerMode: "input",
        answer: "POSTKASSE",
        acceptedAnswers: ["POSTKASSE", "POSTKASSA"],
        placeholder: "stedkode",
        evidenceIds: ["postbox-code-note", "front-step-salt"],
        success: "Riktig. Originalen ble ikke tatt langt. Den ble tatt kaldt."
      },
      4: {
        routeLabel: "Tidskollisjon",
        title: "Tidskollisjon",
        kicker: "Hvilket minutt gjør at Therese blir for synlig til å være den egentlige tyven?",
        paragraphs: [
          "En øvingslapp ved lysbordet viser Therese opptatt med cue-sekvensen akkurat da utebråket starter. Hun er fortsatt en dårlig idé. Hun er bare ikke den riktige dårlige ideen.",
          "I samme vindu oppstår et tomrom i gangen. Det er dette minuttet den rolige personen får sin sjanse mens den teatralske binder alles blikk."
        ],
        prompt: "Skriv nøkkelminuttet som avslører hvor den virkelige lommen i tidslinjen ligger.",
        helper: "Bruk tall, ikke kolon.",
        answerMode: "input",
        answer: "1810",
        placeholder: "klokkeslett",
        evidenceIds: ["rehearsal-note", "hall-gap", "door-latch-cold"],
        success: "Riktig. 18.10 er lommen der scenen fortsetter, men kontrollen skifter hender."
      },
      5: {
        routeLabel: "Det Lille Sporet",
        title: "Det lille sporet",
        kicker: "Hvilket tilsynelatende lite spor gjør bytte-teorien til en faktisk sak?",
        paragraphs: [
          "Små hvite korn er langt kjedeligere enn teip, glitter og voksenverdig panikk.",
          "Alt det spektakulære i rommet prøver å lokke dere bort fra det mest praktiske sporet.",
          "Langt viktigere enn silkekåpe og scenevaner er det fine stoffet som sitter på innsiden av hansken.",
          "Turen ut var kort, kald og bare synlig for dem som gidder å lese smått."
        ],
        prompt: "Skriv ordet for det lille stoffet som gjør denne ruten mulig.",
        helper: "Les forbokstavene i de fire linjene.",
        answerMode: "input",
        answer: "SALT",
        acceptedAnswers: ["SALT", "VEISALT"],
        placeholder: "sporord",
        evidenceIds: ["salt-cuff", "copy-padding", "linen-bag"],
        success: "Riktig. Saltet på hansken gjør dette til planlegging, ikke bare pynt og impuls."
      }
    },
    evidence: [
      {
        id: "violet-tape",
        scene: 2,
        title: "Fiolett tape under duken",
        detail: "Thereses tape ligger under duken. Det er høyt, synlig og perfekt dersom du ønsker å stoppe tenkningen din tidlig.",
        tone: "ambiguous",
        tags: ["romspor", "mistanke"],
        suspectIds: ["therese"]
      },
      {
        id: "spotlight-card",
        scene: 2,
        title: "Cue-kort for spotlight",
        detail: "Kortet sier at alle skal se mot bordet ved midnatt. Det peker mot show, men ikke nødvendigvis mot tyveri.",
        tone: "ambiguous",
        tags: ["motiv", "show"],
        suspectIds: ["therese"]
      },
      {
        id: "glitter-crescent",
        scene: 2,
        title: "Glitterhalvmåne",
        detail: "Siws glitter ligger i en pen bue ved glasslokket. Den kan være arbeidsrelatert. Den kan være noe langt verre.",
        tone: "support",
        tags: ["romspor", "støy"],
        suspectIds: ["siw"]
      },
      {
        id: "postbox-code-note",
        scene: 3,
        title: "Rolig skrevet kode",
        detail: "Koden peker mot postkassen. Håndskriften er for jevn til å være skrevet i panikk.",
        tone: "decisive",
        tags: ["skjulested", "rute"]
      },
      {
        id: "front-step-salt",
        scene: 3,
        title: "Salt ved inngangstrinnet",
        detail: "Fint veisalt ligger på trinnet, ikke bare i gårdsplassen. Noen gikk målrettet ut og raskt inn igjen.",
        tone: "support",
        tags: ["rute", "bevegelse"]
      },
      {
        id: "rehearsal-note",
        scene: 4,
        title: "Øvingsnotis ved lysbordet",
        detail: "Therese er bundet til cue-sekvensen rundt 18.10. Hun er for synlig, for opptatt og for tidfestet til å være den usette hånden ved byttet.",
        tone: "decisive",
        tags: ["tidslinje", "avkler feilspor"],
        suspectIds: ["therese"]
      },
      {
        id: "hall-gap",
        scene: 4,
        title: "Tom gang 18.10",
        detail: "Vitneloggen beskriver gangen som tom akkurat lenge nok til at noen kontrollert kunne passere med noe lite og verdifullt.",
        tone: "support",
        tags: ["tidslinje", "tilgang"]
      },
      {
        id: "door-latch-cold",
        scene: 4,
        title: "Kald dørvrider",
        detail: "Ytterdørens vrider er kaldere enn resten av gangen. Noen åpnet og lukket den midt i innekaoset.",
        tone: "support",
        tags: ["tidslinje", "rute"]
      },
      {
        id: "salt-cuff",
        scene: 5,
        title: "Veisalt på linhanske",
        detail: "På innsiden av Siws rene linhanske sitter fint veisalt. Ikke mye. Bare nok til å bevise den korte turen ut til postkassen.",
        tone: "decisive",
        tags: ["trivielt spor", "rute"],
        suspectIds: ["siw"]
      },
      {
        id: "copy-padding",
        scene: 5,
        title: "Bobleplast i linvesken",
        detail: "I Siws linveske ligger bobleplast skåret til eggform. Det er ikke pynt. Det er byttelogistikk.",
        tone: "decisive",
        tags: ["motiv", "bytte"],
        suspectIds: ["siw"]
      },
      {
        id: "linen-bag",
        scene: 5,
        title: "Ren veske, skitten plan",
        detail: "Vesken som skulle inneholde servietter, rommer akkurat det man trenger for å skjule et stille bytte.",
        tone: "support",
        tags: ["motiv", "tilgang"],
        suspectIds: ["siw"]
      }
    ],
    final: {
      brief:
        "Bygg en anklage som forklarer hvorfor det teatralske sporet er for høyt, hvordan den rolige personen fikk tidslommen, og hvorfor originalen ble byttet i stedet for ødelagt.",
      evidenceRule:
        "Velg tre bevis: ett som avkler det åpenbare showsporet, ett som plasserer riktig person på den korte ruten ut, og ett som viser at dette var et planlagt bytte.",
      success:
        "Siw tok originalen for å bytte den ut med en kopi og beholde kontrollen over finalen. Postkassen ga et raskt, kaldt skjulested mens rommet fortsatt pekte på feil kvinne.",
      falseLeadOutcome:
        "Denne anklagen føles deilig riktig fordi Therese bærer både tape, energi og scenevaner. Men øvingsnotatet holder henne bundet til feil sted i riktig minutt. Det er en sterk historie og en dårlig sak.",
      wrongSuspectOutcome:
        "Dere har funnet skam, støy og halvsannheter, men ikke den kontrollerte bevegelsen som denne saken krever. Den skyldige her jobber roligere enn dere anklager.",
      wrongMotiveOutcome:
        "Riktig person kan fortsatt tenkes, men ikke riktig grunn. Dette var ikke bare oppmerksomhet. Det var et bytte som krevde forberedelse, emballasje og et stille skjulested.",
      wrongHidingOutcome:
        "Anklagen peker riktig vei, men ikke langt nok. Skjulestedet må kunne nås og forlates i den korte gangen-tidslommen uten å vekke nytt bråk.",
      weakEvidenceOutcome:
        "Dere har teften, men ikke kjeden. Uten både øvingsnotatet, saltet på hansken og bobleplasten i vesken blir dette bare en smart mistanke, ikke en tett anklage."
    }
  }
];
