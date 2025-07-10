
import React from 'react';
import { Palette, MonitorSpeaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isBlackWhite, toggleBlackWhite } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleBlackWhite}
      className="flex items-center gap-2"
    >
      {isBlackWhite ? (
        <>
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Color</span>
        </>
      ) : (
        <>
          <MonitorSpeaker className="h-4 w-4" />
          <span className="hidden sm:inline">B&W</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
