import ppt from "../assets/ppt.svg";
import circuit from "../assets/circuit_board.svg";
import coder from "../assets/proud_coder.svg";
import mysterybox from "../assets/mystery-box.jpg";

const timelineElements = [
  {
    id: 1,
    title: "PAPER PRESENTATION",
    genere: "Technical",
    schedule: "Morning",
    topics: [
      "Signal and Image Processing",
      "Embedded and Automation",
      "Wireless Communication and Networks",
      "VLSI Design",
      " Satellite Communication",
      "Sensor Technologies",
    ],
    img: ppt,
  },
  {
    id: 2,
    title: "REVERSE ENGINEERING",
    genere: "Technical",
    schedule: "Afternoon",
    Description:
      "A circuit should be designed according to the hint given on the sheet. Totally two rounds will be conducted and the winner will be selected.",
    img: circuit,
  },
  {
    id: 3,
    title: "TECH SPOOL",
    genere: "Technical",
    schedule: "Afternoon",
    subEvents: ["Blind Coding - 2 rounds", " Technical Connections - 2 rounds"],
    img: coder,
  },
  {
    id: 4,
    title: "MYSTERY ROOM EVENTS",
    genere: "Non-Technical",
    schedule: "Afternoon",
    Description: "Something awaits for you",
    img: mysterybox,
  },
];

export default timelineElements;
