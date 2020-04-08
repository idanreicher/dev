function simpleSwich(){
    let productId = 2;
    switch (productId) {
       
        case 1:
            
            break;
                 case 1:
                    console.log("productId 1");
            break;
                case 2:
                    console.log("productId 2");
            break;
                case 3:
                    console.log("productId 3");
                break;

        default:
            console.log("productId none");
            break;
    }
}

function simpleSwichMultiCases(){
    let productId = 2;
    switch (productId) {
       
        case 1:
            
            break;
                 case 1: 
                 case 2:
                    console.log("productId 1+2");
            break;
                case 3:
                    console.log("productId 3");
                    console.log("productId +4");
                break;

        default:
            console.log("productId none");
            break;
    }
}

function stricComparisson(){
    let productId = '2';
    switch (productId) {
       
        case 1:
            
            break;
                 case 1: 
                 case 2:
                    console.log("productId 1+2");
            break;
                case 3:
                    console.log("productId 3");
                    console.log("productId +4");
                break;

        default:
            console.log("productId none");
            break;
    }
}

function blockScopen(){
    let productId = 2;
    switch (productId) {
       
        case 1:
            
            break;
                 case 1: 
                 case 2:{
                     let message = 'block 1+2';
                    console.log(message);
                 break;
                 }
                case 3:{
                        let message = 'block 3';
                    console.log(message);
                break;
                }
        default:{            
            let message = 'block default';
            console.log(message);
            break;
        }
    }
}