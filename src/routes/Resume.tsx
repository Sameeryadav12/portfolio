import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    document.title = 'Sameer Yadav — Resume'
  }, [])

  // change the filename here if you use a different one
  const RESUME_PATH = '/cv/Sameer_Yadav_Resume.pdf'

  return (
    <div className="space-y-4 print:space-y-0">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brand-fog">Resume</h1>

        <div className="flex gap-2">
          {/* Opens in a new tab */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 border border-brand-mist/30 text-brand-fog"
          >
            View PDF
          </a>

          {/* Forces a download with the same filename */}
          <a
            href={RESUME_PATH}
            download
            className="rounded-2xl px-4 py-2 text-white"
            style={{ backgroundColor: '#124E66' }}
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Optional hint if the file is missing during dev */}
      <p className="text-brand-mist">
        Make sure your resume PDF exists at <code>/public/cv/Sameer_Yadav_Resume.pdf</code>.
      </p>
    </div>
  )
}
