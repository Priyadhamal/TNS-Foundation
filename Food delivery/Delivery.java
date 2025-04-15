package com.food;

public class Delivery {
    private int deliveryPersonId;
    private String name;
    private long contactNo;

    public Delivery(int deliveryPersonId, String name, long contactNo) {
        this.deliveryPersonId = deliveryPersonId;
        this.name = name;
        this.contactNo = contactNo;
    }

    public int getDeliveryPersonId() {
        return deliveryPersonId;
    }

    public String getName() {
        return name;
    }

    public long getContactNo() {
        return contactNo;
    }

    @Override
    public String toString() {
        return name;
    }
}