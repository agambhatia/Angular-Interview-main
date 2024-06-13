export const DB_URL = "http://localhost:3000/documents"

export interface Imovie {

    id: number,
    title: string,
    summary: string,
    full_text: string,
    date: string,
    tags: string
}