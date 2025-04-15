package com.food;

public class Customer extends User {
    private MyCart cart;

    public Customer(int userId, String username, long contactNo) {
        super(userId, username, contactNo);
        this.cart = new MyCart();
    }

    public MyCart getCart() {
        return cart;
    }
}
