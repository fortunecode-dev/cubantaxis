export const cars = [
  "classic-car",
  "modern-car",
  "van"]

export const places = [
  "hav-airport",
  "var-airport",
  "var",
  "hav",
  "coco-key",
  "cfg",
  "sta-clara",
  "trinidad",
  "vinales",
  "sta-maria-key",
  "guillermo-key"
]

const transfers = {
  "hav-airport": {
    "hav": { distance: 23, duration: "0:30", convertible: 50, van: 55, "modern-car": 30 },
    "var": { distance: 170, duration: "2:30", convertible: 160, van: 180, "modern-car": 80 },
    "vinales": { distance: 180, duration: "2:30", convertible: null, van: 190, "modern-car": 120 },
    "cfg": { distance: 245, duration: "3:00", convertible: null, van: 220, "modern-car": 155 },
    "sta-clara": { distance: 300, duration: "3:30", convertible: null, van: 285, "modern-car": 180 },
    "trinidad": { distance: 330, duration: "4:30", convertible: null, van: 325, "modern-car": 250 },
    "sta-maria-key": { distance: 405, duration: "5:00", convertible: null, van: 370, "modern-car": 200 },
    "coco-key": { distance: 525, duration: "6:30", convertible: null, van: 540, "modern-car": 250 },
    "guillermo-key": { distance: 555, duration: "7:00", convertible: null, van: 515, "modern-car": 230 }
  },

  "var-airport": {
    "cardenas": { distance: 39, duration: "0:40", convertible: null, van: 60, "modern-car": 40 },
    "hav": { distance: 125, duration: "2:00", convertible: null, van: 175, "modern-car": 100 },
    "hav-airport": { distance: 140, duration: "2:15", convertible: null, van: 170, "modern-car": 80 },
    "cfg": { distance: 205, duration: "2:45", convertible: null, van: 200, "modern-car": 160 },
    "sta-clara": { distance: 255, duration: "3:10", convertible: null, van: 255, "modern-car": 150 },
    "trinidad": { distance: 290, duration: "4:00", convertible: null, van: 325, "modern-car": 200 }
  },

  "hav": {
    "hav-airport": { distance: 23, duration: "0:30", convertible: 50, van: 55, "modern-car": 30 },
    "var-airport": { distance: 125, duration: "2:00", convertible: 160, van: 175, "modern-car": 80 }, // La Habana -> Aero Varadero (tabla)
    "var": { distance: 145, duration: "2:15", convertible: 160, van: 180, "modern-car": 80 },
    "vinales": { distance: 180, duration: "2:30", convertible: 180, van: 200, "modern-car": 130 },
    "cfg": { distance: 240, duration: "3:00", convertible: null, van: 240, "modern-car": 155 },
    "sta-clara": { distance: 300, duration: "3:30", convertible: null, van: 305, "modern-car": 200 },
    "trinidad": { distance: 320, duration: "4:15", convertible: null, van: 320, "modern-car": 250 },
    "sta-maria-key": { distance: 400, duration: "5:00", convertible: null, van: 350, "modern-car": 200 },
    "coco-key": { distance: 525, duration: "6:30", convertible: null, van: 535, "modern-car": 250 },
    "guillermo-key": { distance: 550, duration: "7:00", convertible: null, van: 550, "modern-car": 230 }
  },

  "var": {
    "var-airport": { distance: 40, duration: "0:45", convertible: null, van: 75, "modern-car": 40 },
    "hav": { distance: 145, duration: "2:15", convertible: null, van: 145, "modern-car": 80 },
    "hav-airport": { distance: 170, duration: "2:30", convertible: null, van: 180, "modern-car": 80 },
    "cfg": { distance: 177, duration: "2:30", convertible: null, van: 150, "modern-car": 90 },  // tabla tiene 177/190 filas; incluyo la 177 como entrada
    "cfg_alt": { distance: 190, duration: "3:00", convertible: null, van: 205, "modern-car": 120 }, // segunda fila Cienfuegos (tabla)
    "sta-clara": { distance: 240, duration: "3:30", convertible: null, van: 255, "modern-car": 150 },
    "trinidad": { distance: 270, duration: "4:20", convertible: null, van: 270, "modern-car": 250 },
    "vinales": { distance: 330, duration: "4:45", convertible: null, van: 315, "modern-car": 180 },
    "sta-maria-key": { distance: 330, duration: "4:30", convertible: null, van: 250, "modern-car": 180 },
    "coco-key": { distance: 465, duration: "6:20", convertible: null, van: 280, "modern-car": 200 }
  },

  "vinales": {
    "hav-airport": { distance: 180, duration: "2:30", convertible: null, van: 190, "modern-car": 120 },
    "hav": { distance: 180, duration: "2:30", convertible: 180, van: 200, "modern-car": 130 },
    "var": { distance: 330, duration: "4:45", convertible: null, van: 315, "modern-car": 180 }
  },

  "trinidad": {
    "hav-airport": { distance: 330, duration: "4:30", convertible: null, van: 325, "modern-car": 250 },
    "hav": { distance: 320, duration: "4:15", convertible: null, van: 320, "modern-car": 250 },
    "var": { distance: 270, duration: "4:20", convertible: null, van: 270, "modern-car": 250 }
  },

  "sta-clara": {
    "hav-airport": { distance: 300, duration: "3:30", convertible: null, van: 285, "modern-car": 180 },
    "hav": { distance: 300, duration: "3:30", convertible: null, van: 305, "modern-car": 200 },
    "var": { distance: 240, duration: "3:30", convertible: null, van: 255, "modern-car": 150 }
  },

  "cfg": {
    "hav-airport": { distance: 245, duration: "3:00", convertible: null, van: 220, "modern-car": 155 },
    "hav": { distance: 240, duration: "3:00", convertible: null, van: 240, "modern-car": 155 },
    "var": { distance: 177, duration: "2:30", convertible: null, van: 150, "modern-car": 90 },
    "var_alt": { distance: 190, duration: "3:00", convertible: null, van: 205, "modern-car": 120 } // la segunda entrada Cienfuegos desde Varadero
  },

  "sta-maria-key": {
    "hav-airport": { distance: 405, duration: "5:00", convertible: null, van: 370, "modern-car": 200 },
    "hav": { distance: 400, duration: "5:00", convertible: null, van: 350, "modern-car": 200 },
    "var": { distance: 330, duration: "4:30", convertible: null, van: 250, "modern-car": 180 }
  },

  "coco-key": {
    "hav-airport": { distance: 525, duration: "6:30", convertible: null, van: 540, "modern-car": 250 },
    "hav": { distance: 525, duration: "6:30", convertible: null, van: 535, "modern-car": 250 },
    "var": { distance: 465, duration: "6:20", convertible: null, van: 280, "modern-car": 200 }
  },

  "guillermo-key": {
    "hav-airport": { distance: 555, duration: "7:00", convertible: null, van: 515, "modern-car": 230 },
    "hav": { distance: 550, duration: "7:00", convertible: null, van: 550, "modern-car": 230 }
  }
};
export const prices = [
  { from: "hav-airport", to: "hav", minivan: 55, classicModern: 30, },
  { from: "hav-airport", to: "var", minivan: 180, classicModern: 80, },
  { from: "hav-airport", to: "vinales", minivan: 190, classicModern: 120, },
  { from: "hav-airport", to: "cfg", minivan: 220, classicModern: 155, },
  { from: "hav-airport", to: "sta-clara", minivan: 285, classicModern: 180, },
  { from: "hav-airport", to: "trinidad", minivan: 325, classicModern: 250, },
  { from: "hav-airport", to: "sta-maria-key", minivan: 370, classicModern: 200, },
  { from: "hav-airport", to: "coco-key", minivan: 540, classicModern: 250, },
  { from: "hav-airport", to: "guillermo-key", minivan: 515, classicModern: 230, },
  { from: "var-airport", to: "hav-airport", minivan: 170, classicModern: 80, },
  { from: "var-airport", to: "cfg", minivan: 200, classicModern: 160, },
  { from: "var-airport", to: "hav", minivan: 175, classicModern: 100, },
  { from: "var-airport", to: "sta-clara", minivan: 255, classicModern: 150, },
  { from: "var-airport", to: "trinidad", minivan: 325, classicModern: 200, },
  { from: "var-airport", to: "var", minivan: 60, classicModern: 40, },
  { from: "hav", to: "hav-airport", minivan: 55, classicModern: 30, },
  { from: "hav", to: "var", minivan: 180, classicModern: 80, },
  { from: "hav", to: "coco-key", minivan: 535, classicModern: 250, },
  { from: "hav", to: "guillermo-key", minivan: 550, classicModern: 230, },
  { from: "hav", to: "sta-maria-key", minivan: 350, classicModern: 200, },
  { from: "hav", to: "cfg", minivan: 240, classicModern: 155, },
  { from: "hav", to: "sta-clara", minivan: 305, classicModern: 200, },
  { from: "hav", to: "trinidad", minivan: 320, classicModern: 250, },
  { from: "hav", to: "vinales", minivan: 200, classicModern: 130, },
  { from: "var", to: "hav-airport", minivan: 180, classicModern: 80, },
  { from: "var", to: "var-airport", minivan: 75, classicModern: 40, },
  { from: "var", to: "cfg", minivan: 150, classicModern: 90, },
  { from: "var", to: "hav", minivan: 145, classicModern: 80, },
  { from: "var", to: "sta-clara", minivan: 255, classicModern: 150, },
  { from: "var", to: "trinidad", minivan: 270, classicModern: 250, },
  { from: "var", to: "vinales", minivan: 315, classicModern: 180, }
]
export const LABELS = {
  en: {
    "hav-airport": "Havana Airport (HAV)",
    "var-airport": "Varadero Airport (VRA)",
    hav: "Havana",
    var: "Varadero",
    "vinales": "Viñales",
    "cfg": "Cienfuegos",
    "sta-clara": "Santa Clara",
    "trinidad": "Trinidad",
    "sta-maria-key": "Cayo Santa Maria",
    "coco-key": "Cayo Coco",
    "guillermo-key": "Cayo Guillermo",
  },
  es: {
    "hav-airport": "Aeropuerto de La Habana (HAV)",
    "var-airport": "Aeropuerto de Varadero (VRA)",
    hav: "La Habana",
    var: "Varadero",
    vinales: "Viñales",
    cfg: "Cienfuegos",
    "sta-clara": "Santa Clara",
    trinidad: "Trinidad",
    "sta-maria-key": "Cayo Santa María",
    "coco-key": "Cayo Coco",
    "guillermo-key": "Cayo Guillermo",
  },
  pt: {
    "hav-airport": "Aeroporto de Havana (HAV)",
    "var-airport": "Aeroporto de Varadero (VRA)",
    hav: "Havana",
    var: "Varadero",
    vinales: "Viñales",
    cfg: "Cienfuegos",
    "sta-clara": "Santa Clara",
    trinidad: "Trinidad",
    "sta-maria-key": "Cayo Santa Maria",
    "coco-key": "Cayo Coco",
    "guillermo-key": "Cayo Guillermo",
  },
  fr: {
    "hav-airport": "Aéroport de La Havane (HAV)",
    "var-airport": "Aéroport de Varadero (VRA)",
    hav: "La Havane",
    var: "Varadero",
    vinales: "Viñales",
    cfg: "Cienfuegos",
    "sta-clara": "Sainte Claire",
    trinidad: "Trinidad",
    "sta-maria-key": "Cayo Santa Maria",
    "coco-key": "Cayo Coco",
    "guillermo-key": "Cayo Guillermo",
  },
  de: {
    "hav-airport": "Flughafen Havanna (HAV)",
    "var-airport": "Flughafen Varadero (VRA)",
    hav: "Havanna",
    var: "Varadero",
    vinales: "Viñales",
    cfg: "Cienfuegos",
    "sta-clara": "Santa Clara",
    trinidad: "Trinidad",
    "sta-maria-key": "Cayo Santa Maria",
    "coco-key": "Cayo Coco",
    "guillermo-key": "Cayo Guillermo",
  },
  ru: {
    "hav-airport": "Аэропорт Гаваны (HAV)",
    "var-airport": "Аэропорт Варадеро (VRA)",
    hav: "Гавана",
    var: "Варадеро",
    vinales: "Виньялес",
    cfg: "Сьенфуэгос",
    "sta-clara": "Санта-Клара",
    trinidad: "Тринидад",
    "sta-maria-key": "Кайо Санта-Мария",
    "coco-key": "Кайо Коко",
    "guillermo-key": "Кайо Гильермо",
  },
};
