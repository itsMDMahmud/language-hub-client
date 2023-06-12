import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Language Hub`;
    }, [title])
};

export default useTitle;