import React, { useState } from 'react';
import { BookOpen, Users, BarChart3, Video, FileText, MessageSquare } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CourseList from './components/CourseList';

export type UserRole = 'student' | 'instructor' | 'admin';

function App() {
  const [role, setRole] = useState<UserRole>('student');
  const [currentView, setCurrentView] = useState<'dashboard' | 'courses'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header role={role} onRoleChange={setRole} />
      <div className="flex">
        <Sidebar role={role} onViewChange={setCurrentView} currentView={currentView} />
        <main className="flex-1 p-8">
          {currentView === 'dashboard' ? (
            <Dashboard role={role} />
          ) : (
            <CourseList />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;