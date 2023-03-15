
async function getUsers(names) {
    const url ="https://api.github.com/users/";
    const arr = names.map(i => fetch(url +i)
    .then(res => res.ok ? res.json() : null)
    .catch(err => null))
    return await Promise.all(arr)
    }