const crypto = require('crypto');

let keys = [
  {
    uId : 'a99',
    name : 'finTechOne',
    email : 'fintechone@gmail.com',
    password : 'fintechOne123',
    apikey : 'z9wk4N2Y-sylagkVYyisNQp-0n3eAlVyrUgtZhBZri8',
    type : 1,
  },
  {
    uId : 'b99',
    name : 'finTechTwo',
    email : 'fintechtwo@gmail.com',
    password : 'fintechtwo123',
    apikey : 'ilPQlXAFP-cbFPDOhRnhDkro1xBC_i5qiGEsqgSFHJk',
    type : 2,
  },
  {
    uId : 'c99',
    name : 'finTechThree',
    email : 'fintechthree@gmail.com',
    password : 'fintechthree123',
    apikey : 'Ppq_e-1yuOjy5uEL1-6reKSBAbfCiOYwIVfoX_eY45s',
    type : 3,
  },
];

const reJigPwd = (password) => {
  let salt = crypto.randomBytes(16).toString('base64');
  let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
  return salt + "$" + hash;
};

keys.forEach(function(part, index, theArray) {
  theArray[index].password = reJigPwd(theArray[index].password);
});

let findUserByKey = (apikey) => {
    // console.log('keys.length XX -> ', keys.length);
    return new Promise((resolve, reject) => {
        for (i = 0; i < keys.length; i++) {
            if ( keys[i].apikey === apikey) {
                // console.log('found at ${i} -> ', keys[i]);
                return resolve(keys[i]);
            }
        }
        console.log('No Keys found for -> ', apikey);
        return reject('API key does not exist');
    });

};

exports.findByKey = findUserByKey;
