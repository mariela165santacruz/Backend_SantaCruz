process.on('message', () => {

    const result = {
        'Datos del Directorio' : process.cwd()
    };

    process.send(result);
    process.exit()
});