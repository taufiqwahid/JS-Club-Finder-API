import clubs from './clubs.js';

class DataSource {
    static async searchClub(keyword) {
        try {
            const dataclub = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            const filteredClubs = await dataclub.json()
            console.log(filteredClubs)
            return filteredClubs.teams
        } catch (error) {
            console.log(`${keyword} is not found`)
            console.log("ERR0R ", error)
        }
    }
}

export default DataSource;