import {Injectable} from "@angular/core";
import { Food } from "../models/food.model";
@Injectable({
 providedIn: 'root'
})
export class FoodService {
    getFoods():Food[]{
        return[
            {
                id: 1,
                title: 'Spcl-Biryani',
                price:200,
                image: '../../assets/icons/dhum.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
              {
                id: 2,
                title: 'Spicy-burger',
                price:100,
                image: '../../assets/icons/burger1.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
              {
                id: 3,
                title: 'Spcl-sandwich',
                price:100,
                image: '../../assets/icons/sand1.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
              {
                id: 4,
                title: 'Chicken-pizza',
                price:180,
                image: '../../assets/icons/pizza.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
              {
                id: 5,
                title: 'Paneer-Burger',
                price:100,
                image: '../../assets/icons/burger2.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
              {
                id: 6,
                title: 'Spcl-Pizza',
                price:150,
                image: '../../assets/icons/vegy.jpg',
                description: "A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease.",
              },
        ];
    }
    getFood(id: number):Food{
        return this.getFoods().find((food)=>food.id=id);
    }
}
