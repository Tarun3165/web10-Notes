var product = {
  data: [
    { name: "Rice", quantity: 2, price: 60 },
    { name: "Dal", quantity: 3, price: 50 },
    { name: "Salt", quantity: 1, price: 20 },
    ],
    total: function () {
        var totalAmount = 0;
        for (let i=0; i < this.data.length;i++)
        {
            totalAmount += this.data[i].quantity * this.data[i].price;

        }
        return totalAmount;
        
    },
};

console.log(product.total());