import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function ChartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend.jotish.in/backend_dev/gettabledata.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "test",
        password: "123456"
      })
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <h2>Salary Bar Chart</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="salary" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ChartPage;