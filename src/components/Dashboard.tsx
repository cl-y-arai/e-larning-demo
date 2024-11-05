import React from 'react';
import { UserRole } from '../App';
import StudentDashboard from './dashboards/StudentDashboard';
import InstructorDashboard from './dashboards/InstructorDashboard';
import AdminDashboard from './dashboards/AdminDashboard';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const dashboards = {
    student: StudentDashboard,
    instructor: InstructorDashboard,
    admin: AdminDashboard,
  };

  const CurrentDashboard = dashboards[role];
  return <CurrentDashboard />;
};

export default Dashboard;