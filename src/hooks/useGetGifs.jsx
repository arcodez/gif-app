import { useEffect, useState } from "react";

export function useGetGifs(limit = 10) {
  const [gifs, SetGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("programming");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=BCLgj7VcQUfWJjh8gOMXauTVcFyJWNHP&q=${searchTerm}&limit=${limit}&offset=0&rating=g&lang=en`
      );
      const datos = await res.json();
      const { data } = datos;
      SetGifs(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return { loading, gifs, handleChange, searchTerm };
}
