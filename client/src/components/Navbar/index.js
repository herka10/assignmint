import * as React from 'react';

const pages = ['calendar', 'list'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const showCollapseableSignin = () => {
        if (!Auth.loggedIn()) {
            return (
                <MenuItem key='signin' onClick={handleCloseNavMenu}>
                    <Link href='/signin' underline='hover' color='inherit'>
                        <Button>Sign In</Button>
                    </Link>
                </MenuItem>
            );
        } else {
            return (
                <MenuItem key='logout' onClick={() => Auth.logout()}>
                    <Link href='/' underline='hover'>
                        <Button>Logout</Button>
                    </Link>
                </MenuItem>
            );
        }
    };

    const showRegularSignin = () => {
        if (!Auth.loggedIn()){
            return (
                <Link href='/signin'>
                    <Button
                    key='signin'
                    onClick={handleCloseNavMenu}
                    >
                        Sign In
                    </Button>
                </Link>
            );
        } else {
            return (
                <Link href='/' key='logout'>
                    <Button
                    key='logout'
                    onClick={() => Auth.logout()}
                    >
                        Logout
                    </Button>
                </Link>
            );
        }
    };
}
export default Navbar