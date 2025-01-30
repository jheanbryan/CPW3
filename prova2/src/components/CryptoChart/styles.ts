import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  width: 100%;  
  height: 100%; 
  
  @media (max-width: 768px) {
    width: 100%;
    height: 60%; 
  }
`;

