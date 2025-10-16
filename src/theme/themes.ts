export type Theme = {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  border: string
  success: string
  warning: string
  error: string
  gradientPrimary: string
  gradientSecondary: string
  gradientBackground: string
  gradientAccent: string
  shadow: string
  glow: string
}

export const themes: Record<string, Theme> = {
  'ocean-professional': {
    name: 'Ocean Professional',
    primary: '#0ea5e9', // Sky 500
    secondary: '#0284c7', // Sky 700
    accent: '#06b6d4', // Cyan 500
    background: '#0f172a', // Slate 900
    surface: '#1e293b', // Slate 800
    text: '#f8fafc', // Slate 50
    textSecondary: '#cbd5e1', // Slate 300
    border: '#334155', // Slate 700
    success: '#10b981', // Emerald 500
    warning: '#f59e0b', // Amber 500
    error: '#ef4444', // Red 500
    gradientPrimary: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    gradientSecondary: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    gradientBackground: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    gradientAccent: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(14, 165, 233, 0.3)',
  },
  'forest-executive': {
    name: 'Forest Executive',
    primary: '#16a34a', // Green 600
    secondary: '#15803d', // Green 700
    accent: '#22c55e', // Green 500
    background: '#0c1a14', // Dark Green
    surface: '#1a362d', // Medium Green
    text: '#ecfdf5', // Green 50
    textSecondary: '#a7f3d0', // Green 200
    border: '#344e41', // Darker Green
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientPrimary: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    gradientSecondary: 'linear-gradient(135deg, #1a362d 0%, #344e41 100%)',
    gradientBackground: 'linear-gradient(135deg, #0c1a14 0%, #1a362d 100%)',
    gradientAccent: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(22, 163, 74, 0.3)',
  },
  'sunset-creative': {
    name: 'Sunset Creative',
    primary: '#f97316', // Orange 500
    secondary: '#ea580c', // Orange 600
    accent: '#f59e0b', // Amber 500
    background: '#1c0d03', // Dark Brown
    surface: '#3d220c', // Medium Brown
    text: '#fff7ed', // Orange 50
    textSecondary: '#fed7aa', // Orange 200
    border: '#5e3a1f', // Darker Brown
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientPrimary: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
    gradientSecondary: 'linear-gradient(135deg, #3d220c 0%, #5e3a1f 100%)',
    gradientBackground: 'linear-gradient(135deg, #1c0d03 0%, #3d220c 100%)',
    gradientAccent: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(249, 115, 22, 0.3)',
  },
  'midnight-premium': {
    name: 'Midnight Premium',
    primary: '#8b5cf6', // Violet 500
    secondary: '#7c3aed', // Violet 600
    accent: '#a855f7', // Purple 500
    background: '#0a0a0a', // Pure Black
    surface: '#1a1a1a', // Dark Gray
    text: '#ffffff', // White
    textSecondary: '#d1d5db', // Gray 300
    border: '#374151', // Gray 700
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientPrimary: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
    gradientSecondary: 'linear-gradient(135deg, #1a1a1a 0%, #374151 100%)',
    gradientBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    gradientAccent: 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)',
    shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(139, 92, 246, 0.4)',
  },
  'azure-corporate': {
    name: 'Azure Corporate',
    primary: '#3b82f6', // Blue 500
    secondary: '#2563eb', // Blue 600
    accent: '#60a5fa', // Blue 400
    background: '#0f1419', // Dark Blue
    surface: '#1e293b', // Slate 800
    text: '#f1f5f9', // Slate 100
    textSecondary: '#94a3b8', // Slate 400
    border: '#334155', // Slate 700
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientPrimary: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    gradientSecondary: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    gradientBackground: 'linear-gradient(135deg, #0f1419 0%, #1e293b 100%)',
    gradientAccent: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
}

export const defaultTheme = 'ocean-professional'