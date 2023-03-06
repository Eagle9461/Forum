import api from "./service/api";
import axios from "axios";
export const getJobRequest = (url, payload) => 
    axios
        .post("http://167.99.204.238/api.php?type=jobs_filter", payload)
        .then((res) => res)
        .catch(err => err.response)

// export const getJobRequest = async (requestUrl, requestData) =>
//     api
//         .get(requestUrl, requestData)
//         .then((resp) => resp)
//         .catch((error) => error.response);