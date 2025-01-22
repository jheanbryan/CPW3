import { Work } from "../../models/Work";
import { Card, Key, Metadata, Value } from "./styles";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props) => {
  return (
    <Card>
      <Metadata>
        <Key>Código:</Key>
        <Value>{work.code}</Value>
      </Metadata>

      <Metadata>
        <Key>Título:</Key>
        <Value>{work.title}</Value>
      </Metadata>

      <Metadata>
        <Key>Autor(es):</Key>
        <Value>{work.authors.join(", ")}</Value>
      </Metadata>
    </Card>
  );
};

export default WorkCard;
