import moment from 'moment'

const time = moment('+0000-12-31T16:00:00.000+0000').format('YYYY-MM-DD HH:mm:ss')
console.log('time=',time)