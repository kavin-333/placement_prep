import { BookOpen, Brain, Code, Globe, Users, Calculator } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { domains } from '../data/quizData';

export function DomainSelection() {
  const navigate = useNavigate();

  const iconMap: Record<string, React.ReactNode> = {
    '📚': <BookOpen className="size-12" />,
    '🔢': <Calculator className="size-12" />,
    '🧩': <Brain className="size-12" />,
    '💻': <Code className="size-12" />,
    '🌍': <Globe className="size-12" />,
    '👥': <Users className="size-12" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Choose Your Domain
          </h1>
          <p className="text-xl text-gray-300">
            Select a domain to start your placement preparation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/domain/${domain.id}/topics`)}
              className="cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${domain.color} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300`}>
                <div className="text-white mb-4">
                  {iconMap[domain.icon]}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {domain.name}
                </h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              localStorage.removeItem('quizUser');
              navigate('/login');
            }}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </motion.div>
      </div>
    </div>
  );
}
