import { useState, useEffect, useRef } from "react";
import { X, Zap, CheckCircle, Loader } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const expertiseOptions = [
  "Executive Leadership",
  "Business Strategy",
  "Sales & Marketing",
  "Health & Wellness Coaching",
  "Personal Development",
  "Finance & Wealth",
  "Legal or Professional Services",
  "Technology & Innovation",
  "Other",
];

const stageOptions = [
  "I have a complete outline",
  "I have rough notes and ideas",
  "I know my topic but nothing written",
  "I have a vague concept",
  "I don't know where to start yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ApplicationDrawer({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");
  const [concept, setConcept] = useState("");
  const [stage, setStage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => nameRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, expertise, concept, stage }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Submission failed. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  function handleClose() {
    onClose();
    // reset after transition
    setTimeout(() => {
      setStatus("idle");
      setName(""); setEmail(""); setExpertise(""); setConcept(""); setStage("");
      setErrorMsg("");
    }, 350);
  }

  const inputClass =
    "w-full bg-white text-black font-bold p-4 border-4 border-black placeholder:text-black/30 placeholder:font-normal focus:outline-none focus:border-[#0066FF] focus:shadow-[4px_4px_0_0_rgba(0,102,255,1)] transition-all";
  const labelClass = "block font-bold uppercase tracking-widest text-xs mb-2";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-[90] bg-black transition-opacity duration-300 ${open ? "opacity-60" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Apply for The Author's Forge"
        className={`fixed top-0 right-0 h-full z-[100] w-full max-w-xl bg-white border-l-8 border-black flex flex-col transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-8 border-black bg-[#00E676] shrink-0">
          <div>
            <div className="font-['Bebas_Neue'] text-3xl uppercase leading-none">Apply for the Forge</div>
            <div className="font-bold text-sm uppercase tracking-widest text-black/60 mt-1">Next cohort — 4 spots remaining</div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="w-12 h-12 border-4 border-black bg-black text-[#00E676] flex items-center justify-center hover:bg-[#00E676] hover:text-black transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center gap-6">
              <div className="w-24 h-24 bg-[#00E676] border-4 border-black flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <CheckCircle size={48} strokeWidth={2.5} />
              </div>
              <div className="font-['Bebas_Neue'] text-5xl uppercase leading-tight">Application Received.</div>
              <p className="font-bold text-xl text-black/70 max-w-sm leading-snug">
                We review every application within 48 hours. You'll hear from us directly.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 flex items-center gap-3 bg-black text-[#00E676] px-8 py-4 font-bold uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer"
              >
                Close <X size={18} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-6">
              <div>
                <label htmlFor="af-name" className={labelClass}>Full Name</label>
                <input
                  id="af-name"
                  ref={nameRef}
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="af-email" className={labelClass}>Email Address</label>
                <input
                  id="af-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="af-expertise" className={labelClass}>Area of Expertise</label>
                <select
                  id="af-expertise"
                  required
                  value={expertise}
                  onChange={e => setExpertise(e.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none bg-white`}
                >
                  <option value="" disabled>Select your field</option>
                  {expertiseOptions.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="af-concept" className={labelClass}>Your Book Concept</label>
                <textarea
                  id="af-concept"
                  required
                  rows={4}
                  placeholder="What's your book about? Who's it for? What problem does it solve?"
                  value={concept}
                  onChange={e => setConcept(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div>
                <label htmlFor="af-stage" className={labelClass}>Where Are You Right Now?</label>
                <select
                  id="af-stage"
                  value={stage}
                  onChange={e => setStage(e.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none bg-white`}
                >
                  <option value="">Select your current stage (optional)</option>
                  {stageOptions.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <div className="border-4 border-black bg-black text-[#00E676] p-4 font-bold text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className={`flex items-center justify-center gap-3 w-full p-5 font-bold uppercase tracking-widest text-lg border-4 border-black transition-all ${
                  status === "loading"
                    ? "bg-black/30 text-black/40 cursor-not-allowed"
                    : "bg-[#0066FF] text-white shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 cursor-pointer"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader size={20} className="animate-spin" /> Submitting…
                  </>
                ) : (
                  <>Submit Application <Zap size={20} className="text-[#00E676]" /></>
                )}
              </button>

              <p className="text-xs font-bold uppercase tracking-widest text-black/40 text-center">
                Applications reviewed within 48 hours. No spam — ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
