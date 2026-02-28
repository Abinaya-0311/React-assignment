import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  fetch("https://backend.jotish.in/backend_dev/gettabledata.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test",
      password: "123456",
    }),
  })
    .then((res) => res.json())
   .then((result) => {
  const employees = Array.isArray(result)
    ? result
    : Array.isArray(result.data)
    ? result.data
    : [];

  setData(employees);
  setLoading(false);
})
.catch(() => {
  setLoading(false);
});
}, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <button
        onClick={() => navigate("/chart", { state: data })}
        style={{ marginBottom: "20px" }}
      >
        View Salary Chart
      </button>

      <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) &&
  data.map((item, index) => (
            <tr
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/details/${item.id}`, { state: item })
              }
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.salary}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;