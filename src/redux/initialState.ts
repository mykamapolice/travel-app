import { IInitialStateType } from '../Interfaces';

export const initialState: IInitialStateType = {

    lang: 'ru',
    searchInput: {
    text:'',
    enabled: false
    },
    countries: [
        {
            name: 'Germany',
            capital: 'Berlin',
            currencyCode: 'EUR',
            details: {
                info: 'Germany is a country at the intersection of Central and Western Europe.' +
                    ' It is situated between the Baltic and North seas to the north, ' +
                    'and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi),' +
                    ' with a population of over 83 million within its 16 constituent states. ' +
                    'It borders Denmark to the north, Poland and the Czech Republic to the east, ' +
                    'Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. ' +
                    'Germany is the second-most populous country in Europe after Russia, as well as the most populous member state of the European Union.' +
                    ' Its capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                    center: { latitude: 51.1642292, longitude: 10.4541194 },
                    capital: { latitude: 52.51704, longitude: 13.38886 }
                },
            },
            photo:
                'https://www.ledgerinsights.com/wp-content/uploads/2019/09/germany-810x476.jpg',
            rating: 3,
        },
        {
            name: 'India',
            capital: 'New Delhi',
            currencyCode: 'INR',
            details: {
                info: 'India  is a country in South Asia. It is the second-most populous country, ' +
                    'the seventh-largest country by land area, and the most populous democracy in the world.' +
                    ' Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast,' +
                    ' it shares land borders with Pakistan to the west China, Nepal, and Bhutan to the north;' +
                    ' and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives;' +
                    ' its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                    center: { latitude: 23.644800, longitude: 77.216721 },
                    capital: { latitude: 28.61390, longitude: 77.20901 }
                }
            },
            photo:
                'https://imagevars.gulfnews.com/2019/08/22/India-Economy-lead_16cb9c8b639_medium.jpg',
            rating: 2,
        },
        {
            name: 'Brazil',
            capital: 'Brasília',
            currencyCode: 'BRL',
            details: {
                info: 'Brazil is the largest country in both South America and Latin America. At 8.5 million square kilometers (3.2 million square miles)' +
                    ' and with over 211 million people, Brazil is the world\'s fifth-largest country by area and the sixth most populous.' +
                    ' Its capital is Brasília, and its most populous city is São Paulo. The federation is composed of the union of the 26 states and the Federal District.' +
                    ' It is the largest country to have Portuguese as an official language and the only one in the Americas;' +
                    ' it is also one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world;' +
                    ' as well as the most populous Roman Catholic-majority country.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                    center: { latitude: -14.2400732, longitude: -53.180501 },
                    capital: { latitude: -15.79281, longitude: -47.88196 }
                }
            },
            photo:
                'https://noticias.mapfre.com/inc/uploads/2020/05/800-x-472-BrasilpostCovid.png',
            rating: 1,
        },
        {
            name: 'North-Korea',
            capital: 'Pyongyang',
            currencyCode: 'KPW',
            details: {
                info: 'North Korea is a country in East Asia constituting the northern part of the Korean Peninsula.' +
                    ' The country is bordered to the north by China and by Russia along the Amnok (known as the Yalu in Chinese) and Tumen rivers,' +
                    ' and to the south by South Korea, with the heavily fortified Korean Demilitarized Zone (DMZ) separating the two. North Korea,' +
                    ' like its southern counterpart, claims to be the legitimate government of the entire peninsula and adjacent islands. Pyongyang is the country\'s capital and largest city.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                    center: { latitude: 40.339851, longitude: 127.510094 },
                    capital: { latitude: 39.01687, longitude: 125.75003 }
                }
            },
            photo:
                'https://cdn.fishki.net/upload/post/2017/06/14/2314288/b31ecaa2988b66d4717107dd6f3d51c3.jpg',
            rating: 2,
        },
        {
            name: 'Norway',
            capital: 'Oslo',
            currencyCode: 'NOK',
            details: {
                info: 'Norway is a Nordic country in Northern Europe whose mainland territory comprises the western and northernmost portion of the Scandinavian Peninsula.' +
                    ' The remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway.[note 1] Bouvet Island,' +
                    ' located in the Subantarctic, is a dependency of Norway; it also lays claims to the Antarctic territories of Peter I Island and Queen Maud Land.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords:{
                  center: { latitude: 60.472023, longitude: 8.468946 },
                  capital: { latitude: 59.91333, longitude: 10.73897 }
                }
            },
            photo:
                'https://assets.kpmg/content/dam/kpmg/xx/images/2019/08/lighted-houses-on-snow-covered-mountains-during-sunset-norway.jpg/jcr:content/renditions/original',
            rating: 2,
        },
        {
            name: 'Nigeria',
            capital: 'Abuja',
            currencyCode: 'NGN',
            details: {
                info: 'Nigeria is a country in West Africa bordering Niger in the north, Chad in the northeast,' +
                    ' Cameroon in the east, and Benin in the west. Its southern coast is on the Gulf of Guinea in the Atlantic Ocean.' +
                    ' It is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located.' +
                    ' Lagos is the most populous city in the country and the African continent, as well as one of the largest metropolitan areas in the world.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                  center: { latitude: 9.077751, longitude: 8.6774567 },
                  capital: { latitude: 9.06433, longitude: 7.48930 }
                }
            },
            photo:
                'https://cdnuploads.aa.com.tr/uploads/Contents/2020/08/19/thumbs_b_c_b8daaabca4cbfb4266465c17236972ca.jpg?v=184515',
            rating: 2,
        },
        {
            name: 'Fiji',
            capital: 'Suva',
            currencyCode: 'FJD',
            details: {
                info: 'Fiji is an island country in Melanesia, part of Oceania in the South Pacific Ocean. It lies about 1,100 nautical miles (2,000 km; 1,300 mi)' +
                    ' northeast of New Zealand. Fiji consists of an archipelago of more than 330 islands—of which about 110 are permanently inhabited—and more than 500 islets,' +
                    ' amounting to a total land area of about 18,300 square kilometres (7,100 sq mi). The most outlying island group is Ono-i-Lau. About 87% of the total population ' +
                    'of 883,483 live on the two major islands, Viti Levu and Vanua Levu. About three-quarters of Fijians live on Viti Levu\'s coasts:' +
                    ' either in the capital city of Suva; or in smaller urban centres such as Nadi—where tourism is the major local industry; or in Lautoka,' +
                    ' where the sugar-cane industry is dominant. The interior of Viti Levu is sparsely inhabited because of its terrain.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                  center: { latitude: -17.4624892, longitude: 179.2583049 },
                  capital: { latitude: -18.14159, longitude: 178.44217 }
                }
            },
            photo:
                'https://cache.marriott.com/marriottassets/marriott/NANMC/nanmc-view-0007-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*',
            rating: 2,
        }, {
            name: 'Mexico',
            capital: 'Mexico City',
            currencyCode: 'MXN',
            details: {
                info: 'Mexico is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean;' +
                    ' to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico. Mexico covers 1,972,550 square kilometers (761,610 sq mi)' +
                    ', making it the world\'s 13th-largest country by area; with approximately 126,014,024 inhabitants, it is 10th-most-populous country and has the most Spanish-speakers.' +
                    ' Mexico is organized as a federation comprising 31 states and Mexico City, its capital and largest metropolis. Other major urban areas include Guadalajara,' +
                    ' Monterrey, Puebla, Toluca, Tijuana, Ciudad Juárez, and León.',
                views: [
                    {
                        imgURL: '',
                        viewName: '',
                        about: '',
                    },
                ],
                videoURL: '',
                mapCoords: {
                  center: { latitude: 19.451054, longitude: -99.125519 },
                  capital: { latitude: 19.43263, longitude: -99.13318 }
                }
            },
            photo:
                'https://catalyst88.com/files/Blog-Distillery-Developers-Mexico-City-1050x574-100.jpg',
            rating: 2,
        },
    ],
};
