const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country]) => {
        // console.log(country.borders)
        // console.log(Object.keys(country.name.nativeName)[0].common)
        flagImage.src = country.flags.svg
        countryNameH1.innerText = country.name.common
        population.innerText = country.population.toLocaleString('en-IN')
        region.innerText = country.region
        
        
        topLevelDomain.innerText = country.tld.join(', ')

        if(country.subregion){
            subRegion.innerText = country.subregion
        }
        
        if(country.currencies){
        currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ')
        }

        if(country.name.nativeName) {
           nativeName.innerText = Object.values(country.name.nativeName)[0].common
            }else{
                nativeName.innerText = country.name.common
            }

        // capital.innerText = country.capital?.[0]

        // if(country.capital){
        //     capital.innerText = country.capital.join(', ')
        //     }

        if(country.capital){
            capital.innerText = country.capital?.[0]
        }
        
        if(country.languages){
            languages.innerText = Object.values(country.languages).join(', ');
            }

        if (country.borders) {
            country.borders.forEach((border) =>{
                // console.log(border);
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((res) => res.json())
                    .then(([borderCountry]) => {
                        // console.log(borderCountry)
                        const borderCountryTag = document.createElement('a')
                        borderCountryTag.innerText = borderCountry.name.common
                        borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                        console.log(borderCountryTag);
                        borderCountries.append(borderCountryTag)
                    })
            })
        }
    })

// console.log(countryName);

// 1:09:00



