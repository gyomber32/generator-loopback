const Request = require("request");
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server/server");
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
    });
    afterAll(() => {
        const shutdownManager = new GracefulShutdownManager(server);
        process.on('SIGTERM', () => {
            shutdownManager.terminate(() => {
                console.log('Server is gracefully terminated');
            });
        });
    });

    describe("GET /getBloodGlucose when all parameters are good", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/BloodGlucoses/getBloodGlucose?bloodGlucose=7&quantity=10", (error, response, body) => {
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
            expect(data.body).toContain({ "valuenum": 114 });
        });
        it("Body has not to contain inappropriate data", () => {
            expect(data.body).not.toContain({ "valuenum": 150 });
        });
        it("Body has to contain appropriate number of data", () => {
            expect(data.body.length).toEqual(10);
        });
    });

    describe("GET /getBloodGlucose when quantity is the only parameter", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/BloodGlucoses/getBloodGlucose?quantity=10", (error, response, body) => {
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

    describe("GET /getBloodGlucose when bloodGlucose has a wrong value", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/BloodGlucoses/getBloodGlucose?bloodGlucose=800&quantity=10", (error, response, body) => {
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
        it("Body has to be undefined", () => {
            expect(data.body).toEqual([]);
        });
    });

    describe("GET /getBloodGlucose when quantity has a wrong value", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/BloodGlucoses/getBloodGlucose?quantity=-5", (error, response, body) => {
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

    describe("GET /getBloodGlucose when required parameter (quantity) is missing", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3100/api/BloodGlucoses/getBloodGlucose?bloodGlucose=7", (error, response, body) => {
                data.error = error;
                data.status = response;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Error has to be occur", () => {
            expect(data.body.hasOwnProperty('error')).toBe(true);
        });
        it("Status code has to be 400", () => {
            expect(data.body.error.statusCode).toBe(400);
        });
        it("Body has to have appropriate error message", () => {
            expect(data.body.error.message).toEqual('quantity is a required argument');
        });
    });

});