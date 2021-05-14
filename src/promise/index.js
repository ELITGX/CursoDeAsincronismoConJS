const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    })
}

somethingWillHappen()
 .then(response => console.log(response))
 .catch(err => console.log(err));

 const somethingWillHappen2 = () => {
     return new Promise((resolve, reject) => {
         if (true) {
             setTimeout(() => {
                 resolve('true');
             }, 2000)
         } else {
             const error = new Error('Whoops!');
             reject(error);
         }
     });
 }

 somethingWillHappen2()
 .then(response => console.log(response))
 .catch(err => console.error(err));


 Promise.all([somethingWillHappen2(), somethingWillHappen()])
 .then(response => {
     console.log('Array of results', response);
 })
.catch(err => {
    console.error(err);
})