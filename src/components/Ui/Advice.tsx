import IconDice from "../../assets/icon-dice.svg";

const Advice = () => {
  return (
    <div className="relative">
      <div>
        <h1 className="pb-8 text-xs uppercase tracking-[.15rem] text-secondary">
          Advice #
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="relative py-11" aria-hidden="true">
        <div className="h-[0.025rem] bg-primary opacity-40"></div>
        <div className="absolute top-5 left-0 right-0 m-auto flex h-12 w-16 items-center justify-center gap-2 bg-gray-blue">
          <span className="h-6 w-2 rounded-lg bg-primary"></span>
          <span className="h-6 w-2 rounded-lg bg-primary"></span>
        </div>
      </div>
      <button
        className="absolute left-0 right-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-dark-blue transition duration-300
hover:shadow-[0px_0px_40px_10px_rgba(82,255,169,0.55)]"
      >
        <svg
          className="fill-dark-gray-blue"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-label="get random advice"
        >
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
      </button>
    </div>
  );
};

export default Advice;
