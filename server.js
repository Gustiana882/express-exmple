const server = require('./app');

const PORT = 8000;

const run = async () => {
    try {
        server.listen(PORT, () => {
            console.log(`Service running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

run();