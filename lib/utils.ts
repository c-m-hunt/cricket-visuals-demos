export const convertInningsToRunsAndNOs = (data: Array<string|number>): Array<[number, boolean]> => {
  return data.map(d => {
    const notOut = d.toString().endsWith("*");
    const runs = parseInt(d.toString().replace("*", ""));
    return [runs, notOut]
  })
}