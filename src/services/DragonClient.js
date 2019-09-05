const DragonClient = {
    getDragons: () => {
        console.log('GET DRAGONS', process.env.REACT_APP_DRAGON_API_V1);
        return fetch(process.env.REACT_APP_DRAGON_API_V1, {
            method: 'GET',
        });
    },

    getDragon: (id) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'GET',
        });
    },

    createDragon: (dragon) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dragon),
        });
    },

    updateDragon: (id, dragon) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dragon),
        });
    },

    deleteDragon: (id) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'DELETE',
        });
    },
}

export default DragonClient;
