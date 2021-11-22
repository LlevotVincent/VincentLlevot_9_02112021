import axios from 'axios';


//*change User ID */
const User = 12
const UrlBase = "http://localhost:3001/user/"

/**
*request Axios to return adress with User ID *
* @return {Promise} return adress with userID
*/
const findUser = () => {
    return  axios.get(UrlBase + User)
}

/**
*request Axios to return adress with activity stat *
* @return {Promise} return adress with activity stat
*/
const findActivity = () => {
    return  axios.get(UrlBase + User + "/activity")
}

/**
*request Axios to return adress with average sessions *
* @return {Promise} return adress with average sessions
*/
const findAverageSessions = () => {
    return  axios.get(UrlBase + User + "/average-sessions")
}

/**
*request Axios to return adress with performance *
* @return {Promise} return adress with performance
*/
const findPerformance = () => {
    return  axios.get(UrlBase + User + "/performance")
}

const callApi ={
    findUser,
    findActivity,
    findAverageSessions,
    findPerformance
}

export default callApi


