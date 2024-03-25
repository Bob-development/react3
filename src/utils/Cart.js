import React, { useState } from 'react';

export class Cart {
    boughtRroducts = []

    getBoughtRroducts(){
        return this.boughtRroducts;
    }

    addBoughtRroducts(product){
        console.log(product);
        this.boughtRroducts.push(product);
    }
}