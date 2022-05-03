/*create function to stringify json of any level of nesting*/

function stringifyJSON(obj) {
    let stringifiedObj = '{';
    let lengthOfObj = Object.keys(obj)["length"];
    let i = 0;

    for(let key in obj) {

        stringifiedObj += `"${key}":`;

        if(Array.isArray(obj[key])) {
            stringifiedObj += `[`;
            for(let i = 0; i < obj[key].length; i++) {
                if(typeof obj[key][i] !== 'object') {
                    if(obj[key][i] === 'true' || obj[key][i] === 'false' || obj[key][i] === 'number' || typeof obj[key][i] === 'boolean' )
                        stringifiedObj += typeof obj[key][i] === 'number' || typeof obj[key][i] === 'boolean' ? `${obj[key][i]}` : `"${obj[key][i]}"`;
                } else {
                    stringifiedObj += stringifyJSON(obj[key][i]);
                }
                if(i !== obj[key].length - 1) {
                    stringifiedObj += ','
                } else {
                    stringifiedObj += ']'
                }
            }
        } else if (typeof obj[key] === 'object'){
            stringifiedObj += stringifyJSON(obj[key]);
        }else {
            stringifiedObj += typeof obj[key] === 'number' || typeof obj[key][i] === 'boolean' ? `${obj[key]}` : `"${obj[key]}"`;
        }

        i++;
        if(i !== lengthOfObj) {
            stringifiedObj += ',';
        }
    }

    stringifiedObj += '}';
    return stringifiedObj;

}


let sampleData = {
    "destination_addresses": [
        "Washington, DC, USA",
        "Philadelphia, PA, USA",
        "Santa Barbara, CA, USA",
        "Miami, FL, USA",
        "Austin, TX, USA",
        "Napa County, CA, USA"
    ],
    "origin_addresses": [
        "New York, NY, USA"
    ],
    "rows": [{
        "elements": [{
            "distance": {
                "text": "227 mi",
                "value": 365468,
                "isFar": true
            },
            "duration": {
                "text": "3 hours 54 mins",
                "value": 14064
            },
            "status": "OK"
        },
            {
                "distance": {
                    "text": "94.6 mi",
                    "value": 152193
                },
                "duration": {
                    "text": "1 hour 44 mins",
                    "value": 6227
                },
                "status": "OK"
            },
            {
                "distance": {
                    "text": "2,878 mi",
                    "value": 4632197
                },
                "duration": {
                    "text": "1 day 18 hours",
                    "value": 151772
                },
                "status": "OK"
            },
            {
                "distance": {
                    "text": "1,286 mi",
                    "value": 2069031
                },
                "duration": {
                    "text": "18 hours 43 mins",
                    "value": 67405
                },
                "status": "OK"
            },
            {
                "distance": {
                    "text": "1,742 mi",
                    "value": 2802972
                },
                "duration": {
                    "text": "1 day 2 hours",
                    "value": 93070
                },
                "status": "OK"
            },
            {
                "distance": {
                    "text": "2,871 mi",
                    "value": 4620514
                },
                "duration": {
                    "text": "1 day 18 hours",
                    "value": 152913
                },
                "status": "OK"
            }
        ]
    }],
    "status": "OK"
}

console.log(stringifyJSON(sampleData))