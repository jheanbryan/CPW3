import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

type CryptoChartProps = {
  sparkline: number[];
};

const CryptoChart = ({ sparkline }: CryptoChartProps) => {
  const data = sparkline.map((value, index) => ({ index, value }));

  const firstValue = sparkline[0];
  const lastValue = sparkline[sparkline.length - 1];
  let lineColor = null;

  if (firstValue > lastValue) 
    lineColor = "#ff0000";
  else 
    lineColor = "#00ff00";

  return (
    <ResponsiveContainer width={200} height={80}>
      <LineChart data={data}>
        <XAxis dataKey="index" hide />
        <YAxis domain={["dataMin", "dataMax"]} hide />
        <Line type="monotone" dataKey="value" stroke={lineColor} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
