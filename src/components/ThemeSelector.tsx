import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Sun, Moon, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { themes } from '../theme/themes';

export default function ThemeSelector() {
  const { currentThemeName, setTheme, themeNames } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (name: keyof typeof themes) => {
    setTheme(name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleDropdown}
        className="px-3 py-2 rounded-xl border transition-all duration-200 flex items-center gap-2"
        style={{ 
          borderColor: 'var(--theme-border)', 
          backgroundColor: 'var(--theme-surface)',
          color: 'var(--theme-textSecondary)'
        }}
        whileHover={{ scale: 1.05, borderColor: 'var(--theme-primary)' }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select theme"
        title="Select theme"
      >
        <Palette size={18} />
        <span className="hidden sm:inline">{themes[currentThemeName].name}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg p-2 z-10"
          style={{ 
            backgroundColor: 'var(--theme-surface)', 
            border: `1px solid var(--theme-border)` 
          }}
        >
          {themeNames.map((name) => (
            <motion.button
              key={name}
              onClick={() => handleThemeChange(name)}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
              style={{ 
                color: name === currentThemeName ? 'var(--theme-text)' : 'var(--theme-textSecondary)',
                backgroundColor: name === currentThemeName ? 'var(--theme-primary)' : 'transparent'
              }}
              whileHover={{ 
                backgroundColor: name === currentThemeName ? 'var(--theme-primary)' : 'var(--theme-background)',
                color: 'var(--theme-text)'
              }}
            >
              <span 
                className="w-4 h-4 rounded-full border" 
                style={{ 
                  backgroundColor: themes[name].primary, 
                  borderColor: themes[name].border 
                }}
              ></span>
              {themes[name].name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}