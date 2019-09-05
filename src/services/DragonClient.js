const DragonClient = () => {
    const getDragons = () => {
        return fetch(process.env.REACT_APP_DRAGON_API_V1, {
            method: 'GET',
        });
    }

    const getDragon = (id) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'GET',
        });
    }

    const createDragon = (dragon) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dragon),
        });
    }

    const updateDragon = (id, dragon) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dragon),
        });
    }

    const deleteDragon = (id) => {
        return fetch(`${process.env.REACT_APP_DRAGON_API_V1}/${id}`, {
            method: 'DELETE',
        });
    }
}

export default { DragonClient };
