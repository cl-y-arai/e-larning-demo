import React from 'react';
import { Users, BookOpen, FileCheck } from 'lucide-react';

function InstructorDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">受講者数</h3>
              <p className="text-2xl font-semibold text-gray-900">156 名</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">担当講義数</h3>
              <p className="text-2xl font-semibold text-gray-900">4 講座</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <FileCheck className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">未確認の提出物</h3>
              <p className="text-2xl font-semibold text-gray-900">23 件</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">担当講義の進捗状況</h2>
          <div className="mt-6 space-y-4">
            {[
              { title: 'プロジェクトマネジメント基礎', students: 45, avgProgress: 68 },
              { title: 'ビジネスコミュニケーション', students: 38, avgProgress: 72 },
              { title: 'リーダーシップ研修', students: 41, avgProgress: 55 },
              { title: 'チーム・ビルディング', students: 32, avgProgress: 89 },
            ].map((course, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">受講者: {course.students}名</p>
                  </div>
                  <span className="text-sm text-gray-500">平均進捗 {course.avgProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${course.avgProgress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">最近の提出物</h2>
          <div className="mt-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    学習者名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    講義名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    提出日時
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状態
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: '田中 一郎', course: 'プロジェクトマネジメント基礎', date: '2024/03/15 15:30', status: '未確認' },
                  { name: '鈴木 花子', course: 'ビジネスコミュニケーション', date: '2024/03/15 14:45', status: '未確認' },
                  { name: '佐藤 健一', course: 'リーダーシップ研修', date: '2024/03/15 13:20', status: '確認済' },
                ].map((submission, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {submission.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {submission.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {submission.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        submission.status === '未確認' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {submission.status}
                      </span>
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

export default InstructorDashboard;