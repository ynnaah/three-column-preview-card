export default function PreviewCard() {
  return (
    <div className="text-left">
      <div className="grid gap-6 bg-bright-orange rounded-t-lg p-10">
        <img className="h-8" src="./src/assets/images/icon-sedans.svg" alt="icon-sedans.svg" />
        <h1 className="text-xl">Sedans</h1>
        <p className="text-transparent-white">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="bg-very-light-gray rounded-full py-2 w-36 text-bright-orange">
          {" "}
          Learn More
        </button>
      </div>

      <div className="grid gap-6 bg-dark-cyan p-10">
        <img className="h-8" src="./src/assets/images/icon-suvs.svg" alt="icon-suvs.svg" />
        <h1>SUVS</h1>
        <p className="text-transparent-white">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="bg-very-light-gray rounded-full py-2 w-36 text-dark-cyan">
          {" "}
          Learn More
        </button>
      </div>

      <div className="grid gap-6 bg-very-dark-cyan rounded-b-lg p-10">
        <img className="h-8" src="./src/assets/images/icon-luxury.svg" alt="icon-luxury.svg" />
        <h1>Luxury</h1>
        <p className="text-transparent-white">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="bg-very-light-gray rounded-full py-2 w-36 text-very-dark-cyan">
          {" "}
          Learn More
        </button>
      </div>
    </div>
  );
}
