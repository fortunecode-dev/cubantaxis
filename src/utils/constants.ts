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
    "hav":    { distance: 23,  duration: "0:30", convertible: 50,  van: 55,  "modern-car": 30 },
    "var":    { distance: 170, duration: "2:30", convertible: 160, van: 180, "modern-car": 80 },
    "vinales":{ distance: 180, duration: "2:30", convertible: null, van: 190, "modern-car": 120 },
    "cfg":    { distance: 245, duration: "3:00", convertible: null, van: 220, "modern-car": 155 },
    "sta-clara": { distance: 300, duration: "3:30", convertible: null, van: 285, "modern-car": 180 },
    "trinidad":  { distance: 330, duration: "4:30", convertible: null, van: 325, "modern-car": 250 },
    "sta-maria-key": { distance: 405, duration: "5:00", convertible: null, van: 370, "modern-car": 200 },
    "coco-key": { distance: 525, duration: "6:30", convertible: null, van: 540, "modern-car": 250 },
    "guillermo-key": { distance: 555, duration: "7:00", convertible: null, van: 515, "modern-car": 230 }
  },

  "var-airport": {
    "cardenas": { distance: 39,  duration: "0:40", convertible: null, van: 60,  "modern-car": 40 }, 
    "hav":      { distance: 125, duration: "2:00", convertible: null, van: 175, "modern-car": 100 },
    "hav-airport": { distance: 140, duration: "2:15", convertible: null, van: 170, "modern-car": 80 },
    "cfg":      { distance: 205, duration: "2:45", convertible: null, van: 200, "modern-car": 160 },
    "sta-clara":{ distance: 255, duration: "3:10", convertible: null, van: 255, "modern-car": 150 },
    "trinidad": { distance: 290, duration: "4:00", convertible: null, van: 325, "modern-car": 200 }
  },

  "hav": {
    "hav-airport": { distance: 23,  duration: "0:30", convertible: 50,  van: 55,  "modern-car": 30 },
    "var-airport": { distance: 125, duration: "2:00", convertible: 160, van: 175, "modern-car": 80 }, // La Habana -> Aero Varadero (tabla)
    "var":         { distance: 145, duration: "2:15", convertible: 160, van: 180, "modern-car": 80 },
    "vinales":     { distance: 180, duration: "2:30", convertible: 180, van: 200, "modern-car": 130 },
    "cfg":         { distance: 240, duration: "3:00", convertible: null, van: 240, "modern-car": 155 },
    "sta-clara":   { distance: 300, duration: "3:30", convertible: null, van: 305, "modern-car": 200 },
    "trinidad":    { distance: 320, duration: "4:15", convertible: null, van: 320, "modern-car": 250 },
    "sta-maria-key": { distance: 400, duration: "5:00", convertible: null, van: 350, "modern-car": 200 },
    "coco-key":    { distance: 525, duration: "6:30", convertible: null, van: 535, "modern-car": 250 },
    "guillermo-key":{ distance: 550, duration: "7:00", convertible: null, van: 550, "modern-car": 230 }
  },

  "var": {
    "var-airport": { distance: 40,  duration: "0:45", convertible: null, van: 75,  "modern-car": 40 },
    "hav":         { distance: 145, duration: "2:15", convertible: null, van: 145, "modern-car": 80 },
    "hav-airport": { distance: 170, duration: "2:30", convertible: null, van: 180, "modern-car": 80 },
    "cfg":         { distance: 177, duration: "2:30", convertible: null, van: 150, "modern-car": 90 },  // tabla tiene 177/190 filas; incluyo la 177 como entrada
    "cfg_alt":     { distance: 190, duration: "3:00", convertible: null, van: 205, "modern-car": 120 }, // segunda fila Cienfuegos (tabla)
    "sta-clara":   { distance: 240, duration: "3:30", convertible: null, van: 255, "modern-car": 150 },
    "trinidad":    { distance: 270, duration: "4:20", convertible: null, van: 270, "modern-car": 250 },
    "vinales":     { distance: 330, duration: "4:45", convertible: null, van: 315, "modern-car": 180 },
    "sta-maria-key":{ distance: 330, duration: "4:30", convertible: null, van: 250, "modern-car": 180 },
    "coco-key":    { distance: 465, duration: "6:20", convertible: null, van: 280, "modern-car": 200 }
  },

  "vinales": {
    "hav-airport": { distance: 180, duration: "2:30", convertible: null, van: 190, "modern-car": 120 },
    "hav":         { distance: 180, duration: "2:30", convertible: 180, van: 200, "modern-car": 130 },
    "var":         { distance: 330, duration: "4:45", convertible: null, van: 315, "modern-car": 180 }
  },

  "trinidad": {
    "hav-airport": { distance: 330, duration: "4:30", convertible: null, van: 325, "modern-car": 250 },
    "hav":         { distance: 320, duration: "4:15", convertible: null, van: 320, "modern-car": 250 },
    "var":         { distance: 270, duration: "4:20", convertible: null, van: 270, "modern-car": 250 }
  },

  "sta-clara": {
    "hav-airport": { distance: 300, duration: "3:30", convertible: null, van: 285, "modern-car": 180 },
    "hav":         { distance: 300, duration: "3:30", convertible: null, van: 305, "modern-car": 200 },
    "var":         { distance: 240, duration: "3:30", convertible: null, van: 255, "modern-car": 150 }
  },

  "cfg": {
    "hav-airport": { distance: 245, duration: "3:00", convertible: null, van: 220, "modern-car": 155 },
    "hav":         { distance: 240, duration: "3:00", convertible: null, van: 240, "modern-car": 155 },
    "var":         { distance: 177, duration: "2:30", convertible: null, van: 150, "modern-car": 90 },
    "var_alt":     { distance: 190, duration: "3:00", convertible: null, van: 205, "modern-car": 120 } // la segunda entrada Cienfuegos desde Varadero
  },

  "sta-maria-key": {
    "hav-airport": { distance: 405, duration: "5:00", convertible: null, van: 370, "modern-car": 200 },
    "hav":         { distance: 400, duration: "5:00", convertible: null, van: 350, "modern-car": 200 },
    "var":         { distance: 330, duration: "4:30", convertible: null, van: 250, "modern-car": 180 }
  },

  "coco-key": {
    "hav-airport": { distance: 525, duration: "6:30", convertible: null, van: 540, "modern-car": 250 },
    "hav":         { distance: 525, duration: "6:30", convertible: null, van: 535, "modern-car": 250 },
    "var":         { distance: 465, duration: "6:20", convertible: null, van: 280, "modern-car": 200 }
  },

  "guillermo-key": {
    "hav-airport": { distance: 555, duration: "7:00", convertible: null, van: 515, "modern-car": 230 },
    "hav":         { distance: 550, duration: "7:00", convertible: null, van: 550, "modern-car": 230 }
  }
};
