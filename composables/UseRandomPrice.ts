import { ref } from "@nuxtjs/composition-api";

export default function UseRandomPrice(min:number, max:number) {
    const getRandomArbitrary = () => {
        return Math.round(Math.random() * (max - min) + min);
    };
    const price = ref<number>(getRandomArbitrary());

    return {price: price.value}
}