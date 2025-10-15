export function FeaturesSection() {
  console.log("[v0] FeaturesSection rendering")
  return (
    <div className="bg-white">
      {/* Feature 1: Main Value Prop */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-12 md:p-20 text-center"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L8 28H40L24 4Z" fill="white" opacity="0.95" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Lito</h2>
            </div>

            <h3 className="text-4xl md:text-6xl font-normal text-white mb-4">a doc editor that</h3>
            <p className="text-4xl md:text-6xl font-serif italic text-white mb-8">writes with you</p>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              Meet Lito, built with AI to help you brainstorm, autocomplete, and generate content in real-time.
            </p>

            <button className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-8 py-4 rounded-full shadow-xl flex items-center gap-3 mx-auto transition-all hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 3L5 17M15 3L17 5M15 3V7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Start Writing
            </button>

            {/* Product Mockup */}
            <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <div className="bg-gray-950 p-6">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-gray-500">Business Plan</div>
                  </div>
                  <div className="text-left space-y-3">
                    <div className="h-6 bg-gray-800 rounded w-1/3" />
                    <div className="h-3 bg-gray-800/50 rounded w-full" />
                    <div className="h-3 bg-gray-800/50 rounded w-5/6" />
                    <div className="h-3 bg-primary/40 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Chat to Edit */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">Chat to edit</h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Chat with your AI writing partner to help edit docs, get feedback, or ask for help with any part of your
            writing process.
          </p>

          <div
            className="rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-gray-200" />
                    <div className="w-8 h-8 rounded bg-gray-200" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>AI Assistant</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">A Fairytale</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Once upon a time, there was a little girl named Alice. She loved to play in her backyard. One day, she
                  found a strange hole. It was unlike anything she had ever seen. Curious, she decided to take a closer
                  look.
                </p>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Make it more dramatic"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm"
                    disabled
                  />
                  <button className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8L14 8M14 8L8 2M14 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Tab Completion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">tab, tab, tab</h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Get AI-powered writing suggestions as you type. Simply start typing and press Tab when you see a suggestion
            appear.
          </p>

          <div
            className="rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-gray-200" />
                  <div className="w-6 h-6 rounded bg-gray-200" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">A Fairytale</h4>
              <div className="text-left space-y-3 text-gray-700">
                <p className="text-sm leading-relaxed">
                  Once upon a time, there was a little girl named Alice. She loved to play in her backyard.{" "}
                  <span className="text-gray-400 italic">Press Tab to accept</span>
                </p>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded text-xs text-gray-600">
                  One day, she found a strange hole.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Reactive Blocks */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">Reactive Blocks</h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            AI Blocks react to your writing and generate content based on a prompt. Use them in the editor toolbar or in
            the / menu.
          </p>

          <div
            className="rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-gray-200" />
                  <div className="w-6 h-6 rounded bg-gray-200" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">A Fairytale</h4>
              <div className="text-left space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  In a realm painted with hues of twilight and whispers of ancient magic, there lived a maiden named
                  Alice. Her heart, a fragile vessel of dreams, found solace in the verdant embrace of her backyard. One
                  fateful day, as shadows danced with the setting sun, Alice stumbled upon a gaping void in the earth, a
                  portal to the unknown.
                </p>
                <p>
                  Drawn by an invisible force, she knelt before the abyss. A faint, ethereal light pulsed from its
                  depths, beckoning her into its enigmatic embrace. Hesitantly, her eyes pierced the veil of darkness,
                  seeking to unravel the secrets that lay hidden within.
                </p>
                <p className="font-semibold">
                  Suddenly, the ground beneath her gave way! With a scream that echoed into the heavens, Alice plunged
                  into the infinite darkness, leaving behind the world she knew and hurtling towards an uncertain
                  destiny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
