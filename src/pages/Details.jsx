import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();

  const employee = location.state;

  if (!employee) {
    return <h2>No Data Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Details</h2>

      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Salary:</strong> {employee.salary}</p>
      <p><strong>City:</strong> {employee.city}</p>

      <br />

      <button onClick={() => navigate("/photo")}>
        Capture Photo
      </button>
    </div>
  );
}

export default Details;
