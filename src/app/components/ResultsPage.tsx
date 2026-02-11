import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Trophy, CheckCircle, XCircle, RotateCcw, Home, Award, Target, TrendingUp } from 'lucide-react';
import { Question } from '../data/quizData';

interface QuizResults {
  score: number;
  total: number;
  percentage: number;
  answers: (number | null)[];
  questions: Question[];
}

export function ResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('quizResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading results...</div>
      </div>
    );
  }

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { text: 'Outstanding! 🎉', color: 'text-yellow-400' };
    if (percentage >= 75) return { text: 'Excellent! 🌟', color: 'text-green-400' };
    if (percentage >= 60) return { text: 'Good Job! 👍', color: 'text-blue-400' };
    if (percentage >= 40) return { text: 'Keep Practicing! 💪', color: 'text-orange-400' };
    return { text: 'Need More Practice 📚', color: 'text-red-400' };
  };

  const performance = getPerformanceMessage(results.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 py-12">
      <div className="container mx-auto max-w-4xl">
        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center size-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6"
          >
            <Trophy className="size-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl font-bold mb-4 ${performance.color}`}
          >
            {performance.text}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold text-white mb-2"
          >
            {results.percentage}%
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300"
          >
            You scored {results.score} out of {results.total}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-green-500/20 border-2 border-green-500/50 rounded-xl p-6 text-center">
            <CheckCircle className="size-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{results.score}</div>
            <div className="text-green-300">Correct</div>
          </div>

          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6 text-center">
            <XCircle className="size-8 text-red-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {results.total - results.score}
            </div>
            <div className="text-red-300">Incorrect</div>
          </div>

          <div className="bg-blue-500/20 border-2 border-blue-500/50 rounded-xl p-6 text-center">
            <Award className="size-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{results.total}</div>
            <div className="text-blue-300">Total Questions</div>
          </div>
        </motion.div>

        {/* Detailed Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="size-6" />
            Question Review
          </h2>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {results.questions.map((question, index) => {
              const userAnswer = results.answers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect
                      ? 'bg-green-500/20 border-green-500/50'
                      : 'bg-red-500/20 border-red-500/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="size-6 text-green-400 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="size-6 text-red-400 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="text-white font-medium mb-2">
                        Q{index + 1}. {question.question}
                      </div>
                      <div className="text-sm text-gray-300 mb-1">
                        <span className="font-medium">Your answer: </span>
                        {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                      </div>
                      {!isCorrect && (
                        <div className="text-sm text-green-300">
                          <span className="font-medium">Correct answer: </span>
                          {question.options[question.correctAnswer]}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Performance Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="size-6" />
            Performance Insights
          </h3>
          <div className="space-y-2 text-gray-300">
            {results.percentage >= 75 && (
              <p>✓ You have a strong grasp of this topic!</p>
            )}
            {results.percentage < 75 && results.percentage >= 50 && (
              <p>• You're on the right track. Review the incorrect questions and practice more.</p>
            )}
            {results.percentage < 50 && (
              <p>• Consider reviewing the basics and practicing more questions on this topic.</p>
            )}
            <p>• Focus on understanding the explanations for incorrect answers.</p>
            <p>• Regular practice will help improve your scores significantly.</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-bold transition-all"
          >
            <RotateCcw className="size-5" />
            Try Again
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-all"
          >
            <Home className="size-5" />
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
