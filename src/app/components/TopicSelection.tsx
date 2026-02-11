import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router';
import { getDomainById, getTopicsByDomain } from '../data/quizData';
import { ArrowLeft, Clock, BookOpen, Award } from 'lucide-react';

export function TopicSelection() {
  const { domainId } = useParams<{ domainId: string }>();
  const navigate = useNavigate();
  
  if (!domainId) {
    navigate('/');
    return null;
  }

  const domain = getDomainById(domainId);
  const topics = getTopicsByDomain(domainId);

  if (!domain) {
    navigate('/');
    return null;
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white mb-8 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="size-5" />
          Back to Domains
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className={`inline-block bg-gradient-to-br ${domain.color} p-4 rounded-2xl mb-4`}>
            <span className="text-5xl">{domain.icon}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            {domain.name}
          </h1>
          <p className="text-xl text-gray-300">
            Select a topic to start practicing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/quiz/${topic.id}`)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <BookOpen className="size-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[topic.difficulty]}`}>
                  {topic.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {topic.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {topic.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{Math.ceil(topic.questionsCount * 1.5)} mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4" />
                  <span>{topic.questionsCount} questions</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {topics.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white mt-12"
          >
            <p className="text-xl">No topics available yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
