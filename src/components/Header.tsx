import React from 'react';
import { UserRole } from '../App';
import { User } from 'lucide-react';

interface HeaderProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const Header: React.FC<HeaderProps> = ({ role, onRoleChange }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">E-Learning Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={role}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="student">学習者</option>
              <option value="instructor">講師</option>
              <option value="admin">管理者</option>
            </select>
            
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-700">山田 太郎</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;