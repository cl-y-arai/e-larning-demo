import React from 'react';
import { BookOpen, Video, MessageSquare, Users, BarChart3, FileText } from 'lucide-react';
import { UserRole } from '../App';

interface SidebarProps {
  role: UserRole;
  currentView: 'dashboard' | 'courses';
  onViewChange: (view: 'dashboard' | 'courses') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, currentView, onViewChange }) => {
  const menuItems = {
    student: [
      { icon: BookOpen, label: '講義一覧', view: 'courses' as const },
      { icon: Video, label: '進行中の講義', view: 'dashboard' as const },
      { icon: FileText, label: '成績', view: 'dashboard' as const },
      { icon: MessageSquare, label: 'メッセージ', view: 'dashboard' as const },
    ],
    instructor: [
      { icon: BookOpen, label: '担当講義', view: 'courses' as const },
      { icon: Users, label: '受講者管理', view: 'dashboard' as const },
      { icon: FileText, label: '提出物確認', view: 'dashboard' as const },
      { icon: MessageSquare, label: 'メッセージ', view: 'dashboard' as const },
    ],
    admin: [
      { icon: BarChart3, label: '統計情報', view: 'dashboard' as const },
      { icon: Users, label: 'ユーザー管理', view: 'dashboard' as const },
      { icon: BookOpen, label: '講義管理', view: 'courses' as const },
      { icon: FileText, label: 'レポート', view: 'dashboard' as const },
    ],
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems[role].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onViewChange(item.view)}
                className={`flex items-center w-full px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg mx-2 ${
                  currentView === item.view ? 'bg-indigo-50 text-indigo-600' : ''
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;