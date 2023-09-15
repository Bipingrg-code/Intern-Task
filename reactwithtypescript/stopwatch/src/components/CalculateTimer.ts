export default function CalculateTimer(
  timeInSeconds: number
): Array<number | string> {
  let hours: number = Math.floor(timeInSeconds / 3600);
  let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds: number = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);
  let milliseconds: number = Math.floor(
    (timeInSeconds - Math.floor(timeInSeconds)) * 10000
  );

  //formate value
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = minutes < 10 ? `0${seconds}` : seconds;
  let millisecondsFormat = minutes < 10 ? `${milliseconds}` : milliseconds;

  // Return minutes, seconds, and milliseconds as an array
  return [minutesFormat, secondsFormat, millisecondsFormat];
}
