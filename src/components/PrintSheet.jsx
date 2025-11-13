export default function PrintSheet() {
  return (
    <section id="print" className="print:block hidden p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Ajinkya Nikumbh</h1>
        <p className="text-sm text-slate-600">Full‑Stack Developer • AI/ML</p>
        <div className="mt-3 text-sm">
          <p>Email: ajinkyanikumbh91@gmail.com · Phone: 9834295239 · Aurangabad, India</p>
          <p>GitHub: github.com/AjinkyaN · LinkedIn: linkedin.com/in/ajinkyan</p>
        </div>
        <div className="mt-6 space-y-4 text-sm">
          <h2 className="text-lg font-semibold">Skills</h2>
          <p>C, C++, Python, JavaScript, React, Next.js, Node.js, FastAPI, OpenCV, MediaPipe, Docker, Git</p>
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="list-disc ml-5">
            <li>Mock Elevate — AI‑driven mock interviews with scoring and reports</li>
            <li>CODECOLLAB — Real‑time collaborative IDE with A/V and whiteboard</li>
            <li>Indian SignSpeak — Real‑time ISL recognition using CNN</li>
          </ul>
          <h2 className="text-lg font-semibold">Education</h2>
          <p>B.E. IT, Government College of Engineering, Aurangabad (2021–2025)</p>
        </div>
      </div>
    </section>
  )
}
