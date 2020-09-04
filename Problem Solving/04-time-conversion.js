function timeConversion(s) {
    const times = s.split(':');
    let h,m,se;
    if (times[2].endsWith('AM')) {
        h = times[0] === '12' ? '00' : times[0]
    } else {
        h = times[0] === '12' ? '12' : +times[0] + 12
    }
    m = times[1]
    se = times[2].slice(0,2)
    console.log(`${h}:${m}:${se}`)
}

timeConversion('07:15:45PM')