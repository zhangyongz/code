export default class Log {
  token: string;
  constructor (token: string) {
    this.token = token
  }
  track(event_name: string, params: any, callback: any): void {
    let url = ''
    this.request(url, callback)
  }
  request(url:string, callback: any): void {}
}

import { LogClass, responseObj } from './types'
const log: LogClass = new Log('1')
function callback (a: string): string
function callback (a: responseObj): number
function callback (a: string | responseObj): string | number {
  if (typeof a === 'string') {
    return 1
  }
  return a.status || 0
}
log.track('event_name', {}, callback)

export { log }

import { func } from './types'

function functionA (a: string): string 
function functionA (a: number): number 
function functionA (a: string | number): string | number {
  if (typeof a === 'string') {
    return '1'
  } else {
    return 1
  }
}

const functionAIns: func = functionA

functionAIns('a')

function functionBtype (a: string, b: number): string
function functionBtype (a: number, b: number[]): number
// function functionBtype (a: string | number, b: number | number[]): string | number

function functionBtype(a: string | number, b: number | number[]) {
  if (typeof a === 'number') {
    return b[0]
  } else {
    return a
  }
}

functionBtype(1, [1])