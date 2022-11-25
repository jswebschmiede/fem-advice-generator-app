import { useEffect, useState } from "react";
import fetchItems from "../../utils/fetch";
export interface Advice {
  id: number;
  advice: string;
}

const Advice = () => {
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const api: string = "https://api.adviceslip.com/advice";

  const getAdviceHandler = () => {
    setLoading(true);

    fetchItems(api)
      .then((result) => {
        setAdvice(result.slip);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || err);
      });
  };

  useEffect(() => {
    fetchItems(api)
      .then((result) => {
        setAdvice(result.slip);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || err);
      });
  }, [fetchItems]);

  return (
    <div className="relative">
      {error && <p>{`There is a problem fetching the post data - ${error}`}</p>}
      <div>
        {loading ? (
          <span className="flex h-20 items-center justify-center text-center">
            loading...
          </span>
        ) : (
          <>
            <h1
              role="banner"
              className="pb-8 text-xs uppercase tracking-[.15rem] text-secondary"
            >
              Advice #{advice.id}
            </h1>
            <p>{advice.advice}</p>
          </>
        )}
      </div>
      <div className="relative py-11" aria-hidden="true">
        <div className="h-[0.025rem] bg-primary opacity-40"></div>
        <div className="absolute top-5 left-0 right-0 m-auto flex h-12 w-16 items-center justify-center gap-2 bg-dark-gray-blue">
          <span className="h-6 w-2 rounded-lg bg-primary"></span>
          <span className="h-6 w-2 rounded-lg bg-primary"></span>
        </div>
      </div>
      <button
        className={`absolute left-0 right-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-dark-blue transition duration-300
hover:shadow-[0_0_2rem_rgba(82,255,169,0.55)]`}
        onClick={getAdviceHandler}
        aria-label="get random advice"
      >
        <svg
          className={`fill-dark-gray-blue ${loading ? "animate-spin" : ""}`}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
      </button>
    </div>
  );
};

export default Advice;
