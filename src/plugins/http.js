const serverIp = "localhost"

const get = async (url) => {
    const options = {
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    }
    const res = await fetch(`http://${serverIp}:4005/` + url, options)
    return await res.json()
}

const post = async (url, data) => {
    const options = {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    }

    const res = await fetch(`http://${serverIp}:4005/`+url, options)
    return await res.json()
}

export {get, post}