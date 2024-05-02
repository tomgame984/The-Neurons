const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUser = async (token) => {
const requestOptions = {
    method: "GET",
    headers: {
    Authorization: `Bearer ${token}`,
},
};

const response = await fetch(`${BACKEND_URL}/users`, requestOptions);

if (response.status !== 200) {
throw new Error("Unable to fetch user");
}

const data = await response.json();
return data;

};

export const putUserEvent = async (token, userid, event) => {

const payload = {
    category: event.category,
    description: event.description,
    score: event.eventScore
    };
console.log(token, userid, payload )
const requestOptions = {
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    userid: userid
},
body: JSON.stringify(payload),
};

const response = await fetch(`${BACKEND_URL}/users`, requestOptions);

if (response.status !== 200) {
throw new Error("Unable to add user event");
}

const data = await response.json();
return data;

};

