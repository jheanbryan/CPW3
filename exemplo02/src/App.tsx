import { useEffect, useState } from "react";
import { Container, ResultsArea, SearchInput } from "./styles";
import { Work } from "./models/Work";
import { WorkService } from "./services/WorkService";
import WorkCard from "./components/WorkCard";

const App = () => {
  const [query, setQuery] = useState("");
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const results = WorkService.getWorks(query);
    setWorks(results);
  }, [query]);

  return (
    <Container>
      <SearchInput
        placeholder="Digite o termo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ResultsArea>
        {works.length > 0 &&
          works.map((w) => <WorkCard key={w.code} work={w} />)}
      </ResultsArea>
    </Container>
  );
};

export default App;
