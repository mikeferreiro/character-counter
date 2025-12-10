const { useState } = React;

function CharacterCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const charCount = text.length;
  const charWithoutSpaces = text.replace(/\s/g, '').length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text.split('\n').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 border-b border-white/10">
            <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
              Character Counter
            </h1>
            <p className="text-cyan-200 text-lg">
              Instant text analysis
            </p>
          </div>

          <div className="p-8">
            <div className="relative">
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Start typing here..."
                className="w-full h-72 p-6 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl focus:border-cyan-400 focus:outline-none resize-none text-lg text-white placeholder-white/40 transition-all duration-300"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              />
              {text.length > 0 && (
                <button
                  onClick={handleClear}
                  className="absolute top-4 right-4 bg-gray-700/60 hover:bg-gray-600/60 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="text-4xl font-black text-white mb-2">{charCount}</div>
                  <div className="text-sm font-semibold text-cyan-300">With spaces</div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-teal-500/20 to-teal-600/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-400/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="text-4xl font-black text-white mb-2">{charWithoutSpaces}</div>
                  <div className="text-sm font-semibold text-teal-300">Without spaces</div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-sky-500/20 to-sky-600/10 backdrop-blur-sm rounded-2xl p-6 border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-20 h-20 bg-sky-400/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="text-4xl font-black text-white mb-2">{wordCount}</div>
                  <div className="text-sm font-semibold text-sky-300">Words</div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="text-4xl font-black text-white mb-2">{lineCount}</div>
                  <div className="text-sm font-semibold text-blue-300">Lines</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/40 text-sm">Real-time updates • No limits</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<CharacterCounter />, document.getElementById('root'));
