// Make Node-like globals available to browser deps (e.g., gray-matter)
import { Buffer } from 'buffer'
import process from 'process'

;(window as any).Buffer = Buffer
;(window as any).process = process

export {} // keep as a module
