import { useState } from "react";
import { ArrowRight, ChevronLeft, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "expertise",
    question: "What's your primary area of expertise?",
    options: [
      { label: "Executive Leadership", score: 4 },
      { label: "Business Strategy", score: 4 },
      { label: "Health & Wellness Coaching", score: 3 },
      { label: "Sales & Marketing", score: 3 },
      { label: "Personal Development", score: 3 },
      { label: "Other Expert Field", score: 2 },
    ],
  },
  {
    id: "stage",
    question: "Where are you in the writing process?",
    options: [
      { label: "I have a complete outline", score: 5 },
      { label: "I have rough notes and ideas", score: 4 },
      { label: "I know my topic but nothing written", score: 3 },
      { label: "I have a vague concept", score: 2 },
      { label: "I don't know where to start", score: 1 },
    ],
  },
  {
    id: "obstacle",
    question: "What's your biggest obstacle right now?",
    options: [
      { label: "No time to write consistently", score: 4 },
      { label: "Don't know how to structure it", score: 5 },
      { label: "Fear it won't be good enough", score: 4 },
      { label: "Don't know how publishing works", score: 5 },
      { label: "Not sure it's worth my time", score: 3 },
    ],
  },
];

const results = [
  {
    range: [0, 9],
    label: "Emerging Expert",
    verdict: "You're in the right place at the right time.",
    detail: "We've guided first-draft beginners to publishing contracts. The Forge was built for your exact starting point.",
    color: "#00E676",
    textColor: "black",
  },
  {
    range: [10, 13],
    label: "Ready to Build",
    verdict: "You have the raw material. You need the architecture.",
    detail: "Your expertise is proven. What you need is a structured system to transform it into a book that commands attention.",
    color: "#0066FF",
    textColor: "white",
  },
  {
    range: [14, 100],
    label: "Prime for Launch",
    verdict: "You're not waiting for permission. Neither are we.",
    detail: "You know your topic, you have momentum — The Forge will take that energy and turn it into a published, market-ready book.",
    color: "black",
    textColor: "#00E676",
  },
];

