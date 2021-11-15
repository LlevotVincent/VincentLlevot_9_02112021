import React from 'react';
import axios from 'axios';

//*change User ID */
const User = 18
const UrlBase = "http://localhost:3001/user/"

function findUser() {
    return axios.get(UrlBase + User)
}

function findActivity() {
    return axios.get(UrlBase + User + "/activity")
}

function findAverageSessions() {
    return axios.get(UrlBase + User + "/average-sessions")
}

function findPerformance() {
    return axios.get(UrlBase + User + "/performance")
}


export default {
    findUser,
    findActivity,
    findAverageSessions,
    findPerformance
};