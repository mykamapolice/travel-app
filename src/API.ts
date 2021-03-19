const baseURL = 'http://damp-thicket-85004.herokuapp.com/';

const addCountry = '/create/country';

const countriesURL = 'api/get/countries';

const countryInfoURL = 'api/get/countryInfo';


export async function getCountriesData(page = 0) {
    const resp = await fetch(`${baseURL}${countriesURL}/${page}`);
    const countries = await resp.json();
    return countries;
}

export async function getCountryDetails(country: string) {
    const resp = await fetch(`${baseURL}${countryInfoURL}/${country}`);
    const countryInfo = await resp.json();

    console.log(countryInfo);
}

