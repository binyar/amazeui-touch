/**
 * Coder: fmd
 * Date: 2016/9/27
 * Time: 19:00
 */
export function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
export function getDaysInMonth(d) {
  let resultDate = getFirstDayOfMonth(d);
  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);
  return resultDate.getDate();
}
