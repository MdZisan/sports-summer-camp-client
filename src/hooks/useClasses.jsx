import { useQuery } from "@tanstack/react-query";

const useClasses=()=>{
    const {data: classes = [],refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://summersportcamp-production.up.railway.app/classes?status=accept');
            return res.json();
        }
    })

    return [classes]
}

export default useClasses;