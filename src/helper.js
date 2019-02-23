const pricingData = {
    pricing: {
        subTotal : 102.96,
        savings: 3.85,
        tax: 8.92,
        total: 108.03,
        zip : 85050
    },
    itemDetails: {
        item_name : "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        img: "https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
        quantity: 1,
        id: 96766,
        meta: "Actual color: Brown"
    }
}

export const getPricingData = (delay = 1000) => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(pricingData)
        }, delay);
    })
}