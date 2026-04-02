export type TaskOption = {
  value: string;
  label: string;
};

export type Task = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  scene: string;
  question: string;
  prompt: string;
  story: string[];
  options: TaskOption[];
  correctAnswer: string;
  successText: string;
  hintText: string;
  nextHref: string;
  nextLabel: string;
};

export const storyTitle = "Påskekrimmen på hytta på Bru";
export const progressKey = "bru-hytte-paskekrim";

export const introText = [
  "Påskeferien på hytta på Bru skulle være rolig. Snøen lå glitrende over tunet, kakaoen sto klar inne, og kveldens store premie var det sagnomsuste Bru-egget: et gullmalt påskeegg fylt med hemmelige premier.",
  "Så kom skriket. Utenfor huset spratt Påskeharen fram i full panikk og ropte 'NEEEIIIIII!!' mens en liten grå mus med kaninører raste gjennom snøen med sekken full av fargerike egg.",
  "Ingen vet hvor Bru-egget ble gjemt. Nå er det deres jobb å følge sporene, løse oppgavene og finne ut hvem som stjal egget, hvor tyven løp, og hvor skatten nå er skjult."
];

export const tasks: Task[] = [
  {
    id: 1,
    slug: "1",
    title: "Oppgave 1: Kaoset på tunet",
    shortTitle: "Kaoset på tunet",
    scene: "Ute foran hytta",
    question: "Hva er det første bildet faktisk avslører?",
    prompt: "Velg observasjonen som stemmer med det som skjer ute på tunet.",
    story: [
      "Dere stormer ut døren og ser sporene i snøen. Den grå musen løper vekk fra huset med en blå sekk proppfull av egg, mens Påskeharen kommer hoppende etter i full fortvilelse.",
      "Ved veggen står et vitne helt stille, og hunden følger nøye med. Men bare én av observasjonene forklarer hva som faktisk skjer akkurat nå."
    ],
    options: [
      {
        value: "mouse",
        label: "Musen flykter fra hytta med sekken full av egg, mens haren prøver å stoppe den"
      },
      {
        value: "hare",
        label: "Påskeharen løper fra musen fordi haren selv ble tatt på fersken"
      },
      {
        value: "dog",
        label: "Hunden er den som bærer skatten, og de andre løper bare etter"
      }
    ],
    correctAnswer: "mouse",
    successText:
      "Riktig. Tyven er på flukt, og det er musen som har kontroll på eggsekken. Nå må dere finne ut hvor den planla å løpe.",
    hintText:
      "Se på hvem som faktisk bærer sekken, og hvem som ser ut til å rope i fortvilelse.",
    nextHref: "/oppgave/2",
    nextLabel: "Gå til oppgave 2"
  },
  {
    id: 2,
    slug: "2",
    title: "Oppgave 2: Lappen ved trappen",
    shortTitle: "Lappen ved trappen",
    scene: "Ved inngangsdøren",
    question: "Hvor skulle musen videre?",
    prompt: "Lappen er skrevet med ett hakk forskyvning framover i alfabetet. Hvor peker den?",
    story: [
      "På den nederste trappen finner dere en våt lapp som må ha falt ut av sekken i farten. På lappen står det bare: CSVB.",
      "Under bokstavene er det tegnet en enkel strek over en bekk. Ingrid fra nabohytta hvisker at musetyven sikkert har skrevet kodet for å forvirre dere."
    ],
    options: [
      { value: "skogen", label: "Skogen" },
      { value: "brua", label: "Brua" },
      { value: "boden", label: "Skiboden" }
    ],
    correctAnswer: "brua",
    successText:
      "Ja. Når bokstavene flyttes ett hakk tilbake, blir CSVB til BRUA. Tyven planla å rømme over eller under brua ved hytta på Bru.",
    hintText:
      "Flytt hver bokstav ett steg bakover i alfabetet: C blir B, S blir R ...",
    nextHref: "/oppgave/3",
    nextLabel: "Følg sporene til oppgave 3"
  },
  {
    id: 3,
    slug: "3",
    title: "Oppgave 3: Sporene ved brua",
    shortTitle: "Sporene ved brua",
    scene: "Ved bekken og brua",
    question: "Hvor er Bru-egget gjemt?",
    prompt: "Dere finner tre tydelige spor ved brua. Hva er den beste konklusjonen?",
    story: [
      "Ved den gamle trebrua ser dere at hundesporene stopper oppe på stien ved eieren. Haresporene vender tilbake mot tunet, som om haren snudde for å rope på hjelp.",
      "Bare de små musesporene fortsetter ned mot skyggen under brua. Der ligger det også litt gullfarget maling i snøen og et lilla eggeskall som har hektet seg fast i plankene."
    ],
    options: [
      { value: "under-brua", label: "Bru-egget er gjemt under brua, bak plankene ved bekken" },
      { value: "hundebag", label: "Bru-egget ligger i baggen til mannen ved huset" },
      { value: "hareluke", label: "Bru-egget er gjemt i en hemmelig hareluke ved terrassen" }
    ],
    correctAnswer: "under-brua",
    successText:
      "Riktig. Alle sporene samler seg under brua. Nå gjenstår bare den endelige avsløringen av tyv, vitne og gjemmested.",
    hintText:
      "Hvem sine spor fortsetter helt ned til bekken, og hvor dukker den gullfargede malingen opp?",
    nextHref: "/finale",
    nextLabel: "Gå til finalen"
  }
];

export const finalChoices = {
  culprit: [
    { value: "musa", label: "Den grå påskemusa med kaninører" },
    { value: "haren", label: "Påskeharen" },
    { value: "mannen", label: "Mannen ved veggen" }
  ],
  witness: [
    { value: "haren", label: "Påskeharen ropte 'NEEEIIIIII!!'" },
    { value: "hunden", label: "Hunden ropte da egget forsvant" },
    { value: "musa", label: "Musen ropte for å lure alle" }
  ],
  hiding: [
    { value: "under-brua", label: "Under brua ved bekken" },
    { value: "inne", label: "Inne på kjøkkenet" },
    { value: "sekken", label: "Fortsatt i sekken på tunet" }
  ]
};
