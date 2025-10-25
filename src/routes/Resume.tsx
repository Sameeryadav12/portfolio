import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, FileText, CheckCircle } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  
  useEffect(() => {
    document.title = 'Sameer Yadav — Resume'
  }, [])

  const RESUME_PATH = '/cv/Sameer_Yadav_Resume.pdf'

  const handleDownload = () => {
    setIsLoading(true)
    // Simulate download delay
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleViewResume = () => {
    // Method 1: Try to open PDF in new tab with specific parameters
    const pdfUrl = `${RESUME_PATH}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`
    
    // Create a temporary link element to force viewing instead of downloading
    const link = document.createElement('a')
    link.href = pdfUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    
    // Add to DOM temporarily and click
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePdfError = () => {
    setPdfError(true)
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <motion.div 
        className="relative z-10 space-y-8"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--theme-text)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Resume
        </motion.h1>
        <motion.p 
          className="text-lg"
          style={{ color: 'var(--theme-textSecondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Download my latest resume or view it online
        </motion.p>
      </div>

      {/* Resume Preview Card */}
      <motion.div 
        className="max-w-4xl mx-auto rounded-3xl border p-8"
        style={{ 
          borderColor: 'var(--theme-border)',
          backgroundColor: 'var(--theme-surface)'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Resume Preview */}
          <div className="flex-1">
            <div className="aspect-[8.5/11] rounded-2xl border overflow-hidden relative"
                 style={{ borderColor: 'var(--theme-border)' }}>
              {pdfError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8"
                     style={{ backgroundColor: 'var(--theme-background)' }}>
                  <FileText size={64} style={{ color: 'var(--theme-textSecondary)' }} className="mb-4" />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>
                    Resume Preview Unavailable
                  </h3>
                  <p className="text-center mb-4" style={{ color: 'var(--theme-textSecondary)' }}>
                    The PDF preview couldn't be loaded. Please use the download button to view the resume.
                  </p>
                  <motion.button
                    onClick={handleViewResume}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium cursor-pointer"
                    style={{ background: 'var(--theme-gradient-primary)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={18} />
                    View Resume
                  </motion.button>
                </div>
              ) : (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10"
                         style={{ backgroundColor: 'var(--theme-background)' }}>
                      <div className="text-center">
                        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p style={{ color: 'var(--theme-textSecondary)' }}>Loading resume...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={`${RESUME_PATH}?view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full"
                    title="Resume Preview"
                    onLoad={() => setIsLoading(false)}
                    onError={handlePdfError}
                    sandbox="allow-same-origin allow-scripts"
                  />
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:w-80 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
                Get My Resume
              </h3>
              
              <div className="space-y-3">
                <motion.button
                  onClick={handleViewResume}
                  className="flex items-center gap-3 w-full p-4 rounded-2xl border transition-all duration-200 hover:scale-105 cursor-pointer"
                  style={{ 
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-background)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={20} style={{ color: 'var(--theme-primary)' }} />
                  <div>
                    <div className="font-medium" style={{ color: 'var(--theme-text)' }}>
                      View Online
                    </div>
                    <div className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                      Opens in new tab
                    </div>
                  </div>
                </motion.button>

                <motion.a
                  href={RESUME_PATH}
                  download="Sameer_Yadav_Resume.pdf"
                  onClick={handleDownload}
                  className="flex items-center gap-3 w-full p-4 rounded-2xl text-white transition-all duration-200 hover:scale-105"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Download size={20} />
                  )}
                  <div>
                    <div className="font-medium">
                      {isLoading ? 'Downloading...' : 'Download PDF'}
                    </div>
                    <div className="text-sm opacity-90">
                      Save to your device
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="mt-8 p-4 rounded-2xl"
              style={{ backgroundColor: 'var(--theme-background)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="font-semibold mb-3" style={{ color: 'var(--theme-text)' }}>
                Quick Highlights
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  'Backend-leaning Full-Stack Developer',
                  'Unity 3D Game Development',
                  'React, TypeScript, Node.js Expert',
                  'Team Leadership Experience',
                  '30%+ Workload Reduction Achieved'
                ].map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle size={16} style={{ color: 'var(--theme-success)' }} />
                    <span style={{ color: 'var(--theme-textSecondary)' }}>
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  )
}
