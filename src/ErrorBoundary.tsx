import React from 'react'

type Props = { children: React.ReactNode }
type State = { hasError: boolean; message?: string; stack?: string }

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(err: unknown) {
    const e = err as Error
    return { hasError: true, message: e?.message, stack: e?.stack }
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('App crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
            {this.state.message && (
              <p className="mb-4 opacity-80"><b>Error:</b> {this.state.message}</p>
            )}
            {this.state.stack && (
              <pre className="text-sm leading-6 p-3 rounded-xl border border-white/20 bg-black/30 overflow-auto">
{this.state.stack}
              </pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
