import ProjectText from "@components/ProjectText";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  title: string;
  label: string;
  description: { name: string; color: string }[];
  data: number[];
  width?: number;
}

function PieChart(props: PieChartProps) {
  return (
    <div
      style={{
        width: props.width ? `${props.width}px` : "400px",
        textAlign: "center",
      }}
    >
      <ProjectText>{props.title}</ProjectText>
      <Pie
        data={{
          labels: [],
          datasets: [
            {
              label: props.label,
              data: props.data,
              backgroundColor: props.description.map((d) => d.color),
              hoverOffset: 4,
            },
          ],
        }}
      />
      <div>
        {props.description.map((d, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: d.color,
                marginRight: "8px",
              }}
            />
            <ProjectText size="xSmall">
              {d.name}: {props.data[index]}
            </ProjectText>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChart;
