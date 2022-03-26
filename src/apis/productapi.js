export const productApi = (data) => {
    const url = "https://fakestoreapi.com/products";
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

}

export const loginApi = (username, password) => {
    const url = "https://fakestoreapi.com/products";
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
}