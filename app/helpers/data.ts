import * as path from 'node:path'
import * as fs from 'node:fs/promises'

export const read = async (...filePath: string[]) => {
  const file = path.resolve('data', ...filePath)
  const data = await fs.readFile(file, { encoding: 'utf-8' })

  return JSON.parse(data)
}
