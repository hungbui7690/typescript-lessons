/*
  Implementing an Analyzer Class
  - create analyzers/WinsAnalysis.ts
    > pic

*/

import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
