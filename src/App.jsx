import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "./store";

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMessage());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching message:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            <li key={m.id}>
              {m.sport}: {m.city}
              {"  "}
              {m.mascot}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
