import { MatchResult } from './MatchResult'

// ***
type MatchData = [Date, string, string, number, number, MatchResult, string]

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  constructor(public reader: DataReader) {}
}
