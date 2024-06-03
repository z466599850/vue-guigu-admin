export const getTime = () => {
  let message = ''
  const hours = new Date().getHours()
  console.log(hours)
  if (hours <= 9 && hours >= 6) {
    message = '早上'
  } else if (hours < 12) {
    message = '上午'
  } else if (hours <= 13) {
    message = '中午'
  } else if (hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }

  return message
}
