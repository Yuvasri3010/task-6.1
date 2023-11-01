let baseFee = .36
let cities = ["Chennai", "Tamil Nadu", "India", ]
let uberRates = [2, 4, 6]
let customerName = "SRUTHI"
let customerCity = "Chennai"
console.log("Hi I am", customerName+", From", customerCity+", Welcome to the Uber Price Program")
function getRate(customerCity) {
    function uberRate(customerCity, index) {
        let finalRate = (uberRates[index]) * baseFee
        return finalRate
      }
      console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
    }
    getRate(customerCity)