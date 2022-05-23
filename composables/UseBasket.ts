import { ref } from "@vue/composition-api";

interface Basket {
    id: string;
    count: number;
    price: number;
}

export default function UseBasket() {
    let basket = ref<Array<Basket>>([]);

    /**************************************/
    const ActionPlus = (element: { id: string; price: number }) => {
        let index = basket.value.findIndex((el) => el.id === element.id);

        if (index === -1) {
            basket.value.push({ id: element.id, count: 1, price: element.price });
        } else {
            basket.value[index].count++;
        }
    };

    const ActionMinus = (element: { id: string; price: number }) => {
        let index = basket.value.findIndex((el) => el.id === element.id);
        if (index === -1) return;
        if (basket.value[index].count === 0) return;
        basket.value[index].count--;
    };

    const GetBasketCount = (id: string) => {
        let index = basket.value.findIndex((el) => el.id === id);
        if (index === -1) return;
        return basket.value[index].count;
    };

    const GetTotalPrice = () => {
        return basket.value
            .map((el) => el.count * el.price)
            .reduce((a, b) => a + b, 0);
    };
    /**************************************/

    return {
        ActionPlus,
        ActionMinus,
        GetBasketCount,
        GetTotalPrice,
    }
}