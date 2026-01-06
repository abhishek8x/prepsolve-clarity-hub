import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoLesson } from '@/components/video/VideoLesson';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  poster?: string;
  description?: string;
}

// Sample lesson data - replace with real data from API
const sampleLessons: Lesson[] = [
  {
    id: 'intro-physics-1',
    title: 'Introduction to Motion',
    duration: '12:34',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    description: 'Learn the fundamentals of motion, including displacement, velocity, and acceleration. This lesson covers the basic concepts you need to understand before diving deeper into kinematics.',
  },
  {
    id: 'intro-physics-2',
    title: 'Equations of Motion',
    duration: '18:22',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80',
    description: 'Master the three equations of motion and learn when to apply each one.',
  },
  {
    id: 'intro-physics-3',
    title: 'Projectile Motion',
    duration: '22:15',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    description: 'Understanding motion in two dimensions with real-world examples.',
  },
  {
    id: 'intro-physics-4',
    title: 'Circular Motion',
    duration: '16:48',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    description: 'Explore uniform and non-uniform circular motion concepts.',
  },
  {
    id: 'intro-physics-5',
    title: 'Practice Problems',
    duration: '28:30',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    description: 'Solve problems together to solidify your understanding.',
  },
];

const Lesson: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState(sampleLessons[0]);
  const currentIndex = sampleLessons.findIndex((l) => l.id === currentLesson.id);

  return (
    <Layout>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back navigation */}
          <Link to="/courses">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>

          {/* Course header */}
          <div className="mb-8">
            <span className="text-accent text-sm font-medium">Physics · Class 11</span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
              Kinematics - Complete Chapter
            </h1>
          </div>

          {/* Video lesson component */}
          <VideoLesson
            lesson={currentLesson}
            lessons={sampleLessons}
            currentIndex={currentIndex}
            onLessonChange={setCurrentLesson}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Lesson;
