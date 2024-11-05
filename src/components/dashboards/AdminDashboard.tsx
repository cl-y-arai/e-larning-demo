import React from 'react';
import { Users, BookOpen, BarChart3 } from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">総ユーザー数</h3>
              <p className="text-2xl font-semibold text-gray-900">1,234 名</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">総講義数</h3>
              <p className="text-2xl font-semibold text-gray-900">25 講座</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">平均完了率</h3>
              <p className="text-2xl font-semibold text-gray-900">76.5%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">人気の講義</h2>
            <div className="mt-6 space-y-4">
              {[
                { title: 'プロジェクトマネジメント基礎', enrolled: 156, rating: 4.8 },
                { title: 'ビジネスコミュニケーション', enrolled: 143, rating: 4.7 },
                { title: 'データ分析入門', enrolled: 128, rating: 4.6 },
                { title: 'リーダーシップ研修', enrolled: 112, rating: 4.5 },
              ].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">受講者: {course.enrolled}名</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">部門別受講状況</h2>
            <div className="mt-6 space-y-4">
              {[
                { department: '営業部', users: 245, avgCompletion: 82 },
                { department: '技術部', users: 189, avgCompletion: 78 },
                { department: '人事部', users: 67, avgCompletion: 91 },
                { department: '経理部', users: 45, avgCompletion: 85 },
              ].map((dept, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{dept.department}</h3>
                      <p className="text-sm text-gray-500">{dept.users}名</p>
                    </div>
                    <span className="text-sm text-gray-500">完了率 {dept.avgCompletion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${dept.avgCompletion}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">最近の活動</h2>
          <div className="mt-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    日時
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    イベント
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    詳細
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { date: '2024/03/15 16:00', event: '新規講義追加', detail: 'AI基礎講座が追加されました' },
                  { date: '2024/03/15 15:30', event: 'ユーザー登録', detail: '新入社員20名が一括登録されました' },
                  { date: '2024/03/15 14:45', event: '講義更新', detail: 'プロジェクトマネジメント基礎の内容が更新されました' },
                  { date: '2024/03/15 13:20', event: 'テスト作成', detail: 'ビジネスコミュニケーション期末テストが作成されました' },
                ].map((activity, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {activity.event}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {activity.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;