export default function TheDiagnostic() {
  const [step, setStep] = useState<"intro" | number | "result">("intro");
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = results.find(r => totalScore >= r.range[0] && totalScore <= r.range[1]) ?? results[2];

  function handleSelect(optionIdx: number) {
    setSelectedOption(optionIdx);
  }

  function handleNext() {
    if (selectedOption === null) return;
    const currentStep = step as number;
    const score = steps[currentStep].options[selectedOption].score;
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setSelectedOption(null);
    if (currentStep < steps.length - 1) {
      setStep(currentStep + 1);
    } else {
      setStep("result");
    }
  }

  function handleBack() {
    if (step === 0) { setStep("intro"); setAnswers([]); }
    else if (typeof step === "number") {
      setStep(step - 1);
      setAnswers(answers.slice(0, -1));
    }
    setSelectedOption(null);
  }

  function restart() {
    setStep("intro");
    setAnswers([]);
    setSelectedOption(null);
  }

  if (step === "intro") {
    return (
      <div className="min-h-screen bg-white text-black font-['Space_Grotesk'] flex flex-col border-[10px] border-black">
        <div className="border-b-8 border-black p-6 flex justify-between items-center bg-white">
          <div className="font-['Bebas_Neue'] text-3xl uppercase tracking-tight">The Author's Forge</div>
          <div className="text-xs font-bold uppercase tracking-widest bg-[#00E676] px-3 py-1 border-2 border-black">
            Author Readiness Check
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#00E676] border-b-8 lg:border-b-0 lg:border-r-8 border-black p-10 flex flex-col justify-center">
            <div className="font-['Bebas_Neue'] text-[80px] leading-[0.85] uppercase mb-8">
              Are You<br />
              <span className="[-webkit-text-stroke:3px_black] text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Ready to
              </span>
              <br />Write?
            </div>
            <p className="font-bold text-xl leading-tight">
              3 questions. 60 seconds. Your personalized Author Readiness Score — and a straight answer about whether The Forge is right for you.
            </p>
          </div>

          <div className="bg-white p-10 flex flex-col justify-center">
            <div className="space-y-6 mb-10">
              {[1, 2, 3].map((n, i) => (
                <div key={n} className="flex items-start gap-4">
                  <div className="w-10 h-10 border-4 border-black flex items-center justify-center font-['Bebas_Neue'] text-2xl shrink-0 bg-black text-white">
                    {n}
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-sm">
                      {["Identify your expertise area", "Know your current progress", "Pinpoint your key obstacle"][i]}
                    </div>
                    <div className="text-sm text-black/60 mt-1">
                      {["What you know deeply", "Where you are right now", "What's blocking you today"][i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(0)}
              className="w-full flex items-center justify-between bg-black text-[#00E676] p-6 font-bold uppercase tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
            >
              Start the Assessment <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "result") {
    return (
      <div className="min-h-screen font-['Space_Grotesk'] flex flex-col border-[10px] border-black" style={{ background: result.color, color: result.textColor }}>
        <div className="border-b-8 border-black p-6 flex justify-between items-center" style={{ background: result.color }}>
          <div className="font-['Bebas_Neue'] text-3xl uppercase tracking-tight">The Author's Forge</div>
          <button onClick={restart} className="text-xs font-bold uppercase tracking-widest border-2 border-current px-3 py-1 hover:opacity-70 transition-opacity">
            Retake
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
          <CheckCircle size={64} strokeWidth={3} className="mb-6" />
          <div className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-70">Your Author Readiness Score</div>
          <div className="font-['Bebas_Neue'] text-[120px] leading-none mb-2">{totalScore}</div>
          <div className="font-['Bebas_Neue'] text-5xl mb-6 uppercase">{result.label}</div>
          <div className="font-bold text-3xl mb-4 max-w-lg">{result.verdict}</div>
          <p className="text-xl max-w-lg opacity-80 mb-10">{result.detail}</p>
          <button className="flex items-center gap-4 px-12 py-5 font-bold uppercase tracking-widest text-lg border-6 border-current shadow-[8px_8px_0_0_currentColor] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all bg-black text-[#00E676] cursor-pointer">
            Apply for the Next Cohort <Zap size={22} />
          </button>
        </div>
      </div>
    );
  }

  const currentStepIdx = step as number;
  const currentStep = steps[currentStepIdx];
  const progress = ((currentStepIdx) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Grotesk'] flex flex-col border-[10px] border-black">
      <div className="border-b-8 border-black p-6 flex justify-between items-center">
        <div className="font-['Bebas_Neue'] text-3xl uppercase tracking-tight">The Author's Forge</div>
        <div className="font-bold text-sm">Question {currentStepIdx + 1} of {steps.length}</div>
      </div>

      <div className="h-3 bg-black/10 border-b-4 border-black relative">
        <div
          className="h-full bg-[#00E676] border-r-4 border-black transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col p-10 max-w-2xl mx-auto w-full">
        <div className="font-['Bebas_Neue'] text-5xl uppercase leading-tight mb-8">
          {currentStep.question}
        </div>

        <div className="space-y-3 flex-1">
          {currentStep.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left p-5 border-4 border-black font-bold text-lg uppercase tracking-wide transition-all cursor-pointer ${
                selectedOption === i
                  ? "bg-[#00E676] shadow-none translate-x-1 translate-y-1"
                  : "bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          {currentStepIdx > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-4 border-4 border-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} /> Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`flex-1 flex items-center justify-center gap-3 p-5 font-bold uppercase tracking-widest text-lg border-4 border-black transition-all cursor-pointer ${
              selectedOption !== null
                ? "bg-black text-[#00E676] shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
                : "bg-black/20 text-black/40 cursor-not-allowed"
            }`}
          >
            {currentStepIdx < steps.length - 1 ? "Next Question" : "Get My Score"} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
