type TName = {
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    }
}

interface TUser {
    id: string;
    name: TName;
    email: string;
    password: string;
    isActive: boolean;
}


export default TUser;