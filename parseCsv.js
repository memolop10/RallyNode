const fs = require('fs')
// const mentors  = fs.readFileSync('mentorsList.csv','utf8').split(',')

// console.log(mentors)

const csv = require('fast-csv')

fs.createReadStream('mentorsList.csv')
    .pipe(csv())
    .on('data', function(data){
        console.log(data)
    })

        .on('end',function(data){
            console.log('leido y terminado')
        });