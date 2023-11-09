import { useEffect, useState } from "react";

function useFetchData(url: string) {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erro ao carregar dados JSON:", error);
      }
    };

    fetchData();
  }, [url]);

  return { jsonData };
}

export default useFetchData;
