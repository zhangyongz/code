interface callback {
  (responseText: string): string
  (responseObj: responseObj): number
}

export interface responseObj {
  status: number,
  error: string
}

export interface LogClass {
  token: string
  track(event_name: string, params: any, callback?: callback): void
  request(url:string, callback: callback): void
}

export type func = {
  (a: string): string
  (a: number): number
}
