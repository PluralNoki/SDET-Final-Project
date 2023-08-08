const axios = require("axios");
const HOST = "https://api.github.com";

class Api{
    constructor(host = HOST){
        this.host=HOST;
        this.instance = axios.create({
            baseURL : this.host,
            headers : {
                'Content-Type': 'application/json',
                'User-Agent': 'PostmanRuntime/7.28.4',
            },
            json : true
        })
    }

}

module.exports = Api;