import faker from 'faker'
import randomColor from 'randomcolor'
import moment from 'moment'

export default function (groupCount = 30, itemCount = 1000, daysInPast = 30) {
  let randomSeed = Math.floor(Math.random() * 1000)
  let groups = []
  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `${i + 1}`,
      title: faker.name.firstName(),
      rightTitle: faker.name.lastName(),
      label: `Label ${faker.name.firstName()}`,
      bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i })
    })
  }

  let items = []
  for (let i = 0; i < itemCount; i++) {
    const startDate = faker.date.recent(daysInPast).valueOf() + (daysInPast * 0.3) * 86400 * 1000
    const startValue = moment(startDate).utcOffset(1).set({hour:0,minute:0,second:0,millisecond:0}).valueOf()
    const endValue = moment(startDate).utcOffset(1).set({hour:23,minute:59,second:59,millisecond:0}).valueOf()
    items.push({
      id: i + '',
      group: i + '',
      title: `${faker.commerce.price()}`,
      start: startValue,
      end: endValue,
      // canMove: startValue > new Date().getTime(),
      canResize: startValue > new Date().getTime() ? (endValue > new Date().getTime() ? 'both' : 'left') : (endValue > new Date().getTime() ? 'right' : false),
      className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
      bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i, format:'rgba', alpha:0.6 }),
      selectedBgColor: randomColor({ luminosity: 'light', seed: randomSeed + i, format:'rgba', alpha:1 }),
      color: randomColor({ luminosity: 'dark', seed: randomSeed + i }),
      itemProps: {
        'data-tip': `Label ${faker.commerce.price()}`,
      }
    })
  }

  items = items.sort((a, b) => b - a)

  return { groups, items }
}
