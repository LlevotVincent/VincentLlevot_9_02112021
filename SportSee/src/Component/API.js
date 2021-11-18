import axios from 'axios';


//*change User ID */
const User = 18
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

// findUser.propTypes = {

// //   *** Call API with URL
//     UrlBase: PropTypes.string.isRequired,
// //   *** User ID
//     User: PropTypes.number.isRequired,
// }
export default {
    findUser,
    findActivity,
    findAverageSessions,
    findPerformance
};


