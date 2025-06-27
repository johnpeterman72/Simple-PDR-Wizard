import React from 'react';
import './index.css';

// Import the PDR Wizard component (from the artifact)
// You'll need to copy the PDRWizard component code from the artifact above
import PDRWizard from './components/PDRWizard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PDR</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PDR Wizard</h1>
                <p className="text-sm text-gray-600">Project Design Review Creator</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              v1.0.0 | CursorRIPER♦Σ Lite
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <PDRWizard />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>Built with CursorRIPER♦Σ Lite Framework</p>
            <p className="mt-1">
              Streamlined PDR creation for better project outcomes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;