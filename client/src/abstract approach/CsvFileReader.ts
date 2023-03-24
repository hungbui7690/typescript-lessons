import fs from 'fs'

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow)
  }

  abstract mapRow(row: string[]): T
}
