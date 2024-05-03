export type LanguageType = {
  label: string
  code: string
}

export type CategoryType = {
  name: string
  slug: string
}

export type DetailType = {
  title: string
  arabic: string
  latin: string
  translation: string
  notes: string | null
  fawaid: string
  source: string
}

export type DataType = {
  languages: LanguageType[]
  categories: CategoryType[]
  items: Record<string, Record<string, DetailType[]>>
}
