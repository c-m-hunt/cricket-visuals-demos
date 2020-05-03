import {
  FormSpark,
  InningsRunRate,
  InningsContribution
} from 'cricket-visuals'

const data = [1,50,"33*",33,"25*",140,0,4]
FormSpark.formSpark("#form_spark", data, { foregroundColor: "green" })
FormSpark.formSpark(".form_spark", null, { foregroundColor: "red", height: 100, width: 400 })
InningsRunRate.progressiveRunRate(
  "#progress_rr",
  [0, 1, 0, 0, 4, 0, 4, 0, 0, 2, 0, 0, 6,0, 1, 0, 0, 4, 0, 4, 0, 0, 2, 0, 0, 6,0, 1, 0, 0, 4, 0, 4, 0, 0, 2, 0, 0, 6],
  {showGrid: true}
)

InningsRunRate.progressiveRunRate(
  ".progress_rr",
  null,
  {showGrid: true}
)


const inData = {
  teamName: "England",
  score: "213/5",
  batsmen: {
      "A Cook": {
          notOut: true,
          bowlers:
            {
              "A Bowler": 33,
              "B Bowler":21
            }
        },
      "A Strauss": {
          notOut: false,
          bowlers:
            {
              "A Bowler": 12,
              "B Bowler": 11
            }
        },
        "A Flintoff": {
          notOut: false,
          bowlers:
            {
              "A Bowler": 33,
              "B Bowler": 55,
              "C Bowler": 5
            }
        },
  }
}

InningsContribution.inningsContribution("#innings_contribution", inData);