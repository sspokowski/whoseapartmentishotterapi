import getHottestApartment from '../integrations/apartmentTemps.js';

class ApartmentController {

    /**
      * @param {*} req 
     * @param {*} res 
     * @returns void
     */
    getHottestApartment = async (request, response) => {
       const temps = await getHottestApartment();
       const hotString = determineHottest(temps);
       response.send({hottest: hotString});
       return;
    }
}
function determineHottest(temps){
    const arlo = parseArlo(temps.arlo);
    const shak = temps.shak;

    if(arlo > shak) {
        return `Arlo's apartment is hottest. It's a scorching ${arlo} degrees Fahrenheit.`
    } else if (shak > arlo) {
        return `Shak's apartment is hottest. It's a scorching ${shak} degrees Fahrenheit.`
    } else {
        return `Surprisingly, both apartments are equally hot at ${arlo} degrees Fahrenheit.`
    }
}
function parseArlo(a) {
    try{
        const start = a.indexOf("It's ");
        const end = a.indexOf(" degrees");
        return a.substring(start+"It's ".length, end);
    } catch {
        throw new error('something went horribly wrong')
    } 
}


export default new ApartmentController()