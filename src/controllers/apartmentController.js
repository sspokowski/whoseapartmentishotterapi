import getHottestApartment from '../integrations/apartmentTemps.js';

class ApartmentController {

    /**
      * @param {*} req 
     * @param {*} res 
     * @returns void
     */
    getHottestApartment = async (request, response) => {
       const temps = await getHottestApartment();
       response.send([determineHottest(temps)]);
       return;
    }
}
function determineHottest(temps){
    const arlo = parseArlo(temps.arlo);
    const shak = temps.shak;
    let hottest;
    if(arlo > shak) {
        hottest = `Arlo's apartment is hottest. It's a scorching ${arlo} degrees Fahrenheit.`
    } else if (shak > arlo) {
        hottest = `Shak's apartment is hottest. It's a scorching ${shak} degrees Fahrenheit.`
    } else {
        hottest = `Surprisingly, both apartments are equally hot at ${arlo} degrees Fahrenheit.`
    }

    return { hottest: hottest, arlo: arlo, shak: shak }
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