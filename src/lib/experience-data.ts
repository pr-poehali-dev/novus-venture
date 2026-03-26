export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "ЗАО «Дагомысчай»",
    company: "Батумское шоссе, 18А, Сочи",
    location: {
      city: "Сочи",
      country: "Россия",
      lat: 43.6755,
      lng: 39.6897,
      isRemote: false,
    },
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    color: "green",
  },
  {
    id: "2",
    title: "АО «Солохаульский чай»",
    company: "пос. Харцыз-1, ул. Лучевая 6, Сочи",
    location: {
      city: "Солохаул",
      country: "Россия",
      lat: 43.7641,
      lng: 39.7319,
      isRemote: false,
    },
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    color: "green",
  },
  {
    id: "3",
    title: "Музей чая И.А. Кошмана",
    company: "с. Солохаул, ул. Кошмана, 29",
    location: {
      city: "Солохаул",
      country: "Россия",
      lat: 43.7580,
      lng: 39.7250,
      isRemote: false,
    },
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    color: "yellow",
  },
  {
    id: "4",
    title: "Мацестинская чайная фабрика",
    company: "с. Измайловка, ул. Измайловская, 141",
    location: {
      city: "Мацеста",
      country: "Россия",
      lat: 43.5460,
      lng: 39.8503,
      isRemote: false,
    },
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    color: "blue",
  },
  {
    id: "5",
    title: "Сочинский государственный университет",
    company: "Организатор проекта «ЭкоЧай: научный вектор»",
    location: {
      city: "Сочи",
      country: "Россия",
      lat: 43.5854,
      lng: 39.7232,
      isRemote: false,
    },
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    color: "pink",
  },
]
