export default {
    name:'product',
    title:'Product',
    type:'document',
    fields:[
        {name:'name',
        title:'Name of product',
        type:'string',},
       { name:'images',
        title:'Product Images',
        type:'array',
    of:[{type:'image'}]},

    {
        name:'description',
        title:'Description of product',
        type:'text',

    },
    {
        name:'slug',
        title:'Product slug',
        type:'slug',

    },
    {
        name:'price',
        title:'Price',
        type:'number',

    },
    
    


    ]
    
}