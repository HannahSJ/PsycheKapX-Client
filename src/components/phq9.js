export function getSeverity(score, problems) {
    var indicatorCount = problems.filter(p => p.score >= p.severity).length;
  
    if (indicatorCount < 4) return "ไม่มีโรคซึมเศร้า";
    if (score <= 4) return "ภาวะซึมเศร้าน้อยที่สุด";
    if (score <= 9) return "ภาวะซึมเศร้าเล็กน้อย";
    if (score <= 14) return "ภาวะซึมเศร้าปานกลาง";
    if (score <= 19) return "ภาวะซึมเศร้ารุนแรงปานกลาง";
    if (score <= 27) return "รุนแรง";
    else return "ภาวะซึมเศร้ารุนแรงปานกลาง";
  }
  
  export const problemOptions = [
    "ไม่มีเลย",
    "เป็นบางวัน",
    "เป็นบ่อย",
    "เป็นทุกวัน"
  ];
  export const impactOptions = [
    "ไม่ยากเลย",
    "ค่อนข้างยาก",
    "ยากมาก",
    "ยากมากๆ"
  ];
  
  export const blankImpact = {
    severity: null,
    score: null,
    options: impactOptions,
    description:
      "หากคุณตรวจสอบปัญหาใด ๆ ปัญหาเหล่านี้ทำให้คุณทำงาน ดูแลบ้าน หรืออยู่ร่วมกับผู้อื่นได้ยากเพียงใด"
  };
  export const blankProblems = [
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description: "เบื่อ ไม่สนใจอยากทำอะไร"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description: "ไม่สบายใจ ซึมเศร้า ท้อแท้"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description: "หลับยาก หรือหลับๆตื่นๆ หรือหลับมากไป"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description: "เหนื่อยง่าย หรือไม่ค่อยมีแรง"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description: "เบื่ออาหารหรือกินมากเกินไป"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description:
        "รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือเป็นคนทำให้ตัวเองหรือครวบครัวผิดหวัง"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description:
        "สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ"
    },
    {
      severity: 2,
      score: null,
      options: problemOptions,
      description:
        "พูดช้า ทำอะไรช้าลง จนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น"
    },
    {
      severity: 1,
      score: null,
      options: problemOptions,
      description:
        "คิดทำร้ายตนเองหรือคิดว่าตายๆไปเสียคงจะดี"
    }
  ];