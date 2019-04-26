function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(results);
}

getAsyncData();