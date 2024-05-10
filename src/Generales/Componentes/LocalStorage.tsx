export const getLocalStorageJWT = () => {
    try {
        const value = window.localStorage.getItem("jwt_usuario");
        //  alert(value);
        if (value != null) {
            return value;
        } else {
            return "";
        }
    } catch (error) {
        console.log(error);
        return "";
    }
};

export const setLocalStorageJWT = (token) => {
    try {
        window.localStorage.setItem("jwt_usuario", token);
    } catch (error) {
        console.log(error);
    }
};

export const clearStorageJWT = () => {
    try {
        window.localStorage.clear();
        window.location.href = "../";
    } catch (error) {
        console.log(error);
    }
};

