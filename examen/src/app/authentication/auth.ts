


type User = {
    username: string;
    password: string;
    Name: string;
    Membership: number;

}

const users: User[] = [
    {username: 'sandra.g',password: 'latte123', Name: 'Sandra Garcia', Membership: 5001},
    {username: 'roberto.g',password: 'capuccino456', Name: 'Roberto Martinez', Membership: 5002},
    {username: 'esteban.g',password: 'espresso789', Name: 'Esteban Lopez', Membership: 5003},
];


export function authenticate(username: string, password: string): Omit<User, 'password'> | null {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      const { password, ...userData } = user;
      return userData;
    }
    return null;
  }