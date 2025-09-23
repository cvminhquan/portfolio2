'use client';

import { useTheme } from '@/contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
