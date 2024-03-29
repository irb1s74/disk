export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  logo?: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
  clientID: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  apiUrl: string
  clientID: string
  port: number
}
