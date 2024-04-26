const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const login = async (email, password) => {
const payload = {
email: email,
password: password,
};

const requestOptions = {
method: "POST",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(payload),
};

const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);

if (response.status === 201) {
let data = await response.json();
return [data.token, data.userId];
} else {
throw new Error(
    `Received status ${response.status} when logging in. Expected 201`
);
}
};

export const signup = async (name, surname, email, password, neurodiversity) => {
const payload = {
name: name,
surname: surname,
email: email,
password: password,
neurodiversity: neurodiversity
};

const requestOptions = {
method: "POST",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(payload),
};

let response = await fetch(`${BACKEND_URL}/users`, requestOptions);

if (response.status === 201) {
return;
} else {
throw new Error(
    `Received status ${response.status} when signing up. Expected 201`
);
}
};
