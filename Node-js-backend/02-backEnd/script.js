import axios from "axios";

class Api {

    static async getAddress (cep) {
        const {data: result} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return result.localidade
    }
    
}

Api.getAddress("63960000")

