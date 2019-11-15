export const yearsToMercury = function(usersAge, usersLifeExpec){


let usersAgeInMercuryYears = usersAge*4.16
return usersAgeInMercuryYears

}



export const yearsToVenus = function(usersAge, usersLifeExpec){


let usersAgeInVenusYears = usersAge*1.61
let usersLifeOnVenus = usersLifeExpec*1.61 - usersAgeInVenusYears
return usersLifeOnVenus

}
export const yearsToMars = function(usersAge, usersLifeExpec){


let usersAgeInMarsYears = usersAge*0.53
return usersAgeInMarsYears

}
export const yearsToJupiter = function(usersAge, usersLifeExpec){


let usersAgeInJupiterYears = usersAge*0.084
return usersAgeInJupiterYears

}
