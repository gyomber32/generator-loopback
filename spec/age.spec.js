const Request = require("request");
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server/server");
    });
    afterAll(() => {
        const shutdownManager = new GracefulShutdownManager(server);
        process.on('SIGTERM', () => {
            shutdownManager.terminate(() => {
                console.log('Server is gracefully terminated');
            });
        });
    });

    describe("GET /getAge when all parameters are good", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/Ages/getAge?age=50&quantity=10", (error, response, body) => {
                data.error = error;
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("No error has to be occur", () => {
            expect(data.error).toBeNull();
        });
        it("Status code has to be 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body has to contain appropriate data", () => {
            expect(data.body).toContain({ "age": 50 });
        });
        it("Body has not to contain inappropriate data", () => {
            expect(data.body).not.toContain({ "age": 70 });
        });
        it("Body has to contain appropriate number of data", () => {
            expect(data.body.length).toEqual(10);
        });
    });

    describe("GET /getAge", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/Ages/getAge?quantity=10", (error, response, body) => {
                data.error = error;
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("No error has to be occur", () => {
            expect(data.error).toBeNull();
        });
        it("Status code has to be 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body has to contain appropriate data", () => {
            expect(data.body).not.toBeNull();
        });
        it("Body has to contain appropriate number of data", () => {
            expect(data.body.length).toEqual(10);
        });
    });

    describe("GET /getAge", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/Ages/getAge?age=200&quantity=10", (error, response, body) => {
                data.error = error;
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("No error has to be occur", () => {
            expect(data.error).toBeNull();
        });
        it("Status code has to be 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body has to contain empty array", () => {
            expect(data.body).toEqual([]);
        });
    });

    describe("GET /getAge", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/Ages/getAge?quantity=-5", (error, response, body) => {
                data.error = error;
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("No error has to be occur", () => {
            expect(data.error).toBeNull();
        });
        it("Status code has to be 500", () => {
            expect(data.status).toBe(500);
        });
        it("Body has to have appropriate error message", () => {
            expect(data.body.error.message).toEqual('LIMIT must not be negative');
        });
        it("Body has to contain empty array", () => {
            expect(data.body.length).not.toEqual([]);
        });
    });

    describe("GET /getAge", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://http://localhost:3100/api/Ages/getAge?age=250", (error, response, body) => {
                data.error = error;
                data.status = response;
                data.body = body;
                done();
            });
        });
        it("Error has to be occur", () => {
            expect(data.error).not.toBeNull();
        });
    });

});