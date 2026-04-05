export type Faculty = {
  id: string
  name: string
  title: string
  image: string
  email: string
  phone: string
  bio: string
  areas: string[]
}

export type Lab = {
  name: string
  description: string
  focus: string
  image: string
  details: string[]
}

export type ResearchHighlight = {
  title: string
  summary: string
}

export type Achievement = {
  title: string
  detail: string
  year: string
}

export type Program = {
  name: string
  summary: string
  duration: string
}

export type Department = {
  slug: string
  name: string
  short: string
  keywords: string[]
  about: string
  vision: string
  programs: Program[]
  curriculumHighlights: string[]
  faculty: Faculty[]
  labs: Lab[]
  research: ResearchHighlight[]
  achievements: Achievement[]
  hod: {
    name: string
    title: string
    email: string
    phone: string
    office: string
    hours: string
  }
}
