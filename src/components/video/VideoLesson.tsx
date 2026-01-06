import React, { useState, useEffect } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { CheckCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  poster?: string;
  description?: string;
}

interface VideoLessonProps {
  lesson: Lesson;
  lessons?: Lesson[];
  currentIndex?: number;
  onLessonChange?: (lesson: Lesson) => void;
  className?: string;
}

interface LessonProgress {
  time: number;
  progress: number;
  completed: boolean;
  updatedAt: string;
}

export const VideoLesson: React.FC<VideoLessonProps> = ({
  lesson,
  lessons = [],
  currentIndex = 0,
  onLessonChange,
  className,
}) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lessonsProgress, setLessonsProgress] = useState<Record<string, LessonProgress>>({});

  // Load all lesson progress
  useEffect(() => {
    const allProgress: Record<string, LessonProgress> = {};
    lessons.forEach((l) => {
      const saved = localStorage.getItem(`prepsolve-video-${l.id}`);
      if (saved) {
        allProgress[l.id] = JSON.parse(saved);
      }
    });
    setLessonsProgress(allProgress);
  }, [lessons]);

  // Load current lesson progress
  useEffect(() => {
    const saved = localStorage.getItem(`prepsolve-video-${lesson.id}`);
    if (saved) {
      const data: LessonProgress = JSON.parse(saved);
      setProgress(data.progress);
      setIsCompleted(data.completed);
    } else {
      setProgress(0);
      setIsCompleted(false);
    }
  }, [lesson.id]);

  const handleProgressUpdate = (newProgress: number) => {
    setProgress(newProgress);
  };

  const handleComplete = () => {
    setIsCompleted(true);
    // Auto-play next lesson
    if (currentIndex < lessons.length - 1 && onLessonChange) {
      setTimeout(() => {
        onLessonChange(lessons[currentIndex + 1]);
      }, 2000);
    }
  };

  const overallProgress = lessons.length > 0
    ? (Object.values(lessonsProgress).filter(p => p.completed).length / lessons.length) * 100
    : progress;

  return (
    <div className={cn('grid lg:grid-cols-3 gap-6', className)}>
      {/* Main video player */}
      <div className="lg:col-span-2 space-y-4">
        <VideoPlayer
          src={lesson.videoUrl}
          poster={lesson.poster}
          lessonId={lesson.id}
          title={lesson.title}
          onProgressUpdate={handleProgressUpdate}
          onComplete={handleComplete}
        />

        {/* Lesson info */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {lesson.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </span>
                {isCompleted && (
                  <span className="flex items-center gap-1 text-green-500">
                    <CheckCircle className="w-4 h-4" />
                    Completed
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-muted-foreground">Progress</span>
              <p className="text-lg font-semibold text-accent">{Math.round(progress)}%</p>
            </div>
          </div>

          {/* Progress bar */}
          <Progress value={progress} className="h-2 mb-4" />

          {lesson.description && (
            <p className="text-muted-foreground leading-relaxed">
              {lesson.description}
            </p>
          )}
        </div>
      </div>

      {/* Playlist sidebar */}
      {lessons.length > 0 && (
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Course Content
              </h3>
              <span className="text-sm text-muted-foreground">
                {Object.values(lessonsProgress).filter(p => p.completed).length}/{lessons.length}
              </span>
            </div>

            <Progress value={overallProgress} className="h-1.5 mb-4" />

            <div className="space-y-1 max-h-[400px] overflow-y-auto">
              {lessons.map((l, index) => {
                const lessonProgress = lessonsProgress[l.id];
                const isActive = l.id === lesson.id;
                const isLessonCompleted = lessonProgress?.completed;

                return (
                  <button
                    key={l.id}
                    onClick={() => onLessonChange?.(l)}
                    className={cn(
                      'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors',
                      isActive
                        ? 'bg-accent/10 border border-accent/20'
                        : 'hover:bg-muted/50'
                    )}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0',
                        isLessonCompleted
                          ? 'bg-green-500/20 text-green-500'
                          : isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {isLessonCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          'text-sm font-medium truncate',
                          isActive ? 'text-accent' : 'text-foreground'
                        )}
                      >
                        {l.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{l.duration}</p>
                    </div>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resume info */}
          {lessonsProgress[lesson.id]?.time > 0 && !isCompleted && (
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
              <p className="text-sm text-accent">
                Resuming from where you left off
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
