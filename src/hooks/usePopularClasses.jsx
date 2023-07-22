import { useQuery } from "@tanstack/react-query";

const usePopularClasses=()=>{
    const {data: popularClasses = [],refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch('https://sports-summer-camp-server-three.vercel.app/popularClasses?status=accept');
            return res.json();
        }
    })

    return [popularClasses,refetch]
}

export default usePopularClasses;