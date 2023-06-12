import { useQuery } from "@tanstack/react-query";

const usePopularClasses=()=>{
    const {data: popularClasses = [],refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch('https://summersportcamp-production.up.railway.app/popularClasses?status=accept');
            return res.json();
        }
    })

    return [popularClasses]
}

export default usePopularClasses;