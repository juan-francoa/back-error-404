let cities = [
    {        
        name:"Bello",
        continent:"South America",
        photo:"https://www.bing.com/th?id=OSK.HERO_GCPmdX1I3VRqg-N5Av2c1FYM7DR_qM3vPJhXxwrePE&w=296&h=176&c=1&rs=2&o=6&dpr=1.5&pid=SANGAM",
        population:522264,
        userId:"636e63981471b35a5c064d4d"   
    },
    {        
        name:"Rosario",
        continent:"South America",
        photo:"https://images.clarin.com/2015/11/10/BksaAQJVe_1256x620.jpg",
        population:1199364,
        userId:"636e63981471b35a5c064d4e" 
    },
    {        
        name:"Cordoba",
        continent:"South America",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Skyline_of_downtown_Cordoba_city%2C_Argentina_2013-02-24.jpg/600px-Skyline_of_downtown_Cordoba_city%2C_Argentina_2013-02-24.jpg",
        population:1655481,
        userId:"636e63981471b35a5c064d4c" 
    },
    {        
        name:"New york",
        continent:"North America",
        photo:"https://www.aviatur.com/source/contenidos/blog/nueva-york-lugares-turisticos-capital-del-mundo.jpg",
        population:8500000,
        userId:"636e63981471b35a5c064d4b" 
    },
    {        
        name:"Cancún",
        continent:"Central America",
        photo:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_650,q_75,w_1200/v1/clients/quintanaroo/atardecer_en_canc_n_t20_4eyeZA_51e7530b-ecbb-4a93-a51b-b238cb5d898e.jpg",
        population:888797,
        userId:"636e63981471b35a5c064d4d" 
    },
    {        
        name:"Bariloche",
        continent:"South America",
        photo:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/08213126/shutterstock_1371228326.jpg",
        population:2146000,
        userId:"636e63981471b35a5c064d4e" 
    },
    {        
        name:"Amsterdam",
        continent:"Europe",
        photo:"https://media.timeout.com/images/105504583/1024/576/image.jpg",
        population:5905234,
        userId:"636e63981471b35a5c064d4c" 
    },
    {        
        name:"Barcelona",
        continent:"Europe",
        photo:"https://media.timeout.com/images/105504583/1024/576/image.jpg",
        population:5714730,
        userId:"636e63981471b35a5c064d4b" 
    },
    {        
        name:"Londres",
        continent:"Europe",
        photo:"https://londresen3dias.com/wp-content/uploads/big-ben_2-1.jpg",
        population:10470000,
        userId:"636e63981471b35a5c064d4d" 
    },
    {
        name:"Sidney",
        continent:"Oceania",
        photo:"https://i0.wp.com/viajealpatrimonio.com/wp-content/uploads/2019/11/0697-opera-de-sidney.jpg?ssl=1",
        population:4119190,
        userId:"636e63981471b35a5c064d4e" 
    },
    {
        name:"Paris",
        continent:"Europe",
        photo:"http://3.bp.blogspot.com/--uxk6Z7gXZg/UQgWarMa9II/AAAAAAAAk-U/CnQ1jY6blGM/s1600/Paris_at_sunset_with_the_Eiffel_Tower.jpg",
        population:2273250,
        userId:"636e63981471b35a5c064d4c" 
    },
    {
        name:"Roma",
        continent:"Europe",
        photo:"https://www.raffaeleangelillo.com/wp-content/uploads/2019/09/Roma.jpg",
        population:2765000,
        userId:"636e63981471b35a5c064d4d" 
    } 
]

require("dotenv").config()
require("../../config/database")
const City = require("../City")

cities.forEach(e =>
    City.create(
        {
            name: e.name,
            continent: e.continent,
            photo: e.photo,
            population: e.population,
            userId: e.userId
        }
    )
)