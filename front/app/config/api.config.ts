export const API_URL = `${process.env.APP_URL}/api`

export const getGenresUrl = (string: string) => `/genres${string}`
export const getUseresUrl = (string: string) => `/users${string}`
export const getMovieUrl = (string: string) => `/movies${string}`
export const getAuthUrl = (string: string) => `/auth${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
