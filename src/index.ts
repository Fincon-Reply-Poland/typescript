//zadanie 1
//Uzupelnij typ User
type User = any; // ???

function getUser(): User {
    return {
        id: '98ceeeaa-07f3-43c8-8728-d1365a8b14b7',
        name: 'Jan',
        lastName: 'Kowalski',
        active: true,
        role: 'admin'
    }
}

function testUser(): boolean {
    const user = getUser();
    let roleOk = false;
    let dataOk = false;
    if (user.role === 'admin' || user.role === 'manager') {
       roleOk = true;
    }

    if (user.id && user.name && user.active === true) {
        dataOk = true;
    }

    return roleOk && dataOk;
}


//zadanie 2
// Korzystajac z UtilityTypes uwtorz typ ActiveUser z MyUser

type MyUser = {
    name: string,
    lastname: string,
    active?: boolean,
    email?: string
}

type ActiveUser = any; //???

function getEmailIfActive(user: ActiveUser): string {
    if(user.active) {
        return user.email;
    } else {
        return '';
    }
}