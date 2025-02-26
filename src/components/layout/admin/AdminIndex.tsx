import { Navigate } from "react-router-dom";

const AdminIndex = () => {
  return (
    <div>
      <Navigate to="/admin/dashboard"></Navigate>
    </div>
  );
};

export default AdminIndex;
