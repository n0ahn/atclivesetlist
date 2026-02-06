const setlistData = [
  // --- DEEL 1 (VOOR PAUZE) ---
  {
    id: "01",
    title: "A.P.T. (Docenten)",
    details: [
      { role: "Vocal 1", name: "Charlotte Meijlemans", highlight: true },
      { role: "Vocal 2", name: "Julian Tiggelhoven", highlight: true },
      { role: "Gitaar 1", name: "Youri Nijboer" },
      { role: "Gitaar 2", name: "Bas Aghina" },
      { role: "Bas", name: "Sander Slot" },
      { role: "Drums", name: "Herman Roozenburg" },
      { role: "Keys", name: "Theo Duurland" },
      { role: "Alt Sax", name: "Evie den Boer" },
      { role: "Tenor Sax", name: "Bo van der Geest" },
      { role: "Bariton Sax", name: "Eline Renskers" }
    ]
  },
  {
    id: "02",
    title: "One Step Closer",
    details: [
      { role: "Vocal 1", name: "Olle Olof", highlight: true },
      { role: "Gitaar 1", name: "Misha Chirikov" },
      { role: "Gitaar 2", name: "Martin Jagt" },
      { role: "Bas", name: "Maurits de Regt" },
      { role: "Drums", name: "Rein van der Lelie" }
    ]
  },
  {
    id: "03",
    title: "Freezing Cold",
    details: [
      { role: "Piano", name: "Louise Wage" },
      { role: "Bas", name: "Tristan Verschoor" },
      { role: "Drums", name: "Daniel Schol" },
      { role: "Synth", name: "Evie den Boer" }
    ]
  },
  {
    id: "04",
    title: "Girl on Fire",
    details: [
      { role: "Vocal 1", name: "Amelie Niemeijer", highlight: true },
      { role: "Gitaar", name: "Noah Niemeijer" },
      { role: "Bas", name: "Theo Duurland" },
      { role: "Drums", name: "Mels Geerling" },
      { role: "Piano/Synth", name: "Valerie van der Struijk" }
    ]
  },
  {
    id: "05",
    title: "Highway Star",
    details: [
      { role: "Vocal 1", name: "Sarah Verlind", highlight: true },
      { role: "Vocal 2", name: "Wijnand Ubbens", highlight: true },
      { role: "Gitaar 1", name: "Wijnand Ubbens" },
      { role: "Gitaar 2", name: "Jayden Kappen" },
      { role: "Bas", name: "Merlijn Vantoor" },
      { role: "Drums", name: "Dante Delfgaauw" }
    ]
  },
  {
    id: "06",
    title: "Back to Black",
    details: [
      { role: "Vocal 1", name: "Annemae Noorman", highlight: true },
      { role: "Gitaar 1", name: "Youri Nijboer" },
      { role: "Bas", name: "Gijs Janssen" },
      { role: "Drums", name: "Josh Maytham" },
      { role: "Piano", name: "Maud Piersma" }
    ]
  },
  {
    id: "07",
    title: "Take Me Out",
    details: [
      { role: "Vocal 1", name: "Eva Fabriek", highlight: true },
      { role: "Gitaar 1", name: "Luuk Piersma" },
      { role: "Gitaar 2", name: "Lorena Udo" },
      { role: "Bas", name: "Jessey Out" },
      { role: "Drums", name: "Dante Delfgaauw" }
    ]
  },
  {
    id: "08",
    title: "Moves Like Jagger",
    details: [
      { role: "Vocal 1", name: "Mea Naezer", highlight: true },
      { role: "Vocal 2", name: "Eva Fabriek", highlight: true },
      { role: "Vocal 3", name: "Marleen Langevoort", highlight: true },
      { role: "Gitaar 1", name: "Lorena Udo" },
      { role: "Bas", name: "Luuk Piersma" },
      { role: "Drums", name: "Dante Delfgaauw" },
      { role: "Synth", name: "Jessey Out" }
    ]
  },
  {
    id: "09",
    title: "Stil in mij",
    details: [
      { role: "Vocal 1", name: "Lisanne Koerhuis", highlight: true },
      { role: "Vocal 2", name: "Isaac van Dorp", highlight: true },
      { role: "Gitaar 1", name: "Isaac van Dorp" },
      { role: "Gitaar 2", name: "Josh Maytham" },
      { role: "Bas", name: "Gijs Janssen" },
      { role: "Drums", name: "Dante Delfgaauw" },
      { role: "Synth", name: "Evie de Boer" }
    ]
  },
  {
    id: "10",
    title: "Where is my husband",
    details: [
      { role: "Vocal 1", name: "Lola Demoelt", highlight: true },
      { role: "Gitaar 1", name: "Luuk Piersma" },
      { role: "Bas", name: "Joost Essenberg" },
      { role: "Drums", name: "Daniel Schol" },
      { role: "Synth", name: "Jessey Out" },
      { role: "Alt Sax", name: "Evie de Boer" },
      { role: "Bariton Sax", name: "Eline Renskers" },
      { role: "Trompet", name: "Martijn Zijlmans" },
      { role: "Trombone", name: "Tomas Kenbeek" }
    ]
  },

  { type: "break", text: "PAUZE" },

  // --- DEEL 2 (NA PAUZE) ---
  {
    id: "11",
    title: "Nobody's Wife",
    details: [
      { role: "Vocal 1", name: "Sophie Delanghe", highlight: true },
      { role: "Akk. Gitaar", name: "Noah Niemeijer" },
      { role: "Gitaar", name: "Luuk Piersma" },
      { role: "Bas", name: "Joost Essenberg" },
      { role: "Drums", name: "Daniel Schol" }
    ]
  },
  {
    id: "12",
    title: "Pianoman",
    details: [
      { role: "Vocal 1", name: "Jillian Hartman", highlight: true },
      { role: "Bas", name: "Tristan Verschoof" },
      { role: "Drums", name: "Daniel Schol" },
      { role: "Piano", name: "Floris Tabak" },
      { role: "Mondharm.", name: "Jillian Hartman" }
    ]
  },
  {
    id: "13",
    title: "Because the Night",
    details: [
      { role: "Vocal 1", name: "Sarah Verlind", highlight: true },
      { role: "Gitaar", name: "Luuk Piersma" },
      { role: "Bas", name: "Fleur Bolster" },
      { role: "Drums", name: "Anna Maclaren" },
      { role: "Piano", name: "Juliette Geurts" }
    ]
  },
  {
    id: "14",
    title: "I See Red",
    details: [
      { role: "Vocal 1", name: "Mila Besselaar", highlight: true },
      { role: "Gitaar", name: "Noah Niemeijer" },
      { role: "Bas", name: "Eva Fabriek" },
      { role: "Drums", name: "Mels Geerling" },
      { role: "Nord Piano", name: "Valerie van der Struijk" }
    ]
  },
  {
    id: "15",
    title: "Linger",
    details: [
      { role: "Vocal 1", name: "Eva Fabriek", highlight: true },
      { role: "Vocal 2", name: "Eline Dijkstra", highlight: true },
      { role: "Akk. Gitaar", name: "Luuk Piersma" },
      { role: "Gitaar 1", name: "Noah Niemeijer" },
      { role: "Bas", name: "Femke Pap" },
      { role: "Drums", name: "Daniel Schol" },
      { role: "Viool", name: "Mike Kruijer" },
    ]
  },
  {
    id: "16",
    title: "Trouble",
    details: [
      { role: "Vocal 1", name: "Lisanne Koerhuis", highlight: true },
      { role: "Vocal 2", name: "Sien van der Does", highlight: true },
      { role: "Akk. Gitaar", name: "Lisanne koerhuis" },
      { role: "Gitaar", name: "Chris Boedijn" },
      { role: "Bas", name: "Sofie Bruggink" },
      { role: "Drums", name: "Daniel Schol" },
      { role: "Piano", name: "Sien van der Does" }
    ]
  },
  {
    id: "17",
    title: "Cosmic Girl",
    details: [
      { role: "Vocal 1", name: "Sarah van Dommele", highlight: true },
      { role: "Vocal 2", name: "Toon de Jong", highlight: true },
      { role: "Vocal 3", name: "Dylan Bottenheft", highlight: true },
      { role: "Gitaar", name: "Rein Sneyers" },
      { role: "Bas", name: "Bruna Leijen" },
      { role: "Drums", name: "Dylan Brouwer" },
      { role: "Piano", name: "Noah Dales" },
    ]
  },
  {
    id: "18",
    title: "Run",
    details: [
      { role: "Vocal", name: "Tim Bos", highlight: true },
      { role: "Akk. Gitaar", name: "Tim Bos" },
    ]
  },
  {
    id: "19",
    title: "Sonne",
    details: [
      { role: "Vocal 1", name: "Floris Tabak", highlight: true },
      { role: "Vocal 2", name: "Eva Fabriek", highlight: true },
      { role: "Vocal 3", name: "Sophie Delange", highlight: true },
      { role: "Gitaar 1", name: "Luuk Piersma" },
      { role: "Gitaar 2", name: "Lorena Udo" },
      { role: "Bas", name: "Eva Fabriek" },
      { role: "Drums", name: "Dante Delfgaauw" },
      { role: "Synth", name: "Jessey Out" }
    ]
  },
  {
    id: "20",
    title: "Layla",
    details: [
      { role: "Vocal 1", name: "Isaac van Dorp", highlight: true },
      { role: "Vocal 2", name: "Lisanne Koerhuis", highlight: true },
      { role: "Vocal 3", name: "Evie de Boer", highlight: true },
      { role: "Gitaar 1", name: "Isaac van Dorp" },
      { role: "Gitaar 2", name: "Aimee Vendelbos" },
      { role: "Gitaar 3", name: "Lisanne Koerhuis" },
      { role: "Bas", name: "Tristan Verschoor" },
      { role: "Drums", name: "Daniel Schol" }
    ]
  },
  {
    id: "21",
    title: "Alles is Liefde",
    details: [
      { role: "Vocal 1", name: "Sophie Delanghe", highlight: true },
      { role: "Vocal 2", name: "Sarah van Dommele", highlight: true },
      { role: "Vocal 3", name: "Anna Moens", highlight: true },
      { role: "Vocal 3", name: "Jip Venderbosch", highlight: true },
      { role: "Gitaar 1", name: "Noah Niemeijer" },
      { role: "Gitaar 2", name: "Tristan Verschoof" },
      { role: "Bas", name: "Joost Essenberg" },
      { role: "Drums", name: "Auke Zijlstra/Daniel Schol" },
      { role: "Piano", name: "Floris Tabak" }
    ]
  }
];