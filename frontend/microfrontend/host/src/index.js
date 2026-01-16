registerApplication({
    name: '@app/auth',
    app: () => System.import('@app/auth'),
    activeWhen: (loc) => loc.pathname.startsWith('/auth')
});

registerApplication({
    name: '@app/profile',
    app: () => System.import('@app/profile'),
    activeWhen: (loc) => loc.pathname.startsWith('/profile')
});

registerApplication({
    name: '@app/gallery',
    app: () => System.import('@app/gallery'),
    activeWhen: (loc) => loc.pathname.startsWith('/gallery') || loc.pathname === '/'
});

start({ urlRerouteOnly: true });
