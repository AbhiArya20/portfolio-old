import { useState } from "react";

export default function usePreLoading() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2800);
    return loading;
}
