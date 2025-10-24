export const initialChatHistory = [
  {
    id: 's1',
    role: 'ai',
    mode: 'normal',
    text: 'Welcome to Bridge AI! I am your Adaptive Study Tutor. Select a mode or ask me an academic question to begin.'
  }
];

export const mockSmartAnswer = {
  headline: 'Photosynthesis: The Engine of Life',
  structuredContent: [
    { title: 'Practical Example', content: 'A forest is a network of tiny chemical factories...' },
    { title: 'Core Mechanism', content: 'Light-dependent reactions → ATP/NADPH. Calvin cycle fixes CO₂ into sugar.' }
  ]
};

export const sampleLessons = [
  { id: 'forces', title: 'Forces & Motion', summary: 'Animated diagrams and quick practice' },
  { id: 'photosynthesis', title: 'Photosynthesis', summary: 'Visualize the Calvin cycle & practice' }
];

export const sampleStats = {
  progress: '12%',
  next: 'Forces (visual)',
  activeDays: 3,
  mood: 'engaged',
  risk: 'Low',
  action: 'Try short practice'
};