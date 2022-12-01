import { useState, useEffect } from "react";

const useFetch = (url) => {
  /* useState를 이용하여 data, isPending, error를 정의하세요. */
  const [todo, setTodo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  /* useFetch 안의 중심 로직을 작성해주세요. */
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/todo")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setTodo(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
  return { todo, isPending, error };
};

export default useFetch;
