import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../dashboard/QuizCard";
function AdminDashboard() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="col s12 m2"></div>
          <div className="col s12 m8">
            <div>
              <Link
                to="/admin/create"
                class="btn-floating btn-large waves-effect waves-light red right addButton"
              >
                <i class="material-icons">add</i>
              </Link>
            </div>
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
          <div className="col s12 m2"></div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
