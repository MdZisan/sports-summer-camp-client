import { useQuery } from "@tanstack/react-query";

const useClasses=()=>{
    const {data: classes = [],refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://sports-summer-camp-server-three.vercel.app/classes?status=accept');
            return res.json();
        }
    })

    return [classes,refetch]
}

export default useClasses;