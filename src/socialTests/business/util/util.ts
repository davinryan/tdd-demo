import {isNil, reject} from 'ramda'

export const rejectIfNil: (item: any[]) => any[] = reject(isNil)

export const safeStringify = (value: any, space?: string | number) => {
  const seen = new Set()
  return JSON.stringify(
    value,
    (k, v) => {
      if (seen.has(v)) {
        return '...'
      }
      if (typeof v === 'object') {
        seen.add(v)
      }
      return v
    },
    space ?? 2,
  )
}