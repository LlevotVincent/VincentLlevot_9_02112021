import axios from 'axios';


//*change User ID */
const User = 18
const UrlBase = "http://localhost:3001/user/"

const findUser = () => {
    return  axios.get(UrlBase + User)
}

const findActivity = () => {
    return  axios.get(UrlBase + User + "/activity")
}

const findAverageSessions = () => {
    return  axios.get(UrlBase + User + "/average-sessions")
}
const findPerformance = () => {
    return  axios.get(UrlBase + User + "/performance")
}


export default {
    findUser,
    findActivity,
    findAverageSessions,
    findPerformance
};


