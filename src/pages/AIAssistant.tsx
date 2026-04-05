import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { departments } from '../data/departments'
import { campusImages } from '../lib/images'

type ChatMessage = {
  id: string
  role: 'assistant' | 'user'
  text: string
}

function buildAssistantReply(rawQuery: string): string {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return 'Please type your question. Example: "fees structure", "hostel details", or "CSE syllabus".'

  if (query.includes('fee') || query.includes('fees') || query.includes('tuition')) {
    return 'Fees details are available in Admissions. Open Admissions -> Fees structure for B.Tech, M.Tech, and MBA tuition, hostel, and exam/service fees.'
  }

  if (query.includes('hostel') || query.includes('canteen') || query.includes('mess')) {
    return 'Hostel and canteen information is available in Campus Life. It includes facilities, dining services, and student support highlights.'
  }

  if (query.includes('placement') || query.includes('ctc') || query.includes('recruiter')) {
    return 'Placements page contains student placement cards, company names, CTC highlights, recruiter strip, and skill badges.'
  }

  if (query.includes('syllabus') || query.includes('exam') || query.includes('result') || query.includes('timetable')) {
    return 'Academics page has the Branch Syllabus Explorer plus academic events with exam dates, result dates, and timetable notes.'
  }

  if (query.includes('library') || query.includes('book')) {
    return 'Library page provides access requirements, department-wise collections, and institute library priorities.'
  }

  if (query.includes('event') || query.includes('sports') || query.includes('cultural')) {
    return 'Events page includes sports, cultural, technical, and social-impact events with colorful event cards and quick stats.'
  }

  if (query.includes('contact') || query.includes('phone') || query.includes('email')) {
    return 'For direct help, open Contact page. It includes desk cards, map, and contact form. Main email: admissions@kppit.edu.'
  }

  const matchedDept = departments.find((d) => {
    const hay = [d.name, d.slug, d.short, ...d.keywords].join(' ').toLowerCase()
    return hay.includes(query)
  })
  if (matchedDept) {
    return `${matchedDept.name}: ${matchedDept.short} You can open full details in Departments and review faculty, labs, research, and HOD contact.`
  }

  return 'I can help with Admissions, Academics, Departments, Placements, Campus Life, Events, Library, and Contact. Try a specific question like "mechanical labs", "MBA fees", or "EEE faculty".'
}

export default function AIAssistant() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-welcome',
      role: 'assistant',
      text: 'Hi, I am your KPPIT AI Assistant. Ask me about admissions, syllabus, departments, faculty, labs, placements, hostel, and events.',
    },
  ])

  const quickPrompts = useMemo(
    () => ['Fees structure', 'Hostel and canteen details', 'CSE syllabus', 'Mechanical labs', 'Placement highlights', 'How to contact admissions'],
    [],
  )

  function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    const userMessage: ChatMessage = { id: `u-${Date.now()}`, role: 'user', text: trimmed }
    const assistantMessage: ChatMessage = {
      id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      role: 'assistant',
      text: buildAssistantReply(trimmed),
    }
    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput('')
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div>
      <PageHero
        imageUrl={campusImages.digitalClass}
        title="AI Assistant"
        subtitle="Ask instant questions about this KPPIT application — admissions, departments, labs, faculty, syllabus, placements, and campus life."
      />

      <section className="border-b border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <div className="rounded-2xl border border-[#e2ddd4] bg-white p-4 shadow-sm md:p-6">
            <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">KPPIT Virtual Assistant</h2>
            <p className="mt-2 text-sm text-[#5c5349]">
              Demo assistant without external API key. For real AI model integration, connect OpenAI/Gemini endpoint in future.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-[#e2ddd4] bg-[#faf7f2] px-3 py-1.5 text-xs font-semibold text-[#1a1410] hover:border-[#c9a227]"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="mt-6 max-h-[430px] space-y-3 overflow-y-auto rounded-xl border border-[#e2ddd4] bg-[#fffdf8] p-3">
              {messages.map((m) => (
                <article key={m.id} className={m.role === 'user' ? 'ml-auto max-w-[85%]' : 'mr-auto max-w-[85%]'}>
                  <p
                    className={[
                      'rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm',
                      m.role === 'user' ? 'bg-[#5c1a2a] text-[#faf7f2]' : 'border border-[#e2ddd4] bg-white text-[#1a1410]',
                    ].join(' ')}
                  >
                    {m.text}
                  </p>
                </article>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your question..."
                className="w-full rounded-xl border border-[#e2ddd4] bg-white px-4 py-3 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
              >
                Ask
              </button>
            </form>
          </div>

          <p className="mt-5 text-sm text-[#5c5349]">
            Need human support? Visit{' '}
            <Link to="/contact" className="font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
