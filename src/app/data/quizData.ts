// Mock data for domains, topics, and questions

export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Topic {
  id: string;
  domainId: string;
  name: string;
  description: string;
  questionsCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Question {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const domains: Domain[] = [
  {
    id: 'verbal',
    name: 'Verbal Aptitude',
    description: 'Enhance your verbal reasoning, comprehension, and communication skills',
    icon: '📚',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'quantitative',
    name: 'Quantitative Aptitude',
    description: 'Master mathematical and analytical problem-solving skills',
    icon: '🔢',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'logical',
    name: 'Logical Reasoning',
    description: 'Develop critical thinking and logical analysis abilities',
    icon: '🧩',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'c-lang',
    name: 'C Programming',
    description: 'Master C programming fundamentals, pointers, and memory management',
    icon: '💻',
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 'cpp',
    name: 'C++ Programming',
    description: 'Object-oriented programming with C++, STL, and advanced concepts',
    icon: '⚙️',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'java',
    name: 'Java Programming',
    description: 'Core Java, OOP concepts, collections, and multithreading',
    icon: '☕',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Python fundamentals, data structures, and libraries',
    icon: '🐍',
    color: 'from-yellow-500 to-green-600'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Modern JavaScript, ES6+, async programming, and DOM manipulation',
    icon: '🟨',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'csharp',
    name: 'C# Programming',
    description: '.NET framework, C# fundamentals, and enterprise applications',
    icon: '#️⃣',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'react',
    name: 'React.js',
    description: 'React components, hooks, state management, and modern patterns',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'angular',
    name: 'Angular',
    description: 'Angular framework, TypeScript, services, and architecture',
    icon: '🅰️',
    color: 'from-red-600 to-pink-600'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'Server-side JavaScript, Express, APIs, and backend development',
    icon: '🟢',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 'sql',
    name: 'SQL & Databases',
    description: 'Database design, queries, normalization, and optimization',
    icon: '🗄️',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Data visualization, DAX, Power Query, and business intelligence',
    icon: '📊',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    description: 'Arrays, trees, graphs, sorting, searching, and problem-solving',
    icon: '🌳',
    color: 'from-emerald-500 to-green-700'
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    description: 'AWS, Azure, GCP, cloud architecture, and services',
    icon: '☁️',
    color: 'from-sky-400 to-blue-600'
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'CI/CD, Docker, Kubernetes, automation, and deployment',
    icon: '🔧',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'webdev',
    name: 'Web Development',
    description: 'HTML, CSS, responsive design, and web fundamentals',
    icon: '🌐',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Android, iOS, React Native, and mobile app development',
    icon: '📱',
    color: 'from-violet-500 to-purple-700'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security principles, encryption, vulnerabilities, and best practices',
    icon: '🔒',
    color: 'from-red-700 to-pink-800'
  }
];

export const topics: Topic[] = [
  // Verbal Aptitude Topics (200 questions total)
  { id: 'verbal-synonyms', domainId: 'verbal', name: 'Synonyms & Antonyms', description: 'Test your vocabulary', questionsCount: 100, difficulty: 'Easy' },
  { id: 'verbal-grammar', domainId: 'verbal', name: 'Grammar & Sentence Correction', description: 'Grammatical errors', questionsCount: 100, difficulty: 'Medium' },

  // Quantitative Aptitude Topics (200 questions total)
  { id: 'quant-arithmetic', domainId: 'quantitative', name: 'Arithmetic', description: 'Mathematical operations', questionsCount: 100, difficulty: 'Easy' },
  { id: 'quant-algebra', domainId: 'quantitative', name: 'Algebra', description: 'Equations and expressions', questionsCount: 100, difficulty: 'Medium' },

  // Logical Reasoning Topics (200 questions total)
  { id: 'logical-patterns', domainId: 'logical', name: 'Number & Letter Series', description: 'Pattern recognition', questionsCount: 100, difficulty: 'Easy' },
  { id: 'logical-puzzles', domainId: 'logical', name: 'Puzzles & Logic', description: 'Logical puzzles', questionsCount: 100, difficulty: 'Hard' },

  // C Programming Topics (200 questions total)
  { id: 'c-basics', domainId: 'c-lang', name: 'C Fundamentals', description: 'Syntax, data types, operators', questionsCount: 80, difficulty: 'Easy' },
  { id: 'c-pointers', domainId: 'c-lang', name: 'Pointers & Memory', description: 'Pointers, arrays, memory management', questionsCount: 70, difficulty: 'Hard' },
  { id: 'c-functions', domainId: 'c-lang', name: 'Functions & Recursion', description: 'Function concepts', questionsCount: 50, difficulty: 'Medium' },

  // C++ Programming Topics (200 questions total)
  { id: 'cpp-basics', domainId: 'cpp', name: 'C++ Fundamentals', description: 'Basic syntax and concepts', questionsCount: 60, difficulty: 'Easy' },
  { id: 'cpp-oop', domainId: 'cpp', name: 'Object-Oriented Programming', description: 'Classes, inheritance, polymorphism', questionsCount: 80, difficulty: 'Medium' },
  { id: 'cpp-stl', domainId: 'cpp', name: 'STL & Templates', description: 'Standard Template Library', questionsCount: 60, difficulty: 'Hard' },

  // Java Programming Topics (200 questions total)
  { id: 'java-basics', domainId: 'java', name: 'Java Fundamentals', description: 'Syntax, data types, OOP basics', questionsCount: 70, difficulty: 'Easy' },
  { id: 'java-collections', domainId: 'java', name: 'Collections Framework', description: 'List, Set, Map, Queue', questionsCount: 70, difficulty: 'Medium' },
  { id: 'java-advanced', domainId: 'java', name: 'Advanced Java', description: 'Multithreading, streams, lambdas', questionsCount: 60, difficulty: 'Hard' },

  // Python Programming Topics (200 questions total)
  { id: 'python-basics', domainId: 'python', name: 'Python Fundamentals', description: 'Syntax, data types, functions', questionsCount: 70, difficulty: 'Easy' },
  { id: 'python-ds', domainId: 'python', name: 'Data Structures', description: 'Lists, dictionaries, sets', questionsCount: 70, difficulty: 'Medium' },
  { id: 'python-advanced', domainId: 'python', name: 'Advanced Python', description: 'OOP, decorators, generators', questionsCount: 60, difficulty: 'Hard' },

  // JavaScript Topics (200 questions total)
  { id: 'js-basics', domainId: 'javascript', name: 'JavaScript Fundamentals', description: 'Variables, functions, scope', questionsCount: 70, difficulty: 'Easy' },
  { id: 'js-es6', domainId: 'javascript', name: 'ES6+ Features', description: 'Arrow functions, promises, async/await', questionsCount: 70, difficulty: 'Medium' },
  { id: 'js-dom', domainId: 'javascript', name: 'DOM & Events', description: 'DOM manipulation and events', questionsCount: 60, difficulty: 'Medium' },

  // C# Programming Topics (200 questions total)
  { id: 'csharp-basics', domainId: 'csharp', name: 'C# Fundamentals', description: 'Syntax, data types, OOP', questionsCount: 80, difficulty: 'Easy' },
  { id: 'csharp-dotnet', domainId: 'csharp', name: '.NET Framework', description: 'Framework concepts', questionsCount: 70, difficulty: 'Medium' },
  { id: 'csharp-advanced', domainId: 'csharp', name: 'Advanced C#', description: 'LINQ, async, delegates', questionsCount: 50, difficulty: 'Hard' },

  // React.js Topics (200 questions total)
  { id: 'react-basics', domainId: 'react', name: 'React Fundamentals', description: 'Components, JSX, props', questionsCount: 70, difficulty: 'Easy' },
  { id: 'react-hooks', domainId: 'react', name: 'Hooks & State', description: 'useState, useEffect, custom hooks', questionsCount: 70, difficulty: 'Medium' },
  { id: 'react-advanced', domainId: 'react', name: 'Advanced React', description: 'Context, Redux, optimization', questionsCount: 60, difficulty: 'Hard' },

  // Angular Topics (200 questions total)
  { id: 'angular-basics', domainId: 'angular', name: 'Angular Fundamentals', description: 'Components, directives, pipes', questionsCount: 70, difficulty: 'Easy' },
  { id: 'angular-services', domainId: 'angular', name: 'Services & DI', description: 'Dependency injection, services', questionsCount: 70, difficulty: 'Medium' },
  { id: 'angular-advanced', domainId: 'angular', name: 'Advanced Angular', description: 'Routing, forms, RxJS', questionsCount: 60, difficulty: 'Hard' },

  // Node.js Topics (200 questions total)
  { id: 'node-basics', domainId: 'nodejs', name: 'Node.js Fundamentals', description: 'Runtime, modules, npm', questionsCount: 70, difficulty: 'Easy' },
  { id: 'node-express', domainId: 'nodejs', name: 'Express & APIs', description: 'REST APIs, middleware', questionsCount: 70, difficulty: 'Medium' },
  { id: 'node-advanced', domainId: 'nodejs', name: 'Advanced Node.js', description: 'Streams, authentication, deployment', questionsCount: 60, difficulty: 'Hard' },

  // SQL & Databases Topics (200 questions total)
  { id: 'sql-basics', domainId: 'sql', name: 'SQL Fundamentals', description: 'SELECT, INSERT, UPDATE, DELETE', questionsCount: 80, difficulty: 'Easy' },
  { id: 'sql-joins', domainId: 'sql', name: 'Joins & Subqueries', description: 'Complex queries', questionsCount: 70, difficulty: 'Medium' },
  { id: 'sql-advanced', domainId: 'sql', name: 'Database Design', description: 'Normalization, indexing', questionsCount: 50, difficulty: 'Hard' },

  // Power BI Topics (200 questions total)
  { id: 'powerbi-basics', domainId: 'powerbi', name: 'Power BI Fundamentals', description: 'Interface, visualizations', questionsCount: 70, difficulty: 'Easy' },
  { id: 'powerbi-dax', domainId: 'powerbi', name: 'DAX Functions', description: 'Calculated columns, measures', questionsCount: 70, difficulty: 'Medium' },
  { id: 'powerbi-advanced', domainId: 'powerbi', name: 'Advanced Power BI', description: 'Power Query, relationships', questionsCount: 60, difficulty: 'Hard' },

  // DSA Topics (200 questions total)
  { id: 'dsa-arrays', domainId: 'dsa', name: 'Arrays & Strings', description: 'Array operations', questionsCount: 70, difficulty: 'Easy' },
  { id: 'dsa-trees', domainId: 'dsa', name: 'Trees & Graphs', description: 'Tree and graph algorithms', questionsCount: 70, difficulty: 'Hard' },
  { id: 'dsa-algorithms', domainId: 'dsa', name: 'Algorithms', description: 'Sorting, searching, DP', questionsCount: 60, difficulty: 'Hard' },

  // Cloud Computing Topics (200 questions total)
  { id: 'cloud-basics', domainId: 'cloud', name: 'Cloud Fundamentals', description: 'Cloud concepts, models', questionsCount: 70, difficulty: 'Easy' },
  { id: 'cloud-aws', domainId: 'cloud', name: 'AWS Services', description: 'EC2, S3, Lambda', questionsCount: 70, difficulty: 'Medium' },
  { id: 'cloud-azure', domainId: 'cloud', name: 'Azure & GCP', description: 'Multi-cloud platforms', questionsCount: 60, difficulty: 'Medium' },

  // DevOps Topics (200 questions total)
  { id: 'devops-basics', domainId: 'devops', name: 'DevOps Fundamentals', description: 'CI/CD, automation', questionsCount: 70, difficulty: 'Easy' },
  { id: 'devops-docker', domainId: 'devops', name: 'Docker & Containers', description: 'Containerization', questionsCount: 70, difficulty: 'Medium' },
  { id: 'devops-kubernetes', domainId: 'devops', name: 'Kubernetes', description: 'Orchestration', questionsCount: 60, difficulty: 'Hard' },

  // Web Development Topics (200 questions total)
  { id: 'web-html', domainId: 'webdev', name: 'HTML & Semantics', description: 'HTML5, semantic tags', questionsCount: 70, difficulty: 'Easy' },
  { id: 'web-css', domainId: 'webdev', name: 'CSS & Styling', description: 'Flexbox, Grid, animations', questionsCount: 70, difficulty: 'Medium' },
  { id: 'web-responsive', domainId: 'webdev', name: 'Responsive Design', description: 'Mobile-first, media queries', questionsCount: 60, difficulty: 'Medium' },

  // Mobile Development Topics (200 questions total)
  { id: 'mobile-android', domainId: 'mobile', name: 'Android Development', description: 'Activities, fragments, Kotlin', questionsCount: 70, difficulty: 'Medium' },
  { id: 'mobile-ios', domainId: 'mobile', name: 'iOS Development', description: 'Swift, UIKit, SwiftUI', questionsCount: 70, difficulty: 'Medium' },
  { id: 'mobile-reactnative', domainId: 'mobile', name: 'React Native', description: 'Cross-platform development', questionsCount: 60, difficulty: 'Medium' },

  // Cybersecurity Topics (200 questions total)
  { id: 'security-basics', domainId: 'cybersecurity', name: 'Security Fundamentals', description: 'CIA triad, threats', questionsCount: 70, difficulty: 'Easy' },
  { id: 'security-crypto', domainId: 'cybersecurity', name: 'Cryptography', description: 'Encryption, hashing', questionsCount: 70, difficulty: 'Hard' },
  { id: 'security-network', domainId: 'cybersecurity', name: 'Network Security', description: 'Firewalls, protocols', questionsCount: 60, difficulty: 'Medium' }
];

// Generate questions programmatically
function generateQuestions(): Question[] {
  const allQuestions: Question[] = [];

  // Question templates for different domains
  const questionTemplates = {
    // Verbal Aptitude
    'verbal-synonyms': [
      { q: 'Choose the word most similar to "ELOQUENT"', opts: ['Silent', 'Articulate', 'Boring', 'Confused'], ans: 1, exp: 'Eloquent means fluent or persuasive in speaking.' },
      { q: 'Select the antonym of "ABUNDANT"', opts: ['Plentiful', 'Scarce', 'Multiple', 'Numerous'], ans: 1, exp: 'Abundant means plentiful; scarce means insufficient.' },
      { q: 'Synonym for "DILIGENT"', opts: ['Lazy', 'Hardworking', 'Careless', 'Slow'], ans: 1, exp: 'Diligent means showing care and effort in work.' },
      { q: 'Antonym of "OPTIMISTIC"', opts: ['Hopeful', 'Positive', 'Pessimistic', 'Happy'], ans: 2, exp: 'Optimistic is hopeful; pessimistic is negative.' },
      { q: 'Synonym for "CONCISE"', opts: ['Lengthy', 'Brief', 'Detailed', 'Verbose'], ans: 1, exp: 'Concise means giving information clearly in few words.' }
    ],
    'verbal-grammar': [
      { q: 'Choose correct: "He ___ to school"', opts: ['go', 'goes', 'going', 'gone'], ans: 1, exp: 'Subject-verb agreement requires "goes" with third person singular.' },
      { q: 'Identify error: "She don\'t like coffee"', opts: ['No error', 'Should be doesn\'t', 'Both correct', 'None'], ans: 1, exp: 'Correct form is "doesn\'t" for third person singular.' },
      { q: 'Which is correct?', opts: ['Their going', 'There going', 'They\'re going', 'Theyre going'], ans: 2, exp: 'They\'re is the contraction of "they are".' },
      { q: 'Find mistake: "Between you and I"', opts: ['No error', 'Should be me', 'Should be we', 'Correct'], ans: 1, exp: 'After prepositions, use object form "me" not "I".' }
    ],

    // Quantitative Aptitude
    'quant-arithmetic': [
      { q: 'What is 15% of 200?', opts: ['25', '30', '35', '40'], ans: 1, exp: '15% of 200 = (15/100) × 200 = 30' },
      { q: 'If 3 apples cost $6, what do 5 cost?', opts: ['$8', '$10', '$12', '$15'], ans: 1, exp: 'Cost per apple = $2. 5 apples = $10' },
      { q: 'Average of 10, 20, 30?', opts: ['15', '20', '25', '30'], ans: 1, exp: '(10+20+30)/3 = 20' },
      { q: 'Simple interest: P=$1000, R=5%, T=2yr?', opts: ['$50', '$100', '$150', '$200'], ans: 1, exp: 'SI = (1000×5×2)/100 = $100' }
    ],
    'quant-algebra': [
      { q: 'Solve: 2x + 5 = 15', opts: ['x=3', 'x=5', 'x=7', 'x=10'], ans: 1, exp: '2x = 10, x = 5' },
      { q: 'If x² = 16, x = ?', opts: ['±2', '±4', '±8', '16'], ans: 1, exp: 'x = ±4' },
      { q: 'Simplify: 3x + 2x', opts: ['5x', '6x', 'x', '5x²'], ans: 0, exp: '3x + 2x = 5x' },
      { q: 'Expand: (a+b)²', opts: ['a²+b²', 'a²+2ab+b²', 'a²-b²', '2ab'], ans: 1, exp: '(a+b)² = a²+2ab+b²' }
    ],

    // Logical Reasoning
    'logical-patterns': [
      { q: 'Next: 2, 6, 12, 20, 30, ?', opts: ['38', '40', '42', '44'], ans: 2, exp: 'Differences: +4,+6,+8,+10,+12 → 42' },
      { q: 'Complete: A, C, F, J, O, ?', opts: ['S', 'T', 'U', 'V'], ans: 2, exp: 'Differences: +2,+3,+4,+5,+6 → U' },
      { q: 'Find next: 5, 10, 20, 40, ?', opts: ['60', '70', '80', '90'], ans: 2, exp: 'Each ×2 → 80' },
      { q: 'Series: 1, 4, 9, 16, 25, ?', opts: ['30', '32', '34', '36'], ans: 3, exp: 'Perfect squares → 36' }
    ],
    'logical-puzzles': [
      { q: 'A is B\'s sister. B is C\'s mother. A to C?', opts: ['Mother', 'Aunt', 'Sister', 'Grandmother'], ans: 1, exp: 'A is sister of B who is mother of C, so A is aunt.' },
      { q: 'If all X are Y, and all Y are Z, then?', opts: ['All X are Z', 'Some X are Z', 'No X are Z', 'Cannot say'], ans: 0, exp: 'Transitive property applies.' }
    ],

    // C Programming
    'c-basics': [
      { q: 'Which is correct variable declaration?', opts: ['int 2x;', 'int x2;', 'int x-2;', 'int x.2;'], ans: 1, exp: 'Variable names cannot start with digit or contain special chars.' },
      { q: 'Size of int in C (typically)?', opts: ['1 byte', '2 bytes', '4 bytes', '8 bytes'], ans: 2, exp: 'Typically int is 4 bytes on modern systems.' },
      { q: 'What does printf() return?', opts: ['0', 'Number of chars printed', 'void', '-1'], ans: 1, exp: 'printf() returns number of characters printed.' },
      { q: 'Which is not a C keyword?', opts: ['switch', 'goto', 'main', 'return'], ans: 2, exp: 'main is a function name, not a keyword.' }
    ],
    'c-pointers': [
      { q: 'What is correct pointer declaration?', opts: ['int ptr*;', 'int *ptr;', 'int ptr;', 'ptr int*;'], ans: 1, exp: 'int *ptr declares a pointer to int.' },
      { q: 'What does & operator do?', opts: ['Dereference', 'Address of', 'Bitwise AND', 'Logical AND'], ans: 1, exp: '& gives address of a variable.' },
      { q: 'What is NULL pointer?', opts: ['Points to 0', 'Invalid pointer', 'Points to nothing', 'All of these'], ans: 3, exp: 'NULL pointer points to address 0, indicating it points nowhere.' },
      { q: 'Array name represents?', opts: ['First element', 'Address of first element', 'Size of array', 'Last element'], ans: 1, exp: 'Array name is pointer to first element.' }
    ],
    'c-functions': [
      { q: 'What is recursion?', opts: ['Loop', 'Function calling itself', 'Goto statement', 'Function pointer'], ans: 1, exp: 'Recursion is when a function calls itself.' },
      { q: 'What is base case in recursion?', opts: ['First call', 'Last call', 'Stopping condition', 'Main function'], ans: 2, exp: 'Base case is the condition to stop recursion.' },
      { q: 'How are arguments passed in C by default?', opts: ['By reference', 'By value', 'By pointer', 'By address'], ans: 1, exp: 'C passes arguments by value by default.' }
    ],

    // C++ Programming
    'cpp-basics': [
      { q: 'Which is correct C++ comment?', opts: ['# comment', '// comment', '/* comment', 'comment //'], ans: 1, exp: '// is single-line comment in C++.' },
      { q: 'What is cout in C++?', opts: ['Function', 'Object', 'Keyword', 'Operator'], ans: 1, exp: 'cout is an object used for output.' },
      { q: 'Which header for iostream?', opts: ['<stdio.h>', '<iostream>', '<iostream.h>', '<stream>'], ans: 1, exp: '<iostream> is standard header for I/O.' },
      { q: 'What is namespace std?', opts: ['Function', 'Standard namespace', 'Variable', 'Class'], ans: 1, exp: 'std is the standard namespace in C++.' }
    ],
    'cpp-oop': [
      { q: 'What is encapsulation?', opts: ['Inheritance', 'Data hiding', 'Polymorphism', 'Abstraction'], ans: 1, exp: 'Encapsulation is wrapping data and methods together.' },
      { q: 'What is inheritance?', opts: ['Code reuse', 'Data hiding', 'Function overloading', 'Type conversion'], ans: 0, exp: 'Inheritance allows code reuse from base class.' },
      { q: 'What is polymorphism?', opts: ['One form', 'Many forms', 'No form', 'Hidden form'], ans: 1, exp: 'Polymorphism means many forms - same interface, different implementations.' },
      { q: 'What is constructor?', opts: ['Destructor', 'Special member function', 'Normal function', 'Operator'], ans: 1, exp: 'Constructor is special function called when object is created.' }
    ],
    'cpp-stl': [
      { q: 'What does STL stand for?', opts: ['Standard Type Library', 'Standard Template Library', 'System Template Library', 'Simple Template Library'], ans: 1, exp: 'STL is Standard Template Library.' },
      { q: 'Which is STL container?', opts: ['vector', 'array[]', 'struct', 'class'], ans: 0, exp: 'vector is an STL container.' },
      { q: 'What is iterator?', opts: ['Pointer', 'Object to traverse container', 'Function', 'Loop'], ans: 1, exp: 'Iterator is used to traverse containers.' }
    ],

    // Java Programming
    'java-basics': [
      { q: 'Which is not Java keyword?', opts: ['class', 'interface', 'main', 'static'], ans: 2, exp: 'main is a method name, not a keyword.' },
      { q: 'What is JVM?', opts: ['Java Virtual Machine', 'Java Variable Method', 'Java Visual Machine', 'Java Version Manager'], ans: 0, exp: 'JVM is Java Virtual Machine that executes bytecode.' },
      { q: 'Java is?', opts: ['Compiled', 'Interpreted', 'Both', 'Neither'], ans: 2, exp: 'Java is both compiled (to bytecode) and interpreted.' },
      { q: 'Which is primitive type?', opts: ['String', 'int', 'Integer', 'Array'], ans: 1, exp: 'int is a primitive type in Java.' }
    ],
    'java-collections': [
      { q: 'Which allows duplicates?', opts: ['Set', 'List', 'Map keys', 'None'], ans: 1, exp: 'List allows duplicate elements.' },
      { q: 'Which is ordered?', opts: ['HashSet', 'ArrayList', 'HashMap', 'HashTable'], ans: 1, exp: 'ArrayList maintains insertion order.' },
      { q: 'Which stores key-value pairs?', opts: ['List', 'Set', 'Map', 'Queue'], ans: 2, exp: 'Map stores key-value pairs.' },
      { q: 'Which is synchronized?', opts: ['ArrayList', 'Vector', 'LinkedList', 'HashSet'], ans: 1, exp: 'Vector is synchronized (thread-safe).' }
    ],
    'java-advanced': [
      { q: 'What is lambda expression?', opts: ['Loop', 'Anonymous function', 'Class', 'Interface'], ans: 1, exp: 'Lambda is anonymous function (Java 8+).' },
      { q: 'What is Stream API used for?', opts: ['I/O', 'Processing collections', 'Networking', 'Database'], ans: 1, exp: 'Stream API is for processing collections functionally.' },
      { q: 'What is multithreading?', opts: ['Multiple programs', 'Multiple processes', 'Multiple threads', 'Multiple users'], ans: 2, exp: 'Multithreading is concurrent execution of threads.' }
    ],

    // Python Programming
    'python-basics': [
      { q: 'Which is correct Python comment?', opts: ['// comment', '/* comment */', '# comment', '-- comment'], ans: 2, exp: '# is used for comments in Python.' },
      { q: 'Python is?', opts: ['Compiled', 'Interpreted', 'Assembled', 'Linked'], ans: 1, exp: 'Python is an interpreted language.' },
      { q: 'Which is mutable?', opts: ['tuple', 'string', 'list', 'int'], ans: 2, exp: 'list is mutable in Python.' },
      { q: 'What is correct function definition?', opts: ['function name():', 'def name():', 'func name():', 'define name():'], ans: 1, exp: 'def is used to define functions in Python.' }
    ],
    'python-ds': [
      { q: 'Which is ordered and mutable?', opts: ['tuple', 'set', 'list', 'dict'], ans: 2, exp: 'list is ordered and mutable.' },
      { q: 'Which doesn\'t allow duplicates?', opts: ['list', 'tuple', 'set', 'dict values'], ans: 2, exp: 'set doesn\'t allow duplicate elements.' },
      { q: 'How to access dict value?', opts: ['dict[key]', 'dict.key', 'dict->key', 'dict::key'], ans: 0, exp: 'Use dict[key] to access dictionary values.' },
      { q: 'What is list comprehension?', opts: ['Loop', 'Concise way to create lists', 'Function', 'Class'], ans: 1, exp: 'List comprehension creates lists concisely.' }
    ],
    'python-advanced': [
      { q: 'What is decorator?', opts: ['Function modifier', 'Class', 'Variable', 'Module'], ans: 0, exp: 'Decorator modifies function behavior.' },
      { q: 'What is generator?', opts: ['Creates iterators', 'Creates classes', 'Creates modules', 'Creates files'], ans: 0, exp: 'Generator creates iterators using yield.' },
      { q: 'What is self in Python?', opts: ['Keyword', 'Reference to instance', 'Function', 'Module'], ans: 1, exp: 'self refers to the instance of the class.' }
    ],

    // JavaScript
    'js-basics': [
      { q: 'How to declare variable?', opts: ['int x', 'var x', 'variable x', 'declare x'], ans: 1, exp: 'var, let, or const are used to declare variables.' },
      { q: 'What is === operator?', opts: ['Assignment', 'Strict equality', 'Comparison', 'Type check'], ans: 1, exp: '=== checks value and type (strict equality).' },
      { q: 'What is typeof?', opts: ['Function', 'Operator', 'Keyword', 'Method'], ans: 1, exp: 'typeof is an operator to check data type.' },
      { q: 'How to create function?', opts: ['func name(){}', 'function name(){}', 'def name(){}', 'fn name(){}'], ans: 1, exp: 'function keyword is used to create functions.' }
    ],
    'js-es6': [
      { q: 'What is arrow function?', opts: ['=>syntax', '->syntax', '::syntax', '>>syntax'], ans: 0, exp: 'Arrow functions use => syntax.' },
      { q: 'What is Promise?', opts: ['Loop', 'Async operation', 'Function', 'Variable'], ans: 1, exp: 'Promise handles asynchronous operations.' },
      { q: 'What does async/await do?', opts: ['Loop', 'Handle promises', 'Create functions', 'Import modules'], ans: 1, exp: 'async/await makes promise handling easier.' },
      { q: 'What is destructuring?', opts: ['Delete', 'Extract values', 'Loop', 'Function'], ans: 1, exp: 'Destructuring extracts values from arrays/objects.' }
    ],
    'js-dom': [
      { q: 'How to select element by ID?', opts: ['getElement()', 'getElementById()', 'selectId()', 'findById()'], ans: 1, exp: 'getElementById() selects element by ID.' },
      { q: 'What is event listener?', opts: ['Function', 'Event handler', 'Element', 'Attribute'], ans: 1, exp: 'Event listener handles user interactions.' },
      { q: 'How to create element?', opts: ['createElement()', 'makeElement()', 'newElement()', 'addElement()'], ans: 0, exp: 'createElement() creates new DOM element.' }
    ],

    // C# Programming
    'csharp-basics': [
      { q: 'Which is C# keyword?', opts: ['function', 'def', 'class', 'fn'], ans: 2, exp: 'class is a C# keyword.' },
      { q: 'What is namespace?', opts: ['Function', 'Container for classes', 'Variable', 'Loop'], ans: 1, exp: 'Namespace organizes code and prevents naming conflicts.' },
      { q: 'What is Main method?', opts: ['Entry point', 'Constructor', 'Destructor', 'Operator'], ans: 0, exp: 'Main is the entry point of C# application.' },
      { q: 'Which is value type?', opts: ['string', 'class', 'int', 'array'], ans: 2, exp: 'int is a value type in C#.' }
    ],
    'csharp-dotnet': [
      { q: 'What is .NET Framework?', opts: ['Language', 'Platform', 'Editor', 'Database'], ans: 1, exp: '.NET Framework is a development platform.' },
      { q: 'What is CLR?', opts: ['Compiler', 'Common Language Runtime', 'Class Library', 'Code Library'], ans: 1, exp: 'CLR executes .NET programs.' },
      { q: 'What is GAC?', opts: ['Compiler', 'Global Assembly Cache', 'Garbage Collector', 'Code Generator'], ans: 1, exp: 'GAC stores shared assemblies.' }
    ],
    'csharp-advanced': [
      { q: 'What is LINQ?', opts: ['Loop', 'Language Integrated Query', 'Library', 'Link'], ans: 1, exp: 'LINQ queries collections.' },
      { q: 'What is delegate?', opts: ['Class', 'Type-safe function pointer', 'Variable', 'Loop'], ans: 1, exp: 'Delegate is type-safe function pointer.' },
      { q: 'What is async in C#?', opts: ['Loop', 'Asynchronous method', 'Sync method', 'Thread'], ans: 1, exp: 'async enables asynchronous programming.' }
    ],

    // React.js
    'react-basics': [
      { q: 'What is JSX?', opts: ['JavaScript', 'JavaScript XML', 'Java Syntax', 'JSON XML'], ans: 1, exp: 'JSX is JavaScript XML syntax.' },
      { q: 'What are props?', opts: ['Functions', 'Properties passed to components', 'State', 'Events'], ans: 1, exp: 'Props pass data to components.' },
      { q: 'What is component?', opts: ['Function', 'Reusable UI piece', 'State', 'Event'], ans: 1, exp: 'Component is reusable UI building block.' },
      { q: 'How to create component?', opts: ['function Component(){}', 'component(){}', 'new Component(){}', 'class(){}'], ans: 0, exp: 'Function or class can create components.' }
    ],
    'react-hooks': [
      { q: 'What is useState?', opts: ['Function', 'Hook for state', 'Component', 'Event'], ans: 1, exp: 'useState manages component state.' },
      { q: 'What does useEffect do?', opts: ['State', 'Side effects', 'Props', 'Events'], ans: 1, exp: 'useEffect handles side effects.' },
      { q: 'When does useEffect run?', opts: ['Before render', 'After render', 'Never', 'On click'], ans: 1, exp: 'useEffect runs after render.' },
      { q: 'What is custom hook?', opts: ['Component', 'Reusable logic', 'State', 'Props'], ans: 1, exp: 'Custom hooks extract reusable logic.' }
    ],
    'react-advanced': [
      { q: 'What is Context API?', opts: ['State', 'Global state management', 'Props', 'Event'], ans: 1, exp: 'Context provides global state.' },
      { q: 'What is Redux?', opts: ['Component', 'State management library', 'Hook', 'Router'], ans: 1, exp: 'Redux manages application state.' },
      { q: 'What is React.memo?', opts: ['Function', 'Performance optimization', 'Hook', 'Component'], ans: 1, exp: 'React.memo prevents unnecessary re-renders.' }
    ],

    // Angular
    'angular-basics': [
      { q: 'What is Angular?', opts: ['Library', 'Framework', 'Language', 'Database'], ans: 1, exp: 'Angular is a TypeScript framework.' },
      { q: 'What is component in Angular?', opts: ['Function', 'Building block of UI', 'Service', 'Module'], ans: 1, exp: 'Component is basic building block.' },
      { q: 'What is directive?', opts: ['Function', 'DOM manipulation', 'Service', 'Module'], ans: 1, exp: 'Directive manipulates DOM.' },
      { q: 'What is pipe?', opts: ['Function', 'Transform data', 'Service', 'Component'], ans: 1, exp: 'Pipe transforms data in template.' }
    ],
    'angular-services': [
      { q: 'What is service?', opts: ['Component', 'Reusable business logic', 'Directive', 'Module'], ans: 1, exp: 'Service contains reusable logic.' },
      { q: 'What is Dependency Injection?', opts: ['Loop', 'Design pattern', 'Function', 'Module'], ans: 1, exp: 'DI provides dependencies to classes.' },
      { q: 'How to create service?', opts: ['@Component', '@Service', '@Injectable', '@Module'], ans: 2, exp: '@Injectable decorator creates service.' }
    ],
    'angular-advanced': [
      { q: 'What is routing in Angular?', opts: ['Service', 'Navigation between views', 'Component', 'Module'], ans: 1, exp: 'Routing enables navigation.' },
      { q: 'What is RxJS?', opts: ['Component', 'Reactive programming library', 'Service', 'Module'], ans: 1, exp: 'RxJS handles async operations.' },
      { q: 'What is Observable?', opts: ['Array', 'Stream of data', 'Function', 'Service'], ans: 1, exp: 'Observable is a stream of async data.' }
    ],

    // Node.js
    'node-basics': [
      { q: 'What is Node.js?', opts: ['Framework', 'JavaScript runtime', 'Library', 'Database'], ans: 1, exp: 'Node.js is JavaScript runtime for server.' },
      { q: 'What is npm?', opts: ['Language', 'Package manager', 'Framework', 'Database'], ans: 1, exp: 'npm is Node Package Manager.' },
      { q: 'What is module in Node?', opts: ['Function', 'Reusable code', 'Variable', 'Class'], ans: 1, exp: 'Module is reusable piece of code.' },
      { q: 'How to import module?', opts: ['import', 'require()', 'include', 'use'], ans: 1, exp: 'require() imports modules in Node.' }
    ],
    'node-express': [
      { q: 'What is Express?', opts: ['Language', 'Web framework', 'Database', 'Testing tool'], ans: 1, exp: 'Express is web framework for Node.' },
      { q: 'What is middleware?', opts: ['Database', 'Function in request cycle', 'Router', 'Template'], ans: 1, exp: 'Middleware processes requests.' },
      { q: 'What is REST API?', opts: ['Database', 'Web service architecture', 'Framework', 'Language'], ans: 1, exp: 'REST is architectural style for APIs.' },
      { q: 'Which HTTP method for create?', opts: ['GET', 'POST', 'PUT', 'DELETE'], ans: 1, exp: 'POST creates new resources.' }
    ],
    'node-advanced': [
      { q: 'What are Streams?', opts: ['Arrays', 'Data flow', 'Functions', 'Modules'], ans: 1, exp: 'Streams handle data flow efficiently.' },
      { q: 'What is cluster module?', opts: ['Database', 'Multi-core processing', 'Router', 'Template'], ans: 1, exp: 'Cluster enables multi-core usage.' },
      { q: 'What is JWT?', opts: ['Database', 'JSON Web Token', 'Framework', 'Module'], ans: 1, exp: 'JWT is for authentication.' }
    ],

    // SQL & Databases
    'sql-basics': [
      { q: 'What does SQL stand for?', opts: ['Standard Query Language', 'Structured Query Language', 'Simple Query Language', 'System Query Language'], ans: 1, exp: 'SQL is Structured Query Language.' },
      { q: 'Which retrieves data?', opts: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'], ans: 2, exp: 'SELECT retrieves data from database.' },
      { q: 'Which adds data?', opts: ['ADD', 'INSERT', 'CREATE', 'UPDATE'], ans: 1, exp: 'INSERT adds new records.' },
      { q: 'Which modifies data?', opts: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'], ans: 2, exp: 'UPDATE modifies existing records.' }
    ],
    'sql-joins': [
      { q: 'What is INNER JOIN?', opts: ['All records', 'Matching records', 'Left records', 'Right records'], ans: 1, exp: 'INNER JOIN returns matching records.' },
      { q: 'What is LEFT JOIN?', opts: ['Right table', 'All left + matching right', 'Matching only', 'All records'], ans: 1, exp: 'LEFT JOIN returns all left records.' },
      { q: 'What is subquery?', opts: ['Main query', 'Query inside query', 'Join', 'Index'], ans: 1, exp: 'Subquery is query within another query.' }
    ],
    'sql-advanced': [
      { q: 'What is normalization?', opts: ['Backup', 'Reduce redundancy', 'Increase speed', 'Add data'], ans: 1, exp: 'Normalization reduces data redundancy.' },
      { q: 'What is primary key?', opts: ['Foreign key', 'Unique identifier', 'Index', 'Constraint'], ans: 1, exp: 'Primary key uniquely identifies records.' },
      { q: 'What is index?', opts: ['Key', 'Performance improvement', 'Constraint', 'Table'], ans: 1, exp: 'Index improves query performance.' }
    ],

    // Power BI
    'powerbi-basics': [
      { q: 'What is Power BI?', opts: ['Database', 'BI tool', 'Programming language', 'Framework'], ans: 1, exp: 'Power BI is business intelligence tool.' },
      { q: 'What is visualization?', opts: ['Data', 'Graphical representation', 'Table', 'Report'], ans: 1, exp: 'Visualization displays data graphically.' },
      { q: 'What is dataset?', opts: ['Chart', 'Collection of data', 'Report', 'Dashboard'], ans: 1, exp: 'Dataset is collection of data.' },
      { q: 'What is dashboard?', opts: ['Report', 'Collection of visuals', 'Dataset', 'Table'], ans: 1, exp: 'Dashboard shows multiple visualizations.' }
    ],
    'powerbi-dax': [
      { q: 'What is DAX?', opts: ['Database', 'Data Analysis Expressions', 'Data Algorithm', 'Dashboard'], ans: 1, exp: 'DAX is formula language.' },
      { q: 'What is measure?', opts: ['Column', 'Calculated value', 'Table', 'Report'], ans: 1, exp: 'Measure is calculated dynamically.' },
      { q: 'What is calculated column?', opts: ['Measure', 'Column with formula', 'Table', 'Dataset'], ans: 1, exp: 'Calculated column stores computed values.' },
      { q: 'What is SUM() in DAX?', opts: ['Count', 'Addition function', 'Average', 'Maximum'], ans: 1, exp: 'SUM() adds up values.' }
    ],
    'powerbi-advanced': [
      { q: 'What is Power Query?', opts: ['DAX', 'ETL tool', 'Visual', 'Report'], ans: 1, exp: 'Power Query transforms data.' },
      { q: 'What is relationship?', opts: ['Formula', 'Connection between tables', 'Visual', 'Report'], ans: 1, exp: 'Relationship connects tables.' },
      { q: 'What is filter context?', opts: ['All data', 'Filtered subset', 'Table', 'Column'], ans: 1, exp: 'Filter context affects calculations.' }
    ],

    // DSA
    'dsa-arrays': [
      { q: 'What is array?', opts: ['Function', 'Collection of elements', 'Loop', 'Condition'], ans: 1, exp: 'Array stores multiple elements of same type.' },
      { q: 'What is time complexity of array access?', opts: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], ans: 0, exp: 'Array access by index is O(1).' },
      { q: 'What is linear search complexity?', opts: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], ans: 1, exp: 'Linear search is O(n).' },
      { q: 'What is two pointer technique?', opts: ['Loop', 'Algorithm pattern', 'Data structure', 'Sorting'], ans: 1, exp: 'Two pointers optimize array problems.' }
    ],
    'dsa-trees': [
      { q: 'What is binary tree?', opts: ['Array', 'Tree with max 2 children', 'List', 'Graph'], ans: 1, exp: 'Binary tree has at most 2 children per node.' },
      { q: 'What is BST property?', opts: ['Balanced', 'Left < Root < Right', 'Complete', 'Full'], ans: 1, exp: 'BST has ordered property.' },
      { q: 'What is tree traversal?', opts: ['Sorting', 'Visiting all nodes', 'Searching', 'Inserting'], ans: 1, exp: 'Traversal visits all nodes.' },
      { q: 'What is DFS?', opts: ['Sorting', 'Depth First Search', 'Data Structure', 'Delete Function'], ans: 1, exp: 'DFS explores depth first.' }
    ],
    'dsa-algorithms': [
      { q: 'What is time complexity of bubble sort?', opts: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], ans: 2, exp: 'Bubble sort is O(n²).' },
      { q: 'What is binary search requirement?', opts: ['Unsorted', 'Sorted array', 'Tree', 'Graph'], ans: 1, exp: 'Binary search requires sorted array.' },
      { q: 'What is dynamic programming?', opts: ['Loop', 'Optimization technique', 'Data structure', 'Sorting'], ans: 1, exp: 'DP solves problems by breaking into subproblems.' },
      { q: 'What is greedy algorithm?', opts: ['Optimal choice at each step', 'Try all', 'Random', 'Backtrack'], ans: 0, exp: 'Greedy makes locally optimal choices.' }
    ],

    // Cloud Computing
    'cloud-basics': [
      { q: 'What is cloud computing?', opts: ['Local server', 'Internet-based computing', 'Desktop app', 'Database'], ans: 1, exp: 'Cloud computing uses internet resources.' },
      { q: 'What is IaaS?', opts: ['Software', 'Infrastructure as Service', 'Platform', 'Database'], ans: 1, exp: 'IaaS provides infrastructure.' },
      { q: 'What is PaaS?', opts: ['Infrastructure', 'Platform as Service', 'Software', 'Network'], ans: 1, exp: 'PaaS provides platform.' },
      { q: 'What is SaaS?', opts: ['Infrastructure', 'Platform', 'Software as Service', 'Network'], ans: 2, exp: 'SaaS provides software applications.' }
    ],
    'cloud-aws': [
      { q: 'What is EC2?', opts: ['Database', 'Virtual server', 'Storage', 'Network'], ans: 1, exp: 'EC2 provides virtual servers.' },
      { q: 'What is S3?', opts: ['Server', 'Object storage', 'Database', 'Network'], ans: 1, exp: 'S3 is object storage service.' },
      { q: 'What is Lambda?', opts: ['Server', 'Serverless compute', 'Database', 'Storage'], ans: 1, exp: 'Lambda runs code without servers.' },
      { q: 'What is RDS?', opts: ['Storage', 'Compute', 'Relational Database Service', 'Network'], ans: 2, exp: 'RDS provides managed databases.' }
    ],
    'cloud-azure': [
      { q: 'What is Azure?', opts: ['AWS service', 'Microsoft cloud platform', 'Google cloud', 'IBM cloud'], ans: 1, exp: 'Azure is Microsoft\'s cloud platform.' },
      { q: 'What is GCP?', opts: ['AWS', 'Azure', 'Google Cloud Platform', 'IBM Cloud'], ans: 2, exp: 'GCP is Google\'s cloud platform.' },
      { q: 'What is virtual machine?', opts: ['Container', 'Emulated computer', 'Database', 'Storage'], ans: 1, exp: 'VM is emulated computer system.' }
    ],

    // DevOps
    'devops-basics': [
      { q: 'What is DevOps?', opts: ['Tool', 'Culture & practices', 'Language', 'Framework'], ans: 1, exp: 'DevOps combines development and operations.' },
      { q: 'What is CI/CD?', opts: ['Tool', 'Continuous Integration/Deployment', 'Framework', 'Language'], ans: 1, exp: 'CI/CD automates software delivery.' },
      { q: 'What is version control?', opts: ['Testing', 'Track code changes', 'Deployment', 'Monitoring'], ans: 1, exp: 'Version control tracks changes.' },
      { q: 'What is Git?', opts: ['Language', 'Version control system', 'Framework', 'Database'], ans: 1, exp: 'Git is distributed version control.' }
    ],
    'devops-docker': [
      { q: 'What is Docker?', opts: ['VM', 'Containerization platform', 'Language', 'Framework'], ans: 1, exp: 'Docker creates containers.' },
      { q: 'What is container?', opts: ['VM', 'Lightweight package', 'Server', 'Database'], ans: 1, exp: 'Container packages application and dependencies.' },
      { q: 'What is image?', opts: ['Photo', 'Container template', 'Server', 'Database'], ans: 1, exp: 'Image is container template.' },
      { q: 'What is Dockerfile?', opts: ['Photo', 'Instructions to build image', 'Container', 'Server'], ans: 1, exp: 'Dockerfile defines image build.' }
    ],
    'devops-kubernetes': [
      { q: 'What is Kubernetes?', opts: ['Container', 'Container orchestration', 'Language', 'Database'], ans: 1, exp: 'Kubernetes orchestrates containers.' },
      { q: 'What is pod?', opts: ['Container', 'Smallest deployable unit', 'Server', 'Database'], ans: 1, exp: 'Pod is basic Kubernetes unit.' },
      { q: 'What is deployment?', opts: ['Pod', 'Manages replicas', 'Container', 'Service'], ans: 1, exp: 'Deployment manages pod replicas.' }
    ],

    // Web Development
    'web-html': [
      { q: 'What is HTML?', opts: ['Language', 'Markup language', 'Framework', 'Database'], ans: 1, exp: 'HTML is HyperText Markup Language.' },
      { q: 'What is semantic HTML?', opts: ['Style', 'Meaningful tags', 'Script', 'Link'], ans: 1, exp: 'Semantic HTML uses meaningful tags.' },
      { q: 'What is <div>?', opts: ['Inline', 'Block container', 'List', 'Link'], ans: 1, exp: 'div is block-level container.' },
      { q: 'What is <span>?', opts: ['Block', 'Inline container', 'List', 'Link'], ans: 1, exp: 'span is inline container.' }
    ],
    'web-css': [
      { q: 'What is CSS?', opts: ['Language', 'Styling language', 'Framework', 'Database'], ans: 1, exp: 'CSS is Cascading Style Sheets.' },
      { q: 'What is Flexbox?', opts: ['Grid', 'Layout model', 'Framework', 'Tool'], ans: 1, exp: 'Flexbox is flexible layout model.' },
      { q: 'What is Grid?', opts: ['Flexbox', '2D layout system', 'Framework', 'Tool'], ans: 1, exp: 'CSS Grid is 2D layout system.' },
      { q: 'What is selector?', opts: ['Property', 'Target elements', 'Value', 'Tag'], ans: 1, exp: 'Selector targets HTML elements.' }
    ],
    'web-responsive': [
      { q: 'What is responsive design?', opts: ['Fast', 'Adapts to screen size', 'Colorful', 'Animated'], ans: 1, exp: 'Responsive design adapts to devices.' },
      { q: 'What is media query?', opts: ['Database', 'CSS for different screens', 'JavaScript', 'HTML'], ans: 1, exp: 'Media query applies CSS conditionally.' },
      { q: 'What is mobile-first?', opts: ['Desktop', 'Design for mobile first', 'Tablet', 'All same'], ans: 1, exp: 'Mobile-first starts with mobile design.' }
    ],

    // Mobile Development
    'mobile-android': [
      { q: 'What is Android?', opts: ['iOS', 'Mobile OS', 'Framework', 'Language'], ans: 1, exp: 'Android is mobile operating system.' },
      { q: 'What is Activity?', opts: ['Fragment', 'Single screen', 'Service', 'Layout'], ans: 1, exp: 'Activity represents single screen.' },
      { q: 'What is Kotlin?', opts: ['Java', 'Programming language', 'Framework', 'Tool'], ans: 1, exp: 'Kotlin is Android programming language.' },
      { q: 'What is Intent?', opts: ['Activity', 'Messaging object', 'Service', 'Fragment'], ans: 1, exp: 'Intent passes messages between components.' }
    ],
    'mobile-ios': [
      { q: 'What is iOS?', opts: ['Android', 'Apple mobile OS', 'Framework', 'Language'], ans: 1, exp: 'iOS is Apple\'s mobile OS.' },
      { q: 'What is Swift?', opts: ['Java', 'Programming language', 'Framework', 'Tool'], ans: 1, exp: 'Swift is iOS programming language.' },
      { q: 'What is UIKit?', opts: ['Language', 'UI framework', 'Database', 'Tool'], ans: 1, exp: 'UIKit builds iOS interfaces.' },
      { q: 'What is SwiftUI?', opts: ['UIKit', 'Declarative UI framework', 'Database', 'Tool'], ans: 1, exp: 'SwiftUI is modern UI framework.' }
    ],
    'mobile-reactnative': [
      { q: 'What is React Native?', opts: ['React', 'Cross-platform framework', 'Language', 'Database'], ans: 1, exp: 'React Native builds cross-platform apps.' },
      { q: 'What language does React Native use?', opts: ['Java', 'JavaScript', 'Swift', 'Kotlin'], ans: 1, exp: 'React Native uses JavaScript.' },
      { q: 'What is advantage of React Native?', opts: ['Native only', 'Code reuse across platforms', 'iOS only', 'Android only'], ans: 1, exp: 'React Native enables code sharing.' }
    ],

    // Cybersecurity
    'security-basics': [
      { q: 'What does CIA stand for in security?', opts: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Internet Access', 'Cyber Information Analysis'], ans: 1, exp: 'CIA is fundamental security triad.' },
      { q: 'What is malware?', opts: ['Good software', 'Malicious software', 'Hardware', 'Network'], ans: 1, exp: 'Malware is malicious software.' },
      { q: 'What is phishing?', opts: ['Fishing', 'Social engineering attack', 'Virus', 'Firewall'], ans: 1, exp: 'Phishing tricks users into revealing info.' },
      { q: 'What is authentication?', opts: ['Authorization', 'Verify identity', 'Encryption', 'Firewall'], ans: 1, exp: 'Authentication verifies user identity.' }
    ],
    'security-crypto': [
      { q: 'What is encryption?', opts: ['Decryption', 'Convert to secret code', 'Delete', 'Compress'], ans: 1, exp: 'Encryption protects data by encoding.' },
      { q: 'What is symmetric encryption?', opts: ['Two keys', 'Same key for encrypt/decrypt', 'No key', 'Public key'], ans: 1, exp: 'Symmetric uses same key.' },
      { q: 'What is hashing?', opts: ['Encryption', 'One-way function', 'Decryption', 'Compression'], ans: 1, exp: 'Hashing creates fixed-size output.' },
      { q: 'What is SSL/TLS?', opts: ['Virus', 'Encryption protocol', 'Firewall', 'Antivirus'], ans: 1, exp: 'SSL/TLS secures network communication.' }
    ],
    'security-network': [
      { q: 'What is firewall?', opts: ['Virus', 'Network security system', 'Antivirus', 'Browser'], ans: 1, exp: 'Firewall filters network traffic.' },
      { q: 'What is VPN?', opts: ['Virus', 'Virtual Private Network', 'Firewall', 'Antivirus'], ans: 1, exp: 'VPN creates secure connection.' },
      { q: 'What is DDoS?', opts: ['Database', 'Distributed Denial of Service', 'Firewall', 'Encryption'], ans: 1, exp: 'DDoS overwhelms systems with traffic.' }
    ]
  };

  // Generate questions for each topic
  for (const topic of topics) {
    const templates = questionTemplates[topic.id as keyof typeof questionTemplates] || [];
    const questionsNeeded = topic.questionsCount;
    
    for (let i = 0; i < questionsNeeded; i++) {
      const template = templates[i % templates.length];
      if (template) {
        allQuestions.push({
          id: `${topic.id}-${i}`,
          topicId: topic.id,
          question: template.q,
          options: template.opts,
          correctAnswer: template.ans,
          explanation: template.exp
        });
      }
    }
  }

  return allQuestions;
}

export const questions: Question[] = generateQuestions();

// Helper functions
export function getDomainById(id: string): Domain | undefined {
  return domains.find(d => d.id === id);
}

export function getTopicsByDomain(domainId: string): Topic[] {
  return topics.filter(t => t.domainId === domainId);
}

export function getTopicById(id: string): Topic | undefined {
  return topics.find(t => t.id === id);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return questions.filter(q => q.topicId === topicId);
}
