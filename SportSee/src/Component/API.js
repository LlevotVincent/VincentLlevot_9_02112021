import axios from 'axios';

//*change User ID */
const User = 12
const UrlBase = "http://localhost:3001/user/"

 const findUser = async() => {
    return await axios.get(UrlBase + User)
}

 const findActivity = async() => {
    return await axios.get(UrlBase + User + "/activity")
}

const findAverageSessions = async() => {
    return await axios.get(UrlBase + User + "/average-sessions")
}
const findPerformance = async() => {
    return await axios.get(UrlBase + User + "/performance")
}


export default {
    findUser,
    findActivity,
    findAverageSessions,
    findPerformance
};