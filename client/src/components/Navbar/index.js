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

return (
    <AppBar position='static'>
        <Container maxWidth='x1'>
            <Toolbar disableGutters>
                {/* collapsable menu */}
                <HouseIcon sx={{ display: { xs: 'none', md: 'flex'}, mr: 1 }} />
                <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                    mr: 2
                    display: {xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >Assignmint
                </Typography>

                <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'} }}>
                    <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenNavMenu}
                    color='inherit'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id='menu-appbar'
                anchorEl={anchoeElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Link href={`/${page}`} underline='hover'>
                                <Button>{page}</Button>
                            </Link>
                        </MenuItem>
                    ))}
                    {showCollapseableSignin()}
                </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
)
