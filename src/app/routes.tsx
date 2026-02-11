import { createHashRouter, Navigate } from 'react-router';
import { LoginPage } from './components/LoginPage';
import { DomainSelection } from './components/DomainSelection';
import { TopicSelection } from './components/TopicSelection';
import { QuizInterface } from './components/QuizInterface';
import { ResultsPage } from './components/ResultsPage';

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('quizUser');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export const router = createHashRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DomainSelection />
      </ProtectedRoute>
    )
  },
  {
    path: '/domain/:domainId/topics',
    element: (
      <ProtectedRoute>
        <TopicSelection />
      </ProtectedRoute>
    )
  },
  {
    path: '/quiz/:topicId',
    element: (
      <ProtectedRoute>
        <QuizInterface />
      </ProtectedRoute>
    )
  },
  {
    path: '/results',
    element: (
      <ProtectedRoute>
        <ResultsPage />
      </ProtectedRoute>
    )
  }
]);
