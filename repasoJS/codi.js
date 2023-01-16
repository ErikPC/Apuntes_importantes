const quantum = 2;
const processes = [
  { name: "A", arrival: 0, duration: 7 },
  { name: "B", arrival: 2, duration: 4 },
  { name: "C", arrival: 4, duration: 1 },
];
let currentProcess = 0;
let time = 0;

while (currentProcess < processes.length) {
  let process = processes[currentProcess];

  if (process.arrival <= time) {
    time += quantum;
    process.duration -= quantum;

    if (process.duration <= 0) {
      console.log(`Process ${process.name} finished at time ${time}`);
      currentProcess++;
    } else {
      console.log(
        `Process ${process.name} still running, remaining duration: ${process.duration}`
      );
      currentProcess++;
      if (currentProcess === processes.length) {
        currentProcess = 0;
      }
    }
  } else {
    time++;
  }
}
