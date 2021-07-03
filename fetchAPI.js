class GotServise {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResource(url) { 
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Status ${res.status}`)
        }
       
        return await res.json()
    }

    getAllCharacers() {
        return this.getResource(`/characters?page=5&pageSize=20`)
    }

    getCaracterById(id) {
        return this.getResource(`/characters/${id}`)

    }
}

const got = new GotServise();

got.getAllCharacers()
   .then(res => res.forEach(object=> console.log(object.name) ) ) 
       

got.getCaracterById(130)
    .then(res => console.log(res))


//=============== FETCH POST ASYNC FUNCTION ==================//

// const getResource = async (url) => { 
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}. Status ${res.status}`)
//     }
//     return await res.json();
//     
// }

// getResource('https://jsonplaceholder.typicode.com/todos/100000')
//     .then(res => console.log('Success', res))
//     .catch(error => console.error('Error',error))

//=============== FETCH POST REQUEST ==================//

// const url = "https://jsonplaceholder.typicode.com/posts",
//       data = {user: 'example'}

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-type' : 'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log('Success', json))
// .catch(error => console.error('Error',error))


//================= GET RESQUEST ==================//

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//       console.log(response.json())
//         return response.json()})
//   .then(json => console.log(json))