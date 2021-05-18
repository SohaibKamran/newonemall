export class Navbar {
    divider: boolean = true;
    title?: String;
    items: NavItems[] = [];
}

class NavItems {
    title: String;
    path?: String;
    icon?: String;
    children?: NavSubItems;
}

class NavSubItems {
    title?: String;
    items: NavSubLinks[] = [];
}

class NavSubLinks {
    title: String;
    path: String;
}