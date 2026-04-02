import { useState } from "react"

const useMyHook = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const hadlerChange = (e) => {
        setValue(e.target.value);
    }
    return [value, hadlerChange]
}
export default useMyHook;