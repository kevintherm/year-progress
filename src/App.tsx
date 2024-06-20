import { useEffect, useState } from "react";
import { Progress } from "./components/ui/progress";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getTargetValue = () => {
      const currentYear = new Date().getFullYear();
      const secondsInYear = getSecondsInYear(currentYear);
      const secondsPassed = daysPassedInYear(currentYear);
      const targetValue = (secondsPassed / secondsInYear) * 100;
      return targetValue;
    }


    const interval0 = setInterval(() => {
      const distanceToTarget = getTargetValue() - value;

      // Adjust the increment based on the distance
      const increment = Math.max(0, (distanceToTarget / 10));

      // Update the value
      setValue((prevValue) => Math.min(prevValue + increment, getTargetValue()));

      // Stop the interval when the target value is reached
      if (value >= getTargetValue()) {
        clearInterval(interval0);
      }
    }, 50); // Update every second (1000 milliseconds)

    const interval1 = setInterval(() => {
      setValue(getTargetValue());
    }, 1000);



    // Clear the interval when the component unmounts
    return () => { clearInterval(interval0); clearInterval(interval1) };
  }, []);

  return (
    <>
      <main className="min-h-screen relative">
        <section
          id="progress-wrapper"
          className="flex flex-col gap-2 justify-center items-center min-h-screen"
        >
          <h1 className="text-4xl font-bold">{new Date().getFullYear()} is {value.toFixed(6)}% done</h1>
          <Progress value={value} className="w-[60%] mx-auto" />
        </section>
        <footer className="fixed bottom-0 px-2">
          <p className="">
            Made with ❤️ by <a className="text-blue-500 hover:text-blue-300" href="//github.com/kevintherm">Kevin</a>
          </p>
        </footer>
      </main>
    </>
  );
}

function getSecondsInYear(year: number): number {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year + 1, 0, 1);

  const timeDifference = (endDate.getTime() - startDate.getTime()) / 1000;

  return timeDifference;
}

function daysPassedInYear(year: number): number {
  // Get the current date and time
  const currentDate: Date = new Date();

  // Get the start of the current year
  const startOfYear: Date = new Date(year, 0, 1);

  // Calculate the difference in milliseconds between the current date and the start of the year
  const timeDifference: number = currentDate.getTime() - startOfYear.getTime();

  // Convert milliseconds to seconds
  const secondsPassed: number = Math.floor(timeDifference / 1000);

  return secondsPassed;
}
