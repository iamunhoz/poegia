import { Poetry } from "src/lib/definitions"

// prettier-ignore
const poesia1: Poetry = {
  id: 'lucas-um',
  title: "A poesia é",
  stanzas: [
    [
      ["A", "poesia", "é", "nativa"],
      ["A", "poesia", "é", 0]
    ],
    [
      ["É", "um", "fogo", "sem", "controle"],
      [1]
    ],
  ],
  fillers: ['sativa', 'só bole']
}

// prettier-ignore
const poesia2: Poetry = {
  id: 'iva-um',
  title: "Os cavalos",
  stanzas: [
    [
      ["Um", "cavalo", "era", 0],
      ["Mas", 1, "é", "azul"],
    ],
    [
      ["Qualquer", 2, "que", 3, ", paciência"],
      [4, 'vive', 'mais']
    ],
  ],
  fillers: ['luxo', 'salão de baile', 'pássaro', 'desidratar', 'jacaré']
}

const poetries: Poetry[] = [poesia1, poesia2]

export { poetries }
