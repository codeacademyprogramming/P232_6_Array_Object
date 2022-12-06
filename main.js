var car = {
    brand:"Mercedes",
    model:"E200",
    price:25000,
    year:2014
}

car.year = 2016;

console.log(car.brand)
console.log(car.model)
console.log(car.price)
console.log(car.year)


var product1 =  
{
    name:'sud 1L',
    brand:'Milla',
    price:2.5,
}

var product2 =  
{
    name:'sud 1L',
    brand:'Azersud',
    price:1.5,
}

var product3 =  
{
    name:'Cola 1L',
    brand:'CocaCola',
    price:2,
}


product3.price = 13.5

var products = [product1,product2,product3]


for(var i=0;i<products.length;i++)
{
    console.log(products[i].brand)
}

var sum=0;
for(var i=0;i<products.length;i++){
 sum+=products[i].price;
}

console.log(sum)


var count=0;
for(var i=0;i<products.length;i++)
{
    if(products[i].price<10){
        count++;
    }
}

console.log(count)

var std1 = {
    fullname:'Hikmet Abbasov',
    groupNo:'P232',
    point:85
}

var std2 = {
    fullname:'Nermin Abbasova',
    groupNo:'P230',
    point:65
}

var std3 = {
    fullname:'Tofiq Abdullayev',
    groupNo:'P123',
    point:45
}

var students = [std1,std2,std3]


var counter=0;

for(var i=0;i<students.length;i++){
    if(students[i].point>=65){
        counter++;
    }
}

console.log(counter)




