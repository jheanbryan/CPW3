import styled from "styled-components";

export const Card = styled.div`
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 10px 10px 33px #ebebeb, -10px -10px 33px #ffffff;
  padding: 20px;
  width: 600px;
`;

export const Metadata = styled.div`
  margin: 10px 0;
`;

const MetadataText = styled.span`
  font-size: 1rem;
`;

export const Key = styled(MetadataText)`
  font-family: "bold";
  margin-right: 10px;
`;

export const Value = styled(MetadataText)`
  font-family: "regular";
`;
