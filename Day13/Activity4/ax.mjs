import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error("Error: ", error);
    }
}

fetchData();
