
let container = document.getElementById('container');

function forIn(){
    let product = {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-kj',
        'color': 'blakc',
        'cost': 68225.32,
        'lPrice': 68225.32,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    };


    for(const key in product){
        let text = document.createTextNode(`${key} ` + '--' + `${product[key]}` );
        container.appendChild(text); 
    }
}

function forOf(){
    let product = [
        {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-kj',
        'color': 'blakc',
        'cost': 68225.32,
        'lPrice': 68225.32,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    },
    {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-32fas   kj',
        'color': 'blakc',
        'cost': 68225.32,
        'lPrice': 3468225.32,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    }
]

    for(const item of product){
       console.log( JSON.stringify(item ));
       
    }
}

function loopString() {
    let name = 'simpleString loop';
    let letters = '';

    for (const char of name) {
        letters += '-' + char;
        
    }
    console.log(letters);

}

function braeakLoop(){
    let product = [
        {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-kj',
        'color': 'blakc',
        'cost': 68225.32,
        'lPrice': 68225.32,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    },
    {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-32fas   kj',
        'color': 'blakc',
        'cost': 68225433.32,
        'lPrice': 3468225.332,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    }
]

    for(const item of product){
        if(item.cost > 68225.32){
            break;    
        } 
       console.log( JSON.stringify(item ));
       
    }
}
function continueLoop(){
    let product = [
        {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-kj',
        'color': 'blakc',
        'cost': 68225.32,
        'lPrice': 68225.32,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    },
    {
        'pID': 682,
        'name': 'ikljo',
        'pNumber': '682-32fas   kj',
        'color': 'blakc',
        'cost': 68225433.32,
        'lPrice': 3468225.332,
        'calc': function(){
            return this.lPrice - this.cost;
        }
    },
        {
            'pID': 682,
            'name': 'ikljo',
            'pNumber': '682-32fas   kj',
            'color': 'blakc',
            'cost': 683.32,
            'lPrice': 3468225.332,
            'calc': function(){
                return this.lPrice - this.cost;
            }
        }
   
    ]
 
    for(const item of product){
        if(item.cost > 68225.32){
            continue;    
        } 
       console.log( JSON.stringify(item ));
       
    }
}