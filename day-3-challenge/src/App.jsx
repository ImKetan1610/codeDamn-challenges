import { useState } from "react";

export default function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState(
    calculateSimpleInterest(principal, rate, time)
  );
  const [totalAmount, setTotalAmount] = useState(
    Number(principal + +simpleInterest).toFixed(2)
  );

  function calculateSimpleInterest(principal, rate, time) {
    return ((principal * rate * time) / 100).toFixed(2);
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    let interest;
    if (id === "principal") {
      setPrincipal(value);
      interest = calculateSimpleInterest(value, rate, time);
    } else if (id === "rate") {
      setRate(value);
      interest = calculateSimpleInterest(principal, value, time);
    } else if (id === "time") {
      setTime(value);
      interest = calculateSimpleInterest(principal, rate, value);
    }

    setSimpleInterest(interest);
    setTotalAmount(Number(principal) + Number(interest));
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Simple Interest Calculator</h1>
        <div className="flex flex-col space-y-4">
          <label htmlFor="principal" className="font-semibold">
            Principal Amount:
          </label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <label htmlFor="rate" className="font-semibold">
            Annual Interest Rate (%):
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <label htmlFor="time" className="font-semibold">
            Time (in years):
          </label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mt-6">
          <p className="font-semibold">Simple Interest:</p>
          <div
            id="simpleInterest"
            className="border border-gray-300 rounded-md p-2"
          >
            {simpleInterest}
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Total Amount:</p>
          <div
            id="totalAmount"
            className="border border-gray-300 rounded-md p-2"
          >
            {totalAmount}
          </div>
        </div>
      </div>
    </>
  );
}
