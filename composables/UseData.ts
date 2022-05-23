import { onMounted, ref, useRoute } from "@nuxtjs/composition-api";
import axios from 'axios'

interface Data {
    id: string;
    user: {
        profile_image: { small: string, medium: string, large: string };
        username: string;
        name: string;
        links: { html: string, self: string, photos: string, likes: string, portfolio: string, following: string, followers: string };
    };
    urls: { full: string, raw: string, regular: string, small: string, thumb: string, small_s3: string, };
}

export default function UseData() {
    const route = useRoute()

    let data = ref<Array<Data>>([]);
    let lastPage = ref(0);
    onMounted(async () => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos?page=${route.value.params.id}`,
                {
                    headers: {
                        Authorization: `Client-ID rcgfYgtE9OIYBqfaPd0QLpRwpTy895ghrEeLDl9e0c8`,
                    },
                }
            );
            data.value = response.data;
            lastPage.value = parseInt(response.headers.link.replace(/[^'0-9' ]/g,"").split(' ').filter(el=>el!=='').sort((a,b)=>b-a)[0], 10)
        } catch (e) {
            console.log(e);
        }
    })
    return { data, lastPage }
}