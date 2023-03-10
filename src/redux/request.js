import api from "./service/api";
import axios from "axios";
export const getJobRequest = (url, payload) => 
    axios
        .post("https://focuseuk.com/api.php?type=all_security_jobs", payload)
        .then((res) => res)
        .catch(err => err.response)

// export const getJobRequest = async (requestUrl, requestData) =>
//     api
//         .get(requestUrl, requestData)
//         .then((resp) => resp)
//         .catch((error) => error.response);