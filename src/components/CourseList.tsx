import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  enrolled: number;
  rating: number;
  progress: number;
  thumbnail: string;
  category: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'プロジェクトマネジメント基礎',
    instructor: '山田 太郎',
    duration: '8時間',
    enrolled: 156,
    rating: 4.8,
    progress: 75,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300&h=200',
    category: 'マネジメント'
  },
  {
    id: '2',
    title: 'ビジネスコミュニケーション',
    instructor: '佐藤 美咲',
    duration: '6時間',
    enrolled: 143,
    rating: 4.7,
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=200',
    category: 'ビジネススキル'
  },
  {
    id: '3',
    title: 'データ分析入門',
    instructor: '鈴木 健一',
    duration: '10時間',
    enrolled: 128,
    rating: 4.6,
    progress: 30,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200',
    category: 'データサイエンス'
  },
  {
    id: '4',
    title: 'リーダーシップ研修',
    instructor: '田中 真由子',
    duration: '5時間',
    enrolled: 112,
    rating: 4.5,
    progress: 0,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300&h=200',
    category: 'マネジメント'
  }
];

const categories = ['すべて', 'マネジメント', 'ビジネススキル', 'データサイエンス'];

function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'すべて' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="講義を検索..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs mt-1 text-center">{course.progress}% 完了</p>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                  {course.category}
                </span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{course.enrolled}名が受講中</span>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                {course.progress > 0 ? '続きから学習' : '受講開始'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;