const Questions = [
  {
    text: "During systole, the ventricles contract. This causes",
    options: [
      "all four heart valves to close",
      "all four heart valves to open",
      "the atrioventricular (AV) valves to close and the semilunar valves to open",
      "the AV valves to open and the semilunar valves to close"
    ],
    answer: 3,
    rationale: "During systole, the pressure is greater in the ventricles than in the atria, causing the AV valves (the tricuspid and mitral valves) to close. The pressure in the venticles is also greather than the pressure in the aorta and pulmonary artery, forcing the semilunar valves (the pulmonic and aortic valves) to open."
  },
  {
    text: "The normal pacemaker of the heart is the",
    options: [
      "sinoatrial (SA) node",
      "AV node",
      "bundle of His",
      "ventricles"
    ],
    answer: 1,
    rationale:"Normally, the SA node is the heart’s pacemaker, generating 60 to 0100 impulses/minute. The AV node is the heart’s secondary pacemaker (40 to 60 beats/minute). The ventricles are the last line of defense (20 to 40 beats/minute)."
  },
  {
    text: "The pressure the venticle must generate to overcome the higher pressure in the aorta refers to",
    options: [
      "stroke volume",
      "contractility",
      "preload",
      "afterload"
    ],
    answer: 4,
    rationale: "Afterload is the pressure the ventricle must generate to overcome the higher pressure in the aorta to eject blood out of the heart."
  },
  {
    text: "The layer of the heart responsible for contraction is the",
    options: [
      "myocardium",
      "pericardium",
      "endocardium",
      "epicardium"
    ],
    answer: 1,
    rationale: "The myocardium has specialized cardiac muscle cells that not only contract but also transmit action potentials."
  },
  {
    text: "When listening to heart sounds, you can best hear S<sub>1</sub> at the",
    options: [
      "base of the heart",
      "apex of the heart",
      "aortic area",
      "second intercostal space to the right of the sternum"
    ],
    answer: 2,
    rationale: "S<sub>1</sub> is the best heard at the apex of the heart"
  },
  {
    text: "You're auscultating for heart sounds in a 3-year-old girl and hear an S<sub>3</sub>. You assess the sound to be a",
    options: [
      "normal finding",
      "probable sign of heart failure",
      "possible sign of arterial septal defect",
      "probable sign of mitral stenosis"
    ],
    answer: 1,
    rationale: "Although an S<sub>3</sub> can indicate heart failure in an adult, it's normal in a child"
  },
  {
    text: "When grading arterial pulses, a 1+ grade indicates",
    options: [
      "bounding pulse",
      "increased pulse",
      "weak pulse",
      "absent pulse"
    ],
    answer: 3,
    rationale: "A 1+ pulse indicates weak pulses and can be assosciated with diminshed caridac perfusion"
  },
  {
    text: "When assessing a patient for jugular vein distension, you should position him",
    options: [
      "sitting upright",
      "lying flat on his back",
      "lying on his back, with head of his bed elevated 30 to 45 degrees",
      "lying on his left side"
    ],
    answer: 3,
    rationale:"Assess jugular vein distension with the patient in semi-Fowlers position (head of the bed elevate 30 to 45 degrees). If he lies flat, his veins will be more distended; if he sits upright, his veins will be flat."
  }
]


export default {
  getRandomQuestionSet: function() {
    return Questions.sort(() => .5 - Math.random()).slice(0,3)
  }
};
