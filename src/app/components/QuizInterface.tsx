import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useParams } from 'react-router';
import { getTopicById, getQuestionsByTopic, Question } from '../data/quizData';
import { Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export function QuizInterface() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!topicId) {
      navigate('/');
      return;
    }

    const topic = getTopicById(topicId);
    if (!topic) {
      navigate('/');
      return;
    }

    const topicQuestions = getQuestionsByTopic(topicId);
    setQuestions(topicQuestions);
    setSelectedAnswers(new Array(topicQuestions.length).fill(null));
    setTimeLeft(topicQuestions.length * 90); // 1.5 minutes per question
  }, [topicId, navigate]);

  useEffect(() => {
    if (timeLeft <= 0 || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setShowExplanation(false);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index]?.correctAnswer ? 1 : 0);
    }, 0);

    const results = {
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      answers: selectedAnswers,
      questions
    };

    localStorage.setItem('quizResults', JSON.stringify(results));
    navigate('/results');
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading quiz...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-white">
              <span className="text-sm opacity-75">Question</span>
              <div className="text-2xl font-bold">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              timeLeft < 60 ? 'bg-red-500' : 'bg-purple-500'
            }`}>
              <Clock className="size-5 text-white" />
              <span className="text-white font-bold">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showExplanation;

                let bgColor = 'bg-white/10 hover:bg-white/20';
                let borderColor = 'border-white/30';
                let icon = null;

                if (showResult) {
                  if (isCorrect) {
                    bgColor = 'bg-green-500/30';
                    borderColor = 'border-green-500';
                    icon = <CheckCircle className="size-6 text-green-400" />;
                  } else if (isSelected && !isCorrect) {
                    bgColor = 'bg-red-500/30';
                    borderColor = 'border-red-500';
                    icon = <XCircle className="size-6 text-red-400" />;
                  }
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-xl border-2 ${bgColor} ${borderColor} text-left text-white transition-all duration-300 flex items-center justify-between`}
                  >
                    <span className="flex-1">{option}</span>
                    {icon}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-blue-500/20 border-2 border-blue-500/50 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <CheckCircle className="size-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Explanation</h4>
                      <p className="text-white/90">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="size-5" />
            Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleFinishQuiz}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-bold transition-all"
            >
              Finish Quiz
              <CheckCircle className="size-5" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!showExplanation}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-all"
            >
              Next
              <ArrowRight className="size-5" />
            </button>
          )}
        </motion.div>

        {/* Question Navigator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6"
        >
          <h3 className="text-white font-bold mb-4">Question Navigator</h3>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => {
              const isAnswered = selectedAnswers[index] !== null;
              const isCurrent = index === currentQuestionIndex;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    setShowExplanation(false);
                  }}
                  className={`size-10 rounded-lg font-bold transition-all ${
                    isCurrent
                      ? 'bg-purple-500 text-white scale-110'
                      : isAnswered
                      ? 'bg-green-500/50 text-white'
                      : 'bg-white/20 text-white/70 hover:bg-white/30'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